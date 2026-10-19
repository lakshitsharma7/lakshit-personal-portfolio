import React, { useEffect } from 'react';
import type { ProjectCaseStudy } from '../data/portfolioData';
import { X, ExternalLink, CheckCircle, AlertTriangle, Layers, Target, Award } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="relative w-full max-w-3xl bg-[#0c1220] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between p-6 sm:p-8 border-b border-slate-800 bg-slate-900/60 sticky top-0 z-20 backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-sky-950/80 border border-sky-800/80 text-sky-400">
                  {project.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-indigo-950/80 border border-indigo-800/80 text-indigo-300">
                  {project.statusBadge}
                </span>
                {project.isPrototypeOrDemo && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-950/80 border border-amber-800/80 text-amber-300">
                    Prototype / Demo
                  </span>
                )}
              </div>
              <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-xs text-sky-400 font-mono mt-1">
                Role: {project.role}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
            
            {/* Project Overview */}
            <div>
              <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-sky-400" />
                <span>Executive Overview</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Problem Statement */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="text-xs uppercase font-mono tracking-wider text-amber-400 mb-1.5 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>The Core Problem</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            {/* Project Visuals & Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <span className="text-sky-400">📊</span>
                  <span>Verified Project Screenshots & Dashboards</span>
                </h3>
                <div className="space-y-4">
                  {project.screenshots.map((shot, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-lg">
                      <img
                        src={shot.url}
                        alt={shot.caption}
                        className="w-full h-auto object-contain max-h-96 mx-auto"
                        loading="lazy"
                      />
                      <div className="p-2.5 bg-slate-900/90 border-t border-slate-800 text-xs font-mono text-sky-300">
                        {shot.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* My Actual Contributions */}
            <div>
              <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>My Actual Contributions</span>
              </h3>
              <ul className="space-y-2">
                {project.keyContributions.map((contrib, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Architecture & Approach */}
            <div>
              <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>Architecture & Implementation Approach</span>
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.architecturePoints.map((arch, i) => (
                  <div key={i} className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono">
                    <span className="text-indigo-400 mr-2 font-bold">0{i + 1}.</span>
                    {arch}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Challenges & Solutions */}
            <div>
              <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
                Key Technical Challenges & Resolutions
              </h3>
              <div className="space-y-3">
                {project.challengesAndSolutions.map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm">
                    <div className="text-rose-300/90 font-medium mb-1.5 flex items-start gap-2">
                      <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-rose-950/80 border border-rose-800 text-rose-300">Challenge</span>
                      <span>{item.challenge}</span>
                    </div>
                    <div className="text-emerald-300/90 mt-2 flex items-start gap-2">
                      <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-300">Solution</span>
                      <span>{item.solution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes & Verified Impact */}
            <div>
              <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-sky-400" />
                <span>Verified Outcomes</span>
              </h3>
              <ul className="space-y-1.5">
                {project.outcomesAndImpact.map((outcome, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-sky-400 font-bold">✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Chip Cloud */}
            <div>
              <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-6 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
