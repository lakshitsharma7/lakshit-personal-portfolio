import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { Cpu, Server, Monitor, BarChart3, GraduationCap, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const { about } = portfolioConfig;

  const pillarIcons = [
    <Cpu className="w-5 h-5 text-sky-400" />,
    <Server className="w-5 h-5 text-indigo-400" />,
    <Monitor className="w-5 h-5 text-violet-400" />,
    <BarChart3 className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#090e1a]/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-950/60 border border-sky-800/60 text-sky-400 text-xs font-mono mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering reliable systems with modern AI-assisted workflows.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            {about.overview}
          </p>
        </div>

        {/* Fact Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {about.verifiedFacts.map((fact, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/80 shadow-md backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight bg-gradient-to-r from-sky-400 to-indigo-300 bg-clip-text text-transparent">
                {fact.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                {fact.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Technical Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center mb-5">
                  {pillarIcons[index % pillarIcons.length]}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {area.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {area.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-sky-400/90 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified in production</span>
              </div>
            </div>
          ))}
        </div>

        {/* Background & Education Summary Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900 to-indigo-950/40 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-indigo-900/30 border border-indigo-700/40 text-indigo-400 mt-1">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Krishna Engineering College • B.Tech in CSE (2021 – 2025)
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Combined academic foundations in software architecture, data systems, and algorithms with hands-on enterprise internship projects at Indovision Services, Nexen Bloom, and IBM SkillsBuild.
              </p>
            </div>
          </div>
          <a
            href="#experience"
            className="whitespace-nowrap px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            Review Experience Timeline →
          </a>
        </div>

      </div>
    </section>
  );
};
