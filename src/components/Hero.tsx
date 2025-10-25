import { Button } from "./ui/button";
import { Github, Linkedin, Send, Mail, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-primary text-lg">Hi 👋 I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Lee-Roy Chako
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Mobile, Web & Web3 Developer
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Greetings and welcome to my portfolio! I'm an ardent full-stack developer with over 5 years of experience. 
            Specializing in crafting user-centric software, I excel in both front-end and back-end development across 
            diverse platforms. With expertise in blockchain, mobile development along with unity cloud integration with 
            hybrid apps, I seamlessly integrate cutting-edge technology while placing a premium on design aesthetics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="mailto:leeroyachako@gmail.com">Let's Talk</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <a
              href="https://github.com/leeroyanesu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/leeroy-chako"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://telegram.me/MrLeeA_C"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Send size={20} />
            </a>
            <a
              href="https://twitter.com/MrLee_C"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:leeroyachako@gmail.com"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
