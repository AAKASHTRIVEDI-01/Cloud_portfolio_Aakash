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
          <span className="eyebrow text-azure-700">Featured Work</span>
          <span className="h-px w-12 bg-azure-700/30" />
        </div>
        <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Cloud infrastructure projects.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700 font-medium">
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
      className="reveal visible group flex flex-col justify-between rounded-3xl border-2 border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-azure-400 hover:shadow-xl cursor-pointer"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div>
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF2F8] text-azure-700 transition-colors group-hover:bg-azure-700 group-hover:text-white shadow-sm">
            <Icon className="h-7 w-7" />
          </div>
          <span className="rounded-full bg-[#EAF2F8] px-3.5 py-1 text-xs font-bold text-azure-700">
            Azure Spec
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-6 font-display text-xl font-extrabold text-slate-900 transition-colors duration-200 group-hover:text-azure-700">
          {study.title}
        </h3>

        {/* One Liner */}
        <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
          {study.oneLiner}
        </p>

        {/* Deliverables Points */}
        {study.whatIBuilt && study.whatIBuilt.length > 0 && (
          <ul className="mt-5 space-y-2 border-t-2 border-slate-100 pt-4">
            {study.whatIBuilt.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-azure-700" />
                <span className="line-clamp-2">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700 hover:bg-[#EAF2F8] hover:text-azure-700 hover:border-azure-200 transition-colors"
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
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-azure-700 transition-all duration-200 hover:text-azure-800"
        >
          <span>View Details</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
