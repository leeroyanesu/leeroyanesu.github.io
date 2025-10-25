import { Button } from "./ui/button";
import { Github, Linkedin, Send, Mail, Twitter } from "lucide-react";
import { GradientText } from "./ui/gradient-text";

const Hero = () => {
  return (
    <section id="about" className="min-h-[calc(100vh-4rem)] flex items-center justify-center pt-20 px-4 pb-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in">
          <div className="space-y-3 md:space-y-4">
            <p className="text-primary text-base md:text-lg">Hi 👋 I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
              <GradientText>Lee-Roy Chako</GradientText>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              Full Stack Mobile, Web & Web3 Developer
            </p>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Greetings and welcome to my portfolio! I'm an ardent full-stack developer with over 5 years of experience. 
            Specializing in crafting user-centric software, I excel in both front-end and back-end development across 
            diverse platforms. With expertise in blockchain, mobile development along with unity cloud integration with 
            hybrid apps, I seamlessly integrate cutting-edge technology while placing a premium on design aesthetics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-orange animate-glow hover:opacity-90 transition-all relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-orange before:opacity-0 before:transition-opacity hover:before:opacity-20"
              asChild
            >
              <a href="mailto:leeroyachako@gmail.com" className="relative z-10">
                Let's Talk
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
              <a href="/leeroy_chako_resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-3 md:gap-4 pt-6 md:pt-8">
            <a
              href="https://github.com/leeroyanesu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github size={18} className="sm:size-5" />
            </a>
            <a
              href="https://linkedin.com/in/leeroy-chako"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Linkedin size={18} className="sm:size-5" />
            </a>
            <a
              href="https://telegram.me/MrLeeA_C"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Send size={18} className="sm:size-5" />
            </a>
            <a
              href="https://twitter.com/MrLee_C"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Twitter size={18} className="sm:size-5" />
            </a>
            <a
              href="mailto:leeroyachako@gmail.com"
              className="p-2.5 sm:p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Mail size={18} className="sm:size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
