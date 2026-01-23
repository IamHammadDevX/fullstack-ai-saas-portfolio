// Mock data for Hammad's Portfolio

export const personalInfo = {
  name: "Hammad",
  username: "IamHammadDevX",
  title: "Full-Stack AI & SaaS Engineer",
  tagline: "I build scalable SaaS & AI-powered systems that grow businesses.",
  description: "With 3.5+ years of experience, I transform ideas into production-ready SaaS products. From MVPs to enterprise-grade systems, I deliver clean, scalable architecture that businesses rely on.",
  education: "Computer Science from University of Engineering and Technology, Lahore 2023-2027",
  experience: "3.5+ years",
  location: "Pakistan (Remote Worldwide)",
  availability: "Available for Freelance Projects"
};

export const about = {
  story: `I started as a curious developer exploring code, evolved into a product builder who ships real solutions, and now work as a freelance engineer helping businesses scale. My journey has taken me from building university projects to architecting AI-powered SaaS platforms used by real companies.

What drives me? Seeing a client's vision transform into a live product that generates revenue and solves real problems. I don't just write code—I build systems that last, scale, and deliver business value.

Every project I take on gets my full attention. Clean code, thoughtful architecture, and reliable delivery aren't just promises—they're how I work.`,
  highlights: [
    "Shipped 15+ production SaaS products",
    "Specialized in AI/ML system integration",
    "100% client satisfaction rate",
    "Fast turnaround without compromising quality"
  ]
};

export const services = [
  {
    id: 1,
    title: "SaaS Development",
    description: "Full product lifecycle from MVP to production. Scalable architecture, clean codebase, and business-focused solutions.",
    highlights: ["MVP Development", "API Design", "Database Architecture", "Production Deployment"]
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    description: "Modern web applications with React, Node.js, and robust backend systems. Fast, responsive, and user-friendly.",
    highlights: ["MERN Stack", "RESTful APIs", "Real-time Features", "Responsive Design"]
  },
  {
    id: 3,
    title: "AI/ML Solutions",
    description: "Intelligent systems powered by machine learning. NLP, computer vision, and automation that adds real business value.",
    highlights: ["NLP Integration", "Computer Vision", "Model Training", "AI Automation"]
  },
  {
    id: 4,
    title: "Data Engineering & Analytics",
    description: "Transform raw data into actionable insights. ETL pipelines, data warehousing, and visualization dashboards.",
    highlights: ["ETL Pipelines", "Data Modeling", "Analytics Dashboards", "Performance Optimization"]
  },
  {
    id: 5,
    title: "Bug Fixing & Optimization",
    description: "Debug complex issues and optimize performance. Fast diagnosis, clean fixes, and improved system reliability.",
    highlights: ["Performance Tuning", "Code Review", "Technical Debt Reduction", "System Monitoring"]
  }
];

export const techStack = {
  frontend: [
    { name: "React", icon: "Code2" },
    { name: "TypeScript", icon: "FileCode" },
    { name: "Tailwind CSS", icon: "Paintbrush" },
    { name: "Next.js", icon: "Layout" }
  ],
  backend: [
    { name: "Node.js", icon: "Server" },
    { name: "Express", icon: "Zap" },
    { name: "Django", icon: "Code" },
    { name: "FastAPI", icon: "Rocket" }
  ],
  database: [
    { name: "MongoDB", icon: "Database" },
    { name: "PostgreSQL", icon: "HardDrive" },
    { name: "SQLite", icon: "Save" }
  ],
  aiml: [
    { name: "Python", icon: "Terminal" },
    { name: "TensorFlow", icon: "Brain" },
    { name: "PyTorch", icon: "Cpu" },
    { name: "NLP", icon: "MessageSquare" },
    { name: "Computer Vision", icon: "Eye" }
  ],
  devops: [
    { name: "Docker", icon: "Container" },
    { name: "Kubernetes", icon: "Network" },
    { name: "Git", icon: "GitBranch" },
    { name: "CI/CD", icon: "RefreshCw" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "AI Resume Screening System",
    category: "AI/ML",
    problem: "HR teams were spending hours manually screening hundreds of resumes for open positions.",
    solution: "Built an AI-powered system using NLP to automatically parse, analyze, and rank resumes based on job requirements. Integrated with ATS platforms for seamless workflow.",
    tech: ["Python", "TensorFlow", "NLP", "FastAPI", "React"],
    outcome: "Reduced screening time by 85%, improved candidate quality, and helped clients hire faster.",
    image: "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwxfHxBSSUyMHJlY3J1aXRtZW50fGVufDB8fHx8MTc2OTE4Mjg4N3ww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 2,
    title: "Real-Time Stock Signal System",
    category: "FinTech",
    problem: "Traders needed instant alerts for market opportunities based on technical indicators.",
    solution: "Developed a real-time data processing engine that analyzes market data streams, applies custom algorithms, and sends instant signals via WebSocket and mobile push notifications.",
    tech: ["Node.js", "WebSocket", "MongoDB", "React", "Chart.js"],
    outcome: "Processed 50K+ signals daily with <100ms latency. Active user base of 2,000+ traders.",
    image: "https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxzdG9jayUyMHRyYWRpbmclMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzY5MTgyODk1fDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 3,
    title: "Time Tracker SaaS Platform",
    category: "SaaS",
    problem: "Freelancers and agencies lacked a simple, reliable tool to track billable hours across projects.",
    solution: "Built a full-featured time tracking platform with team management, project analytics, invoice generation, and integrations with popular tools.",
    tech: ["MERN Stack", "JWT Auth", "Stripe API", "Chart.js"],
    outcome: "30+ paying customers in first 3 months. 95% user retention rate.",
    image: "https://images.unsplash.com/photo-1671109704725-ad6d94cd723c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwzfHx0aW1lJTIwdHJhY2tpbmd8ZW58MHx8fHwxNzY5MTgyOTAyfDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 4,
    title: "FinTrade Trading Platform",
    category: "FinTech",
    problem: "Retail investors needed an intuitive platform for portfolio management and trading execution.",
    solution: "Created a comprehensive trading platform with real-time quotes, portfolio analytics, risk assessment, and automated trading strategies.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSocket"],
    outcome: "Handles 10K+ daily transactions. 99.9% uptime with robust error handling.",
    image: "https://images.unsplash.com/photo-1766218334217-d2cc74c36fce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwzfHx0cmFkaW5nJTIwcGxhdGZvcm18ZW58MHx8fHwxNzY5MTgyOTI0fDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 5,
    title: "AnonyChat - Anonymous Messaging",
    category: "Social",
    problem: "Users wanted secure, anonymous communication without complex setup or tracking.",
    solution: "Built an end-to-end encrypted messaging platform with no user data storage, temporary chat rooms, and automatic message deletion.",
    tech: ["Node.js", "Socket.io", "React", "MongoDB", "Encryption"],
    outcome: "20K+ active users. Zero data breaches. Featured in privacy-focused communities.",
    image: "https://images.unsplash.com/photo-1762330469637-dfbb6e014a16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBtZXNzYWdpbmd8ZW58MHx8fHwxNzY5MTgyOTA5fDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 6,
    title: "Gas Distribution Management System",
    category: "Enterprise",
    problem: "Gas distribution company struggled with manual order management and route optimization.",
    solution: "Developed an enterprise system for order management, inventory tracking, delivery route optimization, and real-time driver coordination.",
    tech: ["Django", "PostgreSQL", "React", "Google Maps API"],
    outcome: "30% reduction in delivery time. 40% improvement in route efficiency. Scaled to 100+ drivers.",
    image: "https://images.unsplash.com/photo-1726776230751-183496c51f00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBtYW5hZ2VtZW50fGVufDB8fHx8MTc2OTE4MjkxNnww&ixlib=rb-4.1.0&q=85"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc",
    company: "TechStart Inc",
    text: "Hammad delivered our SaaS MVP in record time without cutting corners. His code quality and communication were exceptional. We've since hired him for three more projects.",
    rating: 5,
    platform: "Upwork"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Founder, DataFlow Analytics",
    company: "DataFlow Analytics",
    text: "Working with Hammad was seamless. He understood our complex data pipeline requirements and built a solution that scaled beautifully. Highly technical and reliable.",
    rating: 5,
    platform: "Freelancer"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager, FinVest",
    company: "FinVest",
    text: "Hammad transformed our trading platform. His attention to performance and user experience made a huge difference. The system handles thousands of concurrent users flawlessly.",
    rating: 5,
    platform: "Upwork"
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "CTO, HR Solutions Co",
    company: "HR Solutions Co",
    text: "The AI resume screening system Hammad built saved our clients hundreds of hours. His ML expertise and ability to deliver production-ready code is outstanding.",
    rating: 5,
    platform: "Fiverr"
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
    description: "I start by understanding your business goals, user needs, and technical requirements. Clear requirements mean better outcomes."
  },
  {
    id: 2,
    title: "Agile Development",
    description: "Iterative development with regular updates. You see progress weekly, provide feedback, and we adjust as needed."
  },
  {
    id: 3,
    title: "Testing & Quality Assurance",
    description: "Every feature is tested thoroughly. Unit tests, integration tests, and manual QA ensure reliability."
  },
  {
    id: 4,
    title: "Deployment & Monitoring",
    description: "Smooth production deployment with monitoring setup. I don't disappear after launch—I ensure everything runs perfectly."
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
