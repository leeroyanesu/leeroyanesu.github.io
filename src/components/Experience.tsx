import { ArrowRight } from "@phosphor-icons/react";

const experiences = [
  {
    period: "2024 — Present",
    role: "Full Stack Engineer",
    company: "Impactoverse",
    tag: "current",
    description:
      "Full-time remote role at a UK-based company. Building and maintaining full-stack systems across Node.js and React.js, working with a distributed team on a fast-moving product.",
    achievements: [
      "Shipped production features across Node.js and React.js codebases",
      "Collaborated remotely with a UK-based team across multiple time zones",
      "Applied 12+ technologies across the stack in a high-output environment",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Junior Engineer",
    company: "Swahiba Tech",
    tag: "contract",
    description:
      "On-site contract covering data analysis and full-stack development. Worked across internal tools and client projects in a fast-paced environment.",
    achievements: [
      "Delivered data analysis solutions and full-stack features",
      "Applied 15+ skills across frontend and backend codebases",
      "Contributed to on-site team delivery within tight timelines",
    ],
  },
  {
    period: "2021 — 2023",
    role: "Senior Full Stack Developer",
    company: "Freelance & Contract",
    tag: "freelance",
    description:
      "Solo engineer and small-team lead across game analytics, Unity cloud integration, Web3, and AI tooling. Built production apps and N8N automation workflows for clients across Africa and internationally.",
    achievements: [
      "Shipped 15+ production mobile and web applications",
      "Built blockchain platforms on Stacks and Ethereum mainnets",
      "Developed AI content pipelines and N8N automation workflows",
    ],
  },
  {
    period: "2019 — 2021",
    role: "Mobile App Developer",
    company: "Various Startups",
    tag: "mobile",
    description:
      "Built cross-platform React Native apps for food delivery, ride-sharing, and real estate crowdfunding. Also contracted as Mobile Developer at Martha Infotech (India, 2019) covering WordPress and web design.",
    achievements: [
      "Architected a 3-in-1 super app serving multiple business verticals",
      "Integrated Stripe payment gateway across multiple platforms",
      "Led a team of 3 junior developers",
    ],
  },
  {
    period: "2017 — 2019",
    role: "Web Developer",
    company: "Electronium Labz",
    tag: "web",
    description:
      "Part-time web development and design role. On-site position that built the foundation for a full-stack career — client websites, frontend work, and early exposure to design tools.",
    achievements: [
      "Delivered client websites and web design projects",
      "Built foundational skills across 6+ web technologies",
      "Developed an eye for design that carries through to every project today",
    ],
  },
];

const SectionLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-3 mb-2">
    <span className="text-primary font-mono-display text-sm">{">"}</span>
    <span className="terminal-label">{children}</span>
    <div className="flex-1 green-line" />
  </div>
);

const Experience = () => (
  <section id="experience" className="py-24 px-6 bg-secondary/20">
    <div className="container mx-auto">
      <div className="mb-14">
        <SectionLabel>git log --experience</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Experience</h2>
        <p className="font-body text-muted-foreground mt-3 max-w-xl">
          A continuous loop of learning, shipping, and levelling up.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, i) => (
          <div key={i} className="relative flex gap-6 group">
            {/* Timeline spine */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-primary mt-1.5 shrink-0 shadow-[0_0_10px_hsl(145_100%_45%_/_0.5)] group-hover:shadow-[0_0_18px_hsl(145_100%_45%_/_0.8)] transition-all duration-300" />
              {i < experiences.length - 1 && (
                <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-primary/10 mt-2" />
              )}
            </div>

            {/* Card */}
            <div className="pb-12 flex-1">
              <div className="p-6 rounded border border-border bg-gradient-card hover:border-primary/30 hover-green-glow transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="terminal-label text-[10px] px-2 py-0.5 rounded border border-primary/30 bg-primary/5 text-primary">
                        {exp.tag}
                      </span>
                    </div>
                    <h3 className="font-mono-display text-lg font-bold text-foreground leading-snug">
                      {exp.role}
                    </h3>
                    <p className="font-body text-sm text-orange mt-0.5">{exp.company}</p>
                  </div>
                  <span className="font-mono-display text-xs text-muted-foreground shrink-0">
                    {exp.period}
                  </span>
                </div>

                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.achievements.map((ach, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                      <ArrowRight size={14} className="text-primary mt-0.5 shrink-0" weight="bold" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
