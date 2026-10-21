import React, { useState, useEffect, useRef } from 'react';
import { AgentOrb } from './AgentOrb';
import {
  WELCOME_MESSAGE,
  WHY_HIRE_RESPONSE,
  QUICK_PROMPTS,
  PROMPT_RESPONSES,
  SECTION_SUMMARIES,
} from './assistantData';
import type { AssistantMessage, AssistantAction } from './assistantData';
import {
  X,
  Minus,
  Sparkles,
  ChevronRight,
  ExternalLink,
  ArrowDown,
  RotateCcw,
  Compass,
} from 'lucide-react';
import { trackEvent, ANALYTICS_EVENTS } from '../../utils/analytics';

interface AIAssistantProps {
  activeSection: string;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<AssistantMessage>(WELCOME_MESSAGE);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-greeting trigger: once per browser session after a short delay
  useEffect(() => {
    const greeted = sessionStorage.getItem('lakshit_ai_greeting_shown');
    if (!greeted) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setIsSpeaking(true);
        sessionStorage.setItem('lakshit_ai_greeting_shown', 'true');
        setTimeout(() => setIsSpeaking(false), 1400);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Scroll to bottom of message content when changed
  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [currentMessage, isOpen]);

  // Handle action click
  const handleActionClick = (action: AssistantAction) => {
    setHasInteracted(true);
    setIsSpeaking(true);
    trackEvent(ANALYTICS_EVENTS.AI_GUIDE_ACTION, {
      action_id: action.actionId,
      label: action.label,
    });
    setTimeout(() => setIsSpeaking(false), 900);

    if (action.actionId === 'why_hire') {
      setCurrentMessage(WHY_HIRE_RESPONSE);
      return;
    }

    if (action.actionId === 'view_analytics' || action.actionId === 'filter_analytics_tab') {
      // Show Data Analytics tour response
      const analyticsResponse = PROMPT_RESPONSES['view_analytics'];
      setCurrentMessage(analyticsResponse);

      // Smooth scroll to projects
      const projectsEl = document.getElementById('projects');
      if (projectsEl) {
        projectsEl.scrollIntoView({ behavior: 'smooth' });
      }

      // Filter projects tab to Data Analytics
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('filter-projects-tab', { detail: 'Data Analytics' }));
      }, 300);
      return;
    }

    if (action.type === 'scroll' && action.target) {
      const el = document.getElementById(action.target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action.type === 'link' && action.target) {
      window.open(action.target, '_blank', 'noopener,noreferrer');
    }
  };

  // Handle prompt click
  const handlePromptClick = (promptId: string) => {
    setHasInteracted(true);
    setIsSpeaking(true);
    trackEvent(ANALYTICS_EVENTS.AI_GUIDE_PROMPT, { prompt_id: promptId });

    if (promptId === 'why_hire') {
      setCurrentMessage(WHY_HIRE_RESPONSE);
      setTimeout(() => setIsSpeaking(false), 800);
      return;
    }

    if (promptId === 'view_analytics') {
      handleActionClick({
        label: 'View Data Analytics Projects',
        actionId: 'view_analytics',
        type: 'action',
      });
      return;
    }

    const response = PROMPT_RESPONSES[promptId];
    if (response) {
      setCurrentMessage(response);
    }
    setTimeout(() => setIsSpeaking(false), 800);
  };

  // Summarize current active section
  const handleSummarizeSection = () => {
    setHasInteracted(true);
    setIsSpeaking(true);
    const summaryText = SECTION_SUMMARIES[activeSection] || `You are currently viewing the ${activeSection} section of Lakshit's portfolio.`;
    
    setCurrentMessage({
      id: `summary_${activeSection}_${Date.now()}`,
      sender: 'ai',
      text: `📍 Currently viewing: ${activeSection.toUpperCase()}\n\n${summaryText}`,
      actions: [
        { label: 'Why Hire Me?', actionId: 'why_hire', type: 'action' },
        { label: 'Explore My Projects', actionId: 'explore_projects', type: 'scroll', target: 'projects' },
        { label: 'View My Skills', actionId: 'view_skills', type: 'scroll', target: 'skills' },
        { label: 'Contact Me', actionId: 'contact_me', type: 'scroll', target: 'contact' },
      ],
    });

    setTimeout(() => setIsSpeaking(false), 800);
  };

  // Reset to initial welcome
  const handleResetTour = () => {
    setIsSpeaking(true);
    setCurrentMessage(WELCOME_MESSAGE);
    setTimeout(() => setIsSpeaking(false), 800);
  };

  // Format line breaks into paragraphs
  const renderFormattedText = (text: string) => {
    return text.split('\n\n').map((paragraph, idx) => (
      <p key={idx} className="mb-2.5 last:mb-0 leading-relaxed text-slate-200">
        {paragraph.split('\n').map((line, lIdx) => (
          <React.Fragment key={lIdx}>
            {line}
            {lIdx < paragraph.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    ));
  };

  return (
    <aside
      aria-label="3D AI Career Agent"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end pointer-events-none"
    >
      {/* Expanded Interactive Speech Bubble Panel */}
      {isOpen && !isMinimized && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Virtual Portfolio Guide Conversation"
          className="pointer-events-auto mb-3 w-[calc(100vw-2.5rem)] sm:w-[410px] max-h-[78vh] flex flex-col rounded-2xl bg-slate-900/95 border border-sky-500/40 shadow-2xl shadow-sky-950/60 backdrop-blur-xl overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/80 border-b border-sky-500/20">
            <div className="flex items-center gap-2.5">
              <AgentOrb size="sm" isSpeaking={isSpeaking} />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white tracking-wide">
                    Lakshit&apos;s Portfolio Guide
                  </span>
                  <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40">
                    ONLINE
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-mono">
                  Interactive Career & Project Guide
                </p>
              </div>
            </div>

            {/* Window Controls */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetTour}
                className="p-1.5 rounded-lg text-slate-400 hover:text-sky-300 hover:bg-slate-800/80 transition-colors"
                title="Restart Welcome Tour"
                aria-label="Restart Welcome Tour"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setIsMinimized(true)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
                title="Minimize Agent"
                aria-label="Minimize Agent"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-800/80 transition-colors"
                title="Close Assistant"
                aria-label="Close Assistant"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Contextual Section Helper Pill */}
          <div className="px-4 py-2 bg-slate-950/60 border-b border-slate-800/80 flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1.5 text-slate-400 font-mono">
              <Compass className="w-3 h-3 text-sky-400 animate-spin-slow" />
              <span>Section: <strong className="text-sky-300 uppercase">{activeSection}</strong></span>
            </div>
            <button
              type="button"
              onClick={handleSummarizeSection}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-sky-950/80 text-sky-300 hover:text-white hover:bg-sky-900 border border-sky-700/50 text-[10px] font-mono transition-colors"
            >
              <Sparkles className="w-2.5 h-2.5" />
              <span>Summarize Here</span>
            </button>
          </div>

          {/* Scrollable Message Body */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 text-xs sm:text-[13px] text-slate-200 space-y-3.5 max-h-[46vh] scroll-smooth"
          >
            {/* AI Speech Bubble */}
            <div className="relative p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/60 shadow-inner">
              {renderFormattedText(currentMessage.text)}

              {/* Action Buttons inside the message */}
              {currentMessage.actions && currentMessage.actions.length > 0 && (
                <div className="mt-3.5 pt-3 border-t border-slate-700/60 flex flex-col gap-1.5">
                  {currentMessage.actions.map((action) => (
                    <button
                      key={action.actionId}
                      type="button"
                      onClick={() => handleActionClick(action)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-gradient-to-r from-sky-950/70 to-indigo-950/70 hover:from-sky-900/80 hover:to-indigo-900/80 text-sky-200 hover:text-white border border-sky-700/50 hover:border-sky-400/80 transition-all text-left text-xs font-medium group"
                    >
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-3 h-3 text-sky-400 group-hover:scale-110 transition-transform" />
                        {action.label}
                      </span>
                      {action.type === 'link' ? (
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white" />
                      ) : action.type === 'scroll' ? (
                        <ArrowDown className="w-3 h-3 text-slate-400 group-hover:text-white" />
                      ) : (
                        <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Interactive Prompt Chips */}
            <div>
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                <span>Suggested Questions:</span>
              </p>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt.id}
                    type="button"
                    onClick={() => handlePromptClick(prompt.id)}
                    className="px-2.5 py-1 rounded-full bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 hover:border-sky-500/50 text-[11px] font-medium transition-all duration-150 text-left"
                  >
                    {prompt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Status Bar */}
          <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>Verified Portfolio Data</span>
            <span className="text-sky-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              Interactive Guide
            </span>
          </div>
        </div>
      )}

      {/* Floating 3D AI Character Launcher Trigger */}
      <div className="pointer-events-auto flex items-center gap-3">
        {/* Subtle Welcome Tag when closed or minimized */}
        {(!isOpen || isMinimized) && (
          <div
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
              trackEvent(ANALYTICS_EVENTS.AI_GUIDE_OPEN, { trigger: 'welcome_tag' });
            }}
            className="cursor-pointer hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-sky-500/40 shadow-xl backdrop-blur-md text-slate-200 hover:text-white hover:border-sky-400 transition-all animate-bounce"
            style={{ animationDuration: '3s' }}
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <div className="text-left">
              <p className="text-xs font-semibold">Ask Lakshit&apos;s Portfolio Guide</p>
              <p className="text-[10px] text-slate-400 font-mono">
                {hasInteracted ? 'Click to continue conversation' : 'Explore projects, skills & why hire'}
              </p>
            </div>
          </div>
        )}

        {/* 3D Agent Orb Icon Trigger */}
        <div
          role="button"
          tabIndex={0}
          aria-label={isOpen && !isMinimized ? 'Minimize AI Agent' : 'Open AI Agent'}
          onClick={() => {
            if (isOpen && !isMinimized) {
              setIsMinimized(true);
            } else {
              setIsOpen(true);
              setIsMinimized(false);
              trackEvent(ANALYTICS_EVENTS.AI_GUIDE_OPEN, { trigger: 'orb' });
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(!isOpen);
              setIsMinimized(false);
            }
          }}
          className="relative focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-full"
        >
          <AgentOrb
            size={isOpen && !isMinimized ? 'sm' : 'md'}
            isSpeaking={isSpeaking}
            className="transition-transform hover:scale-105 active:scale-95"
          />
        </div>
      </div>
    </aside>
  );
};
