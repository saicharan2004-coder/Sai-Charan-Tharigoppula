const SITE = {
  name: "Sai Charan Tharigoppula",
  role: "AI Engineer",
  tagline: "Building Enterprise AI Agents, Grounded LLM Applications & Intelligent Automation",
  location: "Hyderabad, India",
  email: "tharigoppulasaicharan@gmail.com",
  linkedin: "https://www.linkedin.com/in/saicharantharigoppula/",
  github: "https://github.com/saicharan2004-coder",
  leetcode: "https://leetcode.com/u/saicharan_2004/",
  resume: "#",
  availability: "Open to AI Engineering opportunities, technical collaborations, and challenging enterprise projects."
};

const SKILLS = {
  "AI & LLM": ["LLMs", "OpenAI", "Claude", "AI Agents", "Agentic Workflows", "RAG", "Vector Databases", "LangGraph"],
  "Engineering": ["Python", "FastAPI", "REST APIs", "System Integrations", "CI/CD", "Production Deployments", "Distributed Systems"],
  "Microsoft & Cloud": ["Azure AI", "Microsoft Copilot", "Copilot Studio", "Power Platform", "Power Automate", "SharePoint", "Dataverse"]
};

const PROJECTS = [
  {
    id: "enterprise-copilot",
    title: "Enterprise Copilot & Automation",
    type: "Enterprise AI",
    description: "AI-powered Copilot agents and workflow automation for enterprise business operations.",
    tags: ["Copilot Studio", "Power Automate", "SharePoint", "Dataverse"],
    featured: true,
    problem: "Business teams needed conversational access to enterprise information and repeatable workflows for sales operations, approvals, notifications, and data synchronization.",
    solution: "Designed Copilot Studio topic flows and prompt logic, connected enterprise data through SharePoint and Dataverse, and implemented Power Automate workflows for business processes.",
    architecture: ["Business User", "Copilot Studio", "SharePoint / Dataverse", "Power Automate", "Enterprise Systems"],
    outcomes: [
      "Built conversational topic flows for business use cases",
      "Integrated structured enterprise data retrieval",
      "Automated approvals, notifications and synchronization workflows",
      "Worked with stakeholders to translate requirements into scalable automation"
    ]
  },
  {
    id: "hr-automation",
    title: "HR Automation Agent",
    type: "AI Automation",
    description: "An AI-assisted HR workflow concept connecting conversational interaction with business automation.",
    tags: ["AI Agents", "Power Automate", "Dataverse", "API Integration"],
    featured: true,
    problem: "HR teams often spend time handling repetitive employee requests and operational workflows manually.",
    solution: "Created an agent-led automation pattern where conversational requests can trigger structured workflows, retrieve business data, and route actions through enterprise automation.",
    architecture: ["Employee", "AI Agent", "Power Automate", "Business API", "Dataverse / SharePoint"],
    outcomes: [
      "Demonstrates agent + workflow orchestration",
      "Designed around enterprise data access",
      "Separates conversational reasoning from deterministic automation"
    ]
  },
  {
    id: "rag-assistant",
    title: "RAG Knowledge Assistant",
    type: "LLM Application",
    description: "A retrieval-augmented generation application focused on grounded answers from a private knowledge base.",
    tags: ["Python", "RAG", "LangChain", "Vector DB"],
    featured: true,
    problem: "General-purpose LLMs can produce answers that are not grounded in an organization's own documents.",
    solution: "Designed a RAG pipeline that processes source documents, creates embeddings, retrieves relevant context, and passes grounded context to an LLM.",
    architecture: ["User", "API", "Document Processing", "Embeddings", "Vector Store", "Retriever", "LLM"],
    outcomes: [
      "Grounds responses in retrieved knowledge",
      "Demonstrates the full AI application lifecycle",
      "Provides a foundation for enterprise knowledge assistants"
    ]
  },
  {
    id: "copilot-governance",
    title: "Copilot Governance & Tenant Controls",
    type: "AI Governance",
    description: "Enterprise governance approach for controlling AI maker access, environments, connectors, and data policies.",
    tags: ["Power Platform", "DLP", "Security", "Governance"],
    featured: false,
    problem: "Enterprise AI adoption requires guardrails around who can create agents, which connectors can be used, and how environments are provisioned.",
    solution: "Implemented governance controls across the Power Platform administration model, including security groups, DLP restrictions and environment controls.",
    architecture: ["Tenant", "Security Groups", "Power Platform Admin", "DLP Policies", "Environments"],
    outcomes: [
      "Restricted agent creation to controlled makers",
      "Applied connector and data-loss-prevention controls",
      "Reduced uncontrolled environment and maker provisioning"
    ]
  },
  {
    id: "computer-vision",
    title: "Computer Vision Detection",
    type: "Machine Learning",
    description: "Computer vision experimentation using modern object-detection tooling.",
    tags: ["YOLOv8", "Roboflow", "Computer Vision"],
    featured: false,
    problem: "Visual inspection and detection problems require models that can identify target objects from images.",
    solution: "Used a computer-vision workflow covering dataset preparation, model training and object detection experimentation.",
    architecture: ["Images", "Dataset", "Training", "YOLOv8", "Detection"],
    outcomes: [
      "Hands-on exposure to object detection",
      "Experience with dataset and model workflow concepts"
    ]
  }
];

const EXPERIENCE = [
  {
    role: "Artificial Intelligence Engineer",
    company: "ISmile Technologies",
    period: "July 2025 – July 2026",
    points: [
      "Developed AI-powered Copilot agents using Copilot Studio integrated with SharePoint and Dataverse.",
      "Designed and implemented Power Automate workflows supporting sales operations, approvals, notifications, and data synchronization.",
      "Built conversational topic flows, prompt logic, and structured data retrieval for business use cases.",
      "Collaborated with stakeholders to translate business requirements into scalable automation solutions."
    ]
  },
  {
    role: "AI/Data Engineer",
    company: "ISmile Technologies",
    period: "July 2025 – February 2026",
    points: [
      "Worked across AI and data-focused initiatives while developing practical enterprise automation experience."
    ]
  },
  {
    role: "Research & Development Specialist",
    company: "One Oath",
    period: "May 2023 – August 2023",
    points: [
      "Contributed to innovative research and collaborative problem-solving.",
      "Gained exposure to emerging technologies and real-world applications."
    ]
  },
  {
    role: "Research & Development Intern",
    company: "One Oath Foundation",
    period: "May 2023 – August 2023",
    points: [
      "Supported AI-focused research initiatives through exploratory data analysis and prototype model development."
    ]
  }
];

const BLOGS = [
  {
    slug: "ai-agents-vs-automation",
    title: "AI Agents vs. Automation: Where Should Each Be Used?",
    date: "Coming soon",
    category: "AI Engineering",
    excerpt: "A practical framework for deciding when a business problem needs an AI agent, deterministic automation, or both.",
    body: "This weekly series will cover practical AI engineering decisions, architecture patterns, lessons learned, and enterprise automation."
  },
  {
    slug: "rag-production-checklist",
    title: "A Practical RAG Production Checklist",
    date: "Coming soon",
    category: "RAG",
    excerpt: "The questions to answer before moving a retrieval-augmented application from demo to production.",
    body: "Topics will include document ingestion, retrieval quality, evaluation, observability, security, and cost."
  },
  {
    slug: "copilot-governance",
    title: "Why Enterprise Copilot Needs Governance",
    date: "Coming soon",
    category: "Enterprise AI",
    excerpt: "AI adoption is not only about building agents. Access, data, connectors, environments, and policies matter.",
    body: "A practical look at the governance layer around enterprise AI and Power Platform adoption."
  }
];
