import { useState, useEffect } from 'react';
import { Award, Eye, X, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import az104Cert from '@/assets/az-104-cert.jpg';

export interface Certification {
  code: string;
  name: string;
  issuer: string;
  status: string;
  image: string;
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
    status: 'Certified',
    image: az104Cert,
    credentialId: '57A08EF7A93939B',
    certificationNumber: 'E8F3C1-A4B41E',
    issueDate: 'July 1, 2026',
    expiryDate: 'July 2, 2027',
  },
];

export default function Certifications() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <span className="eyebrow text-gold-400">Certifications</span>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          Microsoft Azure credentials.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
          Industry-recognized certifications validating enterprise cloud architecture, security, and administration.
        </p>
      </div>

      <div className={`mt-12 ${CERTS.length === 1 ? 'max-w-2xl' : 'grid gap-6 sm:grid-cols-2'}`}>
        {CERTS.map((cert, i) => (
          <CertCard
            key={cert.code}
            cert={cert}
            index={i}
            onOpenModal={() => setSelectedCert(cert)}
          />
        ))}
      </div>

      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  );
}

function CertCard({
  cert,
  index,
  onOpenModal,
}: {
  cert: Certification;
  index: number;
  onOpenModal: () => void;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} group flex flex-col rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:border-gold-500/25 hover:bg-gold-500/[0.02]`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/[0.08]">
            <Award className="h-6 w-6 text-gold-400" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="font-display text-base font-semibold text-white">{cert.code}</h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-gold-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-gold-300">
                <CheckCircle2 className="h-3 w-3 text-gold-400" />
                {cert.status}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-gray-300">{cert.name}</p>
          </div>
        </div>
        <span className="hidden rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-gray-400 sm:inline-block">
          {cert.issuer}
        </span>
      </div>

      {/* Certificate Image Preview */}
      <div
        onClick={onOpenModal}
        className="group/preview relative mt-5 overflow-hidden rounded-xl border border-white/10 bg-black/40 cursor-pointer shadow-md transition-all duration-300 hover:border-gold-500/40"
      >
        <img
          src={cert.image}
          alt={`${cert.code} - ${cert.name}`}
          className="w-full object-cover transition-transform duration-500 group-hover/preview:scale-[1.02]"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover/preview:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-lg border border-gold-500/40 bg-ink-900/90 px-3.5 py-2 text-xs font-semibold text-gold-300 shadow-xl">
            <Eye className="h-4 w-4 text-gold-400" />
            Click to view certificate
          </span>
        </div>
      </div>

      {/* Metadata & Actions */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4 text-xs text-gray-400">
        <div className="space-y-0.5">
          {cert.credentialId && (
            <p>
              <span className="text-gray-500">Credential ID: </span>
              <span className="font-mono text-gray-300">{cert.credentialId}</span>
            </p>
          )}
          {cert.issueDate && (
            <p>
              <span className="text-gray-500">Earned: </span>
              <span className="text-gray-300">{cert.issueDate}</span>
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={onOpenModal}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors hover:border-gold-500/40 hover:bg-gold-500/10 hover:text-gold-300"
        >
          <Eye className="h-3.5 w-3.5" />
          View Certificate
        </button>
      </div>
    </div>
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

        {/* Certificate Image View */}
        <div className="relative flex-1 overflow-auto rounded-xl border border-white/10 bg-black/60 p-2 sm:p-3">
          <img
            src={cert.image}
            alt={`${cert.code} Certificate`}
            className="mx-auto max-h-[64vh] w-auto rounded-lg object-contain shadow-2xl"
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
          </div>
          <div className="flex items-center gap-1.5 text-gold-400">
            <ShieldCheck className="h-4 w-4" />
            <span className="font-medium">Online Verifiable</span>
          </div>
        </div>
      </div>
    </div>
  );
}
