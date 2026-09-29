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
        className="fixed inset-0 bg-ink-950/80 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 my-auto w-full max-w-3xl animate-scale-in rounded-2xl border border-white/10 bg-ink-900/98 p-6 shadow-2xl shadow-black/70 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-colors hover:border-azure-400 hover:text-white"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Title */}
        <div className="mb-5 pr-10">
          <div className="flex items-center gap-2">
            <span className="eyebrow text-azure-400">Project Overview</span>
          </div>
          <h2 className="mt-2 font-display text-xl font-bold leading-tight text-white sm:text-2xl">
            {study.title}
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-gray-300 sm:text-sm">
            {study.description}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-azure-500/20 bg-azure-500/[0.06] px-2.5 py-0.5 text-xs font-medium text-azure-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Structured Problem & Solution: Point Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Challenges */}
          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
            <div className="mb-2.5 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-azure-400" />
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white">Challenges</h3>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-300">
              {(study.problemPoints || [study.problem]).map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-azure-400" />
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
            <div className="mb-2.5 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white">Solutions Built</h3>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-300">
              {(study.solutionPoints || [study.solution]).map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Technical Deliverables */}
        <div className="mt-5 rounded-xl border border-white/8 bg-white/[0.02] p-4">
          <div className="mb-2.5 flex items-center gap-2">
            <Wrench className="h-4 w-4 text-azure-400" />
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white">Deliverables</h3>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {study.whatIBuilt.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-none text-azure-400" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Technologies */}
        <div className="mt-5">
          <h3 className="mb-2 font-display text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {study.keyTechnologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/8 bg-white/[0.02] px-2.5 py-0.5 text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
