import { Briefcase } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const EXPERIENCE = [
  {
    role: 'Cloud Consultant & Engineer',
    company: 'Mismo Systems',
    duration: 'January 2026 – Present',
    bullets: [
      'Managed and maintained Azure VMs for company applications and workloads.',
      'Worked with Git/GitHub for source-code management, branching, pull requests, and version control.',
      'Applied RBAC and security best practices to control access to Azure resources.',
      'Designed and implemented CI/CD pipelines using Azure DevOps for automated build, test, and deployment processes.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Innovation for Change Foundation, Lucknow',
    duration: 'April – July 2024',
    bullets: [
      'Developed and enhanced web applications utilizing HTML, CSS, and JavaScript.',
      'Conducted interactive sessions and workshops to educate young children on frontend technologies.',
      'Delivered multiple engaging presentations on web development, fostering a hands-on learning environment.',
    ],
  },
];

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <span className="eyebrow text-gold-400">Experience</span>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          Where I've applied it.
        </h2>
      </div>

      <div className="mt-12">
        <div className="relative border-l border-white/10 pl-8 sm:pl-10">
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
  exp: { role: string; company: string; duration: string; bullets: string[] };
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} relative pb-12 last:pb-0`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Node */}
      <div className="absolute -left-[37px] flex h-8 w-8 items-center justify-center rounded-full border border-gold-500/25 bg-ink-800 sm:-left-[45px]">
        <Briefcase className="h-4 w-4 text-gold-400" />
      </div>

      <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-gold-500/15">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-display text-base font-semibold text-white">{exp.role}</h3>
          <span className="text-xs font-medium text-gray-500">{exp.duration}</span>
        </div>
        <p className="mt-1 text-sm text-gold-300">{exp.company}</p>
        <ul className="mt-4 space-y-2">
          {exp.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm leading-relaxed text-gray-400">
              <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-gold-400" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
