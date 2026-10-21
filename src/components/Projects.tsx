import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import type { ProjectCaseStudy } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, FolderGit2, Cpu, BarChart3, Smartphone, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

export const Projects: React.FC = () => {
  const { projects } = portfolioConfig;
  const [activeTab, setActiveTab] = useState<'All' | 'AI & Engineering' | 'Data Analytics' | 'Mobile & Web'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  useEffect(() => {
    const handleFilterEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail && ['All', 'AI & Engineering', 'Data Analytics', 'Mobile & Web'].includes(customEvent.detail)) {
        setActiveTab(customEvent.detail as any);
      }
    };

    const handleOpenProject = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const found = projects.find(p => p.id === customEvent.detail);
      if (found) {
        setSelectedProject(found);
      }
    };

    window.addEventListener('filter-projects-tab', handleFilterEvent);
    window.addEventListener('open-project-modal', handleOpenProject);
    return () => {
      window.removeEventListener('filter-projects-tab', handleFilterEvent);
      window.removeEventListener('open-project-modal', handleOpenProject);
    };
  }, [projects]);


  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Engineering':
        return <Cpu className="w-4 h-4 text-sky-400" />;
      case 'Data Analytics':
        return <BarChart3 className="w-4 h-4 text-emerald-400" />;
      case 'Mobile & Web':
        return <Smartphone className="w-4 h-4 text-violet-400" />;
      default:
        return <FolderGit2 className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-[#090d18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-950/60 border border-sky-800/60 text-sky-400 text-xs font-mono mb-3">
              <span>FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production Systems & Practical Engineering Projects
            </h2>
            <p className="mt-3 text-slate-300/90 text-sm sm:text-base leading-relaxed">
              Real problem statements, actual contributions, and architectural solutions from my work at Indovision Services and personal open-source repositories.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            {(['All', 'AI & Engineering', 'Data Analytics', 'Mobile & Web'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  trackEvent(ANALYTICS_EVENTS.PROJECT_TAB_FILTER, { category: tab });
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-800 group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-slate-300">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono text-indigo-300 bg-indigo-950/60 border border-indigo-800/60">
                    {project.statusBadge}
                  </span>
                </div>

                {/* Project Screenshot Visual Preview */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="mb-4 overflow-hidden rounded-xl border border-slate-700/60 bg-slate-950 aspect-video relative group/img">
                    <img
                      src={project.screenshots[0].url}
                      alt={project.screenshots[0].caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-end p-2.5">
                      <span className="text-[11px] font-mono text-sky-300 truncate">
                        📊 {project.screenshots[0].caption}
                      </span>
                    </div>
                  </div>
                )}

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight mb-2">
                  {project.title}
                </h3>

                {/* Tagline / Brief Problem */}
                <p className="text-xs text-sky-400/90 font-mono mb-3">
                  Role: {project.role}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                  {project.tagline}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900 text-slate-400 border border-slate-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900 text-slate-500 border border-slate-800/80">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(project);
                    trackEvent(ANALYTICS_EVENTS.PROJECT_VIEW, { project_id: project.id, title: project.title });
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent(ANALYTICS_EVENTS.PROJECT_GITHUB_CLICK, { project_id: project.id, title: project.title, location: 'project_card' })}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-colors"
                      title="View GitHub Repository"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent(ANALYTICS_EVENTS.PROJECT_DEMO_CLICK, { project_id: project.id, title: project.title, location: 'project_card' })}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-colors"
                      title="Live Demo"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
