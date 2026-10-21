import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { 
  Mail, 
  FileDown, 
  ArrowRight, 
  MapPin, 
  Briefcase, 
  ChevronDown, 
  Terminal, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

export const Hero: React.FC = () => {
  const { personal } = portfolioConfig;

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-radial-gradient"
    >
      {/* Decorative background grid and glow blobs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Main Hero Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs text-slate-300 mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-slate-300">Software Engineer Intern</span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-sky-400" />
                {personal.location}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>

            {/* Role / Headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span>Software Engineer</span>
              <span className="text-sky-500 hidden sm:inline">•</span>
              <span className="text-slate-400">AI | GenAI | Python | FastAPI | Django | React | Automation</span>
            </h2>

            {/* Professional Verified Summary */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              {personal.positioning} {personal.shortBio}
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#projects"
                onClick={() => trackEvent(ANALYTICS_EVENTS.NAV_CLICK, { section: 'Projects', source: 'hero_cta' })}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeDownloadPath}
                download="Lakshit_Sharma_Resume.pdf"
                onClick={() => trackEvent(ANALYTICS_EVENTS.RESUME_DOWNLOAD, { location: 'hero_cta' })}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Profiles and Channels */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6 border-t border-slate-800/80">
              <span className="text-xs uppercase tracking-wider text-slate-300 font-mono font-medium">
                Direct Profiles:
              </span>
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.GITHUB_CLICK, { location: 'hero' })}
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub: github.com/lakshitsharma7"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.LINKEDIN_CLICK, { location: 'hero' })}
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-sky-400 border border-slate-800 hover:border-slate-700 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'hero' })}
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 hover:border-slate-700 transition-colors"
                  aria-label="WhatsApp Chat"
                  title="Direct WhatsApp Chat"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  onClick={() => trackEvent(ANALYTICS_EVENTS.EMAIL_CLICK, { location: 'hero' })}
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-indigo-400 border border-slate-800 hover:border-slate-700 transition-colors"
                  aria-label="Send Email"
                  title={`Email: ${personal.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href={personal.naukriUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.NAUKRI_CLICK, { location: 'hero' })}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-sky-300 text-xs font-medium border border-slate-800 hover:border-slate-700 transition-colors"
                  aria-label="Naukri Profile"
                  title="Naukri Candidate Profile"
                >
                  <span>Naukri</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Avatar and Tech Badge Showcase */}
          <div className="w-full max-w-md lg:w-96 flex flex-col items-center">
            <div className="relative">
              {/* Outer decorative halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-600 rounded-3xl blur-xl opacity-30 animate-pulse" />
              
              {/* Card Container */}
              <div className="relative bg-gradient-to-b from-slate-900 via-slate-900/90 to-[#0b101d] border border-slate-800/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
                {/* Initials Avatar Badge */}
                <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-violet-600 p-[2px] shadow-inner mb-6">
                  <div className="w-full h-full bg-[#090d16] rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-500/10 to-transparent pointer-events-none" />
                    <span className="text-4xl font-extrabold tracking-tight bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                      {personal.initials}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-sky-400 mt-1">
                      Engineer
                    </span>
                  </div>
                </div>

                {/* Identity & Current Role */}
                <div className="text-center mb-6">
                  <div className="font-bold text-white text-lg tracking-tight">
                    {personal.name}
                  </div>
                  <div className="text-xs text-sky-400/90 font-mono mt-0.5">
                    Indovision Services (Intern)
                  </div>
                </div>

                {/* Technical Stack Highlights */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Terminal className="w-3.5 h-3.5 text-sky-400" />
                      Core Backend
                    </span>
                    <span className="font-mono text-slate-200">Python • FastAPI • Django</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                      Frontend & UI
                    </span>
                    <span className="font-mono text-slate-200">React.js • Next.js</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <span className="text-violet-400 font-bold">⚡</span>
                      Desktop & AI
                    </span>
                    <span className="font-mono text-slate-200">PySide6 • GenAI • n8n</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <span className="text-emerald-400 font-bold">📊</span>
                      Data & Analytics
                    </span>
                    <span className="font-mono text-slate-200">PostgreSQL • SQL • Power BI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <a
            href="#about"
            onClick={() => trackEvent(ANALYTICS_EVENTS.NAV_CLICK, { section: 'About', source: 'hero_scroll_indicator' })}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Explore Experience</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-slate-400 group-hover:text-sky-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
