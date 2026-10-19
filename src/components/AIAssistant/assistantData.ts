export interface AssistantAction {
  label: string;
  actionId: string;
  type: 'action' | 'link' | 'scroll';
  target?: string;
}

export interface AssistantMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  actions?: AssistantAction[];
  timestamp?: number;
}

export const WELCOME_MESSAGE: AssistantMessage = {
  id: 'welcome',
  sender: 'ai',
  text: `Hi there! 👋 Welcome to Lakshit's portfolio.\n\nI'm your virtual portfolio guide. I can introduce you to Lakshit, highlight his software engineering and data analytics projects, and explain how his skills can contribute to your team.\n\nWould you like a quick tour?`,
  actions: [
    { label: 'Explore My Portfolio', actionId: 'explore_portfolio', type: 'scroll', target: 'about' },
    { label: 'View Data Analytics Projects', actionId: 'view_analytics', type: 'action' },
    { label: 'Why Hire Lakshit?', actionId: 'why_hire', type: 'action' },
    { label: 'Contact Lakshit', actionId: 'contact_lakshit', type: 'scroll', target: 'contact' },
  ],
};

export const WHY_HIRE_RESPONSE: AssistantMessage = {
  id: 'why_hire_response',
  sender: 'ai',
  text: `Why consider Lakshit for your team?\n\nLakshit combines software engineering with data analytics. His portfolio showcases his work with Python, SQL, Power BI, APIs, web applications, and AI-assisted development workflows.\n\nHe is interested in building practical solutions, turning data into useful insights, and improving workflows through automation.\n\nExplore his projects to review his actual work, technologies, and implementation approach. If his experience matches your team's needs, connect with him to discuss an opportunity.`,
  actions: [
    { label: 'View Projects', actionId: 'view_projects', type: 'scroll', target: 'projects' },
    { label: 'View Resume', actionId: 'view_resume', type: 'link', target: '/Lakshit_Sharma_Resume.pdf' },
    { label: 'Contact Lakshit', actionId: 'contact_lakshit', type: 'scroll', target: 'contact' },
  ],
};

export const QUICK_PROMPTS = [
  { id: 'tell_about', label: 'Tell me about Lakshit.' },
  { id: 'view_analytics', label: 'Show me his best data analytics projects.' },
  { id: 'tech_stack', label: 'What technologies does he use?' },
  { id: 'swe_experience', label: 'Explain his software engineering experience.' },
  { id: 'why_hire', label: 'Why Hire Lakshit?' },
  { id: 'data_analyst_fit', label: 'Why would he be a good fit for a data analyst role?' },
  { id: 'contact_info', label: 'How can I contact him?' },
];

export const PROMPT_RESPONSES: Record<string, AssistantMessage> = {
  tell_about: {
    id: 'tell_about_response',
    sender: 'ai',
    text: `Lakshit Sharma is an AI-assisted Software Engineer and Data Analytics professional based in North East Delhi, India. He holds a B.Tech in Computer Science & Engineering from Krishna Engineering College (2021–2025).\n\nHe currently serves as a Software Engineer Intern at Indovision Services, developing enterprise desktop telemetry applications with Python & PySide6, and REST APIs with FastAPI & Django. Previously, he completed a Data Analytics Internship at Nexen Bloom.`,
    actions: [
      { label: 'View About Section', actionId: 'scroll_about', type: 'scroll', target: 'about' },
      { label: 'Why Hire Lakshit?', actionId: 'why_hire', type: 'action' },
      { label: 'Explore Projects', actionId: 'view_projects', type: 'scroll', target: 'projects' },
    ],
  },

  view_analytics: {
    id: 'view_analytics_response',
    sender: 'ai',
    text: `Here are Lakshit's 3 verified Data Analytics projects with real datasets, SQL queries, and Power BI dashboards:\n\n1. 📊 CloudSync Churn & Retention Analytics: Analyzed 12,000 SaaS accounts ($17.04M ARR base) using 20 SQL queries, DAX time-intelligence, and an interactive 6-page Power BI dashboard.\n\n2. 📚 Amazon Best-Selling Books: Python EDA exploring price elasticity, ratings, and genre trends across 1,000 titles with Pandas, Matplotlib & Seaborn.\n\n3. 🛒 E-Commerce Business Analytics: Multi-table relational transaction analysis diagnosing sales velocity, customer return rates, and CAC/AOV KPIs.\n\nI can scroll you directly to the Data Analytics section!`,
    actions: [
      { label: 'Go to Data Analytics Projects', actionId: 'filter_analytics_tab', type: 'action' },
      { label: 'Why Hire for Data Analyst Role?', actionId: 'data_analyst_fit', type: 'action' },
      { label: 'View GitHub Repositories', actionId: 'github_link', type: 'link', target: 'https://github.com/lakshitsharma7' },
    ],
  },

  tech_stack: {
    id: 'tech_stack_response',
    sender: 'ai',
    text: `Lakshit's technical capabilities span two core disciplines:\n\n🔹 Data Analytics & Business Intelligence:\n• SQL (Window Functions, CTEs, Aggregations)\n• Power BI (Star Schema modeling, DAX measures, KPI cards)\n• Python for Analytics (Pandas, NumPy, Matplotlib, Seaborn)\n• Advanced Excel (Power Query, Pivot Tables)\n\n🔹 Software Engineering & Systems:\n• Backend & APIs: Python, FastAPI, Django, REST APIs, PostgreSQL\n• Desktop Engineering: PySide6 (Qt for Python), PyInstaller packaging, SQLite caching\n• Frontend: React, Next.js, Tailwind CSS, TypeScript basics\n• DevOps: Jenkins CI/CD, Git, GitHub Actions`,
    actions: [
      { label: 'Explore Skills Matrix', actionId: 'scroll_skills', type: 'scroll', target: 'skills' },
      { label: 'View Projects', actionId: 'view_projects', type: 'scroll', target: 'projects' },
    ],
  },

  swe_experience: {
    id: 'swe_experience_response',
    sender: 'ai',
    text: `In software engineering, Lakshit works as a Software Engineer Intern at Indovision Services (Apr 2026 – Present).\n\nKey Engineering Contributions:\n• Engineered Workpulse, a cross-platform desktop application built with Python and PySide6.\n• Built local-first SQLite queuing to ensure telemetry data survives offline disconnects.\n• Created REST APIs for authentication, device tokens, and batch telemetry synchronization.\n• Automated multi-platform binary compilation (.exe and .dmg) via PyInstaller and Jenkins CI/CD pipelines.\n• Developed TA-ATS, an AI-powered talent acquisition platform in Next.js, FastAPI, and Django.`,
    actions: [
      { label: 'View Experience Timeline', actionId: 'scroll_experience', type: 'scroll', target: 'experience' },
      { label: 'View Workpulse Repository', actionId: 'workpulse_github', type: 'link', target: 'https://github.com/lakshitsharma7/ihrmsMonitor' },
    ],
  },

  data_analyst_fit: {
    id: 'data_analyst_fit_response',
    sender: 'ai',
    text: `Why is Lakshit a strong candidate for Data Analyst and BI roles?\n\n1. Empirical Business Understanding: Translates raw business problems into normalized data models, cohort retention charts, and executive KPI dashboards.\n2. Strong SQL & DAX Foundations: Proficient with window functions, Common Table Expressions (CTEs), and complex DAX measures in Power BI.\n3. Python Data Science Tooling: Skilled in cleaning dirty datasets with Pandas, statistical exploration with NumPy, and clear visualizations via Seaborn.\n4. Dual Engineering Advantage: Because he understands backend APIs and databases, he can collaborate seamlessly with data engineers and build end-to-end automated reporting pipelines.`,
    actions: [
      { label: 'Explore Data Analytics Projects', actionId: 'filter_analytics_tab', type: 'action' },
      { label: 'Download Resume', actionId: 'view_resume', type: 'link', target: '/Lakshit_Sharma_Resume.pdf' },
      { label: 'Contact Lakshit', actionId: 'contact_lakshit', type: 'scroll', target: 'contact' },
    ],
  },

  contact_info: {
    id: 'contact_info_response',
    sender: 'ai',
    text: `You can connect with Lakshit directly:\n\n📧 Email: lakshitharitash@gmail.com\n📱 Phone / WhatsApp: +91 9910933221\n💼 LinkedIn: linkedin.com/in/lakshit-sharma-448949289\n🐙 GitHub: github.com/lakshitsharma7\n📍 Location: North East Delhi, India\n\nHe is open to full-time roles, internships, and opportunities in Software Engineering and Data Analytics.`,
    actions: [
      { label: 'Open Contact Form', actionId: 'scroll_contact', type: 'scroll', target: 'contact' },
      { label: 'Connect on WhatsApp', actionId: 'whatsapp_link', type: 'link', target: 'https://wa.me/919910933221?text=Hi%20Lakshit,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect!' },
      { label: 'Download Resume (PDF)', actionId: 'view_resume', type: 'link', target: '/Lakshit_Sharma_Resume.pdf' },
    ],
  },

  why_hire: WHY_HIRE_RESPONSE,
};

export const SECTION_SUMMARIES: Record<string, string> = {
  hero: "You're viewing the portfolio introduction. Lakshit is an AI-assisted Software Engineer and Data Analytics professional specializing in FastAPI backends, Power BI dashboards, and desktop telemetry systems.",
  about: "The About section summarizes Lakshit's verified profile and career tracks across Software Engineering (APIs, full-stack, desktop systems) and Data Analytics & Business Intelligence (SQL, Power BI, KPI reporting).",
  skills: "The Skills section details verified capabilities across Data Analytics & BI (Power BI, DAX, Pandas, SQL), Backend APIs, Frontend, AI workflows, and Desktop/DevOps tooling.",
  projects: "The Projects section features 6 verified case studies with real screenshots, architectural breakdowns, and GitHub repositories—highlighting both Software Engineering and Data Analytics platforms.",
  experience: "The Experience timeline outlines Lakshit's work as a Software Engineer Intern at Indovision Services and Data Analytics Intern at Nexen Bloom, with verifiable achievements and technologies.",
  education: "The Education section highlights Lakshit's Bachelor of Technology (B.Tech) in Computer Science & Engineering from Krishna Engineering College (2021–2025) and professional industry certifications.",
  contact: "The Contact section offers a direct message form, email, phone/WhatsApp, and verified social channels to get in touch with Lakshit directly.",
};
