import {
  GithubLogo, LinkedinLogo, TelegramLogo, TwitterLogo,
  EnvelopeSimple, Briefcase,
} from "@phosphor-icons/react";

const links = [
  {
    Icon: GithubLogo,
    label: "GitHub",
    username: "leeroyanesu",
    href: "https://github.com/leeroyanesu",
    color: "hover:border-foreground/40 hover:text-foreground",
  },
  {
    Icon: LinkedinLogo,
    label: "LinkedIn",
    username: "Leeroy Chako",
    href: "https://linkedin.com/in/leeroy-chako",
    color: "hover:border-[#0077b5]/40 hover:text-[#0077b5]",
  },
  {
    Icon: TelegramLogo,
    label: "Telegram",
    username: "@MrLeeA_C",
    href: "https://telegram.me/MrLeeA_C",
    color: "hover:border-[#26a5e4]/40 hover:text-[#26a5e4]",
  },
  {
    Icon: TwitterLogo,
    label: "Twitter / X",
    username: "@MrLee_C",
    href: "https://twitter.com/MrLee_C",
    color: "hover:border-foreground/30 hover:text-foreground",
  },
  {
    Icon: EnvelopeSimple,
    label: "Email",
    username: "leeroyachako@gmail.com",
    href: "mailto:leeroyachako@gmail.com",
    color: "hover:border-primary/40 hover:text-primary",
  },
  {
    Icon: Briefcase,
    label: "Upwork",
    username: "Leeroy C.",
    href: "https://www.upwork.com/freelancers/leeroyc",
    color: "hover:border-[#6fda44]/40 hover:text-[#6fda44]",
  },
];

const SectionLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-3 mb-2">
    <span className="text-primary font-mono-display text-sm">{">"}</span>
    <span className="terminal-label">{children}</span>
    <div className="flex-1 green-line" />
  </div>
);

const Contact = () => (
  <section id="contact" className="py-24 px-6">
    <div className="container mx-auto">
      <div className="mb-14">
        <SectionLabel>contact.connect()</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Get In Touch</h2>
        <p className="font-body text-muted-foreground mt-3 max-w-xl">
          Have a project in mind, want to collaborate, or just want to say hi? Reach out.
        </p>
      </div>

      {/* Featured CTA */}
      <div className="max-w-3xl mx-auto">
        <a
          href="mailto:leeroyachako@gmail.com"
          className="group relative block mb-8 p-8 rounded border border-primary/20 bg-primary/5 text-center overflow-hidden hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_hsl(145_100%_45%_/_0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <p className="terminal-label mb-2 relative z-10">// preferred contact</p>
          <p className="font-mono-display text-2xl md:text-3xl font-bold text-primary relative z-10 group-hover:tracking-wider transition-all duration-300">
            leeroyachako@gmail.com
          </p>
          <p className="font-body text-sm text-muted-foreground mt-2 relative z-10">
            I typically respond within 24 hours
          </p>
        </a>

        {/* Social grid */}
        <div className="grid sm:grid-cols-2 gap-3">
          {links.map(({ Icon, label, username, href, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-4 rounded border border-border bg-gradient-card transition-all duration-300 hover-green-glow ${color}`}
            >
              <div className="p-2.5 rounded border border-border group-hover:border-current transition-colors duration-300 text-muted-foreground group-hover:text-current">
                <Icon size={20} weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-mono-display text-xs font-bold text-foreground">{label}</p>
                <p className="font-body text-xs text-muted-foreground truncate group-hover:text-current transition-colors duration-300">
                  {username}
                </p>
              </div>
              <span className="text-muted-foreground group-hover:text-current opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="terminal-label opacity-30">
            © {new Date().getFullYear()} Lee-Roy Chako — All rights reserved
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
