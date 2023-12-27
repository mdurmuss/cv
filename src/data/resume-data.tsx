import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Mustafa Durmuş",
  initials: "MD",
  location: "Istanbul, Turkey",
  locationLink: "https://www.google.com/maps/place/Istanbul",
  about:
    "Experienced NLP Engineer and trying to become a Data Scientist.",
  summary:
    "I have over four years of experience in machine learning and natural language processing, with a solid background in Python. I'm familiar with the major ML and DL frameworks, including Large Language Models. Additionally, I have hands-on experience in building, deploying, and managing the CI/CD cycle of AI models in production environments.",
  avatarUrl: "https://mdurmuss.github.io/assets/images/profile.jpg",
  personalWebsiteUrl: "https://mdurmuss.github.io/",
  contact: {
    email: "mustafa-durmuss@outlook.com",
    tel: "+90 535 000 00 00",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mdurmuss",
        icon: GitHubIcon
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mustafadurmuss/",
        icon: LinkedInIcon
      }
    ]
  },
  education: [
    {
      school: "Galatasaray University",
      degree: "Master Degree in Data Science",
      start: "2023",
      end: "Present"
    },
    {
      school: "Karabuk University",
      degree: "Master Degree in CS",
      start: "2020",
      end: "2023"
    },
    {
      school: "Vytautas Magnus University",
      degree: "Erasmus+",
      start: "2017",
      end: "2018",
    },
    {
      school: "Karabuk University",
      degree: "Bachelor's Degree in CS. Thesis:A Neural Image Caption Generator",
      start: "2014",
      end: "2019"
    }

  ],
  work: [
    {
      company: "Albert Health",
      link: "https://albert.health/",
      badges: ["Hybrid"],
      title: "NLP Engineer",
      logo: ParabolLogo,
      start: "2019",
      end: "Present",
      description:
        "I lead the NLP team at Albert Health. We are building a conversational AI platform for healthcare. I am responsible for the development of the NLP pipeline, including intent classification, entity extraction, and conversational AI. I also lead development of the CI/CD pipeline for the NLP models. Currently working on LLMS and Retrieval Augmented Generation."
    },
    {
      company: "Hummingdrone",
      link: "https://www.nokia.com",
      badges: [],
      title: "Robotics Developer",
      logo: NSNLogo,
      start: "2019",
      end: "2021",
      description: "I am in Robotics Development Team. The team deeply focus on making data-driven drones, using approaches like: Machine Learning, Computer Vision, Visual SLAM, Amazon Web Services and open source robotics technologies."

    }
  ],
  skills: [
    "Machine Learning",
    "Natural Language Processing",
    "Data Science",
    "LLMs",
    "Retrieval Augmented Generation",
    "Conversational AI",
    "CI/CD",
    "Docker",
    "Jenkins",
    "AWS/GCP"
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC"
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/"
      }
    }
  ]
} as const;
