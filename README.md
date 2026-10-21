# Lakshit Sharma — Personal Portfolio Website

A modern, fast, recruiter-focused personal portfolio website engineered for **Lakshit Sharma** (Software Engineer & Full-Stack Developer).

Built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed with rich dark aesthetics, restrained electric blue/indigo accents, smooth micro-interactions, and verified career data sourced directly from Lakshit's official resume and GitHub repositories.

---

## 🌟 Key Features

- **Personal Branding & Positioning**:
  - Clear, authentic identity: **Software Engineer | Python, APIs & Automation**.
  - Custom initials-based avatar badge with geometric gradient halos.
  - Zero fabricated claims, fake testimonials, or placeholder metrics.
- **Deep Technical Case Studies**:
  - Interactive modal viewer for flagship systems like **Workpulse** (PySide6 / FastAPI telemetry system) and **TA-ATS** (Applicant Tracking System with 5-tier RBAC).
  - Outlines Problem Statements, Contributions, Architecture Breakdown, Challenges & Solutions, and Verified Outcomes.
- **Resume Integration**:
  - Downloadable official PDF: `/Lakshit_Sharma_Resume.pdf` (stored in `public/Lakshit_Sharma_Resume.pdf`).
  - Dual CTAs: **View Resume** (opens in new tab) and **Download CV** (direct download).
- **Verified Profile Hub**:
  - Direct links to **GitHub** (`github.com/lakshitsharma7`), **LinkedIn**, **Naukri**, **Email**, and **WhatsApp** (`wa.me/919910933221`).
  - Single configuration file (`src/data/portfolioData.ts`) for updating all contact details.
- **Interactive Tools**:
  - Live filter chips for Projects (AI & Engineering, Data Analytics, Mobile & Web).
  - Category selector for Technical Skills.
  - One-click clipboard copy for email and phone with instant checkmark feedback.
  - Direct message drafter that creates a pre-formatted email in the recruiter's native client.
- **Responsive & Accessible**:
  - Mobile drawer navigation with smooth slide-over.
  - Dark mode color palette (`#080c14`, `#0f172a`, `#38bdf8`, `#6366f1`).
  - Reduced-motion accessibility media query support.
  - Floating **Back to Top** button.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Social Icons
- **Fonts**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation
```bash
# Clone or navigate to the project directory
cd "d:/React Native/port"

# Install dependencies
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
# Typecheck and compile production bundle
npm run build

# Preview production build locally
npm run preview
```
Production assets are output to the `dist/` directory.

---

## ⚙️ Updating Profile & Contact Details

All profile links, contact information, projects, and career history are centralized in a single file:
```
src/data/portfolioData.ts
```

To update your Naukri profile link, phone, or email, edit `portfolioConfig.personal`:
```typescript
export const portfolioConfig = {
  personal: {
    name: "Lakshit Sharma",
    email: "lakshitharitash@gmail.com",
    phone: "+91 9910933221",
    whatsappUrl: "https://wa.me/919910933221",
    githubUrl: "https://github.com/lakshitsharma7",
    linkedinUrl: "https://www.linkedin.com/in/lakshit-sharma-448949289",
    naukriUrl: "YOUR_PUBLIC_NAUKRI_PROFILE_URL_HERE",
    resumeDownloadPath: "/Lakshit_Sharma_Resume.pdf",
    // ...
  }
}
```

To replace the resume PDF with an updated version, replace:
```
public/Lakshit_Sharma_Resume.pdf
```

---

## 🌐 Deployment Instructions

### Deploy to Netlify (Recommended)
1. Push your repository to GitHub (`github.com/lakshitsharma7/portfolio`).
2. Log in to [Netlify](https://app.netlify.com/) and click **Add new site** > **Import an existing project**.
3. Select your GitHub repository.
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.

### Deploy to Vercel
1. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
2. Import your GitHub repository.
3. Framework Preset: **Vite**.
4. Click **Deploy**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, add your base repository path if deploying under a subdirectory:
   ```typescript
   export default defineConfig({
     base: '/portfolio/', // or '/' if using custom domain
     plugins: [react(), tailwindcss()],
   })
   ```
2. Build and push the `dist/` directory to the `gh-pages` branch.

---

## 📊 Private Visitor Analytics (Google Analytics 4 + Microsoft Clarity)

The portfolio includes a lightweight, privacy-focused dual-analytics integration:
- **Google Analytics 4 (GA4)**: Anonymous traffic statistics, country distribution, device types, traffic sources, page views, and custom interaction events.
- **Microsoft Clarity**: Free heatmaps and session recordings to see how visitors explore projects and navigate the portfolio.

**Privacy Guarantee:**
- Dashboards remain **100% private** to you via your authenticated Google Analytics and Microsoft Clarity accounts.
- Zero public visitor counters or tracking badges are visible on the website.
- Zero PII (Personally Identifiable Information) is captured — contact form message contents, sender names, and email addresses are never recorded.
- If ad-blockers block analytics or if IDs are omitted, the website continues to function flawlessly without errors.

### Setup Instructions:

1. **Google Analytics 4**:
   - Create a free property at [Google Analytics](https://analytics.google.com/).
   - Under **Admin > Data Streams > Web**, copy your **Measurement ID** (format: `G-XXXXXXXXXX`).
2. **Microsoft Clarity**:
   - Create a free project at [Microsoft Clarity](https://clarity.microsoft.com/).
   - Under **Settings > Overview**, copy your **Project ID**.
3. **Configuration & Secrets**:
   - Environment variables configured:
     ```env
     VITE_GA_MEASUREMENT_ID=G-G6SLSQJHM8
     VITE_CLARITY_PROJECT_ID=z1456cvrem
     ```
   - Automatically injected during GitHub Actions CI/CD workflows from encrypted repository secrets.
4. **Verified Live Deployments**:
   - Primary URL: [https://lakshitsharma7.github.io/](https://lakshitsharma7.github.io/)
   - Portfolio Mirror: [https://lakshitsharma7.github.io/lakshit-personal-portfolio/](https://lakshitsharma7.github.io/lakshit-personal-portfolio/)

---

## 📁 Project Structure

```
d:/React Native/port/
├── public/
│   ├── favicon.svg               # Custom LS branding favicon
│   └── Lakshit_Sharma_Resume.pdf # Official downloadable PDF resume
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky header with active section tracking & mobile menu
│   │   ├── Hero.tsx              # Hero banner with avatar badge, headline & CTAs
│   │   ├── About.tsx             # Engineering narrative & verified facts
│   │   ├── Skills.tsx            # Categorized technical competencies & filter chips
│   │   ├── Projects.tsx          # Filterable project gallery
│   │   ├── ProjectModal.tsx      # Deep-dive interactive case study viewer
│   │   ├── Experience.tsx        # Career & internship vertical timeline
│   │   ├── EducationCertifications.tsx # Degree & certification cards
│   │   ├── Contact.tsx           # Working communication hub & message drafter
│   │   ├── Footer.tsx            # Footer with copyright & quick links
│   │   ├── BackToTop.tsx         # Smooth floating back to top button
│   │   └── SocialIcons.tsx       # Crisp SVG icons for GitHub, LinkedIn, WhatsApp
│   ├── data/
│   │   └── portfolioData.ts      # Centralized source of truth for all portfolio data
│   ├── App.tsx                   # Main layout container
│   ├── index.css                 # Tailwind CSS v4 & custom glassmorphism styles
│   └── main.tsx                  # React DOM root entry
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📋 Quality Assurance & Verification Checklist

- [x] Full source of truth adherence to `lakshit_sharma_resume_19_10_2026.pdf`.
- [x] Verified active repositories linked (`ihrmsMonitor`, `ATS-MINI`, `ecommerce-business-analytics`, `Trackapp`).
- [x] Official PDF resume copied to `public/Lakshit_Sharma_Resume.pdf` and verified in build (`dist/Lakshit_Sharma_Resume.pdf`).
- [x] Production build passes cleanly with zero TypeScript errors (`tsc -b && vite build` built in <1s).
- [x] Tested with browser agent: Hero, Navigation, Case Study Modal, Category Filters, Responsive layout, and Forms.
- [x] Accessible contrast, semantic HTML, and zero third-party fake message submissions.
