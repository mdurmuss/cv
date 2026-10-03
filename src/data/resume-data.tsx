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
    "I'm a Senior Data Scientist with 6+ years of experience building production NLP and LLM systems. At Nesine, I designed and built a multi-model customer support chatbot from scratch, combining LLMs, BERT classifiers, and rule-based flows. Before that, I led the AI team at Albert Health, where we built a conversational AI platform for healthcare and published research on how people use chatbots in digital health. I focus on systems that work reliably in production: fast, measurable, and cost-efficient.",
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
      end: "2025"
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
      badges: ["Hybrid"],
      title: "Senior Data Scientist",
      logo: ParabolLogo,
      start: "Sep 2024",
      end: "Present",
      description:
        "Designed and built Nesine's customer support chatbot end to end: a multi-model architecture combining a Qwen-based intent classifier, Rasa rule-based flows, a BERT classifier, and  LLM-powered help bot. Also responsible for building, validating, and maintaining ML models on large datasets with data and backend engineers."
    },
    {
      company: "Albert Health",
      link: "https://albert.health/",
      badges: ["Hybrid"],
      title: "Senior AI & Data Analytics Engineer",
      logo: ParabolLogo,
      start: "Jun 2024",
      end: "Sep 2024",
      description:
        "I led the AI team at Albert Health, where we developed a conversational AI platform for healthcare. Additionally, I worked on Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), prompt engineering, and optimizing data pipelines."
    },
    {
      company: "Albert Health",
      link: "https://albert.health/",
      badges: ["Hybrid"],
      title: "NLP Engineer",
      logo: ParabolLogo,
      start: "Dec 2020",
      end: "Jun 2024",
      description:
        "My responsibilities included overseeing the development of AI and NLP pipelines, including intent classification and entity extraction. I also managed the CI/CD pipeline for our AI models."
    },
    {
      company: "Hummingdrone",
      link: "https://hummingdrone.co/",
      badges: ["Hybrid"],
      title: "Robotics Developer",
      logo: NSNLogo,
      start: "Jun 2019",
      end: "Dec 2020",
      description: "I was a member of the Robotics Development Team, where we focused on creating data-driven drones using approaches such as Machine Learning, Computer Vision, Visual SLAM, Amazon Web Services, and open-source robotics technologies."

    }
  ],
  researchPapers: [
    {
      title: "The Use of Conversational Agents in Self-Management: A Retrospective Analysis",
      href: "https://www.medrxiv.org/content/10.1101/2024.09.01.24312881v1",
      year: 2024,
      description: "A retrospective look at conversational agent usage patterns in a mobile health setting."
    },
    {
      title: "A rule-based named entity recognition of SNOMED Clinical Terms in Turkish clinical reports",
      href: "https://www.researchgate.net/publication/393145558_A_rule-based_named_entity_recognition_of_SNOMED_Clinical_Terms_in_Turkish_clinical_reports",
      year: 2022,
      description: "A rule-based NER approach for mapping Turkish clinical text to SNOMED codes."
    },
    {
      title: "User Engagement with A Multimodal Conversational Agent for Self-Care and Chronic Disease Management: A Retrospective Analysis",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12148993/",
      year: 2025,
      description: "Retrospective analysis of ~24,500 users examining voice vs. screen interaction and engagement predictors."
    },
    {
      title: "Exploring vocal biomarkers as non-invasive fine-tuning assays of cardiovascular health: heart failure model",
      href: "https://www.researchgate.net/publication/385314628_Exploring_vocal_biomarkers_as_non-invasive_fine-tuning_assays_of_cardiovascular_health_heart_failure_model",
      year: 2024,
      description: "Investigation of vocal features as biomarkers for cardiovascular health."
    },
    {
      title: "Conversational agent engagement patterns among individuals with MS: A retrospective analysis of the mHealth application",
      href: "https://www.researchgate.net/publication/394845794_EPO--781_Conversational_agent_engagement_patterns_among_individuals_with_MS_A_retrospective_analysis_of_the_mHealth_application",
      year: 2024,
      description: "Analysis of conversational agent engagement patterns in multiple sclerosis users."
    },
    {
      title: "Descriptive analysis of conversational agent usage characteristics in an asthma app",
      href: "https://publications.ersnet.org/content/erj/62/suppl67/pa1581",
      year: 2023,
      description: "Usage characteristics of a conversational agent deployed in an asthma self-management app."
    }
  ],
  skills: [
    "ML",
    "NLP",
    "Data Science",
    "Conversational AI",
    "LLMs",
    "RAG",
    "Docker",
    "Cloud Platforms"
  ],
  projects: [
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
    }
  ]
} as const;
