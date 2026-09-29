import { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Wrench, Target, Sparkles, Layers } from 'lucide-react';
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
        className="fixed inset-0 bg-ink-950/85 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 my-auto w-full max-w-3xl animate-scale-in rounded-2xl border border-aurora-500/25 bg-ink-900/98 p-6 shadow-2xl shadow-black/70 sm:p-8 md:p-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-colors hover:border-sunset-400 hover:text-white"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Title */}
        <div className="mb-6 pr-10">
          <div className="flex items-center gap-2">
            <span className="eyebrow text-sunset-400">Architecture Specification</span>
            <span className="rounded-full bg-aurora-500/15 border border-aurora-500/30 px-2 py-0.5 text-[10px] font-semibold text-aurora-300">
              Verified Production Stack
            </span>
          </div>
          <h2 className="mt-2.5 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            {study.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-300 sm:text-base">
            {study.description}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-aurora-500/20 bg-aurora-500/[0.08] px-2.5 py-1 text-xs font-medium text-aurora-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Structured Problem & Solution: Point-by-Point Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Core Challenges (Points) */}
          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4 sm:p-5">
            <div className="mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-sunset-400" />
              <h3 className="font-display text-sm font-semibold text-white">Core Architectural Challenges</h3>
            </div>
            <ul className="space-y-2 text-xs text-gray-300">
              {(study.problemPoints || [study.problem]).map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-sunset-400" />
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineered Solutions (Points) */}
          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4 sm:p-5">
            <div className="mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <h3 className="font-display text-sm font-semibold text-white">Engineered Solutions &amp; Impact</h3>
            </div>
            <ul className="space-y-2 text-xs text-gray-300">
              {(study.solutionPoints || [study.solution]).map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What I Built - Point Checklist */}
        <div className="mt-6 rounded-xl border border-white/8 bg-white/[0.02] p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <Wrench className="h-4 w-4 text-cyan-400" />
            <h3 className="font-display text-sm font-semibold text-white">Key Technical Deliverables</h3>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {study.whatIBuilt.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-none text-cyan-400" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Technologies */}
        <div className="mt-6">
          <h3 className="mb-3 font-display text-xs font-semibold uppercase tracking-wider text-gray-400">
            Validated Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {study.keyTechnologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-gray-300 transition-colors hover:border-aurora-500/40 hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Focus Areas */}
        <div className="mt-6 border-t border-white/8 pt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-sunset-400" />
            <span className="text-xs font-medium text-gray-400">Domain Focus:</span>
            <div className="flex flex-wrap gap-1.5">
              {study.focus.map((f) => (
                <span key={f} className="rounded bg-white/[0.04] px-2 py-0.5 text-[11px] font-mono text-sunset-300">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
