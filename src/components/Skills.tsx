import { useState } from "react";

const CATEGORIES = [
  {
    id: "languages",
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Clarity", "Solidity"],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["Next.js", "React.js", "React Native", "HTML5", "CSS3", "SASS", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "Express", "PHP"],
  },
  {
    id: "database",
    label: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    id: "tools",
    label: "Tools",
    skills: ["Git", "GitHub", "Redux", "Azure", "Linux", "N8N", "AI Integration"],
  },
  {
    id: "devops",
    label: "DevOps",
    skills: ["Linux Server Admin", "Azure", "Cloudflare", "Nginx", "PM2", "CI/CD", "Docker", "SSH", "Domain & SSL Config"],
  },
  {
    id: "soft",
    label: "Soft Skills",
    skills: ["Problem Solving", "Collaboration", "Analytical Thinking", "System Design"],
  },
];

const SectionLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-3 mb-2">
    <span className="text-primary font-mono-display text-sm">{">"}</span>
    <span className="terminal-label">{children}</span>
    <div className="flex-1 green-line" />
  </div>
);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("languages");
  const current = CATEGORIES.find((c) => c.id === activeCategory)!;

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="mb-14">
          <SectionLabel>npm list --skills</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Skills & Stack</h2>
          <p className="font-body text-muted-foreground mt-3 max-w-xl">
            Tools I reach for when building real products.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`font-mono-display text-xs tracking-widest uppercase px-4 py-2 rounded border transition-all duration-200 ${
                  activeCategory === id
                    ? "border-primary bg-primary/10 text-primary shadow-[0_0_12px_hsl(145_100%_45%_/_0.2)]"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="p-6 rounded border border-border bg-gradient-card min-h-[180px]">
            <p className="terminal-label mb-5 opacity-50">
              {`// ${current.skills.length} items in ${current.label.toLowerCase()}`}
            </p>
            <div className="flex flex-wrap gap-3">
              {current.skills.map((skill, i) => (
                <div
                  key={skill}
                  className="group flex items-center gap-2 px-4 py-2 rounded border border-border bg-secondary/40 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-default"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span className="text-primary font-mono-display text-xs opacity-50 group-hover:opacity-100 transition-opacity">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-sm text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
