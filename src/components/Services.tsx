import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Smartphone, Globe, Blocks, Database, Code, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description:
        "I excel in crafting captivating mobile applications that captivate your audience. From inception to launch, I design native and cross-platform apps for both iOS and Android. Leveraging state-of-the-art technologies, I guarantee flawless performance, user-friendly interfaces, and strong functionality that harmonizes seamlessly with your business objectives.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description:
        "I specialize in delivering visually striking and intuitive websites to bolster your online presence. Utilizing cutting-edge frameworks like React and Next.js, I create responsive and high-performance web applications that engage users and drive business growth.",
    },
    {
      icon: <Blocks className="w-8 h-8" />,
      title: "Blockchain Solutions",
      description:
        "With expertise in blockchain technology, I develop decentralized applications and smart contracts. From NFT marketplaces to DeFi platforms, I bring innovative blockchain solutions to life using technologies like Clarity and Solidity.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "I build robust and scalable backend systems using Node.js, Express, and various database technologies. My backend solutions ensure secure data management, efficient API integration, and seamless communication between your application components.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "API Integration",
      description:
        "I excel at integrating third-party services and APIs to extend your application's functionality. From payment gateways like Stripe to communication platforms like WhatsApp Business API, I ensure smooth and reliable integrations.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UX/UI Design",
      description:
        "I create user-centric designs that prioritize aesthetics and usability. By combining modern design principles with user research, I craft interfaces that not only look beautiful but also provide exceptional user experiences.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI & Automation Solutions",
      description:
        "I leverage cutting-edge AI technologies and N8N workflow automation to build intelligent applications. From chatbots and machine learning integrations to automated business processes, I help streamline operations and enhance user experiences with AI-powered solutions.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border hover:border-orange transition-all duration-300 hover:shadow-[0_0_30px_hsl(25_95%_55%_/_0.3)] group"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-gradient-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-background">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
