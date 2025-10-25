import { Card } from "./ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: "⚡" },
        { name: "TypeScript", icon: "📘" },
        { name: "Python", icon: "🐍" },
        { name: "Clarity", icon: "💎" },
        { name: "Solidity", icon: "⛓️" },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "Next.js", icon: "▲" },
        { name: "React.js", icon: "⚛️" },
        { name: "React Native", icon: "📱" },
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "SASS", icon: "💅" },
        { name: "Tailwind", icon: "🎐" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚂" },
        { name: "PHP", icon: "🐘" },
      ],
    },
    {
      category: "Database Management",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MySQL", icon: "🐬" },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", icon: "📦" },
        { name: "GitHub", icon: "🐙" },
        { name: "Redux", icon: "🔄" },
        { name: "AWS", icon: "☁️" },
        { name: "Firebase", icon: "🔥" },
        { name: "Linux", icon: "🐧" },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem Solving", icon: "🧩" },
        { name: "Collaboration", icon: "🤝" },
        { name: "Analytical Skills", icon: "📊" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Card
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    <span className="flex items-center gap-2 text-sm">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-foreground">{skill.name}</span>
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
