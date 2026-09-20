import { useState, useEffect } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Award,
  Eye,
  X,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  Sparkles,
  Cloud,
  KeyRound,
  HardDrive,
  Cpu,
  Network,
  Activity,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import az104Cert from '@/assets/az-104-cert.jpg';
import awsBadge from '@/assets/aws-cloud-foundations.png';

export interface Certification {
  code: string;
  name: string;
  issuer: string;
  status: string;
  image: string;
  isBadge?: boolean;
  credentialId?: string;
  certificationNumber?: string;
  issueDate?: string;
  expiryDate?: string;
  verifyUrl?: string;
}

const CERTS: Certification[] = [
  {
    code: 'AZ-104',
    name: 'Microsoft Azure Administrator Associate',
    issuer: 'Microsoft',
    status: 'Certified & Active',
    image: az104Cert,
    credentialId: '57A08EF7A93939B',
    certificationNumber: 'E8F3C1-A4B41E',
    issueDate: 'July 1, 2026',
    expiryDate: 'July 2, 2027',
  },
  {
    code: 'AWS Academy',
    name: 'AWS Academy Graduate - Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    status: 'Trained & Accredited',
    image: awsBadge,
    isBadge: true,
  },
];

export interface ExamCompetency {
  title: string;
  desc: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  tag: string;
}

const VALIDATED_COMPETENCIES: ExamCompetency[] = [
  {
    title: 'Manage Azure Identities & Governance',
    desc: 'Microsoft Entra ID, RBAC role assignments, Privileged Identity Management (PIM), and Azure Policy enforcement.',
    icon: KeyRound,
    iconBg: 'bg-azure-500/10',
    iconColor: 'text-azure-400',
    tag: 'Identity & PIM',
  },
  {
    title: 'Implement & Manage Storage',
    desc: 'Secure Blob storage accounts, tier lifecycles, private endpoints, and immutable backup protection.',
    icon: HardDrive,
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    tag: 'Storage & Data',
  },
  {
    title: 'Deploy & Manage Azure Compute Resources',
    desc: 'Virtual Machines, ARM/Bicep template provisioning, VM scale sets, and Azure Site Recovery (ASR).',
    icon: Cpu,
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    tag: 'Compute & Scaling',
  },
  {
    title: 'Configure & Manage Virtual Networking',
    desc: 'VNets, subnets, global peering, user-defined routes (UDR), NSGs, Azure Firewall, and Application Gateway WAF.',
    icon: Network,
    iconBg: 'bg-azure-500/10',
    iconColor: 'text-azure-400',
    tag: 'Virtual Networks',
  },
  {
    title: 'Monitor & Maintain Azure Resources',
    desc: 'Azure Monitor platform telemetry, Log Analytics KQL queries, action group alerting, and Recovery Services vaults.',
    icon: Activity,
    iconBg: 'bg-gold-500/10',
    iconColor: 'text-gold-400',
    tag: 'Ops & Telemetry',
  },
];

export default function Certifications() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const primaryCert = CERTS[0];
  const awsCert = CERTS[1];

  return (
    <section id="certifications" className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16">
      {/* Section Header */}
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="eyebrow text-gold-400">Certifications &amp; Badges</span>
          <span className="h-px w-12 bg-gold-500/30" />
        </div>
        <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Cloud credentials &amp; certifications.
        </h2>
        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
          Industry-recognized credentials validating primary Microsoft Azure enterprise architecture alongside foundational multi-cloud training.
        </p>
      </div>

      {/* Main 2-Column Credential Showcase */}
      <div className="mt-8 sm:mt-10 grid gap-6 lg:grid-cols-12">
        {/* Left Column: Primary Credential & Core Competencies (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-gold-500/25 bg-white/[0.02] p-6 sm:p-7 backdrop-blur-sm shadow-xl shadow-black/20 hover:border-gold-500/40 transition-all duration-300">
          <div>
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/8 pb-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10 shadow-[0_0_16px_rgba(212,175,55,0.15)]">
                  <Award className="h-6 w-6 text-gold-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-sm font-bold text-gold-400 tracking-wider">
                      {primaryCert.code}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      {primaryCert.status}
                    </span>
                  </div>
                  <h3 className="mt-1 font-display text-lg sm:text-xl font-bold text-white">
                    {primaryCert.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-400">
                    Issued by <strong className="text-gray-200">{primaryCert.issuer}</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Official Verification Metadata Banner */}
            <div className="mt-4.5 grid grid-cols-2 gap-3 sm:grid-cols-3 rounded-xl border border-white/5 bg-white/[0.02] p-3.5 text-xs">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 block">
                  Credential ID
                </span>
                <span className="font-mono text-gray-200 font-medium text-xs break-all">
                  {primaryCert.credentialId}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 block">
                  Cert Number
                </span>
                <span className="font-mono text-gray-200 font-medium text-xs">
                  {primaryCert.certificationNumber}
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 block">
                  Earned Date
                </span>
                <span className="text-gray-200 font-medium text-xs">
                  {primaryCert.issueDate}
                </span>
              </div>
            </div>

            {/* Validated Competency Areas */}
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gold-400 flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4" />
                  <span>AZ-104 Exam Competencies</span>
                </h4>
                <span className="text-[11px] font-mono text-gray-500">5 Exam Pillars</span>
              </div>

              <div className="mt-3 space-y-1.5">
                {VALIDATED_COMPETENCIES.map((comp) => {
                  const CompIcon = comp.icon;
                  return (
                    <div
                      key={comp.title}
                      className="group/comp flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-white/[0.035]"
                    >
                      <div className="flex items-start gap-3 min-w-0 flex-1">
                        <div
                          className={`mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-lg ${comp.iconBg} transition-transform duration-200 group-hover/comp:scale-110`}
                        >
                          <CompIcon className={`h-3.5 w-3.5 ${comp.iconColor}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-xs sm:text-sm font-semibold text-white group-hover/comp:text-gold-300 transition-colors">
                            {comp.title}
                          </span>
                          <p className="mt-0.5 text-[11px] sm:text-xs leading-relaxed text-gray-400 group-hover/comp:text-gray-300">
                            {comp.desc}
                          </p>
                        </div>
                      </div>

                      <span className="hidden sm:inline-flex flex-none rounded bg-white/[0.04] px-2 py-0.5 text-[10px] font-mono text-gray-400 mt-0.5">
                        {comp.tag}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-4">
            <div className="flex items-center gap-1.5 text-xs text-gold-400">
              <ShieldCheck className="h-4 w-4" />
              <span className="font-medium">Microsoft Verified Credential</span>
            </div>

            <button
              type="button"
              onClick={() => setSelectedCert(primaryCert)}
              className="inline-flex items-center gap-2 rounded-xl border border-gold-500/40 bg-gold-500/10 px-4 py-2 text-xs font-semibold text-gold-300 transition-all hover:bg-gold-500/20 hover:border-gold-400 shadow-sm"
            >
              <Eye className="h-3.5 w-3.5 text-gold-400" />
              <span>Inspect Certificate (Full Resolution)</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Certificate Preview & Roadmap (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Certificate Preview Card */}
          <div
            onClick={() => setSelectedCert(primaryCert)}
            className="group/cert cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-gold-500/40 hover:shadow-[0_0_24px_rgba(212,175,55,0.12)]"
          >
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black">
              <img
                src={primaryCert.image}
                alt={`${primaryCert.code} Certificate`}
                className="w-full object-cover transition-transform duration-500 group-hover/cert:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover/cert:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-xl border border-gold-500/50 bg-ink-900/95 px-4 py-2 text-xs font-semibold text-gold-300 shadow-2xl">
                  <Eye className="h-4 w-4 text-gold-400" />
                  Click to inspect full size
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between px-1 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-gold-400" />
                <span>Official Microsoft Transcript Artifact</span>
              </span>
              <span className="font-mono text-[11px] text-gray-500">Preview</span>
            </div>
          </div>

          {/* AWS Academy Cloud Foundations Badge Card */}
          <div className="flex-1 rounded-2xl border border-white/8 bg-white/[0.02] p-5 sm:p-6 backdrop-blur-sm transition-all hover:border-amber-500/30 shadow-lg shadow-black/20">
            <div className="flex items-center justify-between border-b border-white/8 pb-3.5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10">
                  <Award className="h-4 w-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-white">
                    AWS Academy Cloud Foundations
                  </h4>
                  <p className="text-[11px] text-gray-400">Accredited by Amazon Web Services</p>
                </div>
              </div>

              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
                Trained Badge
              </span>
            </div>

            {/* Badge Preview & Content */}
            <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div
                onClick={() => setSelectedCert(awsCert)}
                className="group/badge relative flex-none cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black/60 p-2 transition-all hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]"
                title="Click to view full badge"
              >
                <img
                  src={awsCert.image}
                  alt="AWS Academy Cloud Foundations Trained Badge"
                  className="h-24 w-24 object-contain transition-transform duration-300 group-hover/badge:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[1px] transition-opacity group-hover/badge:opacity-100 rounded-xl">
                  <Eye className="h-4 w-4 text-amber-400" />
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs text-gray-300 leading-relaxed">
                  Trained on AWS core architecture, cloud security, compute (EC2), storage (S3), networking (VPC), and cloud economics.
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5 justify-center sm:justify-start">
                  {['AWS Cloud Concepts', 'EC2 & S3', 'VPC Networking', 'Shared Responsibility'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[10px] text-gray-300 font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-3.5 flex items-center justify-center sm:justify-start gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(awsCert)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>View Official Badge</span>
                  </button>
                  <span className="text-gray-600 text-xs">•</span>
                  <span className="text-[11px] text-gray-500">Multi-Cloud Foundation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Certificate / Badge Inspection Modal */}
      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  );
}

function CertModal({
  cert,
  onClose,
}: {
  cert: Certification;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${cert.code} Certificate`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink-900/85 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 my-auto flex max-h-[92vh] w-full max-w-4xl flex-col rounded-2xl border border-gold-500/20 bg-ink-800/95 p-5 shadow-2xl shadow-black/70 animate-scale-in sm:p-7">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/8 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="eyebrow text-gold-400">{cert.code}</span>
              <span className="rounded-full bg-gold-500/15 px-2 py-0.5 text-[10px] font-semibold text-gold-300">
                Verified
              </span>
            </div>
            <h3 className="mt-1 font-display text-lg font-bold text-white sm:text-xl">
              {cert.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-gray-300 transition-colors hover:border-gold-500/40 hover:text-gold-300"
              title="Open full resolution in new tab"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Full Size</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-colors hover:border-gold-500/40 hover:text-gold-300"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Certificate / Badge Image View */}
        <div className="relative flex-1 overflow-auto rounded-xl border border-white/10 bg-black/60 p-4 sm:p-6 flex items-center justify-center">
          <img
            src={cert.image}
            alt={`${cert.code} Certificate / Badge`}
            className={`mx-auto rounded-lg object-contain shadow-2xl ${
              cert.isBadge ? 'max-h-[50vh] max-w-[340px]' : 'max-h-[64vh] w-auto'
            }`}
          />
        </div>

        {/* Footer info */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-gray-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {cert.credentialId && (
              <span>
                <strong className="font-medium text-gray-500">ID:</strong>{' '}
                <span className="font-mono text-gray-200">{cert.credentialId}</span>
              </span>
            )}
            {cert.certificationNumber && (
              <span>
                <strong className="font-medium text-gray-500">Cert #:</strong>{' '}
                <span className="font-mono text-gray-200">{cert.certificationNumber}</span>
              </span>
            )}
            {cert.issueDate && (
              <span>
                <strong className="font-medium text-gray-500">Earned:</strong>{' '}
                <span className="text-gray-200">{cert.issueDate}</span>
              </span>
            )}
            {!cert.credentialId && (
              <span>
                <strong className="font-medium text-gray-500">Issuer:</strong>{' '}
                <span className="text-gray-200">{cert.issuer}</span>
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-gold-400">
            <ShieldCheck className="h-4 w-4" />
            <span className="font-medium">Verified Credential</span>
          </div>
        </div>
      </div>
    </div>
  );
}
