import { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Wrench, Target } from 'lucide-react';
import type { CaseStudy } from '@/data/caseStudies';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (study) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink-900/80 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 my-auto w-full max-w-3xl animate-scale-in rounded-2xl border border-flame-500/15 bg-ink-800/95 p-6 shadow-2xl shadow-black/50 sm:p-8 md:p-10">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-colors hover:border-flame-500/40 hover:text-flame-300"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Title */}
        <div className="mb-6 pr-10">
          <span className="eyebrow text-flame-400">Case Study</span>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            {study.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
            {study.description}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-8 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-flame-500/20 bg-flame-500/[0.08] px-2.5 py-1 text-xs font-medium text-flame-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Problem & Solution — concise, formal */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
            <div className="mb-2 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-flame-400" />
              <h3 className="font-display text-sm font-semibold text-white">The Problem</h3>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">{study.problem}</p>
          </div>
          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
            <div className="mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-flame-400" />
              <h3 className="font-display text-sm font-semibold text-white">What I Solved</h3>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">{study.solution}</p>
          </div>
        </div>

        {/* What I Built */}
        <div className="mt-6">
          <div className="mb-3 flex items-center gap-2">
            <Wrench className="h-4 w-4 text-flame-400" />
            <h3 className="font-display text-sm font-semibold text-white">What I Built</h3>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {study.whatIBuilt.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-gray-400">
                <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-flame-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Key Technologies */}
        <div className="mt-6">
          <h3 className="mb-3 font-display text-sm font-semibold text-white">Key Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {study.keyTechnologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Focus */}
        <div className="mt-6 border-t border-white/8 pt-5">
          <div className="mb-2 flex items-center gap-2">
            <Target className="h-4 w-4 text-flame-400" />
            <span className="text-xs font-medium text-gray-500">Focus Areas</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {study.focus.map((f) => (
              <span key={f} className="text-xs font-medium text-flame-300">
                {f}
              </span>
            )).reduce((acc: React.ReactNode[], el, i) => {
              if (i > 0) acc.push(<span key={`sep-${i}`} className="text-gray-600">·</span>);
              acc.push(el);
              return acc;
            }, [])}
          </div>
        </div>
      </div>
    </div>
  );
}
