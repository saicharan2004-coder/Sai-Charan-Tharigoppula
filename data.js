const SITE = {
  name: "Sai Charan Tharigoppula",
  role: "AI Engineer",
  tagline: "Architecting Enterprise AI Agents, Production RAG Pipelines & Intelligent Automation",
  location: "Hyderabad, India",
  email: "tharigoppulasaicharan@gmail.com",
  linkedin: "https://www.linkedin.com/in/saicharantharigoppula/",
  github: "https://github.com/saicharan2004-coder",
  leetcode: "https://leetcode.com/u/saicharan_2004/",
  resume: "#",
  availability: "Available for full-time AI Engineering roles, enterprise AI consulting, and technical collaborations."
};

const SKILLS = {
  "AI & LLM": ["LLMs", "OpenAI", "Claude", "AI Agents", "Agentic Workflows", "RAG", "Vector Databases", "LangChain", "LangGraph"],
  "Engineering & ML": ["Python", "YOLOv8", "Roboflow", "PyTorch", "TensorFlow", "Computer Vision", "FastAPI", "REST APIs"],
  "Microsoft & Cloud": ["Azure", "Microsoft Foundry", "Cosmos DB", "Copilot Studio", "Power Platform", "Power Automate", "SharePoint", "Dataverse"],
  "Governance & Security": ["Power Platform Admin Center", "DLP Policies", "Security Groups", "Environment Controls", "Licensing Analysis"]
};

const PROJECTS = [
  {
    id: "hr-automation-agent",
    title: "HR Automation AI Agent",
    type: "AI HR Automation",
    description: "An AI-powered HR automation solution handling employee time-tracking, leave workflows, and notifications integrated with Jibble API, SharePoint, and Dataverse.",
    tags: ["Copilot Studio", "Power Automate", "Jibble API", "SharePoint", "Dataverse"],
    featured: true,
    problem: "HR departments spend considerable time manually processing employee time-tracking, leave requests, attendance verifications, and notification updates.",
    solution: "Built an AI-powered conversational agent in Copilot Studio connected via Power Automate flows to Jibble API for time tracking and leave management, using SharePoint and Dataverse for structured employee data and process auditing.",
    architecture: ["Employee Interface", "Microsoft Copilot Studio", "Power Automate Flows", "Jibble API Integration", "SharePoint & Dataverse Backend"],
    outcomes: [
      "Jibble API integration for clock-in and time-entry automation",
      "Automated leave and time-off request processing workflows",
      "Configured automated employee notifications and manager approvals",
      "Structured employee business processes in SharePoint and Dataverse",
      "Designed intuitive Copilot Studio conversational interface topics"
    ]
  },
  {
    id: "ai-sales-lead-management",
    title: "AI Sales & Lead Management Agent",
    type: "AI Sales Automation",
    description: "AI-driven sales automation system managing high-volume leads, AI qualification, email outreach, response detection, and contract monitoring.",
    tags: ["Copilot Studio", "Power Automate", "Dataverse", "SharePoint", "Python"],
    featured: true,
    problem: "Sales teams struggle with manual lead qualification, slow response times, fragmented customer data across systems, and delayed contract monitoring.",
    solution: "Designed an AI-driven sales automation platform leveraging Dataverse for managing thousands of leads, SharePoint as a knowledge source, Copilot Studio for agent interactions, and 9 automated Power Automate flows for full lead lifecycle management.",
    architecture: ["Lead Source Ingestion", "Dataverse Repository", "AI Lead Qualification Engine", "Outreach & Response Detection", "Contract & Deal Automation"],
    outcomes: [
      "Automated lead ingestion, processing, and industry/lead matching",
      "Implemented AI-powered lead qualification and scoring",
      "Built automated email outreach campaigns with response detection",
      "Streamlined deal-won workflows and automated contract kickoff",
      "Engineered 5 custom Copilot topics supported by 9 automated Power Automate flows"
    ]
  },
  {
    id: "rag-based-ai-chatbot",
    title: "RAG-Based AI Chatbot",
    type: "GenAI / LLM Engineering",
    description: "Retrieval-Augmented Generation chatbot delivering accurate, grounded responses from custom knowledge bases while eliminating LLM hallucinations.",
    tags: ["Python", "LangChain", "LLMs", "Vector Database", "RAG"],
    featured: true,
    problem: "Standard large language models often hallucinate or lack access to confidential, domain-specific private document repositories.",
    solution: "Built a production-grade RAG chatbot using Python, LangChain, and Vector Databases to ingest custom documents, perform semantic search chunking, and generate context-grounded responses.",
    architecture: ["Document Ingestion & Chunking", "Embedding Generation", "Vector Search Indexing", "Context Retrieval Engine", "LLM Response Generation"],
    outcomes: [
      "Automated document ingestion, text processing, and semantic chunking",
      "Generated vector embeddings for efficient semantic similarity search",
      "Implemented accurate context retrieval pipelines for custom knowledge bases",
      "Drastically reduced hallucination rates through grounded response generation",
      "Demonstrated core AI/LLM engineering beyond low-code tools"
    ]
  },
  {
    id: "enterprise-copilot-governance",
    title: "Enterprise Copilot Governance",
    type: "AI Security & Governance",
    description: "Enterprise governance controls and security architecture for organization-wide Copilot adoption, restricting environments, DLP connectors, and maker permissions.",
    tags: ["Power Platform", "Copilot Studio", "Power Platform Admin Center", "DLP", "Security Groups"],
    featured: false,
    problem: "Enterprise AI adoption requires strict guardrails around maker permissions, connector access, data security policies, and environment provisioning to mitigate risk.",
    solution: "Implemented enterprise governance controls across Microsoft Power Platform and Copilot Studio, restricting agent creation to authorized maker security groups, configuring DLP policies, and disabling unmanaged trial provisioning.",
    architecture: ["Power Platform Admin Center", "Copilot Maker Security Group", "Data Loss Prevention Policies", "Restricted Environments", "Governance Architecture"],
    outcomes: [
      "Established Copilot maker security group to restrict creation rights",
      "Configured environment governance and fine-grained DLP policy controls",
      "Enforced connector restrictions and restricted environment creation",
      "Disabled unauthorized self-service and trial provisioning",
      "Conducted Copilot access and licensing analysis for Power Platform governance architecture"
    ]
  },
  {
    id: "enterprise-ai-platform",
    title: "Enterprise AI Platform",
    type: "Enterprise Cloud AI",
    description: "Hands-on exposure and contribution to an enterprise AI architecture built on Azure services, Microsoft Foundry, and Cosmos DB.",
    tags: ["Azure", "Microsoft Foundry", "Cosmos DB", "Cloud AI", "Architecture"],
    featured: false,
    problem: "Enterprise AI systems require resilient cloud infrastructure, scalable database integration, robust repositories, and thorough technical documentation to support production deployment.",
    solution: "Gained hands-on contribution and technical exposure within an enterprise AI platform ecosystem, focusing on Azure cloud services, Microsoft Foundry integration, Cosmos DB data layers, and repository maintenance.",
    architecture: ["Client Applications", "Microsoft Foundry Layer", "Azure Cloud Services", "Cosmos DB Data Layer", "Enterprise Repositories"],
    outcomes: [
      "Worked with enterprise codebase repositories and cloud architecture patterns",
      "Analyzed Microsoft Foundry components and Azure service integrations",
      "Studied Cosmos DB integration for scalable enterprise document/data storage",
      "Contributed to technical documentation and project implementation specs",
      "Gained deep exposure to large-scale enterprise AI platform infrastructure"
    ]
  },
  {
    id: "computer-vision-object-detection",
    title: "Computer Vision Object Detection",
    type: "Computer Vision / ML",
    description: "End-to-end computer vision object detection pipeline built using YOLOv8, Roboflow, Python, PyTorch, and TensorFlow.",
    tags: ["YOLOv8", "Roboflow", "Python", "TensorFlow", "PyTorch"],
    featured: false,
    problem: "Visual recognition and target detection require specialized dataset preparation, annotation pipelines, and high-performance deep learning models.",
    solution: "Developed a computer vision object detection project utilizing Roboflow for dataset preparation and annotation, and YOLOv8 for model training and evaluation.",
    architecture: ["Dataset Ingestion", "Roboflow Image Annotation", "YOLOv8 Training Pipeline", "Inference Engine", "Model Evaluation"],
    outcomes: [
      "Prepared and annotated custom image datasets using Roboflow",
      "Trained YOLOv8 deep learning models for accurate target object detection",
      "Evaluated model performance using precision/recall metrics",
      "Developed an end-to-end computer vision pipeline from raw data to inference",
      "Demonstrated practical computer vision and traditional ML experience"
    ]
  },
  {
    id: "personal-ai-developer-portfolio",
    title: "Personal AI & Developer Portfolio",
    type: "Web Engineering",
    description: "Custom personal website designed and deployed through GitHub Pages to showcase AI/automation projects, skills, and engineering journey.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages", "AI tools"],
    featured: false,
    problem: "Highlighting complex enterprise AI agent projects, RAG architecture, and governance work requires a fast, responsive, custom portfolio platform.",
    solution: "Designed and built a modern responsive portfolio using native web technologies (HTML, CSS, JavaScript) and deployed it seamlessly via GitHub Pages with automated updates.",
    architecture: ["HTML5 Layout System", "CSS Design System", "Vanilla JS Engine", "GitHub Pages Deployment"],
    outcomes: [
      "Designed and deployed a responsive personal portfolio via GitHub Pages",
      "Engineered dynamic Javascript data rendering for case studies and skills",
      "Implemented SEO best practices, Open Graph tags, and structured JSON-LD",
      "Continuously updating to showcase AI engineering projects and skills"
    ]
  }
];

const EXPERIENCE = [
  {
    role: "Artificial Intelligence Engineer",
    company: "ISmile Technologies",
    period: "AI Engineering & Enterprise Automation",
    points: [
      "Developed AI-powered Copilot agents using Copilot Studio integrated with SharePoint and Dataverse.",
      "Designed and implemented Power Automate workflows supporting sales operations, approvals, notifications, and data synchronization.",
      "Built conversational topic flows, prompt logic, and structured data retrieval for business use cases.",
      "Collaborated with stakeholders to translate business requirements into scalable automation solutions."
    ]
  },
  {
    role: "AI / Data Engineer",
    company: "ISmile Technologies",
    period: "AI & Data Solutions",
    points: [
      "Worked across AI and data-focused initiatives while developing practical enterprise automation experience.",
      "Architected data pipelines, integrations, and intelligent automation workflows for enterprise client requirements."
    ]
  },
  {
    role: "Research & Development Specialist",
    company: "One Oath Foundation",
    period: "AI & Machine Learning R&D",
    points: [
      "Supported AI-focused research initiatives through exploratory data analysis and prototype model development.",
      "Contributed to innovative research and collaborative problem-solving across AI/ML domains."
    ]
  }
];

const BLOGS = [
  {
    slug: "ai-agents-vs-automation",
    title: "AI Agents vs. Automation: Where Should Each Be Used?",
    date: "AI Engineering",
    category: "AI Engineering",
    excerpt: "A practical framework for deciding when a business problem needs an autonomous AI agent, deterministic automation, or a hybrid model.",
    body: "When designing enterprise solutions, one of the most fundamental architectural decisions is choosing between autonomous AI agents and deterministic workflow automation.\n\nAI agents excel at handling unstructured inputs, complex reasoning, dynamic decision routing, and conversational user interfaces. On the other hand, deterministic automations (like Power Automate flows or structured ETL pipelines) are essential for multi-step data transformations, transactional integrity, and rule-based system operations.\n\nThe most successful enterprise implementations combine both: utilizing Copilot agents for intent recognition and reasoning, backed by deterministic Power Automate or Python microservices for execution."
  },
  {
    slug: "rag-production-checklist",
    title: "A Practical RAG Production Checklist",
    date: "RAG Architecture",
    category: "RAG",
    excerpt: "The critical engineering questions to answer before moving a retrieval-augmented generation application from demo to enterprise production.",
    body: "Transitioning a Retrieval-Augmented Generation (RAG) prototype into a production-grade enterprise deployment requires moving far beyond basic vector search.\n\nKey architectural pillars include:\n1. Chunking Strategy: Choosing semantic vs fixed-size chunking based on document structure.\n2. Embedding Optimization: Selecting domain-appropriate embedding models.\n3. Hybrid Search: Combining sparse keyword retrieval (BM25) with dense vector search for high precision.\n4. Reranking & Context Trimming: Ensuring top-k results maximize relevance while staying within token budgets.\n5. Guardrails & Observability: Tracking hallucination metrics and enforcing strict enterprise data governance."
  },
  {
    slug: "copilot-governance",
    title: "Why Enterprise Copilot Needs Governance",
    date: "Enterprise AI",
    category: "Enterprise AI",
    excerpt: "Enterprise AI adoption is not only about building agents. Security controls, Data Loss Prevention (DLP), environment isolation, and maker policies matter.",
    body: "Rapid adoption of Microsoft Copilot Studio and Power Platform across enterprise environments brings incredible productivity gains, but also creates security and compliance challenges if unmanaged.\n\nEstablishing strong governance requires:\n- Restricting agent creation to authorized Maker Security Groups.\n- Configuring granular Data Loss Prevention (DLP) connector policies.\n- Enforcing environment routing and disabling unmanaged trial provisioning.\n- Auditing connector permissions and data boundaries before tenant-wide rollouts."
  }
];

