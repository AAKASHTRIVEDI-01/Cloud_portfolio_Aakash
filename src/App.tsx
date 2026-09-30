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
import WaveBackground from '@/components/WaveBackground';
import type { CaseStudy } from '@/data/caseStudies';

export default function App() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-800 overflow-x-hidden selection:bg-azure-500/20 selection:text-azure-700">
      {/* Dynamic Azure Wave Graphics & Ambient Lighting */}
      <WaveBackground />

      {/* Ambient background grid pattern */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-40" />
      


      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects onOpenStudy={setActiveStudy} />
          <Certifications />
          <Contact />
        </main>
        <CaseStudyModal study={activeStudy} onClose={() => setActiveStudy(null)} />
      </div>
    </div>
  );
}
