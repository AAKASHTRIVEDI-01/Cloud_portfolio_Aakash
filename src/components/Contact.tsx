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

        <div className="mt-6 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Let's connect.
            </h2>
            <p className="mt-4 max-w-xl text-lg font-medium text-slate-700">
              Open to discussions regarding Azure cloud infrastructure, DevOps roles, or engineering collaboration.
            </p>
          </div>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 self-start rounded-xl border-2 border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-0.5"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-600" />
                <span className="text-emerald-700">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-azure-700" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Contact Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {/* Email */}
          <div className="flex flex-col justify-between rounded-3xl border-2 border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:border-azure-400 hover:shadow-lg cursor-pointer">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF2F8] text-azure-700 shadow-sm">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-extrabold text-slate-900">Direct Email</h3>
              <p className="mt-2 text-sm text-slate-700 break-all font-semibold">{email}</p>
            </div>
            <div className="mt-6">
              <a
                href={`mailto:${email}?subject=Inquiry%20-%20Cloud%20Engineering`}
                className="inline-flex items-center gap-2 rounded-xl bg-azure-50/90 border border-azure-200/90 px-4 py-2.5 text-sm font-bold text-azure-700 transition-all duration-200 hover:bg-azure-600 hover:text-white hover:border-azure-600 hover:shadow-md active:scale-[0.98] cursor-pointer"
              >
                <span>Send Email</span>
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col justify-between rounded-3xl border-2 border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:border-azure-400 hover:shadow-lg cursor-pointer">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF2F8] text-azure-700 shadow-sm">
                <Linkedin className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-extrabold text-slate-900">LinkedIn</h3>
              <p className="mt-2 text-sm text-slate-600 font-medium">Professional network &amp; updates</p>
            </div>
            <div className="mt-6">
              <a
                href="https://linkedin.com/in/aakashtrivedi1003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-azure-50/90 border border-azure-200/90 px-4 py-2.5 text-sm font-bold text-azure-700 transition-all duration-200 hover:bg-azure-600 hover:text-white hover:border-azure-600 hover:shadow-md active:scale-[0.98] cursor-pointer"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Resume Download */}
          <div className="flex flex-col justify-between rounded-3xl border-2 border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:border-azure-400 hover:shadow-lg cursor-pointer">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF2F8] text-azure-700 shadow-sm">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-extrabold text-slate-900">Curriculum Vitae</h3>
              <p className="mt-2 text-sm text-slate-600 font-medium">Clean ATS-ready 1-page PDF</p>
            </div>
            <div className="mt-6">
              <a
                href={resumeUrl}
                download="Aakash_Trivedi_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-azure-50/90 border border-azure-200/90 px-4 py-2.5 text-sm font-bold text-azure-700 transition-all duration-200 hover:bg-azure-600 hover:text-white hover:border-azure-600 hover:shadow-md active:scale-[0.98] cursor-pointer"
              >
                <span>Download PDF Resume</span>
                <ArrowUpRight className="h-4 w-4" />
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
