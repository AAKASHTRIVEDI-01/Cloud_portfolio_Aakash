import { useState, useEffect } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Award,
  Eye,
  X,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
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
}

const VALIDATED_COMPETENCIES: ExamCompetency[] = [
  {
    title: 'Manage Azure Identities & Governance',
    desc: 'Microsoft Entra ID, RBAC role assignments, and Azure Policy enforcement.',
    icon: KeyRound,
  },
  {
    title: 'Implement & Manage Storage',
    desc: 'Blob storage accounts, access keys, private endpoints, and lifecycle rules.',
    icon: HardDrive,
  },
  {
    title: 'Deploy & Manage Azure Compute',
    desc: 'Virtual Machines, ARM/Bicep template deployment, and availability sets.',
    icon: Cpu,
  },
  {
    title: 'Configure Virtual Networks',
    desc: 'VNets, subnets, peering, NSGs, and basic load balancing configuration.',
    icon: Network,
  },
  {
    title: 'Monitor & Maintain Azure Resources',
    desc: 'Azure Monitor metrics, diagnostic logs, and basic KQL querying in Log Analytics.',
    icon: Activity,
  },
];

export default function Certifications() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const primaryCert = CERTS[0];
  const awsCert = CERTS[1];

  return (
    <section id="certifications" className="relative mx-auto max-w-5xl px-6 py-12 sm:py-16">
      {/* Section Header */}
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="eyebrow text-azure-400">Credentials</span>
          <span className="h-px w-12 bg-azure-500/30" />
        </div>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Certifications &amp; training.
        </h2>
        <p className="mt-2 text-sm text-gray-400 max-w-xl">
          Official credentials validating Azure administration skills and multi-cloud foundations.
        </p>
      </div>

      {/* Main Showcase */}
      <div className="mt-8 grid gap-6 lg:grid-cols-12">
        {/* Primary Credential (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-azure-500/25 bg-white/[0.02] p-6 backdrop-blur-sm">
          <div>
            <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-azure-500/30 bg-azure-500/10 text-azure-400">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-azure-400">
                      {primaryCert.code}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                      <CheckCircle2 className="h-2.5 w-2.5 text-emerald-400" />
                      {primaryCert.status}
                    </span>
                  </div>
                  <h3 className="mt-1 font-display text-base sm:text-lg font-bold text-white">
                    {primaryCert.name}
                  </h3>
                  <p className="text-xs text-gray-400">Issued by {primaryCert.issuer}</p>
                </div>
              </div>
            </div>

            {/* Credential Details */}
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs">
              <div>
                <span className="text-[10px] text-gray-500 block uppercase">Credential ID</span>
                <span className="font-mono text-gray-200 text-xs">{primaryCert.credentialId}</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 block uppercase">Cert Number</span>
                <span className="font-mono text-gray-200 text-xs">{primaryCert.certificationNumber}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[10px] text-gray-500 block uppercase">Earned Date</span>
                <span className="text-gray-200 text-xs">{primaryCert.issueDate}</span>
              </div>
            </div>

            {/* Validated Competency Areas */}
            <div className="mt-4 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-azure-400">
                Core Exam Areas Covered
              </h4>
              <div className="space-y-1.5">
                {VALIDATED_COMPETENCIES.map((comp) => {
                  const CompIcon = comp.icon;
                  return (
                    <div
                      key={comp.title}
                      className="flex items-start gap-2.5 rounded-lg px-2.5 py-1.5 transition-colors hover:bg-white/[0.03]"
                    >
                      <CompIcon className="h-3.5 w-3.5 text-azure-400 flex-none mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-white">{comp.title}</div>
                        <p className="text-[11px] text-gray-400 leading-tight">{comp.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-5 border-t border-white/8 pt-3.5 flex justify-end">
            <button
              type="button"
              onClick={() => setSelectedCert(primaryCert)}
              className="inline-flex items-center gap-1.5 rounded-full border border-azure-500/30 bg-azure-500/10 px-4 py-1.5 text-xs font-semibold text-azure-300 transition-all hover:bg-azure-500/20 hover:text-white"
            >
              <Eye className="h-3.5 w-3.5 text-azure-400" />
              <span>Inspect Certificate</span>
            </button>
          </div>
        </div>

        {/* Right Column: Preview & AWS Badge (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Certificate Image Preview */}
          <div
            onClick={() => setSelectedCert(primaryCert)}
            className="cursor-pointer overflow-hidden rounded-2xl border border-white/8 bg-black/40 p-3 transition-all hover:border-azure-400/40"
          >
            <div className="relative overflow-hidden rounded-xl border border-white/8 bg-black">
              <img
                src={primaryCert.image}
                alt={`${primaryCert.code} Certificate`}
                className="w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="mt-2 text-center text-xs text-gray-400">
              Click to view full certificate
            </div>
          </div>

          {/* AWS Badge Card */}
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 flex items-center gap-3.5">
            <img
              src={awsCert.image}
              alt="AWS Academy Badge"
              className="h-16 w-16 object-contain flex-none cursor-pointer"
              onClick={() => setSelectedCert(awsCert)}
            />
            <div>
              <div className="text-xs font-bold text-white">AWS Academy Cloud Foundations</div>
              <p className="text-[11px] text-gray-400 leading-tight mt-0.5">
                Core AWS cloud concepts, security, EC2 compute, and S3 storage.
              </p>
              <button
                type="button"
                onClick={() => setSelectedCert(awsCert)}
                className="mt-2 text-xs font-semibold text-azure-400 hover:text-azure-300"
              >
                View Badge →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
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
      <div
        className="fixed inset-0 bg-ink-950/80 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      <div className="relative z-10 my-auto flex max-h-[92vh] w-full max-w-3xl flex-col rounded-2xl border border-white/10 bg-ink-900/98 p-5 shadow-2xl sm:p-6">
        <div className="mb-3 flex items-center justify-between border-b border-white/8 pb-3">
          <div className="flex items-center gap-2">
            <span className="eyebrow text-azure-400">{cert.code}</span>
            <span className="text-sm font-bold text-white">{cert.name}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="relative flex-1 overflow-auto rounded-xl border border-white/8 bg-black/60 p-4 flex items-center justify-center">
          <img
            src={cert.image}
            alt={cert.name}
            className={`mx-auto rounded object-contain ${
              cert.isBadge ? 'max-h-[45vh] max-w-[280px]' : 'max-h-[60vh] w-auto'
            }`}
          />
        </div>
      </div>
    </div>
  );
}
