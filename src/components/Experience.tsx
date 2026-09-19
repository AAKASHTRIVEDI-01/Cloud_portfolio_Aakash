import type { LucideIcon } from 'lucide-react';
import {
  Briefcase,
  Calendar,
  Building2,
  Server,
  ShieldCheck,
  Workflow,
  GitBranch,
  Code2,
  Users,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  duration: string;
  current?: boolean;
  skills: string[];
  bullets: { text: string; icon: LucideIcon }[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Cloud Consultant & Engineer',
    company: 'Mismo Systems',
    location: 'India',
    duration: 'January 2026 – Present',
    current: true,
    skills: ['Azure VMs', 'RBAC & Entra ID', 'Azure DevOps', 'GitHub Actions', 'CI/CD Pipelines', 'IaC'],
    bullets: [
      {
        text: 'Managed, provisioned, and monitored Azure Virtual Machines for production and staging enterprise workloads.',
        icon: Server,
      },
      {
        text: 'Enforced Least Privilege RBAC, security guardrails, and Microsoft cloud best practices across client tenants.',
        icon: ShieldCheck,
      },
      {
        text: 'Designed and executed automated CI/CD build & deployment pipelines using Azure DevOps and GitHub Actions.',
        icon: Workflow,
      },
      {
        text: 'Standardized Git workflows, automated code reviews, branch policies, and multi-tier environment configurations.',
        icon: GitBranch,
      },
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Innovation for Change Foundation',
    location: 'Lucknow, India',
    duration: 'April – July 2024',
    current: false,
    skills: ['JavaScript', 'HTML5 & CSS3', 'Responsive UI', 'Technical Mentoring'],
    bullets: [
      {
        text: 'Built and optimized modern responsive web applications using HTML, CSS, and modern JavaScript.',
        icon: Code2,
      },
      {
        text: 'Organized and led technical training workshops for students on modern web technologies and development tools.',
        icon: Users,
      },
      {
        text: 'Delivered engaging presentations and live demonstrations, establishing collaborative development practices.',
        icon: Sparkles,
      },
    ],
  },
];

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="eyebrow text-gold-400">Experience</span>
          <span className="h-px w-12 bg-gold-500/30" />
        </div>
        <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Professional track record.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
          Enterprise consulting, production cloud infrastructure management, and systems automation.
        </p>
      </div>

      <div className="mt-8 sm:mt-10 max-w-3xl">
        <div className="relative border-l-2 border-white/10 pl-6 sm:pl-10 space-y-6 sm:space-y-8">
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
  exp: ExperienceItem;
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
            <div className="mt-1 flex flex-wrap items-center gap-3 text-sm font-medium text-gold-300">
              <div className="flex items-center gap-1.5">
                <Building2 className="h-4 w-4 text-gold-400/80" />
                <span>{exp.company}</span>
              </div>
              {exp.location && (
                <div className="flex items-center gap-1 text-xs text-gray-400 font-normal">
                  <MapPin className="h-3 w-3 text-gray-500" />
                  <span>{exp.location}</span>
                </div>
              )}
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.02] px-3 py-1 text-xs text-gray-400">
            <Calendar className="h-3.5 w-3.5 text-gray-500" />
            <span>{exp.duration}</span>
          </div>
        </div>

        {/* Bullets with Individual Icons */}
        <ul className="mt-5 space-y-3 border-t border-white/5 pt-4">
          {exp.bullets.map((b, idx) => {
            const BIcon = b.icon;
            return (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-gray-300">
                <div className="flex h-5 w-5 flex-none items-center justify-center rounded-md border border-white/10 bg-white/[0.03] mt-0.5">
                  <BIcon className="h-3 w-3 text-gold-400" />
                </div>
                <span>{b.text}</span>
              </li>
            );
          })}
        </ul>

        {/* Tech tags */}
        <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/5 pt-3">
          {exp.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-white/5 bg-white/[0.02] px-2 py-0.5 text-[11px] font-medium text-gray-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
