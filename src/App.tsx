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
    <div className="relative min-h-screen bg-ink-950 text-gray-200 overflow-x-hidden selection:bg-aurora-500/40 selection:text-white">
      {/* Ambient background grid pattern & multi-tone aurora lights */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-30" />
      
      {/* Ambient Aurora Glow Spheres */}
      <div className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 z-0 h-[650px] w-[850px] rounded-full bg-aurora-600/[0.14] blur-[150px] animate-aurora-flow" />
      <div className="pointer-events-none fixed top-[30%] -left-32 z-0 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.08] blur-[140px]" />
      <div className="pointer-events-none fixed top-[60%] -right-32 z-0 h-[550px] w-[550px] rounded-full bg-sunset-500/[0.09] blur-[150px]" />
      <div className="pointer-events-none fixed bottom-0 left-1/3 z-0 h-[450px] w-[600px] rounded-full bg-aurora-700/[0.10] blur-[140px]" />

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
