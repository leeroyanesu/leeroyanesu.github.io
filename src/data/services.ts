import {
  faMobileButton,
  faLaptopCode,
  faServer,
  faBrain,
  faPaintBrush,
  faRobot
} from "@fortawesome/free-solid-svg-icons";
import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    title: "Mobile App Development",
    icon: faMobileButton,
    description:
      "I excel in crafting captivating mobile applications that captivate your audience. From inception to launch, I design native and cross-platform apps for both iOS and Android. Leveraging state-of-the-art technologies, I guarantee flawless performance, user-friendly interfaces, and strong functionality that harmonizes seamlessly with your business objectives.",
  },
  {
    title: "Web Development",
    icon: faLaptopCode,
    description:
      "I specialize in delivering visually striking and intuitive websites to bolster your online presence. Whether you require a straightforward informational site or a sophisticated e-commerce platform, I offer customized web development solutions. Employing cutting-edge frameworks and technologies, I develop responsive, SEO-friendly websites that ensure a smooth browsing experience across all devices.",
  },
  {
    title: "Backend Development",
    icon: faServer,
    description:
      "I fortify your digital applications with a resilient and expandable backend infrastructure. Drawing on my proficiency in backend development, I engineer streamlined database architectures, construct APIs, and fine-tune servers to guarantee peak performance, security, and scalability. My solutions empower your applications to effortlessly manage heavy traffic and intricate data operations.",
  },
  {
    title: "Product Strategy",
    icon: faBrain,
    description:
      "I engage in collaborative efforts with you to delineate precise objectives, identify target demographics, and chart a course for triumph. Leveraging my proficiency in product ideation and market analysis, I guarantee that your product not only satisfies user requirements but also harmonizes with your business strategy for sustained expansion. My adept product strategy ensures the full realization of your digital products' potential, maximizing their effectiveness and fostering long-term growth.",
  },
  {
    title: "UI/UX Designer",
    icon: faPaintBrush,
    description:
      "My UI/UX design expertise blends creativity with user psychology and functionality. I prioritize user needs, craft visually appealing interfaces, and conduct thorough testing for optimal usability. Ensuring accessibility and staying updated on industry trends, I create innovative designs that deliver exceptional user experiences.",
  },
  {
    title: "Emerging Technologies",
    icon: faRobot,
    description:
      "I specialize in navigating the frontier of emerging technologies, leveraging cutting-edge innovations to shape the digital landscape. From conceptualization to execution, I collaborate closely with clients to define precise objectives and harness the power of emerging tech to meet user demands. With a keen focus on product ideation and market analysis within this dynamic sphere, I ensure that digital solutions not only align with current trends but also anticipate future advancements. My expertise in emerging technology enables me to craft bespoke strategies that propel businesses towards sustained growth and success in an ever-evolving technological landscape.",
  },
];

export default services;
