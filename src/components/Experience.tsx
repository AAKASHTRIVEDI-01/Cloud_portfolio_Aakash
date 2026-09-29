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
        text: 'Provisioned, monitored, and optimized Azure Virtual Machines for enterprise client workloads.',
        icon: Server,
      },
      {
        text: 'Enforced Least Privilege RBAC and Microsoft security baselines across client Azure subscriptions.',
        icon: ShieldCheck,
      },
      {
        text: 'Built and tested automated CI/CD deployment pipelines using Azure DevOps and GitHub Actions.',
        icon: Workflow,
      },
      {
        text: 'Standardized Git workflows, branch policies, and environment configurations for team deployments.',
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
        text: 'Built responsive web applications and user interfaces using HTML5, modern CSS, and JavaScript.',
        icon: Code2,
      },
      {
        text: 'Assisted in technical training workshops for students on web fundamentals and development tools.',
        icon: Users,
      },
    ],
  },
];

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="eyebrow text-azure-400">Experience</span>
          <span className="h-px w-12 bg-azure-500/30" />
        </div>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Professional background.
        </h2>
        <p className="mt-2 text-sm text-gray-400 max-w-xl">
          Hands-on cloud administration, client infrastructure support, and deployment automation.
        </p>
      </div>

      <div className="mt-8 max-w-3xl">
        <div className="relative border-l-2 border-white/10 pl-6 sm:pl-8 space-y-6">
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
      className="reveal visible relative"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Node */}
      <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-azure-400 bg-ink-950">
        <Briefcase className="h-3 w-3 text-azure-400" />
      </div>

      {/* Card */}
      <div className="glass-card rounded-2xl p-5 sm:p-6 transition-all">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-base font-bold text-white">
                {exp.role}
              </h3>
              {exp.current && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Current
                </span>
              )}
            </div>
            <div className="mt-1 flex items-center gap-2 text-xs text-azure-400 font-medium">
              <Building2 className="h-3.5 w-3.5" />
              <span>{exp.company}</span>
              {exp.location && (
                <>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-400">{exp.location}</span>
                </>
              )}
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-gray-500">
            <Calendar className="h-3 w-3" />
            <span>{exp.duration}</span>
          </div>
        </div>

        {/* Bullets */}
        <ul className="mt-4 space-y-2 border-t border-white/5 pt-3">
          {exp.bullets.map((b, idx) => {
            const BIcon = b.icon;
            return (
              <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed text-gray-300">
                <BIcon className="h-3.5 w-3.5 flex-none mt-0.5 text-azure-400" />
                <span>{b.text}</span>
              </li>
            );
          })}
        </ul>

        {/* Skills */}
        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/5 pt-3">
          {exp.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-white/5 bg-white/[0.02] px-2 py-0.5 text-[11px] text-gray-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
