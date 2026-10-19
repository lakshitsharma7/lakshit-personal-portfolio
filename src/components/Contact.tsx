import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { 
  Mail, 
  MessageSquare, 
  FileDown, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const { personal } = portfolioConfig;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form states for mailto generator
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(subject || `Inquiry from ${senderName || 'Portfolio Visitor'}`);
    const encodedBody = encodeURIComponent(
      `Hi Lakshit,\n\n${message}\n\nFrom:\n${senderName || 'Anonymous'}\nEmail: ${senderEmail || 'Not provided'}`
    );
    window.location.href = `mailto:${personal.email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#080c14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-mono mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect & Discuss Opportunities
          </h2>
          <p className="mt-3 text-slate-300/90 text-sm sm:text-base leading-relaxed">
            Interested in hiring or discussing software engineering roles, AI workflow integrations, or data projects? Connect with me directly through any of the verified channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct Verified Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel p-5 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-sky-950/80 border border-sky-800/80 text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Email Address</div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-semibold text-white hover:text-sky-400 transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(personal.email, 'email')}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-panel p-5 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">WhatsApp & Phone</div>
                  <a
                    href={personal.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => copyToClipboard(personal.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  Chat
                </a>
              </div>
            </div>

            {/* Professional Profiles Strip */}
            <div className="glass-panel p-5 rounded-xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Verified Social Profiles
              </div>
              
              {/* LinkedIn */}
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all text-xs font-medium text-slate-200"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn Profile</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {/* GitHub */}
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all text-xs font-medium text-slate-200"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  <span>GitHub Repositories</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {/* Naukri */}
              <a
                href={personal.naukriUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all text-xs font-medium text-slate-200"
              >
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded bg-sky-600 text-white flex items-center justify-center font-bold text-[10px]">N</span>
                  <span>Naukri Candidate Profile</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {/* Resume download */}
              <a
                href={personal.resumeDownloadPath}
                download="Lakshit_Sharma_Resume.pdf"
                className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-sky-500/20 to-indigo-600/20 hover:from-sky-500/30 hover:to-indigo-600/30 border border-sky-500/30 transition-all text-xs font-semibold text-sky-300"
              >
                <span className="flex items-center gap-2">
                  <FileDown className="w-4 h-4 text-sky-400" />
                  <span>Download Lakshit_Sharma_Resume.pdf</span>
                </span>
                <span>PDF</span>
              </a>
            </div>

            {/* Location info */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Based in {personal.location} • Open to on-site (Delhi NCR) & remote roles.</span>
            </div>

          </div>

          {/* Interactive Email Composer / Message Drafter */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Direct Message Drafter
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Draft your message here. Clicking "Open in Email Client" will prepare a pre-filled email directly addressed to lakshitharitash@gmail.com with zero third-party tracking.
                </p>
              </div>

              <form onSubmit={handleComposeEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Recruiter / Engineering Lead"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the opportunity, role requirements, or project details..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <div className="text-[11px] text-slate-400 font-mono">
                    Direct recipient: <span className="text-sky-400">{personal.email}</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-sky-500/20 transition-all hover:-translate-y-0.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Open in Email Client</span>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
