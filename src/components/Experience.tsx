import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioConfig;

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-[#080c14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 text-xs font-mono mb-3">
            <span>CAREER PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Internships
          </h2>
          <p className="mt-3 text-slate-300/90 text-sm sm:text-base leading-relaxed">
            Verified timeline of software engineering, desktop telemetry development, and data analytics roles.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Indicator Dot */}
              <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                item.isCurrent
                  ? 'bg-sky-400 border-sky-300 shadow-lg shadow-sky-500/50'
                  : 'bg-slate-900 border-slate-600'
              }`} />

              {/* Experience Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 hover:border-slate-700/80 transition-all duration-200">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 flex-wrap">
                      <span>{item.role}</span>
                      <span className="text-sky-400 text-sm font-normal">@ {item.company}</span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {item.period}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Certificate ID Pill if applicable */}
                {item.certificateId && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-slate-300 mb-4">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Certificate ID: {item.certificateId}</span>
                  </div>
                )}

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6 text-sm text-slate-300">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    Tech:
                  </span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
