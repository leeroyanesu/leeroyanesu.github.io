import { useState, useEffect } from "react";
import {
  GithubLogo, LinkedinLogo, TelegramLogo, TwitterLogo, EnvelopeSimple,
} from "@phosphor-icons/react";
import LetterGlitch from "./LetterGlitch";

const ROLES = [
  "Full Stack Developer",
  "Mobile App Engineer",
  "Web3 Builder",
  "UI/UX Craftsman",
];

function useTypewriter(texts: string[], speed = 65, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const current = texts[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 200);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), speed / 2);
      } else {
        setRoleIdx((i) => (i + 1) % texts.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIdx, texts, speed, pause]);

  return displayed;
}

const socials = [
  { icon: GithubLogo,    href: "https://github.com/leeroyanesu",        label: "GitHub" },
  { icon: LinkedinLogo,  href: "https://linkedin.com/in/leeroy-chako",  label: "LinkedIn" },
  { icon: TelegramLogo,  href: "https://telegram.me/MrLeeA_C",          label: "Telegram" },
  { icon: TwitterLogo,   href: "https://twitter.com/MrLee_C",           label: "Twitter" },
  { icon: EnvelopeSimple, href: "mailto:leeroyachako@gmail.com",        label: "Email" },
];

const Hero = () => {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* LetterGlitch background */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchColors={['#0a1f12', '#00e569', '#A7EF9E']}
          glitchSpeed={60}
          outerVignette={false}
          smooth={true}
          className="w-full h-full"
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "hsl(160 25% 4% / 0.82)",
        }}
      />

      {/* === Content === */}
      <div className="relative z-20 container mx-auto px-6 text-center">

        {/* Terminal prompt label */}
        <div
          className="inline-flex items-center gap-2 mb-8 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="terminal-label opacity-50">root@portfolio</span>
          <span className="terminal-label">:~$</span>
          <span className="terminal-label opacity-70">whoami</span>
        </div>

        {/* Name */}
        <h1
          className="font-mono-display text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4 animate-fade-in"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="text-foreground">Lee-Roy</span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, hsl(145 100% 45%) 0%, hsl(25 95% 55%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Chako
          </span>
        </h1>

        {/* Typewriter role */}
        <div
          className="flex items-center justify-center gap-2 mb-6 animate-fade-in"
          style={{ animationDelay: "0.4s", minHeight: "2.5rem" }}
        >
          <span className="text-primary font-mono-display text-sm opacity-60">$</span>
          <p className="font-mono-display text-lg sm:text-xl md:text-2xl text-muted-foreground cursor-blink">
            {role}
          </p>
        </div>

        {/* Bio */}
        <p
          className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in"
          style={{ animationDelay: "0.55s" }}
        >
          Africa's go-to freelance developer for products that actually ship. Mobile apps,
          Web3 platforms, AI automation — trusted by startups and businesses across the continent
          and internationally. Five years in. No demos, just production.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="mailto:leeroyachako@gmail.com"
            className="group relative px-8 py-3 font-mono-display text-sm font-bold tracking-widest uppercase overflow-hidden rounded border border-primary/40 text-primary transition-all duration-300 hover:border-primary hover:shadow-[0_0_24px_hsl(145_100%_45%_/_0.35)] hover:text-background"
          >
            <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10">Let's Talk</span>
          </a>
          <a
            href="/leeroy_chako_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 font-mono-display text-sm font-bold tracking-widest uppercase rounded border border-border text-muted-foreground transition-all duration-300 hover:border-orange hover:text-orange hover:shadow-[0_0_24px_hsl(25_95%_55%_/_0.25)]"
          >
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-5 animate-fade-in"
          style={{ animationDelay: "0.85s" }}
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded text-muted-foreground border border-border/50 transition-all duration-200 hover:text-primary hover:border-primary/50 hover:shadow-[0_0_12px_hsl(145_100%_45%_/_0.2)] hover:-translate-y-0.5"
            >
              <Icon size={20} weight="regular" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
