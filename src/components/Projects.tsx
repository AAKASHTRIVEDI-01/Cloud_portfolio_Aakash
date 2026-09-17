import { ArrowRight, Network, GitBranch, Boxes, Layers, ExternalLink } from 'lucide-react';
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
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="eyebrow text-gold-400">Featured Work</span>
          <span className="h-px w-12 bg-gold-500/30" />
        </div>
        <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Cloud architecture &amp; infrastructure projects.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
          Production-grade architectures designed for resilience, multi-tier security, and automated cloud operations.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
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
      className={`reveal ${visible ? 'visible' : ''} glass-card group flex flex-col justify-between rounded-2xl p-6 sm:p-7 hover:-translate-y-1.5`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div>
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/[0.08] transition-colors duration-300 group-hover:border-gold-400 group-hover:bg-gold-500/15">
            <Icon className="h-6 w-6 text-gold-400 transition-transform group-hover:scale-110" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-gray-400">
            Case Study
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-5 font-display text-lg font-bold text-white transition-colors duration-200 group-hover:text-gold-300">
          {study.title}
        </h3>

        {/* One Liner */}
        <p className="mt-2 text-xs leading-relaxed text-gray-300 sm:text-sm">
          {study.oneLiner}
        </p>

        {/* What I Built Highlights */}
        {study.whatIBuilt && study.whatIBuilt.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t border-white/5 pt-3 text-xs text-gray-400">
            {study.whatIBuilt.slice(0, 2).map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="mt-1 h-1 w-1 flex-none rounded-full bg-gold-400" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/8 bg-white/[0.02] px-2.5 py-0.5 text-[11px] font-medium text-gray-400 group-hover:border-gold-500/20 group-hover:text-gold-300/90 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 border-t border-white/5 pt-4">
        <button
          onClick={() => onOpen(study)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 transition-all duration-200 group-hover:text-gold-300"
        >
          <span>Explore Architecture Details</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
