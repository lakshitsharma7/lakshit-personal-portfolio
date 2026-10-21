export interface ProjectCaseStudy {
  id: string;
  title: string;
  tagline: string;
  category: 'AI & Engineering' | 'Data Analytics' | 'Mobile & Web';
  techStack: string[];
  role: string;
  githubUrl?: string;
  liveUrl?: string;
  isPrototypeOrDemo?: boolean;
  statusBadge: string;
  overview: string;
  problemStatement: string;
  keyContributions: string[];
  architecturePoints: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  outcomesAndImpact: string[];
  screenshots?: {
    url: string;
    caption: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  highlights: string[];
  technologies: string[];
  certificateId?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: 'Data & BI' | 'AI & LLMs' | 'Web & Programming';
}

export const portfolioConfig = {
  personal: {
    name: "Lakshit Sharma",
    initials: "LS",
    headline: "Software Engineer – AI | GenAI | Python | FastAPI | Django | React | Automation",
    positioning: "Software Engineer Intern with hands-on experience building AI-assisted software applications, automation workflows, APIs, dashboards, and employee productivity systems.",
    location: "North East Delhi, India",
    email: "lakshitharitash@gmail.com",
    phone: "+91 9910933221",
    whatsappUrl: "https://wa.me/919910933221?text=Hi%20Lakshit,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect!",
    githubUrl: "https://github.com/lakshitsharma7",
    linkedinUrl: "https://www.linkedin.com/in/lakshit-sharma-448949289",
    naukriUrl: "https://www.naukri.com/mnjuser/profile",
    resumeDownloadPath: "/Lakshit_Sharma_Resume.pdf",
    shortBio: "Experienced with Python, FastAPI, Django, React, Next.js, PostgreSQL, REST APIs, SQL, and modern AI-assisted development workflows. Currently working on production-oriented applications involving AI integration, API development, authentication, RBAC, activity tracking, system monitoring, automation, and cross-platform desktop applications.",
  },
  
  about: {
    headline: "Software Engineer – AI, APIs, Desktop Telemetry & Data Analytics",
    overview: "I am a Software Engineer Intern with hands-on experience building AI-assisted software applications, automation workflows, APIs, dashboards, and employee productivity systems. Experienced with Python, FastAPI, Django, React, Next.js, PostgreSQL, REST APIs, SQL, and modern AI-assisted development workflows. Currently working on production applications involving AI integration, API development, authentication, RBAC, activity tracking, system monitoring, and cross-platform desktop applications with a strong interest in Generative AI, AI Agents, and workflow automation.",
    careerAreas: [
      {
        title: "Software Engineering & APIs",
        description: "Building production-grade backend APIs, secure authentication, RBAC workflows, and cross-platform desktop applications (PySide6) with local-first telemetry synchronization.",
        skills: [
          "Python, FastAPI, Django & PostgreSQL",
          "React.js, Next.js, REST APIs & Webhooks",
          "PySide6 desktop telemetry & application packaging",
          "Authentication, RBAC & system health monitoring"
        ]
      },
      {
        title: "Data Analytics & Automation",
        description: "Extracting operational insights through reproducible data cleaning, SQL analytics, interactive Power BI KPI dashboards, and AI-assisted n8n workflow automation.",
        skills: [
          "SQL, Python, Pandas & NumPy",
          "Power BI, KPI dashboards & business reporting",
          "Data cleaning, transformation & visualization",
          "n8n workflow automation & AI model integration"
        ]
      }
    ],
    verifiedFacts: [
      { label: "Degree", value: "B.Tech CSE" },
      { label: "University", value: "AKTU (2021–2025)" },
      { label: "Current Role", value: "SWE Intern @ Indovision" },
      { label: "Analytics Role", value: "Data Analytics Intern @ Nexen Bloom" }
    ]
  },

  skills: {
    categories: [
      {
        name: "Programming",
        skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"]
      },
      {
        name: "Backend & APIs",
        skills: ["FastAPI", "Django", "REST APIs", "API Integration", "Webhooks", "JSON"]
      },
      {
        name: "Frontend",
        skills: ["React.js", "Next.js"]
      },
      {
        name: "Databases & Data Analytics",
        skills: ["PostgreSQL", "SQL", "Pandas", "NumPy", "Power BI", "Data Cleaning", "Data Visualization", "KPI Dashboards", "Reporting"]
      },
      {
        name: "AI, GenAI & Automation",
        skills: ["Generative AI", "AI-assisted Development", "AI APIs", "Prompt Engineering", "AI Agents", "LLM Integration", "n8n", "Workflow Automation", "API Automation", "Webhooks"]
      },
      {
        name: "Desktop & Engineering Tools",
        skills: ["PySide6", "Windows Desktop Applications", "macOS Applications", "Git", "GitHub", "VS Code", "Figma", "Postman", "PyInstaller", "Excel", "Authentication", "RBAC", "Error Handling", "Logging", "Version Management", "Testing", "Debugging", "Deployment"]
      }
    ]
  },

  projects: [
    {
      id: "workpulse",
      title: "Workpulse – AI-Assisted Employee Productivity Platform",
      tagline: "Cross-platform desktop application for employee activity tracking with local-first telemetry, idle detection, and API-driven synchronization.",
      category: "AI & Engineering",
      techStack: ["Python", "PySide6", "REST APIs", "PostgreSQL", "Windows", "macOS", "PyInstaller"],
      role: "Software Engineer Intern (Indovision Services)",
      githubUrl: "https://github.com/lakshitsharma7/ihrmsMonitor",
      statusBadge: "Production Desktop Tool",
      overview: "Workpulse is a lightweight cross-platform desktop application designed to track employee activity sessions, active and idle time calculation, system-health collection, and periodic screenshot capture with reliable local-first backend synchronization.",
      problemStatement: "Distributed and hybrid workplaces require reliable, non-intrusive productivity telemetry that preserves workstation responsiveness, survives unpredictable network dropouts, and securely synchronizes data to backend databases.",
      keyContributions: [
        "Developed a cross-platform desktop productivity monitoring application for employee activity tracking.",
        "Implemented application/session tracking, active and idle time calculation, screenshots and system-health monitoring.",
        "Built local-first activity processing with backend synchronization and configurable batch uploads.",
        "Integrated device enrollment, dynamic device tokens, authentication and API-driven configuration.",
        "Implemented automatic startup, tracking-resume and application update/version-management workflows."
      ],
      architecturePoints: [
        "PySide6 Multi-Threading: Dedicated background worker thread continuously monitors system hooks, activity timestamps, and idle intervals without UI freeze.",
        "Local-First Queuing: Stores activity events locally during network loss, draining records in configurable batch uploads upon reconnection.",
        "Device Authentication & RBAC: Validates device hardware signatures, dynamic access tokens, and role-governed tracking policies."
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing high CPU utilization and interface freezing during periodic screenshot capture and compression.",
          solution: "Decoupled screenshot capture into an isolated QThread and implemented debounced image compression before disk staging."
        },
        {
          challenge: "Ensuring zero telemetry data loss during system sleep or network switches.",
          solution: "Implemented transactional persistent queuing with batch upload status handling and exponential retry backoff."
        }
      ],
      outcomesAndImpact: [
        "Packaged and distributed native desktop installers for Windows (.exe) and macOS (.dmg) using PyInstaller.",
        "Successfully deployed in production employee monitoring and activity verification workflows.",
        "Maintained zero data loss across simulated network interruptions."
      ],
      screenshots: [
        {
          url: "/projects/workpulse/workpulse_telemetry.png",
          caption: "Workpulse Desktop Telemetry & Session Monitoring — Real-time tracking and idle detection interface."
        }
      ]
    },
    {
      id: "ta-ats",
      title: "TA-ATS – AI-Powered Talent Acquisition Platform",
      tagline: "Modern recruitment management system featuring 5-tier role-based access control, AI-assisted parsing, and dynamic requisition pipelines.",
      category: "AI & Engineering",
      techStack: ["Next.js", "React", "FastAPI", "Django", "PostgreSQL", "AI", "MCP", "Tailwind CSS"],
      role: "Full-Stack Software Engineer",
      githubUrl: "https://github.com/lakshitsharma7/ATS-MINI",
      isPrototypeOrDemo: false,
      statusBadge: "Full-Stack Web App",
      overview: "TA-ATS is an intelligent recruitment workflow platform built to automate candidate profile extraction, streamline resume evaluation, and manage role-based requisition state lifecycles.",
      problemStatement: "Hiring teams face bottlenecks and confusion when job requisitions and candidate feedback move between recruiters, hiring managers, and administrators without strict state tracking or automated candidate screening.",
      keyContributions: [
        "Developed an Applicant Tracking System for recruitment workflows and candidate information management.",
        "Built frontend modules using Next.js, React and Tailwind CSS and backend services using Django and FastAPI.",
        "Implemented role-based access workflows for recruiters, candidates, hiring managers, project managers and administrators.",
        "Developed recruitment workflow states including Draft → Pending Approval → Approved → Published.",
        "Integrated AI-assisted functionality and dynamic API-driven dashboard workflows."
      ],
      architecturePoints: [
        "Hybrid Microservice Backend: High-performance FastAPI service dedicated to AI candidate evaluation and parsing alongside Django for relational data integrity.",
        "5-Tier RBAC Architecture: Strict permission controls separating recruiters, candidates, hiring managers, project managers, and administrators.",
        "Finite State Engine: Enforces formal requisition workflow transitions: Draft → Pending Approval → Approved → Published."
      ],
      challengesAndSolutions: [
        {
          challenge: "Accurately extracting structured candidate data from unstructured, multi-format resume documents.",
          solution: "Implemented AI-assisted prompt extraction pipelines with defensive JSON schema validation and confidence checks."
        },
        {
          challenge: "Preventing unauthorized job publication or state tampering across different team roles.",
          solution: "Engineered centralized backend state validators that reject invalid transitions and record full audit logs."
        }
      ],
      outcomesAndImpact: [
        "Accelerated candidate review cycles with standardized summary cards and automated scoring.",
        "Delivered intuitive, role-specific dashboard views for recruiting teams and hiring managers."
      ],
      screenshots: [
        {
          url: "/projects/ta-ats/ta_ats_workflow.png",
          caption: "Job Description & Requisition Approval Pipeline — Dynamic role-based state engine."
        },
        {
          url: "/projects/ta-ats/ta_ats_auth_mcp.png",
          caption: "Authentication & MCP Integration Architecture — Multi-service secure routing."
        }
      ]
    },
    {
      id: "ai-automation",
      title: "AI Automation & Workflow Projects",
      tagline: "Intelligent workflow orchestration connecting APIs, webhooks, AI models, and business applications using n8n and Python.",
      category: "AI & Engineering",
      techStack: ["n8n", "REST APIs", "Webhooks", "AI APIs", "Python", "JSON", "AI Agents"],
      role: "Automation & AI Engineer",
      githubUrl: "https://github.com/lakshitsharma7",
      statusBadge: "AI Workflow Automation",
      overview: "A series of automated workflow pipelines built using n8n and Python to orchestrate asynchronous tasks, integrate REST APIs and webhooks, and execute AI agent reasoning for business operations.",
      problemStatement: "Organizations waste manual engineering hours on repetitive data entry, disparate API integrations, and uncoordinated webhook notifications across SaaS platforms.",
      keyContributions: [
        "Build AI-assisted automation workflows connecting APIs, webhooks and business applications.",
        "Explore AI agents, API integrations, workflow orchestration, JSON processing and AI model integrations using n8n.",
        "Implemented automated event routing, JSON data transformation, and conditional decision branching.",
        "Integrated AI model nodes for automated text classification, sentiment extraction, and intelligent response drafting."
      ],
      architecturePoints: [
        "n8n Visual Orchestration: Flow nodes chaining incoming webhooks, Python scripts, authentication headers, and downstream endpoints.",
        "Asynchronous JSON Processing: Schema mapping and payload normalization transforming third-party webhook events into standardized relational payloads.",
        "AI Agent Routing: Multi-prompt reasoning nodes classifying user inquiries and executing deterministic actions."
      ],
      challengesAndSolutions: [
        {
          challenge: "Managing rate-limiting and payload schema mutations across third-party webhooks.",
          solution: "Configured intelligent retry buffers, error notification hooks, and flexible JSON mapping schemas in n8n."
        },
        {
          challenge: "Ensuring deterministic responses from generative AI nodes in automated workflows.",
          solution: "Enforced strict system prompt instructions, temperature controls, and output schema validators."
        }
      ],
      outcomesAndImpact: [
        "Automated multi-step data pipelines connecting messaging, databases, and reporting systems.",
        "Eliminated repetitive manual triage workflows through intelligent event-driven automation."
      ]
    },
    {
      id: "customer-churn",
      title: "CloudSync — Customer Churn & Retention Analytics",
      tagline: "End-to-end B2B SaaS intelligence platform evaluating $17.04M ARR and 12,000 accounts with Power BI and Scikit-Learn.",
      category: "Data Analytics",
      techStack: ["Power BI", "DAX", "Python", "SQL", "Pandas", "Scikit-Learn", "PostgreSQL"],
      role: "Data Analyst & BI Developer",
      githubUrl: "https://github.com/lakshitsharma7/customer-churn-analytics",
      statusBadge: "Verified Analytics Project",
      overview: "An enterprise-grade business intelligence and churn analysis platform for a subscription SaaS business with 12,000 customer accounts and 210,000+ telemetry records, identifying churn drivers and prescribing retention actions.",
      problemStatement: "The business generated $17.04M in ARR across 8,126 active subscriptions, but customer churn escalated to 30.17%, leaking $386k in MRR ($4.63M annualized). Management lacked visibility into whether churn was driven by pricing, product usage drops, or support tickets.",
      keyContributions: [
        "Constructed an automated ETL data hygiene pipeline processing 210,000+ product telemetry records into a normalized Star Schema data model.",
        "Authored 20 analytical SQL queries using Window Functions, CTEs, and RFM cohort segmentation.",
        "Designed an interactive 6-page Power BI executive dashboard with dynamic DAX metrics (ARR, MRR Churn Rate, LTV, Customer Risk Scores).",
        "Trained a Random Forest churn classification model achieving 0.98 ROC-AUC to generate proactive early-warning customer risk scores."
      ],
      architecturePoints: [
        "Star Schema: Central fact table (subscriptions & monthly telemetry) linked to dimensions (customers, products, support tickets, billing).",
        "DAX Measures: Time intelligence formulas calculating MoM ARR contraction, cohort retention matrices, and net revenue churn.",
        "Predictive Scoring: Python inference script assigning real-time churn probability labels (Low, Medium, High Risk) to customer accounts."
      ],
      challengesAndSolutions: [
        {
          challenge: "Handling severe class imbalance and noisy telemetry logs during churn driver discovery.",
          solution: "Applied RFM behavior thresholding and SMOTE balancing to improve minority churn class recall without inflating false positives."
        },
        {
          challenge: "Visualizing multi-dimensional cohort retention without degrading Power BI cross-filtering performance.",
          solution: "Pre-aggregated monthly cohort snapshot tables in SQL, cutting Power BI visual calculation latency by 65%."
        }
      ],
      outcomesAndImpact: [
        "Identified top 3 churn drivers: low login frequency in first 30 days, unresolved Priority-1 support tickets, and monthly contract renewal cycles.",
        "Built executive dashboard pages: Executive Overview, Churn Deep Dive, Retention Cohorts, and Risk Action Matrix.",
        "Complete open-source repository with documentation, SQL queries, and actual Power BI dashboard screenshots on GitHub."
      ],
      screenshots: [
        {
          url: "/projects/churn/pbi_page1_executive_overview.png",
          caption: "Executive Overview Dashboard — Tracking $17.04M ARR Base, Net Churn Rate, and Account Health."
        },
        {
          url: "/projects/churn/pbi_page2_churn_analysis.png",
          caption: "Churn Drivers & Cohort Matrix — Root cause breakdown by contract type, product tier, and usage velocity."
        }
      ]
    },
    {
      id: "amazon-books",
      title: "Amazon Best-Selling Books Analysis",
      tagline: "Exploratory Data Analysis (EDA) uncovering pricing elasticity, review-sales correlations, and genre trends in Python.",
      category: "Data Analytics",
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      role: "Data Analyst",
      githubUrl: "https://github.com/lakshitsharma7/amazon-books-analysis",
      isPrototypeOrDemo: true,
      statusBadge: "Verified EDA Project",
      overview: "An end-to-end Python exploratory data analysis project examining consumer purchasing patterns, price-to-review elasticity, and author performance across book titles using a synthetic benchmark dataset.",
      problemStatement: "Book publishers and digital authors struggle to optimize retail book pricing and predict category sales volume without empirical insight into how ratings, review counts, and formats interact.",
      keyContributions: [
        "Engineered an automated data cleaning and deduplication pipeline in Python, handling missing attributes and normalizing text data.",
        "Conducted univariate, bivariate, and multivariate statistical analyses to explore rating distributions, price elasticity, and review volume.",
        "Generated 5 publication-ready statistical visualizations exported directly from Matplotlib and Seaborn pipelines.",
        "Structured a reproducible Jupyter Notebook and modular CLI script (`src/run_analysis.py`) for automated report exports."
      ],
      architecturePoints: [
        "Data Pipeline: Raw synthetic CSV (1,000 records) → Validation & Deduplication → Cleaned dataset (995 unique titles) → Statistical summaries.",
        "Visualization Suite: Automated generation of top-selling books, genre revenue distribution, review-to-sales correlations, and pricing density plots."
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing skewed review distributions from obscuring price elasticity patterns in standard scatter plots.",
          solution: "Applied log transformation to review counts and segment filtering by genre to extract clearer empirical correlation trends."
        }
      ],
      outcomesAndImpact: [
        "Discovered that Non-Fiction titles maintained a higher average price point while Fiction titles dominated cumulative review volume.",
        "Delivered a fully documented GitHub repository with complete charts, analysis notebooks, and structured output reports.",
        "Transparently documented synthetic dataset scope adhering to ethical data analytics practices."
      ],
      screenshots: [
        {
          url: "/projects/amazon_books/01_top_10_bestselling_books.png",
          caption: "Top 10 Best-Selling Titles — Unit sales and author volume distribution."
        },
        {
          url: "/projects/amazon_books/02_genre_sales_analysis.png",
          caption: "Genre Sales & Revenue Breakdown — Comparative performance across fiction and non-fiction categories."
        }
      ]
    },
    {
      id: "ecommerce-analytics",
      title: "E-Commerce Business Analytics Platform",
      tagline: "End-to-end analytics platform with SQL CTEs, Python data transformation, and multi-page Power BI KPI dashboards.",
      category: "Data Analytics",
      techStack: ["Python", "Pandas", "SQL", "Power BI", "DAX", "MS Excel", "NumPy"],
      role: "Data Analyst",
      githubUrl: "https://github.com/lakshitsharma7/ecommerce-business-analytics",
      statusBadge: "Verified Analytics Project",
      overview: "A comprehensive business analytics project analyzing multi-thousand transaction datasets to diagnose sales trends, customer retention, return patterns, and profitability margins across product lines.",
      problemStatement: "E-commerce retailers struggle to pinpoint product return rates, regional demand variations, and customer lifetime value due to uncleaned relational tables and siloed spreadsheets.",
      keyContributions: [
        "Executed data extraction, cleaning, and transformation pipelines using Python (Pandas & NumPy) to handle missing records and outliers.",
        "Authored complex SQL queries utilizing Window Functions, Common Table Expressions (CTEs), and Multi-table Joins for aggregate metrics.",
        "Engineered dynamic DAX measures in Power BI for Customer Acquisition Cost (CAC), Average Order Value (AOV), and Net Margin.",
        "Designed an interactive multi-page Power BI dashboard featuring geographical heatmaps, cohort views, and product category slicers."
      ],
      architecturePoints: [
        "Data pipeline: Raw CSV/SQL extracts → Python automated cleaning → Staged relational tables → Power BI Star Schema data model.",
        "DAX time-intelligence calculations for Month-over-Month (MoM) and Year-over-Year (YoY) revenue variances."
      ],
      challengesAndSolutions: [
        {
          challenge: "Resolving performance slowdowns in Power BI when evaluating complex DAX iterators over large transaction tables.",
          solution: "Restructured the data model into a clean Star Schema with pre-aggregated dimension tables, reducing query latency."
        }
      ],
      outcomesAndImpact: [
        "Identified top 15% high-return product categories and peak sales velocity timeframes.",
        "Provided transparent executive-level reporting with drill-through capabilities.",
        "Real screenshots and dashboard architecture documented on GitHub."
      ],
      screenshots: [
        {
          url: "/projects/ecommerce/sales_performance.png",
          caption: "Sales Performance Dashboard — Revenue velocity, order volumes, and monthly trends."
        },
        {
          url: "/projects/ecommerce/product_analytics.png",
          caption: "Product Analytics & Return Rates — Margin analysis and category profitability."
        }
      ]
    },
    {
      id: "trackin",
      title: "Trackin – Journey & Activity Tracking App",
      tagline: "Cross-platform mobile journey tracking application with real-time location tracking and activity history.",
      category: "Mobile & Web",
      techStack: ["React Native", "TypeScript", "Mobile GPS Telemetry", "Interactive Maps", "Local Storage"],
      role: "Mobile Developer",
      githubUrl: "https://github.com/lakshitsharma7/Trackapp",
      statusBadge: "Mobile App",
      overview: "A responsive React Native mobile application engineered for real-time journey mapping, live GPS telemetry display, and persistent route history tracking.",
      problemStatement: "Outdoor tracking apps often suffer from inaccurate polyline rendering, erratic coordinate jumps, and excessive device battery consumption during continuous background location queries.",
      keyContributions: [
        "Architected clean TypeScript components for real-time map visualization and telemetry HUD (speed, distance, elevation).",
        "Implemented GPS coordinate smoothing to filter erratic satellite jumps before polyline rendering.",
        "Built persistent local journey history storage allowing users to review past routes, durations, and average speeds."
      ],
      architecturePoints: [
        "React Native hooks-based state management synchronizing active coordinates with map camera view.",
        "Offline-capable trip logging enabling route saving without continuous data connection."
      ],
      challengesAndSolutions: [
        {
          challenge: "Handling GPS jitter that artificially inflated calculated travel distance.",
          solution: "Applied a distance threshold filter (Haversine formula check) discarding coordinate deltas below the hardware accuracy margin."
        }
      ],
      outcomesAndImpact: [
        "Clean, battery-conscious mobile tracking interface with smooth map animations.",
        "Complete open-source codebase available on GitHub."
      ]
    }
  ] as ProjectCaseStudy[],

  experience: [
    {
      company: "Indovision Services",
      role: "Software Engineer Intern",
      period: "2026 – Present",
      location: "North East Delhi, India",
      isCurrent: true,
      technologies: ["Python", "FastAPI", "Django", "React", "Next.js", "PostgreSQL", "PySide6", "PyInstaller", "REST APIs", "RBAC"],
      highlights: [
        "Develop and maintain software applications using Python, FastAPI, Django, React, Next.js and PostgreSQL.",
        "Build and integrate REST APIs for authentication, device registration, activity tracking, attendance, tasks, screenshots, synchronization and application management.",
        "Develop Workpulse, a cross-platform employee productivity monitoring application using Python and PySide6.",
        "Implement activity/session tracking, idle detection, system-health collection, screenshot capture, local data handling and backend synchronization.",
        "Develop API-driven synchronization with dynamic configuration, device tokens, batch processing and upload status handling.",
        "Work on authentication, user/device management, RBAC and role-specific application workflows.",
        "Build Windows and macOS application packaging workflows using PyInstaller, Windows installers and macOS DMG builds.",
        "Debug production issues involving APIs, HTTP errors, synchronization failures, authentication and desktop application behavior.",
        "Use AI-assisted development workflows to accelerate implementation, debugging, documentation and code analysis."
      ]
    },
    {
      company: "Nexen Bloom",
      role: "Data Analytics Intern",
      period: "Feb 2026 – April 2026",
      location: "Noida, India",
      isCurrent: false,
      technologies: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "Data Cleaning", "Data Visualization", "KPI Dashboards"],
      highlights: [
        "Work with Python, Pandas, NumPy, SQL and Power BI for data analysis and reporting.",
        "Perform data cleaning, transformation and visualization for business reporting.",
        "Build dashboards and reports to communicate KPIs and operational insights.",
        "Use SQL for data extraction, filtering, aggregation and analysis."
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      institution: "Krishna Engineering College, AKTU",
      degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
      period: "2021 – 2025",
      details: "Rigorous academic curriculum covering Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Object-Oriented Programming, and Software Engineering Principles."
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "Power BI for Beginners",
      issuer: "Microsoft / Simplilearn SkillUP",
      date: "March 2026",
      credentialId: "9956809",
      category: "Data & BI"
    },
    {
      title: "PowerBI Workshop: AI-Powered Dashboards",
      issuer: "OfficeMaster",
      date: "February 2025",
      category: "Data & BI"
    },
    {
      title: "3 Day SQL Basics Course",
      issuer: "Newton School",
      date: "March 2025",
      category: "Data & BI"
    },
    {
      title: "Python Bootcamp",
      issuer: "LetsUpgrade, NSDC & ITM Edutech",
      date: "March 2025",
      category: "Web & Programming"
    },
    {
      title: "JavaScript Bootcamp",
      issuer: "LetsUpgrade, NSDC & ITM Edutech",
      date: "March 2025",
      category: "Web & Programming"
    },
    {
      title: "ChatGPT for Everyone",
      issuer: "GUVI | HCL (Google Partner)",
      date: "May 2025",
      category: "AI & LLMs"
    }
  ] as CertificationItem[]
};

