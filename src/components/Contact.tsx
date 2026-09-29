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
          <span className="eyebrow text-azure-700">Get In Touch</span>
          <span className="h-px w-12 bg-azure-700/30" />
        </div>

        <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              Let's connect.
            </h2>
            <p className="mt-2 max-w-lg text-sm text-slate-600">
              Open to discussions regarding Azure cloud infrastructure, DevOps roles, or engineering collaboration.
            </p>
          </div>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 self-start rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-2xs transition-all hover:bg-slate-50 hover:border-slate-400"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-azure-700" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Contact Cards Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {/* Email */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all hover:border-azure-300 hover:shadow-sm">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2F8] text-azure-700">
                <Mail className="h-4 w-4" />
              </div>
              <h3 className="mt-4 font-display text-sm font-bold text-slate-900">Direct Email</h3>
              <p className="mt-1 text-xs text-slate-600 break-all font-medium">{email}</p>
            </div>
            <div className="mt-5">
              <a
                href={`mailto:${email}?subject=Inquiry%20-%20Cloud%20Engineering`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-azure-700 hover:text-azure-800"
              >
                <span>Send Email</span>
                <Send className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all hover:border-azure-300 hover:shadow-sm">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2F8] text-azure-700">
                <Linkedin className="h-4 w-4" />
              </div>
              <h3 className="mt-4 font-display text-sm font-bold text-slate-900">LinkedIn</h3>
              <p className="mt-1 text-xs text-slate-500 font-medium">Professional network &amp; updates</p>
            </div>
            <div className="mt-5">
              <a
                href="https://linkedin.com/in/aakashtrivedi1003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-azure-700 hover:text-azure-800"
              >
                <span>Connect</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Resume Download */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all hover:border-azure-300 hover:shadow-sm">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2F8] text-azure-700">
                <FileText className="h-4 w-4" />
              </div>
              <h3 className="mt-4 font-display text-sm font-bold text-slate-900">Curriculum Vitae</h3>
              <p className="mt-1 text-xs text-slate-500 font-medium">Clean ATS-ready 1-page PDF</p>
            </div>
            <div className="mt-5">
              <a
                href={resumeUrl}
                download="Aakash_Trivedi_Resume.pdf"
                className="inline-flex items-center gap-1 text-xs font-semibold text-azure-700 hover:text-azure-800"
              >
                <span>Download PDF</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Aakash Trivedi. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 transition-colors hover:text-azure-700 font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
