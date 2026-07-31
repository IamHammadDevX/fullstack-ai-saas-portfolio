export const personalInfo = {
  name: "Hammad",
  username: "HammadDevx",
  title: "GenAI Engineer | Agentic Systems Architect | Full-Stack SaaS Developer",
  tagline: "I build autonomous AI systems and scalable SaaS products that solve real problems.",
  description: "4+ years shipping AI-powered SaaS, autonomous agents, LLM integrations, and production backend systems. GenAI specialist building with Claude, GPT-4, and emerging agentic frameworks. Remote Full-Stack Engineer at Vughy Inc. CS Student at UET Lahore.",
  education: "CS Student - UET Lahore (Batch 2023, 7th Semester)",
  experience: "4+ years",
  location: "Pakistan (Remote)",
  availability: "Available for Freelance & Contract Work"
};

export const about = {
  story: `I'm Hammad—a GenAI engineer and full-stack architect building autonomous systems and production AI SaaS.

Working remotely at Vughy Inc while studying CS at UET Lahore. Over 4 years, I've shipped AI-driven SaaS products, LLM-powered automation, multi-agent systems, real-time dashboards, and backend infrastructure at scale.

My stack: GenAI (Claude, GPT-4, OpenRouter), agentic AI frameworks, LangChain, RAG systems, vector databases, Node.js/Python backends, Next.js frontends, PostgreSQL, Redis, Docker, Kubernetes, and AWS.

I move fast. I ship quality. I care about architecture, performance, and business impact—not buzzwords.`,
  highlights: ["GenAI & Agentic AI specialist—Claude, GPT-4, multi-agent orchestration, autonomous workflows", "55+ delivered projects across AI SaaS, smart contract security, real-time systems, trading, and internal tooling", "Deep expertise in RAG pipelines, vector search, LLM fine-tuning, and production AI architecture", "5-star track record across Upwork, Freelancer, Guru, and Fiverr", "Full-stack capability across backend architecture, AWS/Docker/Kubernetes, and polished UX", "Currently studying CS at UET Lahore while shipping production AI systems remotely"]
};

export const services = [
  { id: 1, title: "GenAI & LLM SaaS", icon: "Sparkles", description: "End-to-end AI product development with RAG, LLM APIs, vector search, fine-tuning, and production-grade architecture.", highlights: ["RAG Pipelines", "Vector Databases", "LLM Integration", "Fine-Tuning", "Prompt Engineering"] },
  { id: 2, title: "Agentic AI & Automation", icon: "Zap", description: "Multi-agent systems and autonomous workflows that reason, plan, and execute with minimal human intervention.", highlights: ["Multi-Agent Orchestration", "Autonomous Workflows", "Agent Memory & State", "Tool Integration", "LLM Automation"] },
  { id: 3, title: "Full-Stack SaaS", icon: "Rocket", description: "MVP to scale with modern architecture, clean code, and business-focused delivery across Next.js, Node.js, and Python.", highlights: ["MVP Development", "API Design", "Database Architecture", "Production Deployment"] },
  { id: 4, title: "Real-Time Systems", icon: "Activity", description: "WebSocket apps, live dashboards, streaming data, and real-time AI for trading, analytics, and collaboration.", highlights: ["WebSocket Architecture", "Real-Time Dashboards", "Stream Processing", "Live Analytics", "Latency Optimization"] },
  { id: 5, title: "Web3 & Security", icon: "ShieldCheck", description: "AI-powered smart contract auditing, vulnerability detection, DeFi tooling, and production Web3 systems.", highlights: ["AI Contract Auditing", "Solidity Analysis", "Vulnerability Detection", "Audit Reports", "DeFi SaaS"] },
  { id: 6, title: "Deep Learning & ML", icon: "Brain", description: "Machine learning pipelines, computer vision, NLP models, and data-heavy AI systems from prototype to production.", highlights: ["NLP Pipelines", "Computer Vision", "Model Training", "Data Processing", "ML Infrastructure"] },
  { id: 7, title: "Bug Fixing & Optimization", icon: "Wrench", description: "Debug production issues, reduce technical debt, and optimize frontend, backend, database, and infrastructure performance.", highlights: ["Performance Tuning", "Code Review", "Technical Debt", "System Monitoring"] }
];

export const techStack = {
  genaiAgentic: [{ name: "Claude API", icon: "Brain" }, { name: "GPT-4 / OpenAI", icon: "MessageSquare" }, { name: "Agentic Frameworks", icon: "Network" }, { name: "LangChain", icon: "GitBranch" }, { name: "LangGraph", icon: "GitGraph" }],
  aiMl: [{ name: "LLM Fine-Tuning", icon: "Zap" }, { name: "RAG Systems", icon: "Database" }, { name: "Vector Search", icon: "Search" }, { name: "Deep Learning", icon: "TrendingUp" }, { name: "OpenRouter", icon: "Workflow" }],
  frontend: [{ name: "Next.js 14", icon: "Layout" }, { name: "React", icon: "Atom" }, { name: "TypeScript", icon: "FileCode" }, { name: "Tailwind CSS", icon: "Paintbrush" }],
  backend: [{ name: "Node.js", icon: "Server" }, { name: "Python", icon: "Terminal" }, { name: "FastAPI", icon: "Zap" }, { name: "PHP / CodeIgniter", icon: "Braces" }],
  databases: [{ name: "PostgreSQL", icon: "Database" }, { name: "MongoDB", icon: "HardDrive" }, { name: "Redis", icon: "Layers3" }, { name: "Pinecone", icon: "Pin" }],
  devopsCloud: [{ name: "Docker", icon: "Container" }, { name: "Kubernetes", icon: "Network" }, { name: "AWS", icon: "Cloud" }, { name: "CI/CD", icon: "Workflow" }],
  blockchain: [{ name: "Solidity", icon: "ShieldCheck" }, { name: "Web3.js", icon: "Blocks" }, { name: "Hardhat", icon: "Hammer" }],
  trading: [{ name: "MQL5", icon: "LineChart" }, { name: "MetaTrader 5", icon: "Monitor" }]
};

export const projects = [
  {
    id: 1,
    title: "VulnGuard AI",
    tagline: "AI SaaS \u00B7 Web3 Security \u00B7 Flagship Project",
    category: "Web3 Security",
    problem:
      "Smart contract audits are expensive, slow, and inaccessible.",
    solution:
      "AI-powered Solidity vulnerability scanner. Upload a contract and get instant Claude-powered audit reports.",
    tech: ["Next.js 14", "TypeScript", "Claude API", "Tailwind CSS", "PostgreSQL", "Stripe"],
    outcome: "Flagship product. Targets Web3 dev teams and security auditors.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "https://thevulnguardai.tech",
    highlightBadge: "LIVE PRODUCT"
  },
  {
    id: 2,
    title: "CopilotMeet - AI Interview Copilot",
    tagline: "AI SaaS \u00B7 Real-Time Voice \u00B7 LLM",
    category: "AI SaaS",
    problem:
      "Interview candidates need real-time AI help that listens and responds instantly.",
    solution:
      "Real-time interview copilot. Deepgram transcribes, vector RAG retrieves context, and OpenRouter generates answers in under 300ms.",
    tech: ["Next.js 14", "TypeScript", "Supabase", "Deepgram Nova-3", "OpenRouter", "In-Memory Vector RAG", "Tailwind CSS"],
    outcome: "Sub-300ms response latency. Full multi-tenant SaaS with auth and billing flows.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "HybridGridEA - MT5 Expert Advisor",
    tagline: "Algorithmic Trading \u00B7 MQL5 \u00B7 Client Delivery",
    category: "Trading",
    problem:
      "Traders needed adaptive strategies with reliable execution and session persistence.",
    solution:
      "Production MT5 Expert Advisor with hybrid grid logic, custom controls, async orders, and persistent settings.",
    tech: ["MQL5", "MetaTrader 5", "Custom Panel UI", "Async Order Engine"],
    outcome: "Delivered v13-v22.5 to client (Philipp). Live trading deployment.",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 4,
    title: "Automated Journal Production System",
    tagline: "Document Automation \u00B7 Publishing \u00B7 XML Pipeline",
    category: "Automation",
    problem:
      "Publishing teams needed faster, consistent document production.",
    solution:
      "Automated manuscript-to-PDF, HTML, and JATS XML pipeline with OJS integration.",
    tech: ["Python", "LaTeX", "JATS XML", "HTML", "OJS Integration", "PDF Generation"],
    outcome: "Eliminated manual typesetting. Full OJS-compatible output pipeline.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 5,
    title: "Vughy SaaS Financial Dashboard",
    tagline: "SaaS Metrics \u00B7 Internal Tool \u00B7 Full-Stack",
    category: "Internal Tools",
    problem:
      "Leadership needed real-time visibility into SaaS revenue and retention health.",
    solution:
      "Executive dashboard for MRR, ARR, churn, LTV, revenue geography, and cohort analytics.",
    tech: ["CodeIgniter", "MySQL", "Chart.js", "PHP", "Bootstrap"],
    outcome: "Used internally at Vughy Inc. Covers full SaaS financial metric suite.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 6,
    title: "AI Resume Screening System",
    category: "AI/ML",
    problem: "HR teams were spending hours manually screening hundreds of resumes for open positions.",
    solution:
      "Built an AI-powered system using NLP to automatically parse, analyze, and rank resumes based on job requirements. Integrated with ATS platforms for seamless workflow.",
    tech: ["Python", "TensorFlow", "NLP", "FastAPI", "React"],
    outcome: "Reduced screening time by 85%, improved candidate quality, and helped clients hire faster.",
    image:
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwxfHxBSSUyMHJlY3J1aXRtZW50fGVufDB8fHx8MTc2OTE4Mjg4N3ww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 7,
    title: "Real-Time Stock Signal System",
    category: "FinTech",
    problem: "Traders needed instant alerts for market opportunities based on technical indicators.",
    solution:
      "Developed a real-time data processing engine that analyzes market data streams, applies custom algorithms, and sends instant signals via WebSocket and mobile push notifications.",
    tech: ["Node.js", "WebSocket", "MongoDB", "React", "Chart.js"],
    outcome: "Processed 50K+ signals daily with <100ms latency. Active user base of 2,000+ traders.",
    image:
      "https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxzdG9jayUyMHRyYWRpbmclMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzY5MTgyODk1fDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 8,
    title: "Time Tracker SaaS Platform",
    category: "SaaS",
    problem: "Freelancers and agencies lacked a simple, reliable tool to track billable hours across projects.",
    solution:
      "Built a full-featured time tracking platform with team management, project analytics, invoice generation, and integrations with popular tools.",
    tech: ["MERN Stack", "JWT Auth", "Stripe API", "Chart.js"],
    outcome: "30+ paying customers in first 3 months. 95% user retention rate.",
    image:
      "https://images.unsplash.com/photo-1671109704725-ad6d94cd723c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwzfHx0aW1lJTIwdHJhY2tpbmd8ZW58MHx8fHwxNzY5MTgyOTAyfDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 9,
    title: "FinTrade Trading Platform",
    category: "FinTech",
    problem: "Retail investors needed an intuitive platform for portfolio management and trading execution.",
    solution:
      "Created a comprehensive trading platform with real-time quotes, portfolio analytics, risk assessment, and automated trading strategies.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSocket"],
    outcome: "Handles 10K+ daily transactions. 99.9% uptime with robust error handling.",
    image:
      "https://images.unsplash.com/photo-1766218334217-d2cc74c36fce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwzfHx0cmFkaW5nJTIwcGxhdGZvcm18ZW58MHx8fHwxNzY5MTgyOTI0fDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 10,
    title: "AnonyChat - Anonymous Messaging",
    category: "Social",
    problem: "Users wanted secure, anonymous communication without complex setup or tracking.",
    solution:
      "Built an end-to-end encrypted messaging platform with no user data storage, temporary chat rooms, and automatic message deletion.",
    tech: ["Node.js", "Socket.io", "React", "MongoDB", "Encryption"],
    outcome: "20K+ active users. Zero data breaches. Featured in privacy-focused communities.",
    image:
      "https://images.unsplash.com/photo-1762330469637-dfbb6e014a16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBtZXNzYWdpbmd8ZW58MHx8fHwxNzY5MTgyOTA5fDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 11,
    title: "Gas Distribution Management System",
    category: "Enterprise",
    problem: "Gas distribution company struggled with manual order management and route optimization.",
    solution:
      "Developed an enterprise system for order management, inventory tracking, delivery route optimization, and real-time driver coordination.",
    tech: ["Django", "PostgreSQL", "React", "Google Maps API"],
    outcome: "30% reduction in delivery time. 40% improvement in route efficiency. Scaled to 100+ drivers.",
    image:
      "https://images.unsplash.com/photo-1726776230751-183496c51f00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBtYW5hZ2VtZW50fGVufDB8fHx8MTc2OTE4MjkxNnww&ixlib=rb-4.1.0&q=85"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Nicholas O.",
    role: "CEO & Founder",
    company: "TechStart Inc, USA",
    text: "Hammad delivered our SaaS MVP in record time without cutting corners. His code quality and communication were exceptional. We've since hired him for three more projects.",
    rating: 5,
    platform: "Upwork"
  },
  {
    id: 2,
    name: "Saikat G.",
    role: "Founder & CTO",
    company: "DataFlow Analytics, New Zealand",
    text: "Working with Hammad was seamless. He understood our complex data pipeline requirements and built a solution that scaled beautifully. Highly technical and reliable.",
    rating: 5,
    platform: "Freelancer"
  },
  {
    id: 3,
    name: "Kumar Visas",
    role: "Product Manager",
    company: "FinVest, USA (NY)",
    text: "Hammad transformed our trading platform. His attention to performance and user experience made a huge difference. The system handles thousands of concurrent users flawlessly.",
    rating: 5,
    platform: "Upwork"
  },
  {
    id: 4,
    name: "Saurav G.",
    role: "CTO",
    company: "HR Solutions Co, USA",
    text: "The AI resume screening system Hammad built saved our clients hundreds of hours. His ML expertise and ability to deliver production-ready code is outstanding.",
    rating: 5,
    platform: "Fiverr"
  },
  {
    id: 5,
    name: "Jason F.",
    role: "VP Engineering",
    company: "CloudTech Systems, USA",
    text: "Hammad's expertise in full-stack development is remarkable. He delivered a complex real-time system with clean architecture and excellent documentation. Highly recommended!",
    rating: 5,
    platform: "Upwork"
  },
  {
    id: 6,
    name: "Harris Yaqoob",
    role: "Founder",
    company: "Digital Solutions, France",
    text: "Outstanding developer! Hammad built our entire SaaS platform from scratch. His ability to understand business requirements and translate them into elegant code is impressive.",
    rating: 5,
    platform: "Freelancer"
  }
];

export const githubStats = {
  totalRepos: 47,
  totalCommits: 1250,
  totalStars: 156,
  activeDays: 320,
  topLanguages: [
    { name: "JavaScript", percentage: 35, color: "#f1e05a" },
    { name: "Python", percentage: 30, color: "#3572A5" },
    { name: "TypeScript", percentage: 20, color: "#2b7489" },
    { name: "CSS", percentage: 10, color: "#563d7c" },
    { name: "Other", percentage: 5, color: "#8b8b8b" }
  ],
  contributionStreak: 45
};

export const process = [
  {
    id: 1,
    title: "Discovery & Planning",
    description:
      "I start by understanding your business goals, user needs, and technical requirements. Clear requirements mean better outcomes."
  },
  {
    id: 2,
    title: "Agile Development",
    description:
      "Iterative development with regular updates. You see progress weekly, provide feedback, and we adjust as needed."
  },
  {
    id: 3,
    title: "Testing & Quality Assurance",
    description:
      "Every feature is tested thoroughly. Unit tests, integration tests, and manual QA ensure reliability."
  },
  {
    id: 4,
    title: "Deployment & Monitoring",
    description:
      "Smooth production deployment with monitoring setup. I do not disappear after launch - I ensure everything runs perfectly."
  }
];

export const contact = {
  email: "iamhammaddev03@gmail.com",
  social: [
    { platform: "LinkedIn", url: "https://linkedin.com/in/iamhammaddevx", icon: "Linkedin" },
    { platform: "GitHub", url: "https://github.com/IamHammadDevX", icon: "Github" },
    { platform: "Twitter", url: "https://x.com/thisis_hammad", icon: "Twitter" },
    { platform: "CodeWars", url: "https://www.codewars.com/users/IamHammadDevX", icon: "Code" },
    { platform: "Instagram", url: "https://instagram.com/hi_itshammad", icon: "Instagram" }
  ]
};




