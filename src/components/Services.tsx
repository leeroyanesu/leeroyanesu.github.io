import {
  DeviceMobile, Globe, Cube, Database, PlugsConnected,
  PenNib, Robot, Cloud,
} from "@phosphor-icons/react";

const services = [
  {
    Icon: DeviceMobile,
    title: "Mobile App Development",
    tag: "ios & android",
    description:
      "Native and cross-platform apps built with React Native — real-time tracking, Stripe payments, and pixel-perfect interfaces that feel native on any device.",
  },
  {
    Icon: Globe,
    title: "Web Development",
    tag: "react & next.js",
    description:
      "Responsive, high-performance web applications using React and Next.js. From landing pages to full-scale platforms, I ship fast and ship clean.",
  },
  {
    Icon: Cube,
    title: "Blockchain Solutions",
    tag: "clarity & solidity",
    description:
      "NFT marketplaces, DeFi platforms, and smart contracts on Stacks and Ethereum — decentralized by design, auditable by default.",
  },
  {
    Icon: Database,
    title: "Backend Development",
    tag: "node.js & databases",
    description:
      "Scalable APIs and backend systems with Node.js, Express, MongoDB, and PostgreSQL. Security-first architecture, built for production.",
  },
  {
    Icon: PlugsConnected,
    title: "API Integration",
    tag: "third-party services",
    description:
      "Stripe, WhatsApp Business API, Firebase, WordPress — I wire up the services your product needs with rock-solid reliability.",
  },
  {
    Icon: PenNib,
    title: "UX/UI Design",
    tag: "figma & prototyping",
    description:
      "Design systems and interfaces grounded in user research. Aesthetics that serve clarity, not just attention.",
  },
  {
    Icon: Robot,
    title: "AI & Automation",
    tag: "n8n & llm integration",
    description:
      "From GPT-powered content pipelines to N8N workflow automation — I build intelligent systems that save time at scale.",
  },
  {
    Icon: Cloud,
    title: "DevOps & Server Config",
    tag: "linux · azure · cloudflare",
    description:
      "Server provisioning, Linux administration, cloud deployments on Azure, Cloudflare configuration, PM2 process management, CI/CD pipelines, and environment setup — production-ready infrastructure that stays up.",
  },
];

const SectionLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-3 mb-2">
    <span className="text-primary font-mono-display text-sm">{">"}</span>
    <span className="terminal-label">{children}</span>
    <div className="flex-1 green-line" />
  </div>
);

const Services = () => (
  <section id="services" className="py-24 px-6">
    <div className="container mx-auto">
      <div className="mb-14">
        <SectionLabel>services.list()</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          What I Build
        </h2>
        <p className="font-body text-muted-foreground mt-3 max-w-xl">
          Comprehensive solutions — from concept to production.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({ Icon, title, tag, description }, i) => (
          <div
            key={i}
            className="group relative p-6 rounded border border-border bg-gradient-card hover-green-glow hover:border-primary/30 transition-all duration-300"
          >
            {/* Accent line on top */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex items-start gap-4 mb-4">
              <div className="p-2.5 rounded border border-primary/20 bg-primary/5 text-primary group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-300">
                <Icon size={22} weight="duotone" />
              </div>
              <div>
                <h3 className="font-mono-display text-sm font-bold text-foreground leading-snug">
                  {title}
                </h3>
                <span className="terminal-label opacity-50 text-[10px]">{tag}</span>
              </div>
            </div>

            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
