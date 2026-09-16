import { Mail, Linkedin, Github } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <span className="eyebrow text-gold-400">Contact</span>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          Let's build something resilient.
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-400">
          Open to Azure consulting, infrastructure projects, and cloud engineering roles.
        </p>
      </div>

      <div className="mt-12 max-w-2xl">
        <div className="space-y-3">
          <ContactLink
            icon={Mail}
            label="Email"
            value="aakashtrivedi2003@gmail.com"
            href="mailto:aakashtrivedi2003@gmail.com"
          />
          <ContactLink
            icon={Linkedin}
            label="LinkedIn"
            value="linkedin.com/in/aakashtrivedi1003"
            href="https://linkedin.com/in/aakashtrivedi1003"
          />
          <ContactLink
            icon={Github}
            label="GitHub"
            value="github.com/AAKASHTRIVEDI-01"
            href="https://github.com/AAKASHTRIVEDI-01"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-white/8 pt-8 text-center">
        <p className="text-xs text-gray-600">
          Aakash Trivedi — Azure Cloud Engineer &amp; Consultant
        </p>
      </div>
    </section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.02] p-4 transition-all duration-300 hover:border-gold-500/20"
    >
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-gold-500/20 bg-gold-500/[0.06]">
        <Icon className="h-5 w-5 text-gold-400" />
      </div>
      <div>
        <p className="text-xs font-medium text-gray-500">{label}</p>
        <p className="text-sm text-gray-300 underline-offset-4 transition-all duration-200 group-hover:text-gold-300 group-hover:underline">
          {value}
        </p>
      </div>
    </a>
  );
}

