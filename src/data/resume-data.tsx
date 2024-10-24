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
import { AccessibilityIcon, ActivityIcon, BatteryMediumIcon, BookAIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Mustafa Durmuş",
  initials: "MD",
  location: "Istanbul, Turkey",
  locationLink: "https://www.google.com/maps/place/Istanbul",
  about:
    "Data Scientist dedicated to developing innovative AI solutions.",
  summary:
    "I am a data scientist with over 5 years of experience specializing in natural language processing (NLP). In the past 2 years, I have also focused on data science, enhancing my skill set and expertise. I have a strong background in Python programming and am proficient with major ML and DL frameworks, including Large Language Models (LLMs). I am dedicated to continuing my growth in data science, applying my knowledge to solve practical problems, and working on projects involving cutting-edge technologies and cloud-based ETL techniques.",
  avatarUrl: "https://avatars.githubusercontent.com/u/13923389?v=4",
  personalWebsiteUrl: "https://mdurmuss.github.io/",
  contact: {
    email: "mustafa-durmuss@outlook.com",
    tel: "+90 000 000 00 00",
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
      },
      {
        name: "Medium",
        url: "https://medium.com/@mustafadurmus",
        icon: BookAIcon
      }
    ]
  },
  education: [
    {
      school: "Galatasaray University",
      degree: "Master Degree in Data Science. Courses: Probability and Statistics, Data Lakes and Data Engineering, Machine Learning and LLMs",
      start: "2023",
      end: "Present"
    },
    {
      school: "Karabuk University",
      degree: "Master Degree in CS. Courses: Machine Learning, NLP, Graph Theory, Data Mining",
      start: "2020",
      end: "2023"
    },
    {
      school: "Karabuk University",
      degree: "Bachelor's Degree in Computer Science. Thesis:A Neural Image Caption Generator",
      start: "2014",
      end: "2019"
    }

  ],
  work: [
    {
      company: "Nesine",
      link: "https://www.nesine.com/",
      badges: ["Remote"],
      title: "Senior Data Scientist",
      logo: ParabolLogo,
      start: "2024",
      end: "Present",
      description:
        "I build, validate, and maintain AI models using machine learning and deep learning techniques on large datasets. I collaborate with data engineers and backend engineers to ensure the successful implementation of projects from end to end."
    },
    {
      company: "Albert Health",
      link: "https://albert.health/",
      badges: ["Hybrid"],
      title: "NLP Engineer",
      logo: ParabolLogo,
      start: "2020",
      end: "2024",
      description:
        "I led the AI team at Albert Health, where we developed a conversational AI platform for healthcare. My responsibilities included overseeing the development of AI and NLP pipelines, including intent classification and entity extraction. I also managed the CI/CD pipeline for our AI models. Additionally, I worked on Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), prompt engineering, and optimizing data pipelines."
    },
    {
      company: "Hummingdrone",
      link: "https://hummingdrone.co/",
      badges: ["Hybrid"],
      title: "Robotics Developer",
      logo: NSNLogo,
      start: "2019",
      end: "2020",
      description: "I am in Robotics Development Team. The team deeply focus on making data-driven drones, using approaches like: Machine Learning, Computer Vision, Visual SLAM, Amazon Web Services and open source robotics technologies."

    }
  ],
  skills: [
    "ML",
    "NLP",
    "Data Science",
    "Conversational AI",
    "LLMs",
    "RAG",
    "CI/CD",
    "Docker",
    "Cloud Platforms"
  ],
  projects: [
    {
      title: "Diabetes GPT",
      techStack: [
        "LLMs",
        "RAG",
        "Python",
        "Streamlit",
        "Docker"
      ],
      description: "This project aims to help people with diabetes to find answers to their questions in conversational ai platform.",
      link: {
        label: "https://diyabet.albert.health/",
        href: "https://diyabet.albert.health/"
      }

    },
    {
      title: "Vector Databases and RAG",
      techStack: [
        "Mongo DB",
        "Langchain",
        "OpenAI"
      ],
      description: "This project aims to store the vectors of the documents in the database and use them in RAG model.",
      link: {
        label: "https://github.com/mdurmuss/nlp-data-augmentation",
        href: "https://medium.com/albert-health/k%C3%BC%C3%A7%C3%BCk-prensi-anlamak-mongodb-vekt%C3%B6r-veritabanlar%C4%B1-ve-rag-kullan%C4%B1m%C4%B1-8d0c93c4674a"
      }
    },
    {
      title: "Principal Component Analysis",
      techStack: [
        "Python",
        "Sklearn",
        "Jupyter Notebook"
      ],
      description: "Introduction to PCA and its implementation in Python.",
      link: {
        label: "https://github.com/mdurmuss/nlp-data-augmentation",
        href: "https://medium.com/@mustafadurmus/temel-bile%C5%9Fen-analizi-pca-teoriden-uygulamaya-edb8fe84921a"
      }
    },
    {
      title: "Kolmogorov-Arnold Networks",
      techStack: ["Medium"],
      description: "Explanation of Kolmogorov-Arnold networks.",
      link: {
        label: "https://medium.com/@mustafadurmus/kolmogorov-arnold-ağlarına-giriş-101-7410aa73595b",
        href: "https://medium.com/@mustafadurmus/kolmogorov-arnold-ağlarına-giriş-101-7410aa73595b"
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
