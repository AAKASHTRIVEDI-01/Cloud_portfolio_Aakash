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
              <h2 className="font-display text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl tracking-tight">
                Architecting stable, secure, and automated cloud platforms.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-700 sm:text-xl font-medium">
                I am an Azure Cloud &amp; DevOps Engineer dedicated to maintaining high-availability cloud
                infrastructure. I combine hands-on infrastructure administration with modern Infrastructure as Code
                practices to keep enterprise systems secure, compliant, and easy to scale.
              </p>

              {/* Clean Highlight Items (White cards, soft borders) */}
              <div className="mt-8 space-y-4">
                {HIGHLIGHTS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group flex items-start gap-5 rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:border-azure-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#EAF2F8] text-azure-700 transition-colors group-hover:bg-azure-700 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-base font-extrabold text-slate-900 sm:text-lg">{item.title}</h4>
                        <p className="mt-1 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Capability Cards (6 cols) */}
          <div className="lg:col-span-6 grid gap-6 sm:grid-cols-2">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="group flex flex-col justify-between rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-2 hover:border-azure-400 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF2F8] text-azure-700 transition-colors group-hover:bg-azure-700 group-hover:text-white shadow-sm">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-display text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clean Tech Stack Row */}
        <div className="mt-14 flex flex-wrap items-center gap-4 border-t-2 border-slate-200 pt-8">
          <span className="text-base font-extrabold uppercase tracking-widest text-slate-500 mr-2">
            Core Technologies:
          </span>
          {CORE_STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-full border-2 border-slate-200 bg-white px-5 py-2.5 text-base font-bold text-slate-800 shadow-sm transition-all hover:-translate-y-1 hover:border-azure-500 hover:bg-[#EAF2F8] hover:text-azure-800 hover:shadow-md cursor-pointer"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
