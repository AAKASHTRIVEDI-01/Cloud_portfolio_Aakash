import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const EXPERIENCE = [
  {
    role: 'Cloud Consultant & Engineer',
    company: 'Mismo Systems',
    duration: 'January 2026 – Present',
    current: true,
    bullets: [
      'Managed, provisioned, and monitored Azure Virtual Machines for production and staging workloads.',
      'Enforced Least Privilege RBAC and Microsoft cloud security best practices across client tenants.',
      'Designed and executed automated CI/CD build & deployment pipelines using Azure DevOps and GitHub Actions.',
      'Standardized Git workflows, code reviews, branch policies, and environment configurations.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Innovation for Change Foundation, Lucknow',
    duration: 'April – July 2024',
    current: false,
    bullets: [
      'Built and optimized modern responsive web applications using HTML, CSS, and modern JavaScript.',
      'Organized and led technical training workshops for students on modern web technologies.',
      'Delivered engaging presentations and live demonstrations, establishing collaborative development practices.',
    ],
  },
];

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="eyebrow text-gold-400">Experience</span>
          <span className="h-px w-12 bg-gold-500/30" />
        </div>
        <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Professional track record.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
          Hands-on enterprise consulting, cloud infrastructure management, and software engineering.
        </p>
      </div>

      <div className="mt-14 max-w-3xl">
        <div className="relative border-l-2 border-white/10 pl-6 sm:pl-10 space-y-10">
          {EXPERIENCE.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  exp,
  index,
}: {
  exp: {
    role: string;
    company: string;
    duration: string;
    current?: boolean;
    bullets: string[];
  };
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} relative`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Timeline Node */}
      <div className="absolute -left-[35px] sm:-left-[51px] top-1 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border-2 border-gold-500/50 bg-ink-900 shadow-[0_0_12px_rgba(212,175,55,0.3)]">
        <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold-400" />
      </div>

      {/* Card */}
      <div className="glass-card group rounded-2xl p-6 sm:p-7 hover:border-gold-500/30 transition-all duration-300">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="font-display text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                {exp.role}
              </h3>
              {exp.current && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 border border-emerald-500/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Current
                </span>
              )}
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-sm font-medium text-gold-300">
              <Building2 className="h-4 w-4 text-gold-400/80" />
              <span>{exp.company}</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.02] px-3 py-1 text-xs text-gray-400">
            <Calendar className="h-3.5 w-3.5 text-gray-500" />
            <span>{exp.duration}</span>
          </div>
        </div>

        {/* Bullets */}
        <ul className="mt-5 space-y-2.5 border-t border-white/5 pt-4">
          {exp.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-gray-300">
              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold-400" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
