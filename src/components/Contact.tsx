import { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight, ArrowUp, FileText, Send } from 'lucide-react';
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
    <section id="contact" className="relative mx-auto max-w-5xl px-6 pt-12 pb-16 sm:pt-16 sm:pb-20">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="eyebrow text-azure-400">Get In Touch</span>
          <span className="h-px w-12 bg-azure-500/30" />
        </div>

        <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              Let's connect.
            </h2>
            <p className="mt-2 max-w-lg text-sm text-gray-400">
              Open to discussions regarding Azure cloud infrastructure, DevOps roles, or engineering collaboration.
            </p>
          </div>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 self-start rounded-full border border-azure-500/30 bg-azure-500/10 px-4 py-2 text-xs font-semibold text-azure-300 transition-all hover:bg-azure-500/20 hover:text-white"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-azure-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Contact Cards Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {/* Email */}
          <div className="glass-card flex flex-col justify-between rounded-2xl p-5 transition-all hover:border-azure-400/40">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-azure-500/30 bg-azure-500/10 text-azure-400">
                <Mail className="h-4 w-4" />
              </div>
              <h3 className="mt-4 font-display text-sm font-bold text-white">Direct Email</h3>
              <p className="mt-1 font-mono text-xs text-gray-300 break-all">{email}</p>
            </div>
            <div className="mt-5">
              <a
                href={`mailto:${email}?subject=Inquiry%20-%20Cloud%20Engineering`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-azure-400 hover:text-azure-300"
              >
                <span>Send Email</span>
                <Send className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="glass-card flex flex-col justify-between rounded-2xl p-5 transition-all hover:border-azure-400/40">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-azure-500/30 bg-azure-500/10 text-azure-400">
                <Linkedin className="h-4 w-4" />
              </div>
              <h3 className="mt-4 font-display text-sm font-bold text-white">LinkedIn</h3>
              <p className="mt-1 text-xs text-gray-400">Professional network &amp; updates</p>
            </div>
            <div className="mt-5">
              <a
                href="https://linkedin.com/in/aakashtrivedi1003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-azure-400 hover:text-azure-300"
              >
                <span>Connect</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="glass-card flex flex-col justify-between rounded-2xl p-5 transition-all hover:border-white/20">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300">
                <Github className="h-4 w-4" />
              </div>
              <h3 className="mt-4 font-display text-sm font-bold text-white">GitHub</h3>
              <p className="mt-1 text-xs text-gray-400">Cloud code &amp; IaC templates</p>
            </div>
            <div className="mt-5">
              <a
                href="https://github.com/AAKASHTRIVEDI-01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-gray-300 hover:text-white"
              >
                <span>View Repositories</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Resume Banner */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-azure-500/30 bg-azure-500/10 text-azure-400">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-display text-sm font-bold text-white">
                Technical Resume (PDF)
              </h4>
              <p className="text-xs text-gray-400">
                A concise summary of my Azure cloud experience, certifications, and skills.
              </p>
            </div>
          </div>
          <a
            href={resumeUrl}
            download="Aakash_Trivedi_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-azure-600 px-5 py-2 text-xs font-semibold text-white shadow transition-all hover:bg-azure-500"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Aakash Trivedi. Azure Cloud Engineer.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-azure-400 transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </section>
  );
}
