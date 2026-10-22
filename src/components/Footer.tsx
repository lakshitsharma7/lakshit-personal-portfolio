import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { MessageSquare, Mail, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

export const Footer: React.FC = () => {
  const { personal } = portfolioConfig;
  const currentYear = 2026;

  return (
    <footer className="bg-transparent border-t border-slate-800/80 py-12 relative z-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">
              {personal.initials}
            </div>
            <div>
              <span className="font-bold text-slate-200 text-sm block">
                {personal.name}
              </span>
              <span className="text-slate-400 text-[11px] font-mono">
                Software Engineer
              </span>
            </div>
          </div>

          {/* Quick anchor links */}
          <nav className="flex items-center gap-6 flex-wrap justify-center text-xs font-medium">
            {(['about', 'skills', 'projects', 'experience', 'education', 'contact'] as const).map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => trackEvent(ANALYTICS_EVENTS.NAV_CLICK, { destination: section, location: 'footer' })}
                className="hover:text-white capitalize transition-colors"
              >
                {section}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(ANALYTICS_EVENTS.GITHUB_CLICK, { location: 'footer' })}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(ANALYTICS_EVENTS.LINKEDIN_CLICK, { location: 'footer' })}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'footer' })}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              onClick={() => trackEvent(ANALYTICS_EVENTS.EMAIL_CLICK, { location: 'footer' })}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personal.resumeDownloadPath}
              download="Lakshit_Sharma_Resume.pdf"
              onClick={() => trackEvent(ANALYTICS_EVENTS.RESUME_DOWNLOAD, { location: 'footer' })}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="Download Resume"
              title="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400 text-[11px] font-mono">
          <div>
            &copy; {currentYear} {personal.name}. All verified facts sourced directly from official resume and verified GitHub repositories.
          </div>
          <div className="text-slate-400">
            North East Delhi, India • Built with React, Vite & Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
};
