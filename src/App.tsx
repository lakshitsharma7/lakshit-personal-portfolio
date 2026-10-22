import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { AIAssistant } from './components/AIAssistant/AIAssistant';
import { ThreeBackground } from './components/ThreeBackground';
import { initAnalytics, trackSectionTransition } from './utils/analytics';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Initialize GA4 and Microsoft Clarity asynchronously on mount
  useEffect(() => {
    initAnalytics();
  }, []);

  // Track section views as active section changes
  useEffect(() => {
    trackSectionTransition(activeSection);
  }, [activeSection]);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-200 selection:bg-sky-500/30 selection:text-sky-200 relative">
      <ThreeBackground />
      <Navbar activeSection={activeSection} />
      
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EducationCertifications />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <AIAssistant activeSection={activeSection} />
    </div>
  );
}

export default App;
