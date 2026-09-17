import { Network, Shield, Cpu, Activity, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const PILLARS = [
  {
    icon: Network,
    title: 'Cloud Networking & HA',
    desc: 'Hub-and-spoke topologies, Application Gateway/WAF, NSGs, route tables, and disaster recovery.',
  },
  {
    icon: Shield,
    title: 'Security & Governance',
    desc: 'Zero-trust architecture, Entra ID (Azure AD), RBAC enforcement, Azure Policy, and Key Vault.',
  },
  {
    icon: Cpu,
    title: 'Infrastructure as Code',
    desc: 'Repeatable, version-controlled provisioning using Bicep, ARM templates, Terraform, and Git.',
  },
  {
    icon: Activity,
    title: 'Observability & DevOps',
    desc: 'End-to-end CI/CD pipelines in Azure DevOps/GitHub Actions, Azure Monitor, and Log Analytics.',
  },
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

            {/* Philosophy callout */}
            <div className="mt-8 rounded-2xl border border-gold-500/20 bg-gold-500/[0.04] p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-gold-300 uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4 text-gold-400" />
                <span>Core Engineering Principle</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-gray-300 sm:text-sm">
                "Infrastructure should be treated with the same rigor as application code — automated, version-controlled, auditable, and resilient by default."
              </p>
            </div>
          </div>

          {/* Pillars Grid - 7 cols */}
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="glass-card group flex flex-col justify-between rounded-2xl p-6"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/[0.08] transition-colors group-hover:border-gold-400 group-hover:bg-gold-500/15">
                      <Icon className="h-5 w-5 text-gold-400 transition-transform group-hover:scale-110" />
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
