export const personal = {
  name: "Shanmukha Srinivas Challa",
  shortName: "Shanmukha",
  headline: "AI/ML Engineer focused on building intelligent agents, RAG systems, data-driven applications, and production-ready AI products.",
  subHeadline: "Recent MS Data Science graduate from NJIT building AI agents, RAG systems, and full-stack AI applications.",
  summary:
    "Full-Stack Software Engineer with 4 years of hands-on Python and full-stack development experience. I build production-grade AI systems—RAG pipelines, intelligent agents, and data-driven APIs—that ship and scale. From reducing API latency while processing 1M+ records to achieving 90%+ citation coverage on medical Q&A systems, I focus on delivery that matters.",
  email: "shanmukhasrinivaschalla@gmail.com",
  phone: "+1 (201) 428-5453",
  github: "https://github.com/shanmukh1315",
  linkedin: "https://www.linkedin.com/in/shanmukha-srinivas-challa-36483224a/",
  location: "Newark, NJ",
  resumeUrl: "/Shanmukha_Challa_Resume.pdf",
  status: "Open to AI/ML, Data Science & Full-Stack roles",
};

export const skills = {
  "Languages": ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C/C++", "C#", "HTML/CSS"],
  "AI / ML": ["RAG", "LLM Agents", "NLP", "Transformers (BERT, GPT)", "PyTorch", "TensorFlow", "Scikit-learn", "LightGBM", "Embeddings", "Vector Search"],
  "Backend / APIs": ["FastAPI", "Flask", "Spring Boot", "Node.js / Express", "Django", "ASP.NET Core", "REST APIs", "JWT Auth"],
  "Frontend": ["React", "Next.js", "Angular", "Tailwind CSS", "TypeScript"],
  "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "MS SQL", "ChromaDB"],
  "Cloud / DevOps": ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Azure DevOps", "Terraform", "CI/CD"],
  "Data & Tools": ["ETL", "Kafka", "Power BI", "Tableau", "Pandas", "Git", "Postman", "Splunk"],
};

export const projects = [
  {
    id: "medical-rag",
    name: "Medical Triage + RAG System",
    tagline: "Evidence-based medical Q&A assistant with citation-grounded answers",
    problem: "Clinicians and patients struggle to get reliable, cited answers from massive unstructured medical literature.",
    solution: "Built a RAG pipeline over 47,441+ MedQuAD Q&A pairs using semantic search and re-ranking, combined with a symptom triage module that scores urgency and detects emergencies.",
    stack: ["Python", "RAG", "ChromaDB", "SentenceTransformers", "Llama-3-8B", "FastAPI", "Streamlit"],
    features: [
      "90%+ citation coverage on evaluation set",
      "15% citation accuracy improvement via pipeline optimization",
      "Emergency detection with urgency scoring",
      "Semantic retrieval over 47K+ medical Q&A pairs",
    ],
    impact: "Achieved 90%+ citation coverage across 50 evaluation questions; 15% accuracy gain from re-ranking optimization.",
    github: "https://github.com/shanmukh1315/medical-triage-rag",
    demo: null,
    color: "cyan",
  },
  {
    id: "fastapi-calculator",
    name: "Full-Stack FastAPI Calculator",
    tagline: "JWT-authenticated production-grade CRUD app with 96% test coverage",
    problem: "Demo apps rarely reflect real production concerns: auth, testing, export, and CI/CD in a single coherent system.",
    solution: "Built a full-stack web app with JWT authentication, user-scoped workflows, and multi-format export (CSV/JSON/PDF), backed by 194 automated tests.",
    stack: ["FastAPI", "PostgreSQL", "React", "JWT", "Alembic", "Pytest", "Playwright", "Docker"],
    features: [
      "~96% test coverage across 194 unit, integration, and E2E tests",
      "JWT-authenticated user-scoped CRUD workflows",
      "CSV / JSON / PDF export, cutting manual reporting by 50%",
      "Alembic migrations + Docker-compose setup",
    ],
    impact: "50% reduction in manual reporting time. 96% test coverage ensures high release confidence.",
    github: "https://github.com/shanmukh1315/fastapi_calculator",
    demo: null,
    color: "purple",
  },
  {
    id: "banking-app",
    name: "Full-Stack Banking Web App",
    tagline: "Role-based banking platform with audit-trail transaction management",
    problem: "Banking workflows require strict auditability, role separation, and traceable transaction histories that are hard to implement correctly.",
    solution: "Built onboarding, account, and transaction workflows with role-based admin access, input validation, and automated audit logging in Flask + SQL.",
    stack: ["Flask", "Python", "SQL", "HTML/CSS", "JavaScript"],
    features: [
      "Role-based admin and customer access control",
      "Full transaction audit trail and history",
      "Input validation + workflow automation",
      "35% improvement in transaction processing time",
    ],
    impact: "50% reduction in manual effort; 35% faster end-to-end transaction processing.",
    github: "https://github.com/shanmukh1315/Full-Stack-Bank-Project",
    demo: null,
    color: "blue",
  },
  {
    id: "autonomiq-daas",
    name: "AutonomIQ — Trustless Data-as-a-Service",
    tagline: "Blockchain-based pay-for-data delivery with smart contract escrow and USDC",
    problem: "Data marketplaces lack trust—buyers can't verify data integrity and sellers risk non-payment.",
    solution: "Built a three-party DaaS system (client, provider, arbiter) using Solidity smart contracts for escrow, IPFS for storage, and a Python provider agent with Web3 integration.",
    stack: ["Solidity", "Hardhat", "Python", "React", "Web3.js", "IPFS", "USDC", "Arc Testnet"],
    features: [
      "Smart contract escrow with USDC payments",
      "Provider agent posts content hash on-chain for verifiability",
      "Three-party dispute resolution system",
      "Supports analytics bundles, IoT feeds, and research datasets",
    ],
    impact: "Hackathon project enabling fully trustless data commerce with on-chain delivery verification.",
    github: "https://github.com/shanmukh1315/autonomiq-daas",
    demo: null,
    color: "cyan",
  },
  {
    id: "twitter-sentiment",
    name: "Twitter Sentiment Analysis",
    tagline: "NLP pipeline classifying tweet sentiment at scale",
    problem: "Understanding public sentiment from social media requires accurate text classification across noisy, short-form content.",
    solution: "Developed an end-to-end NLP pipeline with preprocessing, feature engineering, and classification models to analyze Twitter sentiment.",
    stack: ["Python", "NLP", "Scikit-learn", "Pandas", "NLTK", "Jupyter"],
    features: [
      "Full text preprocessing pipeline",
      "Multiple classifier benchmarks",
      "Visualized sentiment distributions and trends",
    ],
    impact: "Demonstrates end-to-end NLP pipeline from raw tweets to actionable sentiment metrics.",
    github: "https://github.com/shanmukh1315/Twitter-Sentiment-Analysis",
    demo: null,
    color: "purple",
  },
];

export const experience = [
  {
    company: "Virtusa",
    location: "Hyderabad, India",
    role: "Software Engineer Intern",
    period: "Jan 2024 – Jun 2024",
    bullets: [
      "Designed and optimized C# / ASP.NET Core REST APIs to process 1M+ records in ~3 seconds, enabling near-real-time batch analytics.",
      "Refactored React UI components into reusable patterns and shared utilities, reducing front-end development effort by 30%.",
      "Implemented CI/CD pipelines and deployment gates in Azure DevOps and Jenkins, cutting deployment time by 40%.",
    ],
    tech: ["C#", "ASP.NET Core", "React", "Azure DevOps", "Jenkins", "REST APIs"],
  },
  {
    company: "Sanjana Logistics LLP",
    location: "Visakhapatnam, India",
    role: "Software Engineer Intern",
    period: "May 2023 – Jul 2023",
    bullets: [
      "Optimized Oracle SQL queries and indexing strategies, improving query execution speed by 45% for reporting workloads.",
      "Built KPI dashboards using React and Spring Boot, improving decision turnaround by 15% through enhanced drill-down visibility.",
      "Migrated infrastructure to AWS EC2 and S3, improving scalability while reducing infrastructure costs by 20%.",
    ],
    tech: ["Oracle SQL", "React", "Spring Boot", "AWS EC2", "AWS S3"],
  },
];

export const education = [
  {
    degree: "M.S. Data Science",
    school: "New Jersey Institute of Technology",
    location: "Newark, NJ",
    gpa: "3.8 / 4.0",
    period: "Aug 2024 – May 2026",
    highlights: ["GPA: 3.8", "AI/ML focus", "Data Engineering", "Research Publication"],
  },
  {
    degree: "B.Tech. Computer Science & Engineering",
    school: "Gayatri Vidya Parishad College (Autonomous)",
    location: "India",
    gpa: "3.3 / 4.0",
    period: "Jul 2020 – Jul 2024",
    highlights: ["GPA: 3.3", "IEEE CS Organizing Lead", "Hackathon Finalist"],
  },
];

export const achievements = [
  { icon: "🏆", title: "3rd Place – Hack-The-Mountain", detail: "Fraud Detection system using AWS + LightGBM" },
  { icon: "🔐", title: "Finalist – ENCRYPT 2022", detail: "Blockchain identity verification tool, 35% faster verification" },
  { icon: "📄", title: "Research Publication", detail: "Impact of IoT on Education Sector Post-COVID (Business & Management Journal, India)" },
  { icon: "☁️", title: "AWS Certifications", detail: "ML Foundations · Cloud Foundations · Data Analytics" },
  { icon: "🌍", title: "Community Leadership", detail: "IEEE CS Organizing Lead · Youth for Sustainability · Rotaract Member" },
];

export const terminalLines = [
  "$ whoami",
  "> shanmukha — AI/ML & Full-Stack Engineer",
  "$ cat skills.txt",
  "> Python · FastAPI · React · RAG · LLMs · Docker · AWS",
  "$ build --ai-products",
  "> Medical Triage RAG  ✓",
  "> FastAPI Calculator  ✓",
  "> Blockchain DaaS     ✓",
  "$ status",
  "> Available for AI/ML · Data Science · Software Engineering roles",
];
