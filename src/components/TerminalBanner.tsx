const stats = [
  { value: '6+',  label: 'Years Experience' },
  { value: '15+', label: 'Projects Shipped' },
  { value: '2',   label: 'Blockchains' },
  { value: '5+',  label: 'Servers Configured' },
  { value: '∞',   label: 'Bugs Fixed' },
];

const TerminalBanner = () => (
  <div style={{ width: '100%', height: '600px', position: 'relative' }} className="overflow-hidden">
    {/* 1. Dot grid */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "radial-gradient(circle, hsl(145 100% 45% / 0.12) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />

    {/* 2. Horizontal scanlines */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 3px,
          hsl(145 100% 45% / 0.03) 3px,
          hsl(145 100% 45% / 0.03) 4px
        )`,
      }}
    />

    {/* 3. Moving scan sweep */}
    <div
      className="absolute inset-x-0 pointer-events-none h-[2px]"
      style={{
        background: "linear-gradient(90deg, transparent, hsl(145 100% 45% / 0.4), transparent)",
        animation: "scan-sweep 6s linear infinite",
        top: 0,
      }}
    />

    {/* 4. Radial glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: "radial-gradient(ellipse 60% 80% at 50% 50%, hsl(145 100% 45% / 0.06) 0%, transparent 70%)",
      }}
    />

    {/* 5. Edge vignette */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, hsl(160 25% 4% / 0.85) 100%)",
      }}
    />

    {/* Stats overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 px-6 pointer-events-none">
      <p className="terminal-label opacity-60 tracking-[0.3em]">// compiled stats</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <p
              className="font-mono-display text-5xl md:text-6xl font-bold"
              style={{
                background: 'linear-gradient(135deg, hsl(145 100% 45%) 0%, hsl(25 95% 55%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {value}
            </p>
            <p className="font-mono-display text-xs text-muted-foreground mt-2 tracking-widest uppercase">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="green-line w-48" />
    </div>
  </div>
);

export default TerminalBanner;
