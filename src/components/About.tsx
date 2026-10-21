import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { Code2, BarChart3, GraduationCap, CheckCircle2, Terminal, Database } from 'lucide-react';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

export const About: React.FC = () => {
  const { about } = portfolioConfig;

  return (
    <section id="about" className="py-20 md:py-28 bg-[#090e1a]/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-950/60 border border-sky-800/60 text-sky-400 text-xs font-mono mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {about.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            {about.overview}
          </p>
        </div>

        {/* Verified Specialization Badges (Replaced unverified metrics) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {about.verifiedFacts.map((fact, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/80 shadow-md backdrop-blur-sm hover:border-slate-700/80 transition-colors"
            >
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight bg-gradient-to-r from-sky-400 to-indigo-300 bg-clip-text text-transparent">
                {fact.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                {fact.label}
              </div>
            </div>
          ))}
        </div>

        {/* Dual Career Areas: Software Engineering & Data Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          
          {/* Software Engineering Track */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/90 hover:border-sky-500/30 transition-all duration-200">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-xl bg-sky-950/80 border border-sky-800/80 text-sky-400">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400">Core Profile</span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Software Engineering
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {about.careerAreas[0].description}
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-800/80">
              {about.careerAreas[0].skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>Production experience at Indovision Services</span>
            </div>
          </div>

          {/* Data Analytics & Business Intelligence Track */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/90 hover:border-indigo-500/30 transition-all duration-200">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-xl bg-indigo-950/80 border border-indigo-800/80 text-indigo-400">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400">Core Profile</span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Data Analytics & Automation
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {about.careerAreas[1].description}
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-800/80">
              {about.careerAreas[1].skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Database className="w-3.5 h-3.5 text-indigo-400" />
              <span>Experience at Nexen Bloom & Microsoft/Simplilearn Certified</span>
            </div>
          </div>

        </div>

        {/* Higher Education Summary Card (Cleaned - Only Verified B.Tech Degree) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900 to-indigo-950/40 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-indigo-900/30 border border-indigo-700/40 text-indigo-400 mt-1">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Krishna Engineering College, AKTU • B.Tech in Computer Science & Engineering (2021 – 2025)
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Combined academic foundations in software architecture, database management systems, and algorithms with hands-on internship projects in software engineering and data analytics.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            onClick={() => trackEvent(ANALYTICS_EVENTS.NAV_CLICK, { section: 'Projects', source: 'about_cta' })}
            className="whitespace-nowrap px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            Explore Projects & Dashboards →
          </a>
        </div>

      </div>
    </section>
  );
};
