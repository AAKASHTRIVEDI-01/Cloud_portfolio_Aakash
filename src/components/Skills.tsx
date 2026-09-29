import { useState, useMemo } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ShieldCheck,
  Activity,
  GitBranch,
  Boxes,
  Network,
  Server,
  Layers,
  KeyRound,
  Lock,
  RotateCcw,
  Terminal,
  Code2,
  Workflow,
  Search,
  X,
  HardDrive,
  FileCheck,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export interface SkillItem {
  name: string;
  icon: LucideIcon;
}

export interface SkillGroup {
  id: string;
  title: string;
  category: string;
  icon: LucideIcon;
  skills: SkillItem[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'infra',
    title: 'Azure Infrastructure & Networking',
    category: 'Infrastructure',
    icon: Network,
    skills: [
      { name: 'Virtual Networks (VNets)', icon: Network },
      { name: 'Azure Virtual Machines (VMs)', icon: Server },
      { name: 'Network Security Groups (NSGs)', icon: ShieldCheck },
      { name: 'Azure Load Balancers', icon: Layers },
      { name: 'Azure Blob & Storage Accounts', icon: HardDrive },
      { name: 'Azure Backup & Recovery Services', icon: RotateCcw },
    ],
  },
  {
    id: 'security',
    title: 'Identity & Cloud Security',
    category: 'Security',
    icon: ShieldCheck,
    skills: [
      { name: 'Microsoft Entra ID (Azure AD)', icon: KeyRound },
      { name: 'Role-Based Access Control (RBAC)', icon: ShieldCheck },
      { name: 'Azure Key Vault', icon: Lock },
      { name: 'Azure Policy & Governance', icon: FileCheck },
    ],
  },
  {
    id: 'devops',
    title: 'Automation & DevOps',
    category: 'DevOps & IaC',
    icon: GitBranch,
    skills: [
      { name: 'Terraform (IaC)', icon: Code2 },
      { name: 'Azure Bicep / ARM Templates', icon: Code2 },
      { name: 'Azure DevOps CI/CD Pipelines', icon: Workflow },
      { name: 'GitHub Actions Workflows', icon: GitBranch },
      { name: 'Azure CLI & PowerShell', icon: Terminal },
      { name: 'Git & Version Control', icon: GitBranch },
    ],
  },
  {
    id: 'ops',
    title: 'Monitoring & Containers',
    category: 'Operations',
    icon: Activity,
    skills: [
      { name: 'Azure Monitor & Metrics', icon: Activity },
      { name: 'Log Analytics & KQL (Basics)', icon: Terminal },
      { name: 'Docker Containerization', icon: Boxes },
    ],
  },
];

const TOTAL_SKILLS_COUNT = SKILL_GROUPS.reduce((acc, g) => acc + g.skills.length, 0);

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredGroups = useMemo(() => {
    return SKILL_GROUPS.map((group) => {
      const matchesTab = activeTab === 'all' || group.id === activeTab;
      if (!matchesTab) return null;

      if (!searchQuery.trim()) {
        return group;
      }

      const query = searchQuery.toLowerCase().trim();
      const matchingSkills = group.skills.filter(
        (s) => s.name.toLowerCase().includes(query) || group.title.toLowerCase().includes(query)
      );

      if (matchingSkills.length === 0) return null;

      return {
        ...group,
        skills: matchingSkills,
      };
    }).filter(Boolean) as SkillGroup[];
  }, [activeTab, searchQuery]);

  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-6 py-12 sm:py-16">
      {/* Section Header */}
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="eyebrow text-azure-400">Skills &amp; Technologies</span>
          <span className="h-px w-12 bg-azure-500/30" />
        </div>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Core technical competencies.
        </h2>
        <p className="mt-2 text-sm text-gray-400 max-w-xl">
          Realistic, hands-on technologies I work with daily across enterprise Azure environments.
        </p>

        {/* Filter & Search Bar */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/8 bg-white/[0.02] p-1 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-azure-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              All ({TOTAL_SKILLS_COUNT})
            </button>
            {SKILL_GROUPS.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setActiveTab(g.id)}
                className={`rounded-lg px-3 py-1.5 font-medium transition-all ${
                  activeTab === g.id
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {g.category}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[200px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills..."
              className="w-full rounded-xl border border-white/10 bg-black/40 pl-9 pr-8 py-1.5 text-xs text-white placeholder-gray-500 transition-all focus:border-azure-400/50 focus:outline-none"
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

      {/* Skills Clean Grid (Chips / Badges - No Long Explanations) */}
      <div className="mt-8 space-y-6">
        {filteredGroups.length === 0 ? (
          <div className="py-12 text-center text-sm text-gray-500">
            No skills found matching "{searchQuery}"
          </div>
        ) : (
          filteredGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={group.id}
                className="glass-card rounded-2xl p-5 sm:p-6 transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 border-b border-white/5 pb-3.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-azure-500/30 bg-azure-500/10 text-azure-400">
                    <GroupIcon className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-semibold text-white">
                    {group.title}
                  </h3>
                  <span className="ml-auto text-xs text-gray-500 font-mono">
                    {group.skills.length}
                  </span>
                </div>

                {/* Skill Chips (Compact, Clean, Straightforward) */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group inline-flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-gray-200 transition-all hover:border-azure-400/40 hover:bg-azure-500/[0.08] hover:text-white"
                      >
                        <SkillIcon className="h-3.5 w-3.5 text-azure-400 group-hover:text-azure-300 transition-colors" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
