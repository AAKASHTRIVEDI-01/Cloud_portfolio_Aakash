import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Award,
  Eye,
  X,
  ExternalLink,
  CheckCircle2,
  KeyRound,
  Network,
  Server,
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
    status: 'Accredited',
    image: awsBadge,
    isBadge: true,
  },
];

const CORE_DOMAINS = [
  {
    title: 'Identity & Access Governance',
    desc: 'Microsoft Entra ID management, role-based access control (RBAC), and security policies.',
    icon: KeyRound,
  },
  {
    title: 'Virtual Networking & Traffic',
    desc: 'Virtual Networks, subnets, routing rules, NSG filtering, and network peering.',
    icon: Network,
  },
  {
    title: 'Compute & Storage Administration',
    desc: 'Virtual machine provisioning, disk management, and Recovery Services backup vaults.',
    icon: Server,
  },
  {
    title: 'Monitoring & Health Diagnostics',
    desc: 'Azure Monitor metrics, diagnostic logs, and Log Analytics workspace queries.',
    icon: Activity,
  },
];

export default function Certifications() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const primaryCert = CERTS[0];
  const awsCert = CERTS[1];

  return (
    <section id="certifications" className="relative bg-[#DCEEF8]/60 py-16 sm:py-20 border-y border-blue-100/80">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-2">
            <span className="eyebrow text-azure-700">Credentials</span>
            <span className="h-px w-12 bg-azure-700/30" />
          </div>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Certifications &amp; credentials.
          </h2>
          <p className="mt-4 text-lg font-medium text-slate-700 max-w-2xl">
            Industry-recognized credentials validating enterprise Azure administration and cloud fundamentals.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Primary Credential (7 cols) - Crisp White Card */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div>
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#EAF2F8] text-azure-700">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-azure-700">
                        {primaryCert.code}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {primaryCert.status}
                      </span>
                    </div>
                    <h3 className="mt-1 font-display text-base sm:text-lg font-bold text-slate-900">
                      {primaryCert.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Issued by {primaryCert.issuer}</p>
                  </div>
                </div>
              </div>

              {/* Credential Details (Clean typography, NO font-mono) */}
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 rounded-xl bg-[#F8FAFC] border border-slate-100 p-3 text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 block font-semibold uppercase">Credential ID</span>
                  <span className="text-slate-800 text-xs font-bold">{primaryCert.credentialId}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block font-semibold uppercase">Verification</span>
                  <span className="text-emerald-700 text-xs font-semibold inline-flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-emerald-600" /> Microsoft Verified
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-500 block font-semibold uppercase">Issue Date</span>
                  <span className="text-slate-700 text-xs font-medium">{primaryCert.issueDate}</span>
                </div>
              </div>

              {/* Core Competencies (Human & Clean) */}
              <div className="mt-5 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Key Competencies Validated:
                </h4>
                <div className="space-y-2">
                  {CORE_DOMAINS.map((domain) => {
                    const DomainIcon = domain.icon;
                    return (
                      <div
                        key={domain.title}
                        className="flex items-start gap-2.5 rounded-lg p-2 transition-colors hover:bg-slate-50"
                      >
                        <DomainIcon className="h-4 w-4 text-azure-700 flex-none mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-slate-900">{domain.title}</div>
                          <p className="text-[11px] text-slate-600 leading-relaxed">{domain.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-5 border-t border-slate-100 pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedCert(primaryCert)}
                className="inline-flex items-center gap-2 rounded-lg bg-azure-600 px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-azure-700"
              >
                <Eye className="h-3.5 w-3.5" />
                <span>View Full Certificate</span>
              </button>
            </div>
          </div>

          {/* Right Column: Preview & AWS Badge (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Certificate Image Preview */}
            <div
              onClick={() => setSelectedCert(primaryCert)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3 shadow-sm transition-all hover:border-azure-400 hover:shadow-md"
            >
              <div className="relative overflow-hidden rounded-xl border border-slate-100 bg-slate-100">
                <img
                  src={primaryCert.image}
                  alt={`${primaryCert.code} Certificate`}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 group-hover:text-azure-700 transition-colors">
                <Eye className="h-3.5 w-3.5" />
                <span>Click to view certificate</span>
              </div>
            </div>

            {/* AWS Badge Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm flex items-center gap-4">
              <img
                src={awsCert.image}
                alt="AWS Academy Badge"
                className="h-16 w-16 object-contain flex-none cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedCert(awsCert)}
              />
              <div>
                <div className="text-xs font-bold text-slate-900">AWS Academy Cloud Foundations</div>
                <p className="text-[11px] text-slate-600 leading-relaxed mt-0.5">
                  Foundational multi-cloud concepts, compute, storage, and security architectures.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedCert(awsCert)}
                  className="mt-2 text-xs font-semibold text-azure-700 hover:text-azure-800 inline-flex items-center gap-1"
                >
                  <span>View Badge</span>
                  <span>→</span>
                </button>
              </div>
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
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-azure-700">{cert.code}</span>
            <span className="text-xs text-slate-700 font-semibold">• {cert.name}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
          <img
            src={cert.image}
            alt={cert.name}
            className="max-h-[70vh] w-full object-contain"
          />
        </div>

        {cert.credentialId && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 pt-3 border-t border-slate-100">
            <div>
              <span className="text-slate-500">Credential ID: </span>
              <span className="font-bold text-slate-900">{cert.credentialId}</span>
            </div>
            <a
              href="https://learn.microsoft.com/api/credentials/share/en-us/AakashTrivedi-5085/57A08EF7A93939B?sharingId=88A835ED7885F313"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-azure-600 hover:text-azure-700 font-bold"
            >
              <span>Verify on Microsoft Learn</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
