import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Experience = () => {
  const experiences = [
    {
      period: "2021 - Present",
      role: "Senior Full Stack Developer",
      company: "Freelance & Contract Work",
      description:
        "Leading development of complex applications specializing in game analytics, Unity integration, and web development. Building intelligent solutions that bridge gaming platforms with modern web technologies.",
      achievements: [
        "Developed advanced game analytics systems with Unity integration",
        "Built 10+ production-ready mobile and web applications",
        "Implemented AI-powered features and N8N workflow automation",
      ],
    },
    {
      period: "2019 - 2021",
      role: "Mobile App Developer",
      company: "Various Startups",
      description:
        "Built cross-platform mobile applications with focus on food delivery, ride-sharing, and real estate sectors.",
      achievements: [
        "Created 3-in-1 super app serving multiple business verticals",
        "Integrated Stripe payment gateway across multiple platforms",
        "Managed team of 3 junior developers",
      ],
    },
    {
      period: "2018 - 2019",
      role: "Full Stack Developer",
      company: "Tech Agency",
      description:
        "Developed full-stack web applications using React, Node.js, and MongoDB. Contributed to design and architecture decisions.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Improved code quality through implementation of best practices",
        "Mentored junior developers in modern web technologies",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey of continuous learning and growth
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border hover:border-primary transition-all duration-300"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <CardTitle className="text-2xl">{exp.role}</CardTitle>
                  <span className="text-primary text-sm font-medium">{exp.period}</span>
                </div>
                <CardDescription className="text-base text-foreground/80">
                  {exp.company}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
