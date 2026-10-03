import {
  Network,
  ShieldCheck,
  Cpu,
  Activity,
  Server,
  KeyRound,
  Workflow,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const CAPABILITIES = [
  {
    icon: Network,
    title: 'Virtual Networking',
    desc: 'Designing resilient VNets, subnets, and private endpoints.',
  },
  {
    icon: ShieldCheck,
    title: 'Identity & Access',
    desc: 'Implementing RBAC, Entra ID, and Key Vault solutions.',
  },
  {
    icon: Cpu,
    title: 'IaC & Automation',
    desc: 'Building infrastructure with Terraform and Azure Bicep.',
  },
  {
    icon: Activity,
    title: 'Monitoring & Reliability',
    desc: 'Tracking health and alerts with Azure Monitor.',
  },
];

const HIGHLIGHTS = [
  {
    icon: Server,
    title: '2+ Years Azure Experience',
    desc: 'Administering VMs, storage, and backups across diverse environments.',
  },
  {
    icon: Network,
    title: 'Network & Security',
    desc: 'Configuring secure VNet topologies, routing, and NSGs.',
  },
  {
    icon: KeyRound,
    title: 'Identity & Governance',
    desc: 'Enforcing zero-trust and RBAC through Microsoft Entra ID.',
  },
  {
    icon: Workflow,
    title: 'CI/CD Pipelines',
    desc: 'Automating deployments with GitHub Actions and Azure DevOps.',
  },
];

const CORE_STACK = [
  'Microsoft Azure',
  'Virtual Networks',
  'Azure VMs',
  'Terraform',
  'Azure Bicep',
  'Azure DevOps',
  'GitHub Actions',
  'Microsoft Entra ID',
  'Azure Key Vault',
  'Azure Monitor',
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        {/* Section Header */}
        <div className="flex items-center gap-2">
          <span className="eyebrow text-azure-700">About Me</span>
          <span className="h-px w-12 bg-azure-700/30" />
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Narrative & Key Strengths (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Architecting stable, secure, and automated cloud platforms.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-700">
                I am an Azure Cloud &amp; DevOps Engineer dedicated to maintaining high-availability cloud
                infrastructure. I combine hands-on infrastructure administration with modern Infrastructure as Code
                practices to keep enterprise systems secure, compliant, and easy to scale.
              </p>

              {/* Clean Highlight Items (White cards, soft borders) */}
              <div className="mt-6 space-y-4">
                {HIGHLIGHTS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-[#EAF2F8] text-azure-700 transition-colors group-hover:bg-azure-700 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 sm:text-base">{item.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Capability Cards (6 cols) */}
          <div className="lg:col-span-6 grid gap-5 sm:grid-cols-2">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF2F8] text-azure-700 transition-colors group-hover:bg-azure-700 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-base sm:text-lg font-bold text-slate-900">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clean Tech Stack Row */}
        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6">
          <span className="text-sm font-semibold text-slate-700 mr-2">
            Core Technologies:
          </span>
          {CORE_STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-azure-400 hover:bg-[#EAF2F8] hover:text-azure-700 hover:shadow-md cursor-pointer"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
