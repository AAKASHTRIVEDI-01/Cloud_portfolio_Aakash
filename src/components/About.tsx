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
  ArrowRight,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const PILLARS = [
  {
    icon: Network,
    title: 'Cloud Networking & HA',
    accent: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/[0.08] group-hover:border-cyan-400 group-hover:bg-cyan-500/15',
    tag: 'Hub & Spoke • WAF',
    desc: 'Hub-and-spoke topologies, Application Gateway/WAF, NSGs, route tables (UDR), and multi-region disaster recovery.',
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
    accent: 'text-aurora-400 border-aurora-500/30 bg-aurora-500/[0.08] group-hover:border-aurora-400 group-hover:bg-aurora-500/15',
    tag: 'Bicep • Terraform',
    desc: 'Repeatable, version-controlled provisioning using Bicep, ARM templates, Terraform, and remote state management.',
  },
  {
    icon: Activity,
    title: 'Observability & DevOps',
    accent: 'text-sunset-400 border-sunset-500/30 bg-sunset-500/[0.08] group-hover:border-sunset-400 group-hover:bg-sunset-500/15',
    tag: 'CI/CD • KQL Analytics',
    desc: 'End-to-end CI/CD pipelines in Azure DevOps/GitHub Actions, Azure Monitor, Log Analytics, and automated alerting.',
  },
];

const EXECUTIVE_POINTS = [
  {
    title: '2+ Years Enterprise Azure Experience',
    desc: 'Provisioning, monitoring, and scaling production cloud infrastructure for mission-critical workloads.',
    color: 'text-cyan-400',
  },
  {
    title: 'Zero-Trust Security & Governance',
    desc: 'Enforcing least-privilege RBAC, Microsoft Entra ID, Azure Key Vault, and compliance guardrails.',
    color: 'text-emerald-400',
  },
  {
    title: 'Infrastructure as Code (IaC)',
    desc: 'Deploying modular, version-controlled cloud environments using Terraform, Bicep, and ARM templates.',
    color: 'text-aurora-400',
  },
  {
    title: 'Resilient Operations & CI/CD',
    desc: 'Automating multi-stage DevOps deployment pipelines with 24/7 proactive KQL observability.',
    color: 'text-sunset-400',
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
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="eyebrow text-sunset-400">About Me</span>
          <span className="h-px w-12 bg-sunset-500/30" />
        </div>

        <div className="mt-6 sm:mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Executive Points Overview - 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Building resilient cloud backbones that scale with confidence.
              </h2>

              {/* Data on Points: Executive Highlights */}
              <div className="mt-6 space-y-3">
                {EXECUTIVE_POINTS.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all hover:border-aurora-500/30 hover:bg-white/[0.04]"
                  >
                    <CheckCircle2 className={`h-4 w-4 flex-none mt-0.5 ${pt.color}`} />
                    <div>
                      <h4 className="text-xs font-bold text-white sm:text-sm">{pt.title}</h4>
                      <p className="mt-0.5 text-xs text-gray-400 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Principles Grid */}
            <div className="mt-6 rounded-2xl border border-aurora-500/20 bg-aurora-500/[0.03] p-4 sm:p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-aurora-300 uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4 text-aurora-400" />
                <span>Core Engineering Principles</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {PRINCIPLES.map((p) => {
                  const PIcon = p.icon;
                  return (
                    <div
                      key={p.label}
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5 text-xs text-gray-300 hover:border-aurora-500/25 transition-colors"
                    >
                      <PIcon className="h-3.5 w-3.5 text-sunset-400 flex-none" />
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
                    <h3 className="mt-4 font-display text-base font-bold text-white group-hover:text-sunset-300 transition-colors">
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
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-2.5 border-t border-white/5 pt-6">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-2">
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
              className="rounded-lg border border-white/8 bg-white/[0.02] px-3 py-1 text-xs font-medium text-gray-300 transition-colors hover:border-aurora-500/40 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
