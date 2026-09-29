import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import CaseStudyModal from '@/components/CaseStudyModal';
import type { CaseStudy } from '@/data/caseStudies';

export default function App() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  return (
    <div className="relative min-h-screen bg-ink-950 text-gray-200 overflow-x-hidden selection:bg-azure-500/30 selection:text-white">
      {/* Ambient background grid pattern & subtle Azure light */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-25" />
      
      {/* Subtle DIVADSGN-style radial glow rings */}
      <div className="pointer-events-none fixed -top-32 left-1/2 -translate-x-1/2 z-0 h-[600px] w-[800px] rounded-full bg-azure-600/[0.07] blur-[140px]" />
      <div className="pointer-events-none fixed top-[45%] left-1/2 -translate-x-1/2 z-0 h-[700px] w-[900px] rounded-full bg-azure-500/[0.04] blur-[160px]" />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Certifications />
          <Projects onOpenStudy={setActiveStudy} />
          <Experience />
          <Contact />
        </main>
        <CaseStudyModal study={activeStudy} onClose={() => setActiveStudy(null)} />
      </div>
    </div>
  );
}
