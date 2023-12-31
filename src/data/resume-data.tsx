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
    "Experienced NLP Engineer and Junior Data Scientist.",
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
      degree: "Master Degree in NLP",
      start: "2020",
      end: "2023"
    },
    {
      school: "Vytautas Magnus University",
      degree: "Erasmus+",
      start: "2017",
      end: "2018"
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
      start: "2020",
      end: "Present",
      description:
        "I lead the NLP team at Albert Health, where we are developing a conversational AI platform for healthcare. My responsibilities include overseeing the development of the NLP pipeline, which encompasses intent classification and entity extraction within the conversational AI platform. Additionally, I am in charge of developing the CI/CD pipeline for our AI models. Currently, I am working on LLMs, RAG and prompt engineering."
    },
    {
      company: "Hummingdrone",
      link: "https://www.nokia.com",
      badges: [],
      title: "Robotics Developer",
      logo: NSNLogo,
      start: "2019",
      end: "2020",
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
      title: "Diabetes GPT",
      techStack: [
        "LLMs",
        "RAG",
        "Python",
        "Streamlit",
        "Docker",
      ],
      description: "This project aims to help people with diabetes to find answers to their questions in conversational ai platform.",
      link: {
        label: "https://diyabet.albert.health/",
        href: "https://diyabet.albert.health/"
      }

    },
    {
      title: "Word Predictor",
      techStack: [
        "NLP",
        "n-grams",
        "Python",
        "Flask",
        "Heroku"
      ],
      description: "This project aims to predict the words that may come after the input using n-gram techniques.",
      link: {
        label: "https://github.com/mdurmuss/word-predictor/",
        href: "https://github.com/mdurmuss/word-predictor/"
      }

    },
    {
      title: "Data Augmentation",
      techStack: [
        "Jupyter Notebook",
        "Data Augmentation",
        "NLP"
      ],
      description: "Data augmentation techs for natural language processing on Turkish language.",
      link: {
        label: "https://github.com/mdurmuss/nlp-data-augmentation",
        href: "https://github.com/mdurmuss/nlp-data-augmentation"
      }

    }
  ]
} as const;
