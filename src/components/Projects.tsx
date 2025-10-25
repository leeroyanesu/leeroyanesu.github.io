import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  status: "Public" | "Private";
  images?: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "Mobile App (3 in 1)",
      description:
        "A 3 in 1 application that seeks to connect various stakeholders to their customers through a single application. Food delivery, ride sharing or property booking for the holidays. Built with React Native, featuring real-time tracking, secure payments via Stripe, and seamless UX.",
      tags: ["React Native", "Stripe", "Firebase", "Redux", "UX/UI Design"],
      status: "Private",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Mobile App (Subsidiaries of 3 in 1)",
      description:
        "For each of the services provided by the 3 in 1 app, there is a driver app for managing orders and data. For food delivery there is a merchant application for handling the backend of the restaurant. Complete ecosystem of companion apps for drivers, merchants, and service providers.",
      tags: ["React Native", "Stripe", "Firebase", "Redux", "UX/UI Design"],
      status: "Private",
      images: ["/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "UI/UX Real Estate CrowdFunding App",
      description:
        "A real estate mobile application developed using React Native, ExpressJs, Firebase Notifications and Mongodb. Its main use is to crowdfund projects that exists in the real estate market. Features investment tracking, project analytics, and secure transactions.",
      tags: ["React Native", "NodeJs", "ExpressJs", "MongoDB", "Redux", "Stripe"],
      status: "Private",
      images: ["/placeholder.svg"],
    },
    {
      title: "Crypto Chart Publisher",
      description:
        "A Chatbot that utilizes whatsapp web to develop screenshots of prices of any coin/token that exists in Binance Exchange and send a picture through whatsapp web. Automated market analysis and real-time price alerts.",
      tags: ["NodeJs", "ExpressJs", "WhatsappWeb"],
      status: "Public",
      images: ["/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Live Signals",
      description:
        "A mobile application for publishing trading signals to anyone who has and follows @ironmanFX. It delivers curated trading signals from experienced experts, keeping users informed about market movements and opportunities.",
      tags: ["NodeJs", "ExpressJs", "WhatsappWeb", "NewsAPI"],
      status: "Private",
      images: ["/placeholder.svg"],
    },
    {
      title: "StacksOcean Website App",
      description:
        "A NFT marketplace that runs on stacks blockchain where users buy and sell NFTs. This platform provided a decentralized environment for trading digital assets, offering transparency and trust through blockchain technology.",
      tags: ["React.js", "Clarity", "Material UI"],
      status: "Private",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "ChickenHotspot Chatbot",
      description:
        "A Food ordering Chatbot that makes use of Whatsapp business API. This Chatbot streamlined the ordering process, providing users with menu options, order customization, and payment integration directly through WhatsApp.",
      tags: ["NodeJs", "WhatsApp Business API"],
      status: "Private",
      images: ["/placeholder.svg"],
    },
    {
      title: "Skuta Cuisine Mobile App",
      description:
        "A mobile food ordering application based in South Africa which utilizes PeechPayment. This application offered users a convenient platform to browse menus, place orders, and make payments seamlessly.",
      tags: ["Node.js", "Express.js", "MongoDB", "React Native", "Peech Payment"],
      status: "Private",
      images: ["/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "SuSe Trading Bot",
      description:
        "I engineered a robust trading bot using Python, harnessing modules like Pandas for meticulous data analysis. Implementing key indicators including RSI, ADX, SuperTrend, and MA, the bot made informed decisions for automated trading.",
      tags: ["Python", "MongoDB"],
      status: "Private",
      images: ["/placeholder.svg"],
    },
    {
      title: "School Management System",
      description:
        "I led the design and development of a comprehensive School Management System, employing ReactJS to create an intuitive and efficient user interface. Serving as the lead UI designer, I crafted a visually appealing and user-friendly platform.",
      tags: ["React.js"],
      status: "Public",
      images: ["/placeholder.svg", "/placeholder.svg"],
    },
  ];

  const handlePrevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images!.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of projects that demonstrate my expertise across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(195_100%_50%_/_0.3)] cursor-pointer group"
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant={project.status === "Public" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                {project.images && project.images.length > 0 && (
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink size={16} />
                    <span>View Gallery ({project.images.length})</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            {selectedProject?.images && selectedProject.images.length > 0 && (
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                      onClick={handleNextImage}
                    >
                      <ChevronRight />
                    </Button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            i === currentImageIndex ? "bg-primary w-8" : "bg-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject?.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.tags.map((tag, i) => (
                    <Badge key={i} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
