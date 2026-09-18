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
    title: 'Cloud Networking & HA',
    accent: 'text-azure-400 border-azure-500/30 bg-azure-500/[0.08] group-hover:border-azure-400 group-hover:bg-azure-500/15',
    tag: 'Hub & Spoke • WAF',
    desc: 'Hub-and-spoke topologies, Application Gateway/WAF, NSGs, route tables, and multi-region disaster recovery.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Governance',
    accent: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/[0.08] group-hover:border-emerald-400 group-hover:bg-emerald-500/15',
    tag: 'Zero-Trust • RBAC',
    desc: 'Zero-trust architecture, Entra ID (Azure AD), RBAC enforcement, Azure Policy, Key Vault, and least-privilege access.',
  },
  {
    icon: Cpu,
    title: 'Infrastructure as Code',
    accent: 'text-gold-400 border-gold-500/30 bg-gold-500/[0.08] group-hover:border-gold-400 group-hover:bg-gold-500/15',
    tag: 'Bicep • Terraform',
    desc: 'Repeatable, version-controlled provisioning using Bicep, ARM templates, Terraform, and remote state management.',
  },
  {
    icon: Activity,
    title: 'Observability & DevOps',
    accent: 'text-violet-400 border-violet-500/30 bg-violet-500/[0.08] group-hover:border-violet-400 group-hover:bg-violet-500/15',
    tag: 'CI/CD • KQL Analytics',
    desc: 'End-to-end CI/CD pipelines in Azure DevOps/GitHub Actions, Azure Monitor, Log Analytics, and automated alerting.',
  },
];

const PRINCIPLES = [
  { icon: Lock, label: 'Zero-Trust Security' },
  { icon: Layers, label: 'Modular Topologies' },
  { icon: Workflow, label: 'GitOps Automation' },
  { icon: Zap, label: 'High-Uptime Resilience' },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="eyebrow text-gold-400">About Me</span>
          <span className="h-px w-12 bg-gold-500/30" />
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Narrative - 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Building resilient cloud backbones that scale with confidence.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-gray-300">
                I am an <strong className="font-semibold text-white">Azure Cloud Engineer</strong> with 
                over 2 years of hands-on experience designing, provisioning, and supporting enterprise-grade
                cloud infrastructure.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
                My work centers around translating business requirements into secure, high-uptime architectures. 
                Whether managing multi-tier virtual network environments, automating deployments via CI/CD, or 
                enforcing strict cloud security policies, I emphasize reliability, auditability, and efficiency.
              </p>
            </div>

            {/* Architecture Principles Grid */}
            <div className="mt-8 rounded-2xl border border-gold-500/20 bg-gold-500/[0.04] p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-gold-300 uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4 text-gold-400" />
                <span>Core Engineering Principles</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {PRINCIPLES.map((p) => {
                  const PIcon = p.icon;
                  return (
                    <div
                      key={p.label}
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5 text-xs text-gray-300"
                    >
                      <PIcon className="h-3.5 w-3.5 text-gold-400 flex-none" />
                      <span className="font-medium text-[11px]">{p.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pillars Grid - 7 cols */}
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="glass-card group flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${pillar.accent}`}>
                        <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-mono text-gray-400">
                        {pillar.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech tags strip */}
        <div className="mt-12 flex flex-wrap items-center gap-2.5 border-t border-white/5 pt-8">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-2">
            Core Toolkit:
          </span>
          {[
            'Microsoft Azure',
            'Azure Virtual Networks',
            'Bicep / ARM',
            'Terraform',
            'Azure DevOps CI/CD',
            'GitHub Actions',
            'Docker & AKS',
            'Entra ID (Azure AD)',
            'Azure Monitor & KQL',
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/8 bg-white/[0.02] px-3 py-1 text-xs font-medium text-gray-300 transition-colors hover:border-gold-500/30 hover:text-gold-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
