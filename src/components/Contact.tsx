import { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight, ArrowUp, FileText, Send, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [copied, setCopied] = useState(false);
  const email = 'aakashtrivedi2003@gmail.com';
  const resumeUrl = `${import.meta.env.BASE_URL}Aakash_Trivedi_Resume.pdf`;

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 pt-12 pb-12 sm:pt-16 sm:pb-16">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="eyebrow text-gold-400">Get In Touch</span>
          <span className="h-px w-12 bg-gold-500/30" />
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Let's connect &amp; collaborate.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
              Specializing in enterprise cloud architecture, automated CI/CD pipelines, and high-availability Azure environments. Always keen to connect for technical discussions and knowledge sharing.
            </p>
          </div>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 self-start rounded-xl border border-gold-500/40 bg-gold-500/10 px-4 py-2 text-xs font-semibold text-gold-300 transition-all duration-300 hover:bg-gold-500/20 hover:border-gold-400"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Email Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-gold-400" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>

        {/* Contact Cards Grid */}
        <div className="mt-8 sm:mt-10 grid gap-5 sm:grid-cols-3">
          {/* Email Card */}
          <div className="glass-card group flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:border-gold-500/40 hover:shadow-[0_0_24px_rgba(212,175,55,0.12)]">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/[0.08] transition-colors group-hover:border-gold-400 group-hover:bg-gold-500/20">
                <Mail className="h-5 w-5 text-gold-400" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-white">Email Address</h3>
              <p className="mt-1 text-xs text-gray-400">Direct technical inquiries &amp; feedback</p>
              <p className="mt-3 font-mono text-xs text-gray-300 break-all">{email}</p>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={`mailto:${email}?subject=Technical%20Inquiry%20-%20Cloud%20Architecture`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 transition-colors group-hover:text-gold-300"
              >
                <span>Send Direct Email</span>
                <Send className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="glass-card group flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:border-azure-500/40 hover:shadow-[0_0_24px_rgba(2,132,199,0.12)]">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-azure-500/30 bg-azure-500/[0.08] transition-colors group-hover:border-azure-400 group-hover:bg-azure-500/20">
                <Linkedin className="h-5 w-5 text-azure-400" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-white">LinkedIn Network</h3>
              <p className="mt-1 text-xs text-gray-400">Professional network &amp; tech updates</p>
              <p className="mt-3 text-xs text-gray-300">/in/aakashtrivedi1003</p>
            </div>
            <div className="mt-6">
              <a
                href="https://linkedin.com/in/aakashtrivedi1003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-azure-400 transition-colors group-hover:text-azure-300"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="glass-card group flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/[0.04] transition-colors group-hover:border-white/40 group-hover:bg-white/[0.08]">
                <Github className="h-5 w-5 text-gray-200" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-white">GitHub Repositories</h3>
              <p className="mt-1 text-xs text-gray-400">Cloud templates, IaC &amp; open source code</p>
              <p className="mt-3 text-xs text-gray-300">/AAKASHTRIVEDI-01</p>
            </div>
            <div className="mt-6">
              <a
                href="https://github.com/AAKASHTRIVEDI-01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 transition-colors group-hover:text-white"
              >
                <span>Explore Repositories</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Technical Profile Summary Banner */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gold-500/20 bg-gradient-to-r from-gold-500/[0.06] via-white/[0.02] to-transparent p-6 sm:flex-row sm:p-7">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10">
              <FileText className="h-6 w-6 text-gold-400" />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-white">
                Technical Profile &amp; Credentials Summary
              </h4>
              <p className="text-xs text-gray-400 sm:text-sm">
                A comprehensive overview of enterprise architectures, Azure credentials, and engineering skills.
              </p>
            </div>
          </div>
          <a
            href={resumeUrl}
            download="Aakash_Trivedi_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-gold-950/50 transition-all hover:brightness-110"
          >
            <FileText className="h-4 w-4" />
            <span>Download Profile PDF</span>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} <span className="text-gray-300 font-medium">Aakash Trivedi</span>. Azure Cloud Engineer &amp; Infrastructure Specialist.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 transition-colors hover:text-gold-300"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
