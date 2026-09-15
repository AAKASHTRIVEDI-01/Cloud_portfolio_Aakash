import { ArrowRight, Network, GitBranch, Boxes } from 'lucide-react';
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
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <span className="eyebrow text-flame-400">Projects</span>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          Selected work in cloud infrastructure.
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {caseStudies.map((study, i) => {
          const Icon = ICONS[study.icon] ?? Network;
          return (
            <ProjectCard key={study.id} study={study} index={i} Icon={Icon} onOpen={onOpenStudy} />
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
      className={`reveal ${visible ? 'visible' : ''} group flex flex-col rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:border-flame-500/25 hover:bg-flame-500/[0.03] hover:-translate-y-1`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-flame-500/20 bg-flame-500/[0.06] transition-colors duration-300 group-hover:border-flame-500/40">
        <Icon className="h-6 w-6 text-flame-400" />
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-semibold leading-snug text-white">
        {study.shortTitle}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-relaxed text-gray-400">{study.oneLiner}</p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-white/8 bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <button
        onClick={() => onOpen(study)}
        className="mt-5 flex items-center gap-1.5 text-sm font-medium text-flame-300 transition-all duration-200 hover:gap-2.5 hover:text-flame-200"
      >
        View Case Study
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
