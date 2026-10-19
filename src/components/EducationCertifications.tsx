import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, CheckCircle } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  const { education, certifications } = portfolioConfig;
  const [certFilter, setCertFilter] = useState<'All' | 'Data & BI' | 'AI & LLMs' | 'Web & Programming'>('All');

  const filteredCerts = certFilter === 'All'
    ? certifications
    : certifications.filter(c => c.category === certFilter);

  return (
    <section id="education" className="py-20 md:py-28 relative bg-[#090d18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Education Sub-Section */}
        <div className="mb-20">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-950/60 border border-sky-800/60 text-sky-400 text-xs font-mono mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Education & Degrees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-800/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-sky-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-mono bg-sky-950/80 border border-sky-800 text-sky-300 font-bold">
                      {item.grade}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight mb-1">
                    {item.institution}
                  </h3>
                  <p className="text-xs text-indigo-400 font-mono mb-3">
                    {item.degree}
                  </p>
                  {item.details && (
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Sub-Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/60 border border-amber-800/60 text-amber-400 text-xs font-mono mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>CREDENTIALS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Certifications & Technical Training
              </h2>
              <p className="mt-2 text-slate-300 text-sm">
                Industry-recognized training in Power BI, SQL, AI, and Full-Stack Web Development.
              </p>
            </div>

            {/* Cert Filter Buttons */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {(['All', 'Data & BI', 'AI & LLMs', 'Web & Programming'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setCertFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    certFilter === filter
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCerts.map((cert, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                    <span className="text-amber-400 font-medium">{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-100 mb-2">
                    {cert.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    Verified
                  </span>
                  {cert.credentialId && (
                    <span className="text-slate-400">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
