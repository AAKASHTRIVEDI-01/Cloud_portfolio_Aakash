import { useState, useMemo } from 'react';
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
  Search,
  CheckCircle2,
  X,
  Cloud,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export interface SkillItem {
  name: string;
  description: string;
  icon: LucideIcon;
  tag?: string;
  learning?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  category: string;
  icon: LucideIcon;
  accentColor: string;
  accentBadge: string;
  borderHover: string;
  glowClass: string;
  iconBg: string;
  iconColor: string;
  description: string;
  skills: SkillItem[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'infra',
    title: 'Core Azure Infrastructure',
    category: 'Architecture & Security',
    icon: ShieldCheck,
    accentColor: 'azure',
    accentBadge: 'text-azure-400 bg-azure-500/10 border-azure-500/30',
    borderHover: 'hover:border-azure-500/40',
    glowClass: 'hover:shadow-[0_0_28px_rgba(2,132,199,0.14)]',
    iconBg: 'bg-azure-500/10 text-azure-400',
    iconColor: 'text-azure-400',
    description: 'Enterprise virtual networking, compute scaling, identity governance, and high availability.',
    skills: [
      {
        name: 'Virtual Networks & Hybrid Peering',
        description: 'Hub-and-spoke topologies, global VNet peering, VPN gateways, and custom route tables (UDR).',
        icon: Network,
        tag: 'Networking',
      },
      {
        name: 'Network Security & Perimeter Defense',
        description: 'Layer-4/7 NSGs, Azure Firewall policies, Application Gateway with Web Application Firewall (WAF).',
        icon: Flame,
        tag: 'Security',
      },
      {
        name: 'High Availability & Load Balancing',
        description: 'Azure Load Balancers (Standard/Internal), Traffic Manager, and zone-redundant availability sets.',
        icon: Layers,
        tag: 'HA & Scaling',
      },
      {
        name: 'Identity & Access Governance',
        description: 'Microsoft Entra ID, role-based access control (RBAC), Privileged Identity Management (PIM), and Conditional Access.',
        icon: KeyRound,
        tag: 'Zero-Trust',
      },
      {
        name: 'Secrets Management & Compliance',
        description: 'Azure Key Vault (keys, secrets, certs), Azure Policy enforcement, and regulatory compliance blueprints.',
        icon: Lock,
        tag: 'Governance',
      },
      {
        name: 'Business Continuity & Disaster Recovery',
        description: 'Azure Backup policies, Recovery Services vaults, and Azure Site Recovery (ASR) failover drills.',
        icon: RotateCcw,
        tag: 'BCDR',
      },
    ],
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Cloud Ops',
    category: 'Observability & Admin',
    icon: Activity,
    accentColor: 'emerald',
    accentBadge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    borderHover: 'hover:border-emerald-500/40',
    glowClass: 'hover:shadow-[0_0_28px_rgba(16,185,129,0.14)]',
    iconBg: 'bg-emerald-500/10 text-emerald-400',
    iconColor: 'text-emerald-400',
    description: 'Proactive metrics monitoring, log analytics querying, and administrative automation.',
    skills: [
      {
        name: 'Azure Monitor & Telemetry',
        description: 'Platform metrics collection, diagnostics logging, and centralized multi-resource health dashboards.',
        icon: Activity,
        tag: 'Telemetry',
      },
      {
        name: 'Log Analytics & KQL Queries',
        description: 'Deep investigative log analysis, Kusto Query Language (KQL) scripts, and custom operational workbooks.',
        icon: Terminal,
        tag: 'KQL',
      },
      {
        name: 'Application Insights (APM)',
        description: 'End-to-end request tracing, application performance profiling, dependency mapping, and exception triage.',
        icon: LineChart,
        tag: 'APM',
      },
      {
        name: 'Alert Rules & Incident Response',
        description: 'Multi-threshold metric alerts, scheduled query alerts, and automated Action Group notifications.',
        icon: Bell,
        tag: 'Alerting',
      },
      {
        name: 'Admin Automation & Cloud Scripting',
        description: 'Az PowerShell modules, Azure CLI (az) administration, automated maintenance tasks, and Cost Management budgets.',
        icon: Code2,
        tag: 'Automation',
      },
    ],
  },
  {
    id: 'iac',
    title: 'Automation & IaC',
    category: 'DevOps & Pipelines',
    icon: GitBranch,
    accentColor: 'gold',
    accentBadge: 'text-gold-400 bg-gold-500/10 border-gold-500/30',
    borderHover: 'hover:border-gold-500/40',
    glowClass: 'hover:shadow-[0_0_28px_rgba(212,175,55,0.14)]',
    iconBg: 'bg-gold-500/10 text-gold-400',
    iconColor: 'text-gold-400',
    description: 'Automating immutable infrastructure provisioning and continuous software delivery.',
    skills: [
      {
        name: 'Terraform & Bicep (IaC)',
        description: 'Declarative cloud provisioning, reusable infrastructure modules, remote state locking, and ARM migration.',
        icon: Box,
        tag: 'IaC',
      },
      {
        name: 'Azure DevOps CI/CD Pipelines',
        description: 'Multi-stage YAML pipelines, self-hosted and cloud build agents, service connections, and approval gates.',
        icon: Workflow,
        tag: 'CI/CD',
      },
      {
        name: 'GitHub Actions Workflows',
        description: 'Automated validation, linting, secret-masked deployments via OpenID Connect (OIDC), and release automation.',
        icon: GitPullRequest,
        tag: 'Automation',
      },
      {
        name: 'GitOps & Version Control Hygiene',
        description: 'Trunk-based branching, pull request governance, semantic versioning, and collaborative code reviews.',
        icon: GitBranch,
        tag: 'GitOps',
      },
    ],
  },
  {
    id: 'containers',
    title: 'Containers & Cloud-Native',
    category: 'Modern Workloads',
    icon: Boxes,
    accentColor: 'violet',
    accentBadge: 'text-violet-400 bg-violet-500/10 border-violet-500/30',
    borderHover: 'hover:border-violet-500/40',
    glowClass: 'hover:shadow-[0_0_28px_rgba(139,92,246,0.14)]',
    iconBg: 'bg-violet-500/10 text-violet-400',
    iconColor: 'text-violet-400',
    description: 'Containerizing microservices and managing orchestrated Kubernetes clusters.',
    skills: [
      {
        name: 'Docker Containerization',
        description: 'Multi-stage Dockerfiles, minimal base images, security scanning, and multi-container environment configurations.',
        icon: Boxes,
        tag: 'Packaging',
      },
      {
        name: 'Azure Kubernetes Service (AKS)',
        description: 'Managed Kubernetes clusters, node pool scaling, ingress controller configuration, and Helm deployments.',
        icon: Server,
        tag: 'Orchestration',
        learning: true,
      },
      {
        name: 'Azure Container Registry (ACR)',
        description: 'Private secure container registry, geo-replication, vulnerability triage, and automated ACR build tasks.',
        icon: Archive,
        tag: 'Registry',
      },
      {
        name: 'Azure Container Apps',
        description: 'Serverless microservice deployment, event-driven autoscaling (KEDA), Dapr integration, and HTTPS ingress.',
        icon: Cpu,
        tag: 'Serverless',
        learning: true,
      },
    ],
  },
];

const TOTAL_SKILLS_COUNT = SKILL_GROUPS.reduce((acc, g) => acc + g.skills.length, 0);

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter skills based on tab and search query
  const filteredGroups = useMemo(() => {
    return SKILL_GROUPS.map((group) => {
      const matchesTab = activeTab === 'all' || group.id === activeTab;
      if (!matchesTab) return null;

      if (!searchQuery.trim()) {
        return group;
      }

      const query = searchQuery.toLowerCase().trim();
      const matchingSkills = group.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query) ||
          (s.tag && s.tag.toLowerCase().includes(query)) ||
          group.title.toLowerCase().includes(query) ||
          group.category.toLowerCase().includes(query)
      );

      if (matchingSkills.length === 0) return null;

      return {
        ...group,
        skills: matchingSkills,
      };
    }).filter(Boolean) as SkillGroup[];
  }, [activeTab, searchQuery]);

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16">
      {/* Section Header */}
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="eyebrow text-gold-400">Technical Skills</span>
          <span className="h-px w-12 bg-gold-500/30" />
        </div>
        <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Cloud architecture &amp; engineering toolkit.
        </h2>
        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
          Production competencies spanning the Microsoft Azure ecosystem, Infrastructure as Code, continuous delivery, and enterprise observability.
        </p>

        {/* Executive Competency Highlights Bar */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5 sm:p-4 backdrop-blur-sm transition-all hover:border-gold-500/25 hover:bg-white/[0.03]">
            <div className="flex items-center gap-2">
              <Cloud className="h-4 w-4 text-azure-400" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Ecosystem</span>
            </div>
            <div className="mt-1 text-lg font-bold text-white sm:text-xl">Azure Native</div>
            <p className="mt-0.5 text-[11px] text-gray-500">Core enterprise cloud platform</p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5 sm:p-4 backdrop-blur-sm transition-all hover:border-gold-500/25 hover:bg-white/[0.03]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold-400" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Core Stack</span>
            </div>
            <div className="mt-1 text-lg font-bold text-white sm:text-xl">{TOTAL_SKILLS_COUNT} Core Skills</div>
            <p className="mt-0.5 text-[11px] text-gray-500">Curated across 4 cloud pillars</p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5 sm:p-4 backdrop-blur-sm transition-all hover:border-gold-500/25 hover:bg-white/[0.03]">
            <div className="flex items-center gap-2">
              <GitBranch className="h-4 w-4 text-emerald-400" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Automation</span>
            </div>
            <div className="mt-1 text-lg font-bold text-white sm:text-xl">IaC &amp; CI/CD</div>
            <p className="mt-0.5 text-[11px] text-gray-500">Terraform, Bicep, Pipelines</p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5 sm:p-4 backdrop-blur-sm transition-all hover:border-gold-500/25 hover:bg-white/[0.03]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold-400" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Certification</span>
            </div>
            <div className="mt-1 text-lg font-bold text-white sm:text-xl">AZ-104 Validated</div>
            <p className="mt-0.5 text-[11px] text-gray-500">Azure Administrator Associate</p>
          </div>
        </div>

        {/* Interactive Filter & Search Controls */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Domain Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/5 bg-white/[0.02] p-1 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-gold-500/20 text-gold-300 shadow-sm border border-gold-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              All Pillars ({TOTAL_SKILLS_COUNT})
            </button>
            {SKILL_GROUPS.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setActiveTab(g.id)}
                className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
                  activeTab === g.id
                    ? 'bg-white/10 text-white shadow-sm border border-white/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {g.category.split('&')[0].trim()}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[220px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Terraform, KQL)..."
              className="w-full rounded-xl border border-white/10 bg-black/40 pl-9 pr-8 py-1.5 text-xs text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/30"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="mt-8">
        {filteredGroups.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-white/8 bg-white/[0.02] py-12 text-center">
            <Search className="h-8 w-8 text-gray-600 mb-2" />
            <p className="text-sm font-medium text-gray-400">No skills matching "{searchQuery}"</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="mt-3 rounded-lg border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs text-gold-300 hover:bg-gold-500/20"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className={`grid gap-6 ${activeTab === 'all' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
            {filteredGroups.map((group, i) => (
              <SkillCard key={group.id} group={group} index={i} activeTab={activeTab} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function SkillCard({
  group,
  index,
}: {
  group: SkillGroup;
  index: number;
  activeTab?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const GroupIcon = group.icon;

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} glass-card group flex flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all duration-300 ${group.borderHover} ${group.glowClass}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl ${group.iconBg} shadow-sm transition-transform duration-300 group-hover:scale-105`}
            >
              <GroupIcon className={`h-5 w-5 ${group.iconColor}`} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${group.accentBadge}`}
                >
                  {group.category}
                </span>
              </div>
              <h3 className="mt-1 font-display text-base font-bold text-white transition-colors group-hover:text-gold-300 sm:text-lg">
                {group.title}
              </h3>
            </div>
          </div>

          <span className="hidden sm:inline-flex items-center rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-mono text-gray-400">
            {group.skills.length} {group.skills.length === 1 ? 'skill' : 'skills'}
          </span>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-gray-400 sm:text-sm">
          {group.description}
        </p>

        {/* Clean, Simplistic Skills List (No white borders, high readability) */}
        <div className="mt-4 space-y-1.5">
          {group.skills.map((skill) => {
            const SkillIcon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group/item flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-white/[0.035]"
              >
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  <div className={`mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-lg ${group.iconBg} transition-transform duration-200 group-hover/item:scale-110`}>
                    <SkillIcon className={`h-3.5 w-3.5 ${group.iconColor}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs sm:text-sm font-semibold text-white group-hover/item:text-gold-300 transition-colors">
                        {skill.name}
                      </span>
                      {skill.learning ? (
                        <span className="inline-flex items-center gap-1 rounded bg-gold-500/15 px-1.5 py-0.5 text-[10px] font-medium text-gold-300">
                          <Sparkles className="h-2.5 w-2.5 text-gold-400" />
                          Active Focus
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-0.5 text-[11px] sm:text-xs leading-relaxed text-gray-400 group-hover/item:text-gray-300">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {skill.tag && !skill.learning ? (
                  <span className="hidden sm:inline-flex flex-none rounded bg-white/[0.04] px-2 py-0.5 text-[10px] font-mono text-gray-400 mt-0.5">
                    {skill.tag}
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
