import { Card } from "./ui/card";
import { Github, Linkedin, Send, Mail, Twitter, Code } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com/leeroyanesu",
      username: "leeroyanesu",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/leeroy-chako",
      username: "Leeroy Chako",
    },
    {
      icon: <Send size={24} />,
      label: "Telegram",
      href: "https://telegram.me/MrLeeA_C",
      username: "MrLeeA_C",
    },
    {
      icon: <Twitter size={24} />,
      label: "Twitter",
      href: "https://twitter.com/MrLee_C",
      username: "MrLee_C",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      href: "mailto:leeroyachako@gmail.com",
      username: "leeroyachako@gmail.com",
    },
    {
      icon: <Code size={24} />,
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/leeroyc",
      username: "Leeroy C.",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="p-6 bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(195_100%_50%_/_0.3)]">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{link.label}</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        {link.username}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Lee-Roy Chako. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
