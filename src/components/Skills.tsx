import { Network, ShieldCheck, GitBranch, Activity } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const skillGroups = [
    {
      title: 'Azure Infrastructure & Networking',
      icon: Network,
      skills: ['Virtual Networks (VNets)', 'Azure Virtual Machines', 'Network Security Groups (NSGs)', 'Azure Load Balancers', 'Storage Accounts & Blob', 'Backup & Recovery Services']
    },
    {
      title: 'Identity & Cloud Security',
      icon: ShieldCheck,
      skills: ['Microsoft Entra ID', 'Role-Based Access Control (RBAC)', 'Azure Key Vault', 'Azure Policy & Governance']
    },
    {
      title: 'Automation & DevOps',
      icon: GitBranch,
      skills: ['Terraform', 'Azure Bicep & ARM', 'Azure DevOps Pipelines', 'GitHub Actions Workflows', 'Azure CLI & PowerShell', 'Git Version Control']
    },
    {
      title: 'Monitoring & Containers',
      icon: Activity,
      skills: ['Azure Monitor & Metrics', 'Log Analytics & KQL', 'Docker Containers']
    }
  ];

  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-6 py-12">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="eyebrow text-azure-700">Skills &amp; Tools</span>
          <span className="h-px w-12 bg-azure-700/30" />
        </div>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Technical Skills
        </h2>
        
        {/* Compact Bulleted Layout */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div key={group.title}>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded bg-[#EAF2F8] text-azure-700">
                    <GroupIcon className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-slate-900">
                    {group.title}
                  </h3>
                </div>
                <ul className="space-y-1.5 pl-9">
                  {group.skills.map((skill) => (
                    <li key={skill} className="relative text-sm text-slate-700 flex items-start">
                      <span className="absolute left-[-16px] top-[7px] h-1.5 w-1.5 rounded-full bg-azure-500/80" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
