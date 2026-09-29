import {
  Network,
  ShieldCheck,
  Cpu,
  Activity,
  CheckCircle2,
  Lock,
  Layers,
  Workflow,
  Zap,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const PILLARS = [
  {
    icon: Network,
    title: 'Virtual Networking',
    accent: 'text-azure-400 border-azure-500/30 bg-azure-500/[0.08]',
    tag: 'VNets • Peering',
    desc: 'Virtual Networks, subnet segmentation, NSG traffic filtering, and basic routing tables.',
  },
  {
    icon: ShieldCheck,
    title: 'Identity & Access',
    accent: 'text-azure-400 border-azure-500/30 bg-azure-500/[0.08]',
    tag: 'Entra ID • RBAC',
    desc: 'Role-based access control (RBAC), Entra ID administration, Key Vault secrets, and security baselines.',
  },
  {
    icon: Cpu,
    title: 'IaC & Automation',
    accent: 'text-azure-400 border-azure-500/30 bg-azure-500/[0.08]',
    tag: 'Terraform • Bicep',
    desc: 'Automating repetitive infrastructure provisioning using modular Terraform and Azure Bicep templates.',
  },
  {
    icon: Activity,
    title: 'Monitoring & Ops',
    accent: 'text-azure-400 border-azure-500/30 bg-azure-500/[0.08]',
    tag: 'Azure Monitor • KQL',
    desc: 'Resource metrics tracking, Log Analytics querying (KQL basics), diagnostic settings, and metric alerts.',
  },
];

const EXECUTIVE_POINTS = [
  {
    title: '2+ Years Hands-On Azure Experience',
    desc: 'Managing, troubleshooting, and provisioning Azure infrastructure for business workloads.',
  },
  {
    title: 'Security & Access Management',
    desc: 'Enforcing least-privilege RBAC, Microsoft Entra ID governance, and Azure Key Vault secrets protection.',
  },
  {
    title: 'Infrastructure as Code (IaC)',
    desc: 'Writing clean, repeatable Terraform and Bicep scripts to replace manual portal deployments.',
  },
  {
    title: 'Continuous Delivery (CI/CD)',
    desc: 'Configuring automated deployment workflows in Azure DevOps and GitHub Actions.',
  },
];

const PRINCIPLES = [
  { icon: Lock, label: 'Least Privilege Access' },
  { icon: Layers, label: 'Clean Segmentation' },
  { icon: Workflow, label: 'IaC Automation' },
  { icon: Zap, label: 'Proactive Monitoring' },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="eyebrow text-azure-400">About Me</span>
          <span className="h-px w-12 bg-azure-500/30" />
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Executive Points Overview - 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                Practical cloud engineering with a focus on stability &amp; automation.
              </h2>

              {/* Data on Points: Grounded Experience */}
              <div className="mt-5 space-y-2.5">
                {EXECUTIVE_POINTS.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all hover:border-azure-500/30"
                  >
                    <CheckCircle2 className="h-4 w-4 flex-none mt-0.5 text-azure-400" />
                    <div>
                      <h4 className="text-xs font-bold text-white sm:text-sm">{pt.title}</h4>
                      <p className="mt-0.5 text-xs text-gray-400 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Principles Grid */}
            <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-azure-300 uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4 text-azure-400" />
                <span>Working Principles</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {PRINCIPLES.map((p) => {
                  const PIcon = p.icon;
                  return (
                    <div
                      key={p.label}
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5 text-xs text-gray-300"
                    >
                      <PIcon className="h-3.5 w-3.5 text-azure-400 flex-none" />
                      <span className="font-medium text-[11px]">{p.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pillars Grid - 7 cols */}
          <div className="lg:col-span-7 grid gap-3.5 sm:grid-cols-2">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="glass-card flex flex-col justify-between rounded-2xl p-5 sm:p-6"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${pillar.accent}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-0.5 text-[10px] text-gray-400">
                        {pillar.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-sm sm:text-base font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-gray-400">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech tags strip */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-white/5 pt-5">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-2">
            Primary Stack:
          </span>
          {[
            'Microsoft Azure',
            'Azure VMs',
            'Virtual Networks',
            'Terraform',
            'Azure Bicep',
            'Azure DevOps CI/CD',
            'GitHub Actions',
            'Microsoft Entra ID',
            'Azure Key Vault',
            'Azure Monitor',
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/8 bg-white/[0.02] px-3 py-1 text-xs font-medium text-gray-300 hover:border-azure-400/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
