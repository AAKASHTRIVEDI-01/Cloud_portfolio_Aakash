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
    <div className="min-h-screen bg-ink-900 text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onOpenStudy={setActiveStudy} />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <CaseStudyModal study={activeStudy} onClose={() => setActiveStudy(null)} />
    </div>
  );
}
