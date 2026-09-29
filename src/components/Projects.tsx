import { ArrowRight, Network, GitBranch, Boxes, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { caseStudies, type CaseStudy } from '@/data/caseStudies';

const ICONS: Record<string, typeof Network> = {
  Network,
  GitBranch,
  Boxes,
};

interface ProjectsProps {
  onOpenStudy: (study: CaseStudy) => void;
}

export default function Projects({ onOpenStudy }: ProjectsProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="eyebrow text-azure-600">Featured Work</span>
          <span className="h-px w-12 bg-azure-500/30" />
        </div>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Cloud infrastructure projects.
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
          Hands-on cloud environments built with a focus on virtual networking, automation, and security.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {caseStudies.map((study, i) => {
          const Icon = ICONS[study.icon] ?? Network;
          return (
            <ProjectCard
              key={study.id}
              study={study}
              index={i}
              Icon={Icon}
              onOpen={onOpenStudy}
            />
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({
  study,
  index,
  Icon,
  onOpen,
}: {
  study: CaseStudy;
  index: number;
  Icon: typeof Network;
  onOpen: (s: CaseStudy) => void;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal visible group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-azure-300 hover:shadow-md"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div>
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EBF5FA] text-azure-600">
            <Icon className="h-5 w-5" />
          </div>
          <span className="rounded-full bg-[#EBF5FA] px-2.5 py-0.5 text-[10px] font-semibold text-azure-700">
            Azure Spec
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-5 font-display text-base font-bold text-slate-900 transition-colors duration-200 group-hover:text-azure-600">
          {study.title}
        </h3>

        {/* One Liner */}
        <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
          {study.oneLiner}
        </p>

        {/* Deliverables Points */}
        {study.whatIBuilt && study.whatIBuilt.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
            {study.whatIBuilt.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-none text-azure-600" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 hover:bg-[#EBF5FA] hover:text-azure-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-5 border-t border-slate-100 pt-3.5">
        <button
          onClick={() => onOpen(study)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-azure-600 transition-all duration-200 hover:text-azure-700"
        >
          <span>View Details</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
