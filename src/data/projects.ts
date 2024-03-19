import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "social-media-app-flutter",
    title: "UI/UX Real Estate CrowdFunding App",
    description:
      "A real estate mobile application  developed using React Native, ExpressJs, Firebase Notifications and Mongodb. Its main use is to crowdfund projects that exists in the real estate market",
    icon: "/skills/reactNative.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["React Native", "NodeJs", "ExpressJs", "Mongodb", "Redux","Stripe"],
  },
  {
    id: "social-media-app-flutter",
    title: "Crypto Chart Publisher",
    description:
      "A Chatbot that utilizes whatsapp web to developer screenshots of prices of any coin/token that exists in Binance Exchange and send a picture throught whatsapp web",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    tags: [ "NodeJs", "ExpressJs", "WhatsappWeb",],
  },
  {
    id: "social-media-app-flutter",
    title: "Live Signals",
    description:
      "A mobile application for publishing trading signals to anyone who has and follows @ironmanFX. It delivers curated trading signals from experienced experts, keeping users informed about market movements and opportunities in real-time. ",
    icon: "/skills/reactNative.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: [ "NodeJs", "ExpressJs", "WhatsappWeb","NewsAPI"],
  },
  {
    id: "e-commerce-app-mern",
    title: "StacksOcean Website App",
    description:
      "A NFT marketplace that runs on stacks blockchain where users buy and sell NFTs. This platform provided a decentralized environment for trading digital assets, offering transparency and trust through blockchain technology. Users were able to explore a wide range of unique digital collectibles and artwork, facilitating transactions with ease and confidence.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["React.js", "Clarity", "Material UI"],
  },
  {
    id: "video-calling-app-flutter",
    title: "ChickenHotspot Chatbot",
    description:
      "A Food ordering Chatbot that makes use of Whatsapp business API.  This Chatbot streamlined the ordering process, providing users with menu options, order customization, and payment integration directly within the WhatsApp interface. Customers could engage with the Chatbot to browse menus, place orders, track deliveries, and receive updates seamlessly through the familiar WhatsApp platform, enhancing their overall ordering experience. ",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["NodeJs", "WhatsApp Business API",],
  },
  {
    id: "social-media-api-nodejs",
    title: "Skuta Cuisine Mobile App",
    description:
      "A mobile food ordering application based in South africa which utilizes PeechPayment. This application offered users a convenient platform to browse menus, place orders, and make payments seamlessly. By integrating PeechPayment, users could securely complete transactions using various payment methods accepted by the platform. This streamlined approach to food ordering provided customers with a hassle-free experience while supporting local businesses in South Africa's vibrant food industry.",
    icon: "/skills/reactNative.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["Node.js", "Express.js", "MongoDB", "React Native","Peech Payment"],
  },
  {
    id: "grocery-list-maker-app-flutter",
    title: "SuSe Trading Bot",
    description:
      "I engineered a robust trading bot using Python, harnessing modules like Pandas for meticulous data analysis. Implementing key indicators including RSI, ADX, SuperTrend, and MA, the bot made informed decisions in the dynamic landscape of the US Stock Market",
    icon: "/skills/python.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["Python","MongoDB"],
  },
  {
    id: "e-commerce-api-nodejs",
    title: "School Management System",
    description:
      "I led the design and development of a comprehensive School Management System, employing ReactJS to create an intuitive and efficient user interface. Serving as the lead UI designer, I crafted a visually appealing and user-friendly experience for administrators, teachers, and students. ",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    tags: ["React.js",],
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
