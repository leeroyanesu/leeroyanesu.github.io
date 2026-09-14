#!/usr/bin/env node
/**
 * Security pre-flight check — runs automatically before dev/build/start via the
 * "predev"/"prebuild"/"prestart" npm lifecycle scripts in package.json. npm, yarn and bun all
 * run "pre<script>" before "<script>", so `bun run dev` and `bun run build` pick this up with
 * nothing extra to invoke by hand.
 *
 * WHY THIS EXISTS
 *
 * Between 2026-08-23 and 2026-09-13 an attacker force-pushed to every repository on this
 * GitHub account in three waves, injecting an obfuscated payload (javascript-obfuscator.io
 * style: hex-named self-decoding IIFE, string-array rotation, a `while(!![])` anti-tamper
 * loop) into whichever file the project's build tool executes — postcss.config.mjs for
 * Next.js, babel.config.js for React Native, eslint.config.js elsewhere — and, in several
 * repos, into a file under public/fonts/ named like a font but containing the same script.
 *
 * Three things make this worth an automated check rather than trusting code review:
 *
 *   1. Those files are executed by the toolchain on EVERY dev run and build. Checking out an
 *      infected commit and starting the app runs the payload with your credentials.
 *   2. It is concealed, not merely added. The payload sits on the SAME LINE as the file's
 *      real last statement, behind several hundred spaces of padding, so the file looks
 *      untouched in an editor and the diff reads as a one-line change.
 *   3. .gitignore was edited in the same commits to hide the payload's working files, so they
 *      never appeared in `git status`.
 *
 * A fake "font" is the same payload with a .woff2 extension: four spaces where the wOF2
 * signature should be. It is never loaded as a font, so nothing legitimate breaks by removing
 * it, and no source scan would ever look inside it.
 *
 * Patterns are used rather than a hash of one payload, so a re-obfuscated variant is still
 * caught. Note this protects whoever BUILDS the code; it cannot stop a push. Closing off the
 * attacker's write access to the account is a separate job.
 *
 * Bypass (only after triaging a false positive):
 *   SKIP_SECURITY_CHECK=1 bun run dev
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const REPO_ROOT = path.resolve(__dirname, '..');
const SCAN_EXTENSIONS = new Set(['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs']);
const MAX_FILE_BYTES = 5 * 1024 * 1024; // skip anything huge (generated/vendored)

// ── Indicators from the actual incidents ──────────────────────────────────────────────
// Matched case-insensitively as regexes, NOT as literal substrings: the 2026-09-14 variant
// wrote `global.i = 'A10-*3667-10'` (spaces, single quotes) where the 2026-08-19 one wrote
// `global.i="A10-`. A literal check tuned to one spelling would have sailed straight past
// the other, which is exactly the trap to avoid here.
const KNOWN_IOCS = [
  { name: 'known indicator: _0xb40cd9 (2026-08-19 payload)', re: /_0xb40cd9/ },
  { name: 'known indicator: global.i campaign tag "A10-"', re: /global\s*(\.|\[\s*['"])i(['"]\s*\])?\s*=\s*['"]A10-/i },
  { name: 'payload bootstrap: require() stashed on global', re: /global\s*(\.|\[\s*['"])r(['"]\s*\])?\s*=\s*require\b/i },
];

// ── Generic obfuscator.io-style fingerprints (catch re-obfuscated variants) ────────────
const PATTERN_CHECKS = [
  {
    name: 'obfuscator.io anti-tamper loop: while(!![])',
    test: (src) => /while\s*\(\s*!!\[\]\s*\)/.test(src),
  },
  {
    name: "array-rotation string decoder: x['push'](x['shift']())",
    test: (src) => /\w+\[['"]push['"]\]\(\s*\w+\[['"]shift['"]\]\(\)\s*\)/.test(src),
  },
  {
    name: 'dense hex-named identifiers (_0xNNNN style, 8+ occurrences)',
    test: (src) => {
      const matches = src.match(/_0x[0-9a-fA-F]{4,8}/g);
      return !!matches && matches.length >= 8;
    },
  },
  {
    // The concealment trick itself. Nothing legitimate in this repo pads a line with
    // hundreds of spaces and then keeps going — that exists only to push code off the
    // right-hand edge of an editor and out of a reviewer's eyeline.
    name: 'code hidden behind long whitespace padding (200+ spaces mid-line)',
    test: (src) => / {200,}\S/.test(src),
  },
];

// Config files are small by nature. This repo's real postcss.config.mjs is 94 bytes; the
// infected one was 32,406. A build-executed config that has grown to tens of kilobytes is
// worth stopping for even if every pattern above somehow misses.
const CONFIG_FILE_NAMES = new Set([
  'postcss.config.mjs', 'postcss.config.js', 'postcss.config.cjs', 'postcss.config.ts',
  'next.config.ts', 'next.config.js', 'next.config.mjs',
  'babel.config.js', 'babel.config.cjs', 'babel.config.json', 'metro.config.js',
  'eslint.config.js', 'eslint.config.mjs', 'eslint.config.cjs',
  'vite.config.ts', 'vite.config.js', 'svelte.config.js', 'astro.config.mjs',
  'tailwind.config.ts', 'tailwind.config.js',
  'vitest.config.ts', 'playwright.config.ts',
]);
const CONFIG_MAX_BYTES = 8 * 1024;

// Files the 2026-09-14 payload created to do its work. Their presence is a finding; so is a
// .gitignore entry for them, which is how they were kept out of `git status`.
const PAYLOAD_ARTEFACTS = ['branch_structure.json', 'temp_auto_push.bat', 'temp_interactive_push.bat'];

// This script necessarily contains the IOC strings and obfuscator patterns as literals in
// order to search for them, so it must never scan itself.
const SELF_PATH = path.resolve(__filename);

const WALK_IGNORE_DIRS = new Set(['node_modules', '.git', 'dist', 'build', 'out', '.next', 'coverage', '.claude']);

function walkDir(dir, acc = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return acc;
  }
  for (const entry of entries) {
    if (entry.name.startsWith('.') && entry.name !== '.') continue;
    if (WALK_IGNORE_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkDir(full, acc);
    else if (SCAN_EXTENSIONS.has(path.extname(entry.name))) acc.push(full);
  }
  return acc;
}

function listCandidateFiles() {
  let files;
  try {
    const tracked = execFileSync('git', ['ls-files'], { cwd: REPO_ROOT, encoding: 'utf8' });
    const untracked = execFileSync(
      'git', ['ls-files', '--others', '--exclude-standard'],
      { cwd: REPO_ROOT, encoding: 'utf8' }
    );
    const all = new Set([...tracked.split('\n'), ...untracked.split('\n')].filter(Boolean));
    files = Array.from(all)
      .filter((f) => SCAN_EXTENSIONS.has(path.extname(f)))
      .map((f) => path.join(REPO_ROOT, f));
  } catch (err) {
    console.warn(`⚠️  git ls-files unavailable (${err.message}) — falling back to a full directory walk.`);
    files = walkDir(REPO_ROOT);
  }
  return files.filter((f) => path.resolve(f) !== SELF_PATH);
}

function scanFile(file) {
  let stat;
  try {
    stat = fs.statSync(file);
  } catch {
    return null; // deleted/renamed since listing
  }
  if (!stat.isFile() || stat.size > MAX_FILE_BYTES) return null;

  let src;
  try {
    src = fs.readFileSync(file, 'utf8');
  } catch {
    return null;
  }

  const reasons = [];
  for (const ioc of KNOWN_IOCS) {
    if (ioc.re.test(src)) reasons.push(ioc.name);
  }
  for (const check of PATTERN_CHECKS) {
    if (check.test(src)) reasons.push(check.name);
  }
  if (CONFIG_FILE_NAMES.has(path.basename(file)) && stat.size > CONFIG_MAX_BYTES) {
    reasons.push(`build-executed config file is ${stat.size} bytes — far larger than any real config here`);
  }
  return reasons.length ? { file: path.relative(REPO_ROOT, file), reasons } : null;
}

function scanPackageJsonScripts() {
  const pkgPath = path.join(REPO_ROOT, 'package.json');
  if (!fs.existsSync(pkgPath)) return [];
  let pkg;
  try {
    pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  } catch {
    return [];
  }
  const scripts = pkg.scripts || {};
  const suspicious = /(curl|wget)\s+.*\|\s*(sh|bash)|base64\s+-d|eval\(|atob\(/i;
  const findings = [];
  for (const [name, cmd] of Object.entries(scripts)) {
    if (typeof cmd === 'string' && suspicious.test(cmd)) {
      findings.push({ file: 'package.json', reasons: [`suspicious "${name}" script: ${cmd}`] });
    }
  }
  return findings;
}

/** The payload's own working files, and the .gitignore entries that kept them invisible. */
function scanPayloadArtefacts() {
  const findings = [];
  for (const name of PAYLOAD_ARTEFACTS) {
    if (fs.existsSync(path.join(REPO_ROOT, name))) {
      findings.push({ file: name, reasons: ['file created by the injected payload'] });
    }
  }
  const gitignorePath = path.join(REPO_ROOT, '.gitignore');
  if (fs.existsSync(gitignorePath)) {
    let contents = '';
    try {
      contents = fs.readFileSync(gitignorePath, 'utf8');
    } catch {
      return findings;
    }
    const entries = contents.split('\n').map((l) => l.trim());
    const hidden = PAYLOAD_ARTEFACTS.filter((name) => entries.includes(name));
    if (hidden.length > 0) {
      findings.push({
        file: '.gitignore',
        reasons: hidden.map(
          (name) => `ignores "${name}" — an entry the payload added so its own files stayed out of git status`
        ),
      });
    }
  }
  return findings;
}

// ── "Fake font" check ─────────────────────────────────────────────────────────────────
// Carried over from the Impactoverse script: a malicious script dropped into public/ (or a
// similar static-assets folder) disguised as a font — either renamed with a .woff/.ttf
// extension, or a payload glued onto a real font's bytes. Browsers and CDNs serve these
// happily, and a JS/TS source scan never looks at them. Font extensions specifically, not
// every file in public/: images and .glb models are large, high-entropy compressed data
// where a short ASCII marker turns up by chance, which just trades one false positive for
// another.
const FONT_EXTENSIONS = new Set(['.woff', '.woff2', '.ttf', '.otf', '.eot']);

const FONT_MAGIC_BYTES = {
  '.woff': [[0x77, 0x4f, 0x46, 0x46]], // 'wOFF'
  '.woff2': [[0x77, 0x4f, 0x46, 0x32]], // 'wOF2'
  '.ttf': [[0x00, 0x01, 0x00, 0x00], [0x74, 0x72, 0x75, 0x65]], // sfnt v1, or 'true'
  '.otf': [[0x4f, 0x54, 0x54, 0x4f]], // 'OTTO'
  // .eot's header is too variable to fingerprint reliably — content-scanned below, but not
  // magic-byte-checked.
};

const SCRIPT_MARKERS = [
  '<?php', '<?=', '<script', '#!/usr/bin/env node', '#!/bin/sh', '#!/bin/bash',
  'eval(', 'child_process', 'require(\'http', 'require("http',
];

const PUBLIC_DIR_NAMES = ['public', 'static', 'assets', 'uploads'];
const PUBLIC_SCAN_IGNORE_DIRS = new Set(['node_modules', '.git']);

function hasValidFontMagic(ext, buf) {
  const signatures = FONT_MAGIC_BYTES[ext];
  if (!signatures) return true; // unfingerprintable format
  return signatures.some((sig) => sig.every((byte, i) => buf[i] === byte));
}

function walkAllFiles(dir, acc = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return acc;
  }
  for (const entry of entries) {
    if (PUBLIC_SCAN_IGNORE_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkAllFiles(full, acc);
    else if (entry.isFile()) acc.push(full);
  }
  return acc;
}

function scanPublicAssetFile(file) {
  let stat;
  try {
    stat = fs.statSync(file);
  } catch {
    return null;
  }
  if (!stat.isFile() || stat.size > MAX_FILE_BYTES) return null;

  let buf;
  try {
    buf = fs.readFileSync(file);
  } catch {
    return null;
  }

  const reasons = [];
  const ext = path.extname(file).toLowerCase();
  if (Object.prototype.hasOwnProperty.call(FONT_MAGIC_BYTES, ext) && !hasValidFontMagic(ext, buf)) {
    reasons.push(`named ${ext} but doesn't start with a valid ${ext} signature — likely a disguised non-font file`);
  }

  // latin1 preserves raw byte values 1:1 as chars, so ASCII markers can be substring-matched
  // inside binary data without a UTF-8 decode blowing up on a genuinely binary font.
  const text = buf.subarray(0, Math.min(buf.length, 200000)).toString('latin1');
  for (const marker of SCRIPT_MARKERS) {
    if (text.includes(marker)) reasons.push(`contains script marker: "${marker}"`);
  }
  for (const check of PATTERN_CHECKS) {
    if (check.test(text)) reasons.push(check.name);
  }
  return reasons.length ? { file: path.relative(REPO_ROOT, file), reasons } : null;
}

function scanPublicAssets() {
  const findings = [];
  for (const name of PUBLIC_DIR_NAMES) {
    const dir = path.join(REPO_ROOT, name);
    let dirStat;
    try {
      dirStat = fs.statSync(dir);
    } catch {
      continue;
    }
    if (!dirStat.isDirectory()) continue;
    for (const file of walkAllFiles(dir)) {
      if (path.resolve(file) === SELF_PATH) continue;
      if (!FONT_EXTENSIONS.has(path.extname(file).toLowerCase())) continue;
      const result = scanPublicAssetFile(file);
      if (result) findings.push(result);
    }
  }
  return findings;
}

function main() {
  if (process.env.SKIP_SECURITY_CHECK === '1') {
    console.warn('⚠️  SKIP_SECURITY_CHECK=1 set — skipping the pre-build security scan.');
    return;
  }

  const files = listCandidateFiles();
  const findings = [];
  for (const file of files) {
    const result = scanFile(file);
    if (result) findings.push(result);
  }
  findings.push(...scanPackageJsonScripts());
  findings.push(...scanPayloadArtefacts());
  findings.push(...scanPublicAssets());

  if (findings.length === 0) {
    console.log(`✅ Security check passed (${files.length} files scanned) — no obfuscated payload signatures found.`);
    return;
  }

  console.error('\n🚨 SECURITY CHECK FAILED — build/dev/start blocked 🚨\n');
  console.error(
    'Found file(s) matching the obfuscated-payload signatures from the 2026-08/09 account compromise. ' +
    'Do NOT run this code — investigate before building.\n'
  );
  for (const { file, reasons } of findings) {
    console.error(`  ✗ ${file}`);
    for (const reason of reasons) console.error(`      - ${reason}`);
  }
  console.error(
    '\nIf you have triaged this and are certain it is a false positive, re-run with ' +
    'SKIP_SECURITY_CHECK=1. Otherwise restore the affected file(s) from a known-clean ' +
    'commit before continuing.\n'
  );
  process.exit(1);
}

main();
