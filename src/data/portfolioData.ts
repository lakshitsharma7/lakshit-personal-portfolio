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
    headline: "AI-Assisted Software Engineer | Data Analytics & Automation",
    positioning: "Software Engineer specializing in AI-assisted applications, data analytics dashboards, FastAPI & Django backends, React & Next.js interfaces, and cross-platform desktop telemetry systems.",
    location: "North East Delhi, India",
    email: "lakshitharitash@gmail.com",
    phone: "+91 9910933221",
    whatsappUrl: "https://wa.me/919910933221?text=Hi%20Lakshit,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect!",
    githubUrl: "https://github.com/lakshitsharma7",
    linkedinUrl: "https://www.linkedin.com/in/lakshit-sharma-448949289",
    naukriUrl: "https://www.naukri.com/mnjuser/profile",
    resumeDownloadPath: "/Lakshit_Sharma_Resume.pdf",
    shortBio: "Hands-on software engineer and data analyst with production experience across API engineering, business analytics dashboards, desktop telemetry, and automated AI pipelines. I focus on reliable architectures, empirical data insights, and pragmatic problem-solving.",
  },
  
  about: {
    overview: "I am a Software Engineer Intern with hands-on experience building AI-assisted software applications, automation workflows, APIs, dashboards, and employee productivity systems. Experienced with Python, FastAPI, Django, React, Next.js, PostgreSQL, REST APIs, SQL, Power BI, and modern AI-assisted development workflows.",
    focusAreas: [
      {
        title: "Data Analytics & Dashboards",
        description: "Transforming complex datasets into actionable executive insights with Power BI, advanced DAX modeling, SQL queries, and Python data visualization."
      },
      {
        title: "AI-Assisted Engineering",
        description: "Integrating LLM capabilities, prompt orchestration, and intelligent APIs to accelerate real-world developer and recruiter workflows."
      },
      {
        title: "Robust Backend & APIs",
        description: "Designing RESTful endpoints with FastAPI & Django, implementing JWT/session authentication, strict RBAC, and error-resilient database transactions."
      },
      {
        title: "Desktop Telemetry & Sync",
        description: "Developing cross-platform desktop monitoring applications in PySide6 with offline-first SQLite caching and dynamic batch synchronization."
      }
    ],
    verifiedFacts: [
      { label: "Engineering Degree", value: "B.Tech CSE" },
      { label: "Production & Live Apps", value: "3+ Core Systems" },
      { label: "Professional Internships", value: "4 Completed/Ongoing" },
      { label: "Verified Repositories", value: "8+ on GitHub" }
    ]
  },

  skills: {
    categories: [
      {
        name: "Data Analytics & Business Intelligence",
        skills: ["Power BI", "DAX Measures", "Data Cleaning", "KPI Reporting", "Pandas", "NumPy", "SQL Analytics", "Seaborn / Matplotlib", "Excel Pivot & Power Query"]
      },
      {
        name: "Programming & Scripting",
        skills: ["Python", "JavaScript", "SQL", "HTML5", "CSS3", "TypeScript Basics"]
      },
      {
        name: "Backend & API Engineering",
        skills: ["FastAPI", "Django", "REST APIs", "API Integration", "Webhooks", "JSON Serialization", "RBAC", "Authentication"]
      },
      {
        name: "Frontend & Web Development",
        skills: ["React.js", "Next.js", "Vite", "Tailwind CSS", "Responsive UI", "State Management"]
      },
      {
        name: "AI, GenAI & Automation",
        skills: ["Generative AI", "AI-Assisted Development", "AI APIs", "Prompt Engineering", "AI Agents", "LLM Integration", "n8n Workflows"]
      },
      {
        name: "Desktop, DevOps & Tools",
        skills: ["PySide6", "PyInstaller (EXE/DMG)", "Jenkins CI/CD", "Git & GitHub", "Postman", "VS Code", "Figma"]
      }
    ]
  },

  projects: [
    {
      id: "customer-churn",
      title: "CloudSync — Customer Churn & Retention Analytics",
      tagline: "End-to-end B2B SaaS intelligence platform evaluating $17.04M ARR and 12,000 accounts with Power BI and Scikit-Learn.",
      category: "Data Analytics",
      techStack: ["Power BI", "DAX", "Python", "SQL", "Pandas", "Scikit-Learn", "PostgreSQL / SQLite"],
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
      techStack: ["Python", "Pandas", "SQL", "Power BI", "DAX", "MS Excel", "Chart.js"],
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
      id: "workpulse",
      title: "Workpulse – Employee Productivity Platform",
      tagline: "Cross-platform desktop tracking application with offline-first telemetry and secure batch synchronization.",
      category: "AI & Engineering",
      techStack: ["Python", "PySide6", "REST APIs", "PostgreSQL", "SQLite", "PyInstaller", "Jenkins"],
      role: "Core Desktop & API Engineer (Internship)",
      githubUrl: "https://github.com/lakshitsharma7/ihrmsMonitor",
      statusBadge: "Enterprise Tool",
      overview: "Workpulse is a lightweight cross-platform desktop application designed to track employee activity sessions, active/idle time calculation, system-health metrics, and periodic screenshot captures with reliable background synchronization.",
      problemStatement: "Modern hybrid and remote teams need non-intrusive, reliable productivity tracking that survives erratic network connectivity, protects sensitive data, and operates with zero noticeable CPU overhead on Windows and macOS workstations.",
      keyContributions: [
        "Architected the PySide6 desktop client interface and background event capture loop.",
        "Engineered an offline-first caching mechanism using local SQLite to queue activity logs during network dropouts.",
        "Implemented dynamic device token enrollment and RBAC-governed REST API synchronization with configurable upload batch intervals.",
        "Built automated build and packaging scripts using PyInstaller for Windows installer (.exe) and macOS application bundles (.dmg).",
        "Configured Jenkins CI/CD pipelines to automate application testing, compilation, and version release packaging."
      ],
      architecturePoints: [
        "Multi-threaded architecture: Dedicated OS hook thread prevents GUI stutter during keyboard/mouse activity calculation.",
        "Local queue worker: Periodically drains cached events to backend REST endpoints with backoff retries and payload compression.",
        "Device Authentication: Hardware-bound dynamic enrollment tokens ensure anti-spoofing and session integrity."
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing UI freeze and high CPU utilization during high-frequency input monitoring and screenshot encoding.",
          solution: "Decoupled the capture worker into an isolated QThread and implemented event debouncing with lightweight bitmap compression."
        },
        {
          challenge: "Managing packet loss and sync race conditions when laptops sleep or switch Wi-Fi networks.",
          solution: "Implemented transactional SQLite write-ahead logging (WAL) with batch status markers to eliminate duplicate sync records."
        }
      ],
      outcomesAndImpact: [
        "Built production-ready desktop binaries currently utilized in enterprise monitoring workflows.",
        "Successfully packaged and distributed across Windows and macOS environments.",
        "Zero data loss achieved during offline disconnect simulations."
      ]
    },
    {
      id: "ta-ats",
      title: "TA-ATS – AI-Powered Talent Acquisition Platform",
      tagline: "End-to-end recruitment management system with multi-role approval state machine and AI resume parsing.",
      category: "AI & Engineering",
      techStack: ["Next.js", "React", "FastAPI", "Django", "PostgreSQL", "Tailwind CSS", "AI APIs"],
      role: "Full-Stack Engineer",
      githubUrl: "https://github.com/lakshitsharma7/ATS-MINI",
      isPrototypeOrDemo: false,
      statusBadge: "Full-Stack Web App",
      overview: "A modern Applicant Tracking System engineered to streamline candidate sourcing, resume evaluation, role-based requisition workflows, and recruitment state governance.",
      problemStatement: "Recruitment teams face high coordination delays when requisitions pass between recruiters, hiring managers, and administrators without strict state tracking or automated candidate screening.",
      keyContributions: [
        "Built responsive frontend modules using Next.js, React, and Tailwind CSS with real-time requisition dashboards.",
        "Structured backend microservices using FastAPI for high-throughput AI candidate parsing and Django for relational data management.",
        "Implemented rigorous 5-tier Role-Based Access Control (Recruiter, Candidate, Hiring Manager, PM, Administrator).",
        "Engineered the candidate requisition approval state engine: Draft → Pending Approval → Approved → Published."
      ],
      architecturePoints: [
        "FastAPI AI ingestion pipeline that parses unstructured resume PDFs into structured candidate profiles using strict schema validation.",
        "Normalized PostgreSQL database schema tracking candidate status history and audit events.",
        "Secure JWT-based authentication with granular permission decorators."
      ],
      challengesAndSolutions: [
        {
          challenge: "Handling varied resume formatting (multi-column layouts, tables, scanned docs) during automated profile extraction.",
          solution: "Engineered prompt pipelines with defensive fallback schemas and confidence scoring to flag low-confidence parses for human review."
        },
        {
          challenge: "Enforcing complex state machine transitions to prevent unauthorized job publishing.",
          solution: "Created centralized Django state validators that reject invalid state mutations and log role audit events."
        }
      ],
      outcomesAndImpact: [
        "Accelerated candidate review cycles with standardized summary views.",
        "Delivered a clean, intuitive recruiter UI supporting role-specific filters and approval queues."
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
      period: "Apr 2026 – Present",
      location: "New Delhi, India",
      isCurrent: true,
      technologies: ["Python", "FastAPI", "Django", "React", "Next.js", "PostgreSQL", "PySide6", "PyInstaller", "Jenkins"],
      highlights: [
        "Develop and maintain production software applications using Python, FastAPI, Django, React, Next.js, and PostgreSQL.",
        "Build and integrate multiple REST APIs for authentication, device registration, activity tracking, attendance, screenshot capture, and data synchronization.",
        "Engineer Workpulse, a cross-platform employee productivity monitoring application using Python and PySide6.",
        "Implement activity/session tracking, idle detection, system-health telemetry, screenshot capture, and local-first data synchronization.",
        "Develop API-driven synchronization with dynamic configuration, device tokens, batch processing, and upload status handling.",
        "Work on authentication, user/device management, role-based access control (RBAC), and role-specific workflows.",
        "Build Windows and macOS application packaging workflows using PyInstaller, Windows installers, and macOS DMG builds.",
        "Configure Jenkins CI/CD pipelines to automate application build, testing, and deployment workflows.",
        "Debug production issues involving APIs, HTTP errors, synchronization failures, and desktop application behavior.",
        "Leverage AI-assisted development workflows to accelerate implementation, debugging, documentation, and code analysis."
      ]
    },
    {
      company: "Nexen Bloom",
      role: "Data Analytics Intern",
      period: "Feb 2026 – Apr 2026",
      location: "Noida, India",
      isCurrent: false,
      technologies: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "Data Cleaning", "Data Visualization"],
      highlights: [
        "Worked with Python, Pandas, NumPy, SQL, and Power BI for data analysis and reporting.",
        "Performed end-to-end data cleaning, transformation, and visualization for business reporting.",
        "Built interactive dashboards and reports to communicate KPIs and operational insights to stakeholders.",
        "Authored SQL queries for data extraction, filtering, aggregation, and analytical drill-downs."
      ]
    },
    {
      company: "CSRBOX & IBM SkillsBuild",
      role: "Front-end Web Development Intern",
      period: "Jun 2024 – Aug 2024",
      location: "Remote / Internship Program (6 Weeks)",
      isCurrent: false,
      certificateId: "1TRJTOBbJq1MSszfzN6YxeofV_cyHpVub",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
      highlights: [
        "Completed an intensive 6-week Summer Internship Program focused on modern front-end web development standards.",
        "Built responsive, accessible web interfaces adhering to modern DOM manipulation and styling principles.",
        "Earned verified certification under the IBM SkillsBuild & CSRBOX technical initiative."
      ]
    },
    {
      company: "CodSoft",
      role: "Web Development Intern",
      period: "Aug 2023 – Sep 2023",
      location: "Remote / Internship Program (4 Weeks)",
      isCurrent: false,
      certificateId: "5371c18",
      technologies: ["HTML5", "CSS3", "JavaScript", "UI Components"],
      highlights: [
        "Developed web applications and practical frontend UI modules during a 4-week summer internship.",
        "Enhanced fundamentals in responsive CSS layouts, interactive JavaScript components, and version control."
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      institution: "Krishna Engineering College",
      degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
      period: "2021 – 2025",
      details: "Comprehensive academic coursework covering Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Object-Oriented Programming, and Software Engineering Principles."
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
    },
    {
      title: "Front-end Web Development Internship Certificate",
      issuer: "CSRBOX & IBM SkillsBuild",
      date: "August 2024",
      credentialId: "1TRJTOBbJq1MSszfzN6YxeofV_cyHpVub",
      category: "Web & Programming"
    },
    {
      title: "IBM SkillsBuild: Web Development Basics, JS & Deployment",
      issuer: "IBM SkillsBuild",
      date: "July 2024",
      category: "Web & Programming"
    },
    {
      title: "Web Development Internship Certificate",
      issuer: "CodSoft",
      date: "September 2023",
      credentialId: "5371c18",
      category: "Web & Programming"
    },
    {
      title: "GUVI Certified in Essential UI/UX Skills",
      issuer: "Guvi HCL",
      date: "2024",
      category: "Web & Programming"
    }
  ] as CertificationItem[]
};
