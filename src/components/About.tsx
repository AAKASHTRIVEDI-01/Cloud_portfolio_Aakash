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
    desc: 'Designing resilient VNets, segmented subnets, NSG traffic rules, and private endpoints.',
  },
  {
    icon: ShieldCheck,
    title: 'Identity & Access',
    desc: 'Implementing Least-Privilege RBAC, Microsoft Entra ID policies, and Key Vault secrets.',
  },
  {
    icon: Cpu,
    title: 'IaC & Automation',
    desc: 'Building repeatable infrastructure using modular Terraform, Azure Bicep, and CLI scripts.',
  },
  {
    icon: Activity,
    title: 'Monitoring & Reliability',
    desc: 'Tracking resource health, diagnostic metrics, and Log Analytics alerts to ensure uptime.',
  },
];

const HIGHLIGHTS = [
  {
    icon: Server,
    title: '2+ Years Hands-On Azure Experience',
    desc: 'Administering 20–30 production virtual machines, storage accounts, and backup vaults across client environments.',
  },
  {
    icon: Network,
    title: 'Network & Security Architecture',
    desc: 'Configuring secure virtual network topologies, routing tables, and perimeter network security groups.',
  },
  {
    icon: KeyRound,
    title: 'Identity & Access Governance',
    desc: 'Enforcing role-based access control and zero-trust permissions through Microsoft Entra ID.',
  },
  {
    icon: Workflow,
    title: 'Automated CI/CD Pipelines',
    desc: 'Deploying cloud configurations through structured GitHub Actions and Azure DevOps workflows.',
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
          <span className="eyebrow text-azure-600">About Me</span>
          <span className="h-px w-12 bg-azure-500/30" />
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Narrative & Key Strengths (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                Architecting stable, secure, and automated cloud platforms.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                I am an Azure Cloud &amp; DevOps Engineer dedicated to maintaining high-availability cloud
                infrastructure. I combine hands-on infrastructure administration with modern Infrastructure as Code
                practices to keep enterprise systems secure, compliant, and easy to scale.
              </p>

              {/* Clean Highlight Items (White cards, soft borders) */}
              <div className="mt-6 space-y-3">
                {HIGHLIGHTS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group flex items-start gap-3.5 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xs transition-all duration-200 hover:border-azure-300 hover:shadow-sm"
                    >
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-[#EBF5FA] text-azure-600 transition-colors group-hover:bg-azure-600 group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 sm:text-sm">{item.title}</h4>
                        <p className="mt-0.5 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Capability Cards (6 cols) */}
          <div className="lg:col-span-6 grid gap-4 sm:grid-cols-2">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs transition-all duration-200 hover:border-azure-300 hover:shadow-sm"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EBF5FA] text-azure-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-sm sm:text-base font-bold text-slate-900">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clean Tech Stack Row */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-slate-200/80 pt-5">
          <span className="text-xs font-semibold text-slate-500 mr-2">
            Core Technologies:
          </span>
          {CORE_STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-medium text-slate-700 shadow-2xs transition-colors hover:border-azure-400 hover:bg-[#EBF5FA] hover:text-azure-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
