import { useState } from "react";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ArrowLeft, ArrowRight, LockSimple, LockOpen, ArrowSquareOut } from "@phosphor-icons/react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  status: "Public" | "Private";
  url?: string;
  images?: string[];
}

const projects: Project[] = [
  {
    title: "HomeQuest",
    description:
      "Property platform for browsing, listing, and inquiring on residential and commercial properties. Built for performance on variable connections with a clean, fast interface.",
    tags: ["React", "Node.js", "MongoDB", "Property Tech"],
    status: "Public",
    url: "https://homequest.co.zw",
    images: ["/screenshots/homequest.png"],
  },
  {
    title: "PromptGap",
    description:
      "Prompt engineering tool that finds the gaps in your AI prompts. Test, compare, and refine across models to get consistent, reliable output every time.",
    tags: ["AI", "Next.js", "LLM", "Prompt Engineering", "Developer Tool"],
    status: "Public",
    url: "https://trypromptgap.com",
    images: ["/screenshots/promptgap.png"],
  },
  {
    title: "InkCopilot",
    description:
      "AI content automation platform for publishers. Connects to WordPress via REST API, writes articles with GPT, applies SEO optimization, and pulls live news. Takes creators from 3 to 15+ articles per week.",
    tags: ["AI", "Next.js", "WordPress API", "SEO", "Automation"],
    status: "Public",
    url: "https://inkcopilot.com",
    images: ["/screenshots/inkcopilot.png"],
  },
  {
    title: "PharmOS",
    description:
      "Pharmaceutical POS for Windows and Linux. Covers prescription tracking, inventory, supplier orders, and sales reporting. Ships with a built-in database of 3,000+ SADC-approved medicines and full license management — so pharmacies are compliant from day one.",
    tags: ["Electron", "Next.js", "Node.js", "SQLite", "Windows", "Linux", "POS", "License Management", "SADC"],
    status: "Public",
    images: ["/screenshots/pharmos.png"],
  },
  {
    title: "SWEPR",
    description:
      "Blockchain-based gaming platform on Stacks. Weekly leaderboards, $SWPR token mining, lottery system with STX rewards, and Xverse/Leather wallet integration for transparent instant payouts.",
    tags: ["Stacks Blockchain", "Web3", "React", "Smart Contracts", "Gaming"],
    status: "Public",
    images: ["/placeholder.svg"],
  },
  {
    title: "Mobile App (3 in 1)",
    description:
      "A 3-in-1 super app connecting stakeholders through a single platform — food delivery, ride-sharing, and property booking. React Native with real-time tracking, Stripe payments, and seamless UX.",
    tags: ["React Native", "Stripe", "Firebase", "Redux", "UX/UI Design"],
    status: "Private",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Driver & Merchant Apps",
    description:
      "Companion apps for the 3-in-1 ecosystem — driver order management, restaurant backend, and multi-service provider dashboards. Complete operational layer for every stakeholder.",
    tags: ["React Native", "Stripe", "Firebase", "Redux", "UX/UI Design"],
    status: "Private",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Real Estate CrowdFunding",
    description:
      "Mobile crowdfunding app for real estate projects. React Native, ExpressJS, Firebase push notifications, and MongoDB. Features investment tracking, project analytics, and secure transactions.",
    tags: ["React Native", "NodeJs", "ExpressJs", "MongoDB", "Redux", "Stripe"],
    status: "Private",
    images: ["/placeholder.svg"],
  },
  {
    title: "Crypto Chart Publisher",
    description:
      "WhatsApp-based bot that screenshots live Binance coin/token prices and delivers them automatically. Automated market analysis and real-time price alerts through WhatsApp Web.",
    tags: ["NodeJs", "ExpressJs", "WhatsApp Web"],
    status: "Public",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Live Trading Signals",
    description:
      "Mobile app for broadcasting curated trading signals from @ironmanFX to subscribers. Keeps users informed on market movements and opportunities in real time.",
    tags: ["NodeJs", "ExpressJs", "WhatsApp Web", "NewsAPI"],
    status: "Private",
    images: ["/placeholder.svg"],
  },
  {
    title: "StacksOcean NFT Marketplace",
    description:
      "NFT marketplace on the Stacks blockchain — buy, sell, and trade digital assets in a fully decentralized, transparent environment. Built with React.js and Clarity smart contracts.",
    tags: ["React.js", "Clarity", "Material UI"],
    status: "Private",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "ChickenHotspot Chatbot",
    description:
      "WhatsApp Business API food ordering chatbot — menu browsing, order customization, and payment integration all via WhatsApp. Zero app install required.",
    tags: ["NodeJs", "WhatsApp Business API"],
    status: "Private",
    images: ["/placeholder.svg"],
  },
  {
    title: "Skuta Cuisine",
    description:
      "South African mobile food ordering app using PeechPayment. Browse menus, place orders, and pay — all in one seamless experience. Built with React Native and MongoDB.",
    tags: ["Node.js", "Express.js", "MongoDB", "React Native", "Peech Payment"],
    status: "Private",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "SuSe Trading Bot",
    description:
      "Python trading bot with Pandas, RSI, ADX, SuperTrend, and MA indicators. Makes informed automated trading decisions based on key market signals.",
    tags: ["Python", "MongoDB"],
    status: "Private",
    images: ["/placeholder.svg"],
  },
  {
    title: "School Management System",
    description:
      "Comprehensive school management platform with a React UI. Designed as lead UI designer, crafting an intuitive and efficient interface for students, teachers, and administrators.",
    tags: ["React.js"],
    status: "Public",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
];

const SectionLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-3 mb-2">
    <span className="text-primary font-mono-display text-sm">{">"}</span>
    <span className="terminal-label">{children}</span>
    <div className="flex-1 green-line" />
  </div>
);

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [imgIdx, setImgIdx] = useState(0);

  const prev = () => selected?.images && setImgIdx((i) => (i === 0 ? selected.images!.length - 1 : i - 1));
  const next = () => selected?.images && setImgIdx((i) => (i === selected.images!.length - 1 ? 0 : i + 1));

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="mb-14">
          <SectionLabel>ls ./projects</SectionLabel>
          <div className="flex items-end justify-between gap-4 flex-wrap mt-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">Recent Works</h2>
              <p className="font-body text-muted-foreground mt-3 max-w-xl">
                A showcase of projects across web, mobile, and Web3.
              </p>
            </div>
            <span className="terminal-label opacity-50">{projects.length} projects</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <button
              key={i}
              onClick={() => { setSelected(project); setImgIdx(0); }}
              className="group text-left p-5 rounded border border-border bg-gradient-card hover:border-primary/30 hover-green-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="font-mono-display text-[10px] text-muted-foreground opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={`flex items-center gap-1 text-[10px] font-mono-display px-2 py-0.5 rounded border ${
                  project.status === "Public"
                    ? "border-primary/30 bg-primary/5 text-primary"
                    : "border-border text-muted-foreground"
                }`}>
                  {project.status === "Public"
                    ? <LockOpen size={10} weight="bold" />
                    : <LockSimple size={10} weight="bold" />
                  }
                  {project.status}
                </div>
              </div>

              <h3 className="font-mono-display text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                {project.title}
              </h3>

              <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag, j) => (
                  <Badge key={j} variant="outline" className="font-body text-[10px] border-border/60 text-muted-foreground">
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge variant="outline" className="font-body text-[10px] border-border/60 text-primary/60">
                    +{project.tags.length - 3}
                  </Badge>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-mono-display text-xl">{selected?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-5">
            {selected?.images && selected.images.length > 0 && (
              <div className="relative bg-secondary rounded border border-border overflow-y-auto" style={{ maxHeight: '70vh', minHeight: '280px' }}>
                <img
                  src={selected.images[imgIdx]}
                  alt={`${selected.title} ${imgIdx + 1}`}
                  className="w-full h-auto object-contain"
                />
                {selected.images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded border border-border bg-card/80 text-foreground hover:text-primary transition-colors"
                    >
                      <ArrowLeft size={16} weight="bold" />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded border border-border bg-card/80 text-foreground hover:text-primary transition-colors"
                    >
                      <ArrowRight size={16} weight="bold" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {selected.images.map((_, k) => (
                        <button
                          key={k}
                          onClick={() => setImgIdx(k)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${k === imgIdx ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/40"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {selected?.description}
            </p>
            {selected?.url && (
              <a
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono-display text-xs text-primary border border-primary/30 bg-primary/5 px-4 py-2 rounded hover:bg-primary/10 hover:border-primary/60 transition-all duration-200"
              >
                <ArrowSquareOut size={14} weight="bold" />
                {selected.url.replace(/^https?:\/\//, '')}
              </a>
            )}
            <div>
              <p className="terminal-label mb-2">// technologies</p>
              <div className="flex flex-wrap gap-2">
                {selected?.tags.map((tag, i) => (
                  <Badge key={i} variant="outline" className="font-body border-border/60 text-muted-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
