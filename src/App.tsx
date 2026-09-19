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
    <div className="relative min-h-screen bg-ink-950 text-gray-200 overflow-x-hidden selection:bg-gold-500/30 selection:text-white">
      {/* Ambient background grid pattern & radial lights */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-30" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,175,55,0.08),transparent)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_500px_at_80%_60%,rgba(2,132,199,0.04),transparent)]" />

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
