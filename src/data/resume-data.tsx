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
    "I am a AI Engineer with 3 years of experience in NLP and 1 year of experience in Data Science. I have a strong background in Python and I am familiar with the most popular ML/DL frameworks. I am also experienced in building and deploying ML/DL models to production.",
  avatarUrl: "https://mdurmuss.github.io/assets/images/profile.jpg",
  personalWebsiteUrl: "https://mdurmuss.github.io/",
  contact: {
    email: "mustafa-durmuss@outlook.com",
    tel: "+48530213401",
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
      school: "Karabuk University",
      degree: "Bachelor's Degree in CS",
      start: "2014",
      end: "2019"
    },
    {
      school: "Karabuk University",
      degree: "Master Degree in CS",
      start: "2020",
      end: "2023"
    },
    {
      school: "Galatasaray University",
      degree: "Master Degree in Data Science",
      start: "2023",
      end: "2025"
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
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL"
    },
    {
      company: "Hummingdrone",
      link: "https://www.nokia.com",
      badges: [],
      title: "Robotics Developer",
      logo: NSNLogo,
      start: "2019",
      end: "2021",
      description: "Worked on a project for Hummingdrone. Technologies: Python, ROS, OpenCV"
    }
  ],
  skills: [
    "Python",
    "Docker",
    "Jenkins"
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
