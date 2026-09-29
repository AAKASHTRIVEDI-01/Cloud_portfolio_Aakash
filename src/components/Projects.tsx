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
          <span className="eyebrow text-azure-400">Featured Work</span>
          <span className="h-px w-12 bg-azure-500/30" />
        </div>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Cloud infrastructure projects.
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-400">
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
      className="reveal visible glass-card group flex flex-col justify-between rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-azure-400/40"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div>
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-azure-500/30 bg-azure-500/10 text-azure-400">
            <Icon className="h-5 w-5" />
          </div>
          <span className="rounded-full border border-azure-500/20 bg-azure-500/10 px-2.5 py-0.5 text-[10px] font-medium text-azure-300">
            Azure Spec
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-5 font-display text-base font-bold text-white transition-colors duration-200 group-hover:text-azure-300">
          {study.title}
        </h3>

        {/* One Liner */}
        <p className="mt-1.5 text-xs leading-relaxed text-gray-400">
          {study.oneLiner}
        </p>

        {/* Deliverables Points */}
        {study.whatIBuilt && study.whatIBuilt.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t border-white/5 pt-3">
            {study.whatIBuilt.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-none text-azure-400" />
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
              className="rounded-md border border-white/8 bg-white/[0.02] px-2 py-0.5 text-[11px] font-medium text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-5 border-t border-white/5 pt-3.5">
        <button
          onClick={() => onOpen(study)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-azure-400 transition-all duration-200 hover:text-azure-300"
        >
          <span>View Details</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
