import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { Code2, Server, Layout, Sparkles, Database, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const { categories } = portfolioConfig.skills;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming & Scripting": <Code2 className="w-5 h-5 text-sky-400" />,
    "Backend & API Engineering": <Server className="w-5 h-5 text-indigo-400" />,
    "Frontend & Web Development": <Layout className="w-5 h-5 text-violet-400" />,
    "AI, GenAI & Automation": <Sparkles className="w-5 h-5 text-amber-400" />,
    "Databases & Data Analytics": <Database className="w-5 h-5 text-emerald-400" />,
    "Desktop, DevOps & Tools": <Wrench className="w-5 h-5 text-pink-400" />
  };

  const filteredCategories = selectedCategory === 'All'
    ? categories
    : categories.filter(c => c.name === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 text-xs font-mono mb-3">
              <span>SKILLS & TECHNOLOGIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Technical Stack & Competencies
            </h2>
            <p className="mt-3 text-slate-300/90 text-sm sm:text-base leading-relaxed">
              Every technology listed here is actively used in my production internship work, open-source repositories, or verified technical certifications.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Categories
            </button>
            {categories.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedCategory(c.name)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === c.name
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {c.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.name}
              className="glass-panel p-6 rounded-2xl border border-slate-800/90 hover:border-slate-700/80 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  {categoryIcons[cat.name] || <Code2 className="w-5 h-5 text-sky-400" />}
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {cat.name}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/80 text-slate-200 border border-slate-800 hover:border-slate-700 hover:text-white hover:bg-slate-800/60 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
