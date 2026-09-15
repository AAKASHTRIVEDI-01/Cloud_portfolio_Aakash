import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <span className="eyebrow text-flame-400">Contact</span>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          Let's build something resilient.
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-400">
          Open to Azure consulting, infrastructure projects, and cloud engineering roles.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Links */}
        <div className="space-y-3">
          <ContactLink
            icon={Mail}
            label="Email"
            value="aakash.trivedi@example.com"
            href="mailto:aakash.trivedi@example.com"
          />
          <ContactLink
            icon={Linkedin}
            label="LinkedIn"
            value="linkedin.com/in/aakashtrivedi"
            href="https://linkedin.com/in/aakashtrivedi"
          />
          <ContactLink
            icon={Github}
            label="GitHub"
            value="github.com/aakashtrivedi"
            href="https://github.com/aakashtrivedi"
          />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6"
        >
          <div className="space-y-4">
            <Field label="Name" name="name" type="text" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-400">Message</label>
              <textarea
                name="message"
                rows={3}
                placeholder="Tell me about your project"
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-flame-500/40"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-flame-400 to-flame-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-flame-900/30 transition-all duration-300 hover:brightness-110"
            >
              {sent ? 'Message sent' : 'Send Message'}
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
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
      className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.02] p-4 transition-all duration-300 hover:border-flame-500/20"
    >
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-flame-500/20 bg-flame-500/[0.06]">
        <Icon className="h-5 w-5 text-flame-400" />
      </div>
      <div>
        <p className="text-xs font-medium text-gray-500">{label}</p>
        <p className="text-sm text-gray-300 underline-offset-4 transition-all duration-200 group-hover:text-flame-300 group-hover:underline">
          {value}
        </p>
      </div>
    </a>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-gray-400">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-flame-500/40"
      />
    </div>
  );
}
