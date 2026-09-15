import { Award, Clock } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const CERTS = [
  {
    code: 'AZ-104',
    name: 'Microsoft Azure Administrator Associate',
    status: 'Certified',
  },
  {
    code: 'AZ-305',
    name: 'Microsoft Azure Solutions Architect Expert',
    status: 'In Progress',
  },
];

export default function Certifications() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <span className="eyebrow text-flame-400">Certifications</span>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          Microsoft Azure credentials.
        </h2>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {CERTS.map((cert, i) => (
          <CertCard key={cert.code} cert={cert} index={i} />
        ))}
      </div>
    </section>
  );
}

function CertCard({
  cert,
  index,
}: {
  cert: { code: string; name: string; status: string };
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const certified = cert.status === 'Certified';

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:border-flame-500/20`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`flex h-12 w-12 flex-none items-center justify-center rounded-xl border ${
          certified
            ? 'border-flame-500/25 bg-flame-500/[0.08]'
            : 'border-white/10 bg-white/[0.03]'
        }`}
      >
        {certified ? (
          <Award className="h-6 w-6 text-flame-400" />
        ) : (
          <Clock className="h-6 w-6 text-gray-400" />
        )}
      </div>
      <div>
        <div className="flex items-center gap-3">
          <h3 className="font-display text-base font-semibold text-white">{cert.code}</h3>
          <span
            className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
              certified
                ? 'bg-flame-500/15 text-flame-300'
                : 'bg-white/8 text-gray-400'
            }`}
          >
            {cert.status}
          </span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{cert.name}</p>
      </div>
    </div>
  );
}
