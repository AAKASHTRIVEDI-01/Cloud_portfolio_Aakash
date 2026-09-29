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
        text: 'Provisioned, monitored, and optimized 20–30 Azure Virtual Machines across enterprise client subscriptions.',
        icon: Server,
      },
      {
        text: 'Configured virtual networking (VNets, subnets, NSGs, UDR) and enforced least-privilege security baselines.',
        icon: ShieldCheck,
      },
      {
        text: 'Built and tested automated CI/CD deployment pipelines using Azure DevOps and GitHub Actions.',
        icon: Workflow,
      },
      {
        text: 'Automated operational tasks and system monitoring using PowerShell, Azure CLI, and Azure Monitor.',
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
          <span className="eyebrow text-azure-700">Experience</span>
          <span className="h-px w-12 bg-azure-700/30" />
        </div>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Professional background.
        </h2>
        <p className="mt-2 text-sm text-slate-600 max-w-xl">
          Hands-on cloud administration, client infrastructure support, and deployment automation.
        </p>
      </div>

      <div className="mt-8 max-w-3xl">
        <div className="relative border-l-2 border-slate-200 pl-6 sm:pl-8 space-y-6">
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
      <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-azure-700 bg-white text-azure-700 shadow-xs">
        <Briefcase className="h-3 w-3" />
      </div>

      {/* Card */}
      <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs transition-all hover:shadow-sm">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-base font-bold text-slate-900">
                {exp.role}
              </h3>
              {exp.current && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Current
                </span>
              )}
            </div>
            <div className="mt-1 flex items-center gap-2 text-xs text-azure-700 font-semibold">
              <Building2 className="h-3.5 w-3.5" />
              <span>{exp.company}</span>
              {exp.location && (
                <>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500 font-normal">{exp.location}</span>
                </>
              )}
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Calendar className="h-3 w-3" />
            <span>{exp.duration}</span>
          </div>
        </div>

        {/* Bullets */}
        <ul className="mt-4 space-y-2 border-t border-slate-100 pt-3">
          {exp.bullets.map((b, idx) => {
            const BIcon = b.icon;
            return (
              <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600">
                <BIcon className="h-3.5 w-3.5 flex-none mt-0.5 text-azure-700" />
                <span>{b.text}</span>
              </li>
            );
          })}
        </ul>

        {/* Skills */}
        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
          {exp.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 hover:bg-[#EAF2F8] hover:text-azure-700 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
