import { ShieldCheck, Activity, GitBranch, Boxes } from 'lucide-react';
import azureIcon from '../assets/azure.jpg';
import monitorIcon from '../assets/monitor.jpg';
import automationIcon from '../assets/automation.jpg';
import containerIcon from '../assets/container.jpg';
import { useReveal } from '@/hooks/useReveal';

interface SkillGroup {
  title: string;
  icon: typeof ShieldCheck;
  image: string;
  skills: { name: string; learning?: boolean }[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Core Azure',
    icon: ShieldCheck,
    image: azureIcon,
    skills: [
      { name: 'VNets' }, { name: 'Subnets' }, { name: 'NSGs' }, { name: 'UDRs' },
      { name: 'Load Balancer' }, { name: 'App Gateway / WAF' }, { name: 'Azure Firewall' },
      { name: 'VPN' }, { name: 'DNS' }, { name: 'Storage' }, { name: 'Azure SQL' },
      { name: 'Entra ID' }, { name: 'RBAC' }, { name: 'Key Vault' }, { name: 'Azure Policy' },
      { name: 'Backup / ASR' },
    ],
  },
  {
    title: 'Monitoring & Ops',
    icon: Activity,
    image: monitorIcon,
    skills: [
      { name: 'Azure Monitor' }, { name: 'Log Analytics' }, { name: 'Azure CLI' }, { name: 'PowerShell' },
    ],
  },
  {
    title: 'Automation & IaC',
    icon: GitBranch,
    image: automationIcon,
    skills: [
      { name: 'Terraform', learning: true }, { name: 'ARM / Bicep' }, { name: 'GitHub Actions' },
      { name: 'CI/CD', learning: true },
    ],
  },
  {
    title: 'Containers',
    icon: Boxes,
    image: containerIcon,
    skills: [
      { name: 'Docker', learning: true }, { name: 'AKS / Kubernetes', learning: true },
    ],
  },
];

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = group.icon;

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} glass rounded-2xl p-6 transition-all duration-300 hover:border-gold-500/20`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-gold-500/20 bg-white">
          <img src={group.image} alt="" className="h-full w-full object-contain p-1" />
        </div>
        <h3 className="font-display text-base font-semibold text-white">{group.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill.name}
            className="group relative inline-flex items-center gap-1.5 rounded-md border border-white/8 bg-white/[0.02] px-2.5 py-1.5 text-xs font-medium text-gray-300 transition-colors duration-200 hover:border-gold-500/30 hover:text-gold-200"
          >
            {skill.name}
            {skill.learning && (
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gold-400" title="Learning" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <span className="eyebrow text-gold-400">Skills</span>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          Technical expertise across the Azure stack.
        </h2>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group, i) => (
          <SkillCard key={group.title} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}
