import { ArrowRight, Network, GitBranch, Boxes, Layers, ExternalLink, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { caseStudies, type CaseStudy } from '@/data/caseStudies';

const ICONS: Record<string, typeof Network> = {
  Network,
  GitBranch,
  Boxes,
};

const ACCENTS: Record<string, { border: string; glow: string; badge: string }> = {
  'enterprise-infra': {
    border: 'group-hover:border-azure-500/40',
    glow: 'group-hover:shadow-[0_0_24px_rgba(2,132,199,0.15)]',
    badge: 'border-azure-500/30 bg-azure-500/10 text-azure-300',
  },
  'iac-cicd': {
    border: 'group-hover:border-gold-500/40',
    glow: 'group-hover:shadow-[0_0_24px_rgba(212,175,55,0.15)]',
    badge: 'border-gold-500/30 bg-gold-500/10 text-gold-300',
  },
  'aks-platform': {
    border: 'group-hover:border-violet-500/40',
    glow: 'group-hover:shadow-[0_0_24px_rgba(139,92,246,0.15)]',
    badge: 'border-violet-500/30 bg-violet-500/10 text-violet-300',
  },
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
  const accent = ACCENTS[study.id] ?? ACCENTS['enterprise-infra'];

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} glass-card group flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 ${accent.border} ${accent.glow}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div>
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/[0.08] transition-all duration-300 group-hover:scale-105 group-hover:border-gold-400 group-hover:bg-gold-500/15">
            <Icon className="h-6 w-6 text-gold-400 transition-transform group-hover:scale-110" />
          </div>
          <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${accent.badge}`}>
            Architecture Spec
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
          <ul className="mt-4 space-y-2 border-t border-white/5 pt-3 text-xs text-gray-300">
            {study.whatIBuilt.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-none text-gold-400" />
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
