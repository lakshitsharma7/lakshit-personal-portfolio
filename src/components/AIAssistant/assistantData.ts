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
  text: `Hello and welcome! 👋\n\nI am Lakshit's virtual portfolio guide. Lakshit Sharma is a Software Engineer Intern with hands-on experience building AI-assisted software applications, automation workflows, APIs, dashboards, and employee productivity systems.\n\nHe has experience across Python, FastAPI, Django, React, Next.js, PostgreSQL, REST APIs, SQL, and modern AI-assisted workflows.\n\nHow can I help you explore his professional background today?`,
  actions: [
    { label: 'Explore My Projects', actionId: 'explore_projects', type: 'scroll', target: 'projects' },
    { label: 'View My Skills', actionId: 'view_skills', type: 'scroll', target: 'skills' },
    { label: 'Why Hire Me?', actionId: 'why_hire', type: 'action' },
    { label: 'Contact Me', actionId: 'contact_me', type: 'scroll', target: 'contact' },
  ],
};

export const WHY_HIRE_RESPONSE: AssistantMessage = {
  id: 'why_hire_response',
  sender: 'ai',
  text: `Why consider hiring Lakshit for your engineering or data team?\n\n1. Proven Production Desktop & Telemetry Engineering:\nAt Indovision Services, Lakshit developed Workpulse, an employee productivity monitoring app in Python & PySide6 with local-first batch synchronization, idle detection, device tokens, and multi-platform packaging (Windows .exe and macOS .dmg).\n\n2. Robust Backend & Full-Stack Capabilities:\nExperienced with Python, FastAPI, Django, React, Next.js, and PostgreSQL. Engineered TA-ATS with a 5-tier Role-Based Access Control (RBAC) model, AI candidate parsing, and recruitment approval state engines.\n\n3. Empirical Data Analytics & Reporting:\nDuring his internship at Nexen Bloom, Lakshit conducted data cleaning, SQL extraction, and built interactive Power BI dashboards to track business KPIs and operational metrics.\n\n4. AI Integration & Workflow Automation:\nActively applies Generative AI, AI APIs, prompt engineering, LLM integration, and n8n workflow orchestration to automate repetitive processes and accelerate software delivery.\n\n5. Solid Computer Science Foundations:\nPursuing a B.Tech in Computer Science & Engineering at Krishna Engineering College, AKTU (2021–2025).`,
  actions: [
    { label: 'Explore My Projects', actionId: 'explore_projects', type: 'scroll', target: 'projects' },
    { label: 'View My Skills', actionId: 'view_skills', type: 'scroll', target: 'skills' },
    { label: 'Download Resume (PDF)', actionId: 'view_resume', type: 'link', target: '/Lakshit_Sharma_Resume.pdf' },
    { label: 'Contact Me', actionId: 'contact_me', type: 'scroll', target: 'contact' },
  ],
};

export const QUICK_PROMPTS = [
  { id: 'tell_about', label: 'Tell me about Lakshit.' },
  { id: 'experience_summary', label: 'Summarize his work experience.' },
  { id: 'projects_summary', label: 'What are his key projects?' },
  { id: 'skills_summary', label: 'What technologies and skills does he use?' },
  { id: 'why_hire', label: 'Why Hire Lakshit?' },
  { id: 'contact_info', label: 'How can I contact him?' },
];

export const PROMPT_RESPONSES: Record<string, AssistantMessage> = {
  tell_about: {
    id: 'tell_about_response',
    sender: 'ai',
    text: `Lakshit Sharma is a Software Engineer Intern based in North East Delhi, India. He is pursuing a B.Tech in Computer Science & Engineering from Krishna Engineering College, AKTU (2021–2025).\n\nHe currently works as a Software Engineer Intern at Indovision Services, building Python & PySide6 desktop telemetry applications and REST APIs using FastAPI & Django. He previously worked as a Data Analytics Intern at Nexen Bloom, focusing on SQL, Pandas, and Power BI dashboards.`,
    actions: [
      { label: 'Explore My Projects', actionId: 'explore_projects', type: 'scroll', target: 'projects' },
      { label: 'View My Skills', actionId: 'view_skills', type: 'scroll', target: 'skills' },
      { label: 'Why Hire Me?', actionId: 'why_hire', type: 'action' },
      { label: 'Contact Me', actionId: 'contact_me', type: 'scroll', target: 'contact' },
    ],
  },

  experience_summary: {
    id: 'experience_summary_response',
    sender: 'ai',
    text: `Here is a summary of Lakshit's verified professional experience:\n\n1. Software Engineer Intern — Indovision Services (2026 – Present):\n• Develop and maintain software applications using Python, FastAPI, Django, React, Next.js, and PostgreSQL.\n• Build REST APIs for authentication, device registration, activity tracking, attendance, screenshots, and synchronization.\n• Developed Workpulse desktop telemetry application using Python & PySide6 with offline queuing and device tokens.\n• Built Windows and macOS packaging pipelines using PyInstaller.\n• Debug production issues involving APIs, HTTP errors, and sync failures.\n\n2. Data Analytics Intern — Nexen Bloom, Noida (Feb 2026 – April 2026):\n• Worked with Python, Pandas, NumPy, SQL, and Power BI for data analysis and reporting.\n• Performed data cleaning, transformation, and visualization for business reporting.\n• Built dashboards to communicate KPIs and operational insights.`,
    actions: [
      { label: 'View Experience Timeline', actionId: 'scroll_experience', type: 'scroll', target: 'experience' },
      { label: 'Explore My Projects', actionId: 'explore_projects', type: 'scroll', target: 'projects' },
      { label: 'Download Resume', actionId: 'view_resume', type: 'link', target: '/Lakshit_Sharma_Resume.pdf' },
    ],
  },

  projects_summary: {
    id: 'projects_summary_response',
    sender: 'ai',
    text: `Lakshit's portfolio highlights 4 key projects directly from his resume:\n\n1. Workpulse – AI-Assisted Employee Productivity Platform:\nCross-platform PySide6 desktop app with session tracking, idle detection, screenshot capture, and local-first SQLite/REST batch sync.\n\n2. TA-ATS – AI-Powered Talent Acquisition Platform:\nFull-stack Applicant Tracking System in Next.js, React, FastAPI, Django, and PostgreSQL with 5-tier RBAC and AI resume parsing.\n\n3. AI Automation & Workflow Projects:\nOrchestrating APIs, webhooks, and AI models using n8n and Python for automated business workflows.\n\n4. Business Data Analysis & KPI Dashboard Project:\nData cleaning, SQL analytical queries, and Power BI dashboards communicating sales performance and return rates.`,
    actions: [
      { label: 'Explore My Projects', actionId: 'explore_projects', type: 'scroll', target: 'projects' },
      { label: 'View GitHub Repositories', actionId: 'github_link', type: 'link', target: 'https://github.com/lakshitsharma7' },
      { label: 'Why Hire Me?', actionId: 'why_hire', type: 'action' },
    ],
  },

  skills_summary: {
    id: 'skills_summary_response',
    sender: 'ai',
    text: `Lakshit's verified technical skill set includes:\n\n• Programming: Python, JavaScript, SQL, HTML, CSS\n• Backend & APIs: FastAPI, Django, REST APIs, API Integration, Webhooks, JSON\n• Frontend: React.js, Next.js\n• Databases: PostgreSQL, SQL\n• Data Analytics: Pandas, NumPy, Power BI, SQL, Data Cleaning, Data Visualization, KPI Dashboards, Reporting\n• AI / GenAI: Generative AI, AI-assisted Development, AI APIs, Prompt Engineering, AI Agents, LLM Integration\n• Automation: n8n, Workflow Automation, API Automation, Webhooks\n• Desktop: PySide6, Windows Desktop Applications, macOS Applications\n• Tools & Engineering: Git, GitHub, VS Code, Figma, Postman, PyInstaller, Excel, Power BI, Authentication, RBAC, Error Handling, Logging, Testing, Debugging, Deployment`,
    actions: [
      { label: 'View My Skills', actionId: 'view_skills', type: 'scroll', target: 'skills' },
      { label: 'Explore My Projects', actionId: 'explore_projects', type: 'scroll', target: 'projects' },
      { label: 'Contact Me', actionId: 'contact_me', type: 'scroll', target: 'contact' },
    ],
  },

  contact_info: {
    id: 'contact_info_response',
    sender: 'ai',
    text: `You can reach Lakshit directly through:\n\n📧 Email: lakshitharitash@gmail.com\n📱 Phone / WhatsApp: +91 9910933221\n💼 LinkedIn: linkedin.com/in/lakshit-sharma-448949289\n🐙 GitHub: github.com/lakshitsharma7\n📍 Location: North East Delhi, India\n\nLakshit is open to software engineering, backend, AI integration, and data analytics opportunities!`,
    actions: [
      { label: 'Open Contact Form', actionId: 'contact_me', type: 'scroll', target: 'contact' },
      { label: 'Connect on WhatsApp', actionId: 'whatsapp_link', type: 'link', target: 'https://wa.me/919910933221?text=Hi%20Lakshit,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect!' },
      { label: 'Download Resume (PDF)', actionId: 'view_resume', type: 'link', target: '/Lakshit_Sharma_Resume.pdf' },
    ],
  },

  why_hire: WHY_HIRE_RESPONSE,
};

export const SECTION_SUMMARIES: Record<string, string> = {
  hero: "You're viewing the portfolio headline. Lakshit Sharma is a Software Engineer specializing in Python, FastAPI, Django, React, Next.js, and Automation.",
  about: "The About section summarizes Lakshit's verified profile across Software Engineering & APIs (Indovision Services) and Data Analytics & Automation (Nexen Bloom).",
  skills: "The Skills section details verified technical proficiencies in Python, FastAPI, Django, React.js, Next.js, PostgreSQL, SQL, Power BI, PySide6, and n8n automation.",
  projects: "The Projects section features key case studies including Workpulse, TA-ATS, AI Automation & Workflow Projects with n8n, and Business Data Analysis with Power BI.",
  experience: "The Experience timeline outlines Lakshit's work as a Software Engineer Intern at Indovision Services and Data Analytics Intern at Nexen Bloom.",
  education: "The Education section highlights Lakshit's Bachelor of Technology (B.Tech) in Computer Science & Engineering from Krishna Engineering College, AKTU (2021–2025).",
  contact: "The Contact section offers a direct message drafter, email, phone/WhatsApp, and verified social channels to connect with Lakshit directly.",
};

