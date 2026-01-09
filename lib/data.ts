export interface PersonalInfo {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  approach: string;
  techStack: string[];
  impact: string;
  githubUrl?: string;
  status?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  summary: string;
  education: Education;
  experience: Experience;
  projects: Project[];
  skills: SkillCategory[];
  achievements: string[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Krithik Eswaran M",
    location: "Vadakkipalayam, Pollachi, Coimbatore, Tamil Nadu, India",
    email: "krithikeswaranmk@gmail.com",
    phone: "+91 96593 02484",
    linkedin: "https://www.linkedin.com/in/krithik-eswaran-m-20a7262ab",
    github: "https://github.com/Krithikeswaranmk",
  },
  summary:
    "Applied Data Scientist and M.Sc. Data Science student with strong foundations in machine learning, deep learning, statistics, and NLP/LLMs. Hands-on experience building end-to-end ML and LLM pipelines — from EDA and feature engineering to embedding-based retrieval and explainable models. Solo contributor on research-driven projects using LangChain, LLaMA, BERT, vector databases, and classical ML, with a focus on real-world applicability, interpretability, and deployment readiness.",
  education: {
    degree: "Integrated M.Sc. Data Science (Mathematics & Computer Science)",
    institution: "Amrita Vishwa Vidyapeetham",
    period: "Sep 2022 – Present",
    gpa: "9.11 / 10",
  },
  experience: {
    title: "LLM Research Intern (Solo Contributor)",
    company: "HELYXON Technologies",
    location: "Chennai",
    period: "Apr 2025 – Jun 2025",
    description: [
      "Researched and developed an LLM-based Resume Analyzer using LangChain and LangGraph",
      "Built Python ML pipelines for resume parsing, embedding generation, vector search, and automated candidate-job matching",
      "Implemented semantic retrieval using embeddings and Chroma DB",
      "Designed modular, explainable pipelines suitable for extension to enterprise-scale recruitment workflows",
    ],
  },
  projects: [
    {
      id: "contract-intelligence",
      title: "Contract Intelligence Web App",
      problem:
        "Legal contract analysis requires extensive manual review to identify risks, extract clauses, and understand negotiation points. This process is time-consuming and error-prone.",
      approach:
        "Developed an NLP/LLM system for automated contract understanding using LLaMA-family models. The system performs clause extraction, risk scoring, and summarization. Built with synthetic contract dataset generation to enable research-stage AI capabilities for contract analysis and negotiation support.",
      techStack: [
        "Python",
        "Hugging Face Transformers",
        "LLaMA",
        "NLP pipelines",
      ],
      impact:
        "Research-stage AI system demonstrating automated contract understanding capabilities, with potential for enterprise deployment in legal tech workflows.",
      status: "Prototype / Research Focus",
    },
    {
      id: "dropout-predictor",
      title: "Student Dropout Risk Predictor",
      problem:
        "Educational institutions need early identification of at-risk students to provide timely interventions and support, reducing dropout rates.",
      approach:
        "Built a complete ML pipeline from EDA through preprocessing, feature engineering, model training, and tuning. Compared multiple models with Random Forest achieving the best accuracy. Integrated SHAP for model explainability to provide personalized intervention insights. Designed a feedback-driven system to identify and support at-risk students.",
      techStack: [
        "Python",
        "scikit-learn",
        "Random Forest",
        "SHAP",
        "Pandas",
        "Matplotlib",
      ],
      impact:
        "Deployment-ready ML system with explainable predictions enabling data-driven student support interventions.",
    },
    {
      id: "resume-analyzer",
      title: "LLM-based Resume Analyzer",
      problem:
        "Recruitment processes require efficient matching between candidate resumes and job requirements, which is challenging at scale with traditional keyword-based approaches.",
      approach:
        "Implemented resume parsing and candidate matching using LangChain. Built dense vector embeddings with Chroma DB for semantic search. Created an end-to-end flow: parsing → embedding → retrieval → ranking for automated candidate-job matching.",
      techStack: [
        "Python",
        "LangChain",
        "Vector Embeddings",
        "Chroma DB",
      ],
      impact:
        "Semantic retrieval system enabling accurate candidate-job matching through embedding-based search, suitable for enterprise recruitment workflows.",
    },
    {
      id: "sentiment-analysis",
      title: "Domain-Adapter Aspect-Based Sentiment Analysis",
      problem:
        "Aspect-based sentiment analysis requires domain-specific understanding, but labeled data is often limited. Traditional fine-tuning doesn't efficiently handle domain shifts.",
      approach:
        "Built an aspect-based sentiment analysis system using BERT with domain adapters. Plugged domain-specific adapters to handle domain shift with limited labeled data. Focused on improving aspect-level sentiment accuracy through adapter-based fine-tuning, enabling efficient domain adaptation without full model retraining.",
      techStack: [
        "BERT",
        "Adapter modules",
        "PyTorch",
        "Hugging Face Transformers",
      ],
      impact:
        "Research-driven approach demonstrating efficient domain adaptation for NLP tasks, reducing data requirements while maintaining accuracy.",
    },
  ],
  skills: [
    {
      category: "Programming",
      skills: ["Python", "R", "Basic Go"],
    },
    {
      category: "Machine Learning",
      skills: [
        "Regression",
        "Classification",
        "Random Forest",
        "Feature Engineering",
        "Model Evaluation",
      ],
    },
    {
      category: "Deep Learning & NLP",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Transformers",
        "BERT",
        "LLaMA",
        "Domain Adapters",
        "LLMs",
      ],
    },
    {
      category: "LLM Tooling",
      skills: [
        "LangChain",
        "Embeddings",
        "Semantic Search",
        "Vector Databases (Chroma)",
      ],
    },
    {
      category: "Data & Tools",
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Tableau",
      ],
    },
    {
      category: "Explainability & Deployment",
      skills: [
        "SHAP",
        "End-to-end ML pipelines",
        "Deployment-ready architectures",
      ],
    },
  ],
  achievements: [
    "Algocode Data Structures Competition — demonstrated strong algorithmic and problem-solving ability",
  ],
};

