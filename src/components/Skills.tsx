import { ShieldCheck, Activity, GitBranch, Boxes, Check, Sparkles } from 'lucide-react';
import azureIcon from '../assets/azure.jpg';
import monitorIcon from '../assets/monitor.jpg';
import automationIcon from '../assets/automation.jpg';
import containerIcon from '../assets/container.jpg';
import { useReveal } from '@/hooks/useReveal';

interface SkillGroup {
  title: string;
  category: string;
  icon: typeof ShieldCheck;
  image: string;
  description: string;
  skills: { name: string; learning?: boolean }[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Core Azure Infrastructure',
    category: 'Architecture & Security',
    icon: ShieldCheck,
    image: azureIcon,
    description: 'Enterprise virtual networking, compute scaling, identity governance, and high availability.',
    skills: [
      { name: 'Azure VNets & Peering' },
      { name: 'NSGs & Route Tables (UDR)' },
      { name: 'App Gateway & WAF' },
      { name: 'Azure Firewall & VPN' },
      { name: 'Azure Load Balancers' },
      { name: 'Storage & Blob Tiers' },
      { name: 'Azure SQL' },
      { name: 'Microsoft Entra ID' },
      { name: 'RBAC & PIM' },
      { name: 'Key Vault & Certificates' },
      { name: 'Azure Policy & Blueprints' },
      { name: 'Backup & Site Recovery (ASR)' },
    ],
  },
  {
    title: 'Monitoring & Cloud Ops',
    category: 'Observability & Admin',
    icon: Activity,
    image: monitorIcon,
    description: 'Proactive metrics monitoring, log analytics querying, and administrative automation.',
    skills: [
      { name: 'Azure Monitor' },
      { name: 'Log Analytics & KQL' },
      { name: 'Application Insights' },
      { name: 'Azure Alert Rules & Action Groups' },
      { name: 'Azure CLI (az)' },
      { name: 'PowerShell Automation' },
      { name: 'Cost Management & Budgets' },
    ],
  },
  {
    title: 'Automation & IaC',
    category: 'DevOps & Pipelines',
    icon: GitBranch,
    image: automationIcon,
    description: 'Automating immutable infrastructure provisioning and continuous software delivery.',
    skills: [
      { name: 'Bicep & ARM Templates' },
      { name: 'Terraform (IaC)' },
      { name: 'Azure DevOps Pipelines' },
      { name: 'GitHub Actions Workflows' },
      { name: 'Git & Branching Workflows' },
      { name: 'CI/CD Automation' },
    ],
  },
  {
    title: 'Containers & Cloud-Native',
    category: 'Modern Workloads',
    icon: Boxes,
    image: containerIcon,
    description: 'Containerizing microservices and managing orchestrated Kubernetes clusters.',
    skills: [
      { name: 'Docker Containerization' },
      { name: 'Azure Container Registry (ACR)' },
      { name: 'Azure Kubernetes Service (AKS)', learning: true },
      { name: 'Container Apps', learning: true },
    ],
  },
];

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="eyebrow text-gold-400">Technical Skills</span>
          <span className="h-px w-12 bg-gold-500/30" />
        </div>
        <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Cloud architecture &amp; engineering toolkit.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
          Proven competencies across Microsoft Azure ecosystem, Infrastructure as Code, container systems, and enterprise observability.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {SKILL_GROUPS.map((group, i) => (
          <SkillCard key={group.title} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} glass-card group flex flex-col justify-between rounded-2xl p-6 sm:p-7`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="relative h-12 w-12 flex-none overflow-hidden rounded-xl border border-gold-500/30 bg-black shadow-md transition-transform duration-300 group-hover:scale-105">
              <img
                src={group.image}
                alt={group.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-gold-400 uppercase tracking-wider">
                {group.category}
              </span>
              <h3 className="font-display text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                {group.title}
              </h3>
            </div>
          </div>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-gray-400 sm:text-sm">
          {group.description}
        </p>

        {/* Skills Tag Cloud */}
        <div className="mt-5 flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill.name}
              className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-all duration-200 ${
                skill.learning
                  ? 'border border-gold-500/30 bg-gold-500/[0.06] text-gold-300'
                  : 'border border-white/8 bg-white/[0.02] text-gray-300 hover:border-white/20 hover:text-white'
              }`}
            >
              <Check className="h-3 w-3 text-gold-400" />
              <span>{skill.name}</span>
              {skill.learning && (
                <span className="ml-1 text-[10px] font-semibold text-gold-400 bg-gold-500/20 rounded px-1">
                  Active
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
