import type { LucideIcon } from 'lucide-react';
import {
  ShieldCheck,
  Activity,
  GitBranch,
  Boxes,
  Network,
  Route,
  Globe,
  Flame,
  Layers,
  HardDrive,
  Database,
  KeyRound,
  Lock,
  FileCheck,
  RotateCcw,
  Terminal,
  LineChart,
  Bell,
  Code2,
  DollarSign,
  FileCode2,
  Box,
  Workflow,
  GitPullRequest,
  Zap,
  Server,
  Archive,
  Cpu,
  Sparkles,
} from 'lucide-react';
import azureIcon from '../assets/azure.jpg';
import monitorIcon from '../assets/monitor.jpg';
import automationIcon from '../assets/automation.jpg';
import containerIcon from '../assets/container.jpg';
import { useReveal } from '@/hooks/useReveal';

interface SkillItem {
  name: string;
  icon: LucideIcon;
  learning?: boolean;
}

interface SkillGroup {
  title: string;
  category: string;
  icon: LucideIcon;
  image: string;
  accentBadge: string;
  glowClass: string;
  description: string;
  skills: SkillItem[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Core Azure Infrastructure',
    category: 'Architecture & Security',
    icon: ShieldCheck,
    image: azureIcon,
    accentBadge: 'text-azure-400 bg-azure-500/10 border-azure-500/25',
    glowClass: 'group-hover:border-azure-500/40 group-hover:shadow-[0_0_24px_rgba(2,132,199,0.12)]',
    description: 'Enterprise virtual networking, compute scaling, identity governance, and high availability.',
    skills: [
      { name: 'Azure VNets & Peering', icon: Network },
      { name: 'NSGs & Route Tables (UDR)', icon: Route },
      { name: 'App Gateway & WAF', icon: Globe },
      { name: 'Azure Firewall & VPN', icon: Flame },
      { name: 'Azure Load Balancers', icon: Layers },
      { name: 'Storage & Blob Tiers', icon: HardDrive },
      { name: 'Azure SQL', icon: Database },
      { name: 'Microsoft Entra ID', icon: KeyRound },
      { name: 'RBAC & PIM', icon: Lock },
      { name: 'Key Vault & Certificates', icon: ShieldCheck },
      { name: 'Azure Policy & Blueprints', icon: FileCheck },
      { name: 'Backup & Site Recovery (ASR)', icon: RotateCcw },
    ],
  },
  {
    title: 'Monitoring & Cloud Ops',
    category: 'Observability & Admin',
    icon: Activity,
    image: monitorIcon,
    accentBadge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    glowClass: 'group-hover:border-emerald-500/40 group-hover:shadow-[0_0_24px_rgba(16,185,129,0.12)]',
    description: 'Proactive metrics monitoring, log analytics querying, and administrative automation.',
    skills: [
      { name: 'Azure Monitor', icon: Activity },
      { name: 'Log Analytics & KQL', icon: Terminal },
      { name: 'Application Insights', icon: LineChart },
      { name: 'Azure Alert Rules & Action Groups', icon: Bell },
      { name: 'Azure CLI (az)', icon: Code2 },
      { name: 'PowerShell Automation', icon: Terminal },
      { name: 'Cost Management & Budgets', icon: DollarSign },
    ],
  },
  {
    title: 'Automation & IaC',
    category: 'DevOps & Pipelines',
    icon: GitBranch,
    image: automationIcon,
    accentBadge: 'text-gold-400 bg-gold-500/10 border-gold-500/25',
    glowClass: 'group-hover:border-gold-500/40 group-hover:shadow-[0_0_24px_rgba(212,175,55,0.12)]',
    description: 'Automating immutable infrastructure provisioning and continuous software delivery.',
    skills: [
      { name: 'Bicep & ARM Templates', icon: FileCode2 },
      { name: 'Terraform (IaC)', icon: Box },
      { name: 'Azure DevOps Pipelines', icon: Workflow },
      { name: 'GitHub Actions Workflows', icon: GitPullRequest },
      { name: 'Git & Branching Workflows', icon: GitBranch },
      { name: 'CI/CD Automation', icon: Zap },
    ],
  },
  {
    title: 'Containers & Cloud-Native',
    category: 'Modern Workloads',
    icon: Boxes,
    image: containerIcon,
    accentBadge: 'text-violet-400 bg-violet-500/10 border-violet-500/25',
    glowClass: 'group-hover:border-violet-500/40 group-hover:shadow-[0_0_24px_rgba(139,92,246,0.12)]',
    description: 'Containerizing microservices and managing orchestrated Kubernetes clusters.',
    skills: [
      { name: 'Docker Containerization', icon: Boxes },
      { name: 'Azure Container Registry (ACR)', icon: Archive },
      { name: 'Azure Kubernetes Service (AKS)', icon: Server, learning: true },
      { name: 'Container Apps', icon: Cpu, learning: true },
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
          Specialized competencies across the Microsoft Azure ecosystem, Infrastructure as Code, modern container platforms, and enterprise observability.
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
      className={`reveal ${visible ? 'visible' : ''} glass-card group flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 ${group.glowClass}`}
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
              <span className={`inline-block rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${group.accentBadge}`}>
                {group.category}
              </span>
              <h3 className="mt-1 font-display text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                {group.title}
              </h3>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-mono text-gray-400">
            {group.skills.length} skills
          </span>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-gray-400 sm:text-sm">
          {group.description}
        </p>

        {/* Skills Tag Cloud with Distinct Icons */}
        <div className="mt-5 flex flex-wrap gap-2">
          {group.skills.map((skill) => {
            const SkillIcon = skill.icon;
            return (
              <span
                key={skill.name}
                className={`group/skill inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                  skill.learning
                    ? 'border border-gold-500/30 bg-gold-500/[0.08] text-gold-300 hover:border-gold-400 hover:bg-gold-500/15'
                    : 'border border-white/8 bg-white/[0.025] text-gray-300 hover:border-gold-500/40 hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                <SkillIcon className="h-3.5 w-3.5 text-gold-400 transition-transform duration-200 group-hover/skill:scale-110" />
                <span>{skill.name}</span>
                {skill.learning && (
                  <span className="ml-0.5 inline-flex items-center gap-0.5 text-[10px] font-semibold text-gold-400 bg-gold-500/20 rounded px-1.5 py-0.2">
                    <Sparkles className="h-2.5 w-2.5" />
                    Active
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
