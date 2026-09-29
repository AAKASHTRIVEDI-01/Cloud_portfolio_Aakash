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
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 my-auto w-full max-w-3xl animate-scale-in rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-colors hover:border-azure-400 hover:text-slate-900 hover:bg-slate-50"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Title */}
        <div className="mb-5 pr-10">
          <div className="flex items-center gap-2">
            <span className="eyebrow text-azure-600">Project Overview</span>
          </div>
          <h2 className="mt-2 font-display text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
            {study.title}
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            {study.description}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#EBF5FA] px-2.5 py-0.5 text-xs font-semibold text-azure-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Structured Problem & Solution: Point Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Challenges */}
          <div className="rounded-xl border border-slate-200/80 bg-[#F8FAFC] p-4">
            <div className="mb-2.5 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-azure-600" />
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">Challenges</h3>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {(study.problemPoints || [study.problem]).map((pt, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-azure-600 font-bold">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions / Objectives */}
          <div className="rounded-xl border border-slate-200/80 bg-[#F8FAFC] p-4">
            <div className="mb-2.5 flex items-center gap-2">
              <Target className="h-4 w-4 text-azure-600" />
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">Architecture Goals</h3>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {(study.solutionPoints || [study.solution]).map((pt, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What I Built */}
        {study.whatIBuilt && study.whatIBuilt.length > 0 && (
          <div className="mt-5 rounded-xl border border-slate-200/80 bg-[#F8FAFC] p-4">
            <div className="mb-2.5 flex items-center gap-2">
              <Wrench className="h-4 w-4 text-azure-600" />
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">Implementation Highlights</h3>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {study.whatIBuilt.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-none text-azure-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Takeaways */}
        {study.keyTakeaways && study.keyTakeaways.length > 0 && (
          <div className="mt-5 border-t border-slate-100 pt-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Key Operational Outcomes:</h4>
            <div className="flex flex-wrap gap-2">
              {study.keyTakeaways.map((outcome, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 font-medium"
                >
                  {outcome}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
