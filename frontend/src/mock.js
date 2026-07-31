export const personalInfo = {
  name: "Hammad",
  username: "HammadDevx",
  title: "Full-Stack AI Developer | Backend Systems Architect | ML Engineer",
  tagline: "I build scalable SaaS and AI-powered systems that grow businesses.",
  description:
    "3.5+ years building AI SaaS products, backend systems, real-time dashboards, and automation tools for startups, clients, and remote product teams. Currently working remotely at Vughy Inc while studying Computer Science at UET Lahore.",
  education: "CS Student - UET Lahore (Batch 2023, 6th Semester)",
  experience: "3.5+ years",
  location: "Pakistan (Remote)",
  availability: "Available for Freelance Projects"
};

export const about = {
  story: `I'm Hammad, a GenAI engineer and full-stack architect building production AI SaaS, autonomous workflows, and reliable backend systems.

I work remotely with Vughy Inc while studying Computer Science at UET Lahore. I build with Claude, GPT-4, agentic frameworks, RAG, vector search, Python, Node.js, Next.js, PostgreSQL, Docker, Kubernetes, and AWS.

I move fast, ship quality, and focus on architecture, performance, and measurable business impact.`,
  highlights: ["GenAI and agentic systems specialist", "55+ delivered AI SaaS, automation, and full-stack projects", "RAG, vector search, LLM integration, and production AI architecture", "Trusted by startups and teams across leading freelance platforms"]
};

export const services = [
  {
    id: 1,
    title: "SaaS Development",
    icon: "Rocket",
    description:
      "Full product lifecycle from MVP to production. Scalable architecture, clean codebase, and business-focused solutions for modern SaaS products.",
    highlights: ["MVP Development", "API Design", "Database Architecture", "Production Deployment"]
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    icon: "Code2",
    description:
      "Modern web applications with React, Next.js, Node.js, and robust backend systems. Fast, responsive, and user-friendly from frontend to infrastructure.",
    highlights: ["React & Next.js Apps", "REST & Realtime APIs", "Admin Dashboards", "Responsive UX"]
  },
  {
    id: 3,
    title: "Deep Learning & ML",
    icon: "TrendingUp",
    description:
      "Machine learning pipelines, computer vision, NLP models, and production AI systems.",
    highlights: ["NLP Pipelines", "Computer Vision", "Model Training", "Data Processing"]
  },
  {
    id: 4,
    title: "AI Engineering & Analytics",
    icon: "BarChart3",
    description:
      "Data-heavy AI systems, analytics workflows, financial dashboards, and backend pipelines that turn complex inputs into actionable outputs.",
    highlights: ["Analytics Dashboards", "Data Pipelines", "Financial Metrics", "ML-Ready Backends"]
  },
  {
    id: 5,
    title: "Bug Fixing & Optimization",
    icon: "Wrench",
    description:
      "Debug complex issues, reduce technical debt, and optimize performance across frontend apps, APIs, databases, and production systems.",
    highlights: ["Performance Tuning", "Code Review", "Technical Debt Reduction", "System Monitoring"]
  },
  {
    id: 6,
    title: "AI & LLM Integration",
    icon: "Brain",
    description:
      "End-to-end AI feature development - RAG pipelines, LLM API integration (Claude, OpenAI, OpenRouter), real-time voice AI with Deepgram, vector databases, autonomous agent workflows, and production AI SaaS architecture.",
    highlights: [
      "RAG & Vector Search Systems",
      "Claude / OpenAI / OpenRouter APIs",
      "Real-Time Voice AI (Deepgram)",
      "AI Agent & Automation Workflows",
      "LLM-Powered SaaS Products"
    ]
  },
  {
    id: 7,
    title: "Web3 & Smart Contract Security",
    icon: "ShieldCheck",
    description:
      "Smart contract auditing and security analysis powered by AI. Vulnerability detection for Solidity contracts, audit report generation, and Web3 SaaS tooling for DeFi teams and blockchain developers.",
    highlights: [
      "Solidity Smart Contract Auditing",
      "AI-Powered Vulnerability Detection",
      "Web3 SaaS Product Development",
      "DeFi Security Tooling",
      "Audit Report Generation"
    ]
  }
];

export const techStack = {
  frontend: [
    { name: "Next.js", icon: "Layout" },
    { name: "React", icon: "Atom" },
    { name: "TypeScript", icon: "FileCode" },
    { name: "Tailwind CSS", icon: "Paintbrush" }
  ],
  backend: [
    { name: "Node.js", icon: "Server" },
    { name: "Python", icon: "Terminal" },
    { name: "PHP / CodeIgniter", icon: "Braces" }
  ],
  databases: [
    { name: "PostgreSQL", icon: "Database" },
    { name: "MongoDB", icon: "HardDrive" },
    { name: "MySQL", icon: "Cylinder" },
    { name: "Redis", icon: "Layers3" }
  ],
  devopsCloud: [
    { name: "Docker", icon: "Container" },
    { name: "Kubernetes", icon: "Network" },
    { name: "AWS", icon: "Cloud" }
  ],
  aiMl: [
    { name: "Claude API", icon: "Brain" },
    { name: "OpenRouter", icon: "Workflow" },
    { name: "Deepgram", icon: "AudioLines" },
    { name: "LangChain", icon: "GitBranch" }
  ],
  blockchain: [
    { name: "Solidity", icon: "ShieldCheck" },
    { name: "Web3.js", icon: "Blocks" },
    { name: "Hardhat", icon: "Hammer" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "VulnGuard AI",
    tagline: "AI SaaS · Web3 Security · Flagship Project",
    category: "Web3 Security",
    problem: "Smart contract audits are expensive, slow, and inaccessible.",
    solution: "AI-powered Solidity vulnerability scanner with instant Claude-powered audit reports.",
    tech: ["Next.js 14", "TypeScript", "Claude API", "PostgreSQL", "Stripe"],
    outcome: "Flagship live product for Web3 teams and auditors.",
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
      "Candidates preparing for technical interviews need real-time help that can listen, understand context, and respond with useful answers almost instantly.",
    solution:
      "A real-time AI interview assistant SaaS. Uses Deepgram Nova-3 for live speech-to-text transcription, feeds context into an in-memory vector RAG, and returns AI-generated answers via OpenRouter LLMs - all under 300ms latency. Built for candidates who want an AI co-pilot during technical interviews.",
    tech: ["Next.js 14", "TypeScript", "Supabase", "Deepgram Nova-3", "OpenRouter", "In-Memory Vector RAG", "Tailwind CSS"],
    outcome: "Sub-300ms response latency. Full multi-tenant SaaS with auth and billing flows.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Real-Time Market Analytics",
    tagline: "Real-Time Analytics \u00B7 Python \u00B7 Client Delivery",
    category: "Trading",
    problem:
      "The client needed a robust real-time analytics system with advanced grid behavior, custom controls, and reliable session persistence for live trading use.",
    solution:
      "A production-grade real-time analytics system built for a client through 22+ iterative versions. Features a hybrid grid trading strategy, custom panel UI with drag support, virtual grid logic, async order management, settings persistence across sessions, and full system-specific pattern compliance.",
    tech: ["Python", "FastAPI", "Custom Dashboard UI", "Async Data Engine"],
    outcome: "Delivered v13-v22.5 to client (Philipp). Live analytics deployment.",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 4,
    title: "Automated Journal Production System",
    tagline: "Document Automation \u00B7 Publishing \u00B7 XML Pipeline",
    category: "Automation",
    problem:
      "Academic publishing workflows were slowed down by manual typesetting, repetitive formatting work, and inconsistent export pipelines across publishing formats.",
    solution:
      "A fully automated academic journal production pipeline. Accepts raw manuscript inputs and outputs publication-ready PDF, HTML, and JATS XML formats with full OJS (Open Journal Systems) compatibility. Built for a publisher client to eliminate manual typesetting.",
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
      "Leadership needed a reliable internal dashboard to track subscription health, revenue movement, and retention trends across the full SaaS financial funnel.",
    solution:
      "A comprehensive financial metrics dashboard built for Vughy Inc (my employer). Tracks and visualizes MRR, ARR, churn rate, LTV, geographic revenue breakdown, and subscription cohort analytics. Designed for executive-level SaaS decision making.",
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
  totalRepos: 49,
  totalCommits: 1012,
  totalStars: 1,
  activeDays: 1012,
  topLanguages: [
    { name: "Python", percentage: 42 },
    { name: "TypeScript", percentage: 28 },
    { name: "JavaScript", percentage: 20 },
    { name: "Node.js", percentage: 10 }
  ],
  contributionStreak: "Live"
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





