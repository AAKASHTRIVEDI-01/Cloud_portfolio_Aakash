import { ArrowRight, FileText, Github, Linkedin, Mail, ArrowDown, ShieldCheck } from 'lucide-react';
import profileImage from '../assets/profile.jpeg';

export default function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}Aakash_Trivedi_Resume.pdf`;

  return (
    <section
      id="hero"
      className="relative flex min-h-[82vh] items-center justify-center overflow-hidden px-6 pt-8 pb-16 sm:pt-14 sm:pb-20"
    >
      <div className="relative z-10 mx-auto max-w-5xl w-full">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 relative">
            {/* Status Badge in Soft Ice Blue with Deep Azure Text */}
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-[#EAF2F8] px-3.5 py-1 text-xs font-semibold text-azure-700 shadow-2xs animate-fade-in opacity-0"
              style={{ animationDelay: '0.05s' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              <span>AZ-104 Certified • Azure Cloud Engineer</span>
            </div>

            {/* Name */}
            <h1
              className="font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl animate-fade-up opacity-0 leading-tight"
              style={{ animationDelay: '0.15s' }}
            >
              Aakash Trivedi
            </h1>

            {/* Professional Title with Darker, Richer Azure Highlight */}
            <h2
              className="mt-4 text-xl font-bold tracking-tight text-slate-800 sm:text-2xl md:text-3xl animate-fade-up opacity-0"
              style={{ animationDelay: '0.25s' }}
            >
              <span className="text-azure-700">Azure Cloud Engineer</span>{' '}
              <span className="text-slate-700">&amp; Infrastructure Specialist</span>
            </h2>

            {/* Human Value Proposition - Direct & Impact-Driven for Recruiters */}
            <p
              className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700 sm:text-xl animate-fade-up opacity-0 font-medium"
              style={{ animationDelay: '0.35s' }}
            >
              Enterprise cloud engineer specializing in high-availability Azure architecture, automated Infrastructure as Code (Terraform), and zero-trust security.
            </p>

            {/* Recruiter Impact Stats Strip - Direct Proof of Competence */}
            <div 
              className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl animate-fade-up opacity-0"
              style={{ animationDelay: '0.40s' }}
            >
              <div className="rounded-xl border border-slate-200 bg-white/95 p-3 shadow-2xs hover:border-azure-400 hover:shadow-sm transition-all">
                <div className="text-xl font-extrabold text-azure-700">2+ Years</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">Azure Production</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white/95 p-3 shadow-2xs hover:border-azure-400 hover:shadow-sm transition-all">
                <div className="text-xl font-extrabold text-azure-700">20-30+</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">VMs Managed</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white/95 p-3 shadow-2xs hover:border-azure-400 hover:shadow-sm transition-all">
                <div className="text-xl font-extrabold text-azure-700">100%</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">IaC Automated</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white/95 p-3 shadow-2xs hover:border-azure-400 hover:shadow-sm transition-all">
                <div className="text-xl font-extrabold text-emerald-600">AZ-104</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">Verified Admin</div>
              </div>
            </div>

            {/* Highly Interactive Action Buttons */}
            <div
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 animate-fade-up opacity-0 w-full sm:w-auto"
              style={{ animationDelay: '0.48s' }}
            >
              <a
                href="#projects"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-azure-600 to-azure-700 px-8 py-4 text-base font-bold text-white shadow-md shadow-azure-900/20 transition-all duration-300 hover:from-azure-700 hover:to-azure-800 hover:shadow-xl hover:shadow-azure-700/25 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>

              <a
                href={resumeUrl}
                download="Aakash_Trivedi_Resume.pdf"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-800 shadow-sm transition-all duration-300 hover:bg-azure-50/50 hover:border-azure-400 hover:text-azure-800 hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:scale-[0.98] cursor-pointer"
              >
                <FileText className="h-5 w-5 text-azure-700 transition-transform duration-300 group-hover:scale-110" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Clean Professional Social Links */}
            <div
              className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-600 animate-fade-up opacity-0"
              style={{ animationDelay: '0.55s' }}
            >
              <a
                href="mailto:aakashtrivedi2003@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-3.5 py-1.5 font-semibold text-slate-700 shadow-2xs transition-all hover:border-azure-300 hover:bg-[#EAF2F8] hover:text-azure-700 hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4 text-azure-700" />
                <span>aakashtrivedi2003@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/aakashtrivedi1003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-3.5 py-1.5 font-semibold text-slate-700 shadow-2xs transition-all hover:border-azure-300 hover:bg-[#EAF2F8] hover:text-azure-700 hover:-translate-y-0.5"
              >
                <Linkedin className="h-4 w-4 text-azure-700" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/AAKASHTRIVEDI-01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-3.5 py-1.5 font-semibold text-slate-700 shadow-2xs transition-all hover:border-slate-400 hover:bg-slate-100 hover:text-slate-900 hover:-translate-y-0.5"
              >
                <Github className="h-4 w-4 text-slate-700" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Executive Portrait Card (5 cols) */}
          <div
            className="lg:col-span-5 flex justify-center order-1 lg:order-2 animate-fade-in opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative">
              {/* Outer Card Container */}
              <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 aspect-[4/5] rounded-3xl bg-white p-2.5 shadow-xl shadow-slate-200/80 border border-slate-200/90 transition-transform duration-300 hover:-translate-y-1">
                {/* Photo with Natural Proportions - No Chopped Shoulders */}
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={profileImage}
                    alt="Aakash Trivedi"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                {/* Floating Credential Chip */}
                <div className="absolute -bottom-3 -right-2 sm:-right-4 flex items-center gap-2.5 rounded-xl border border-slate-200/90 bg-white/95 px-3.5 py-2 shadow-md backdrop-blur-md">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EAF2F8] text-azure-700">
                    <ShieldCheck className="h-4 w-4 text-azure-700" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] font-bold text-slate-900 leading-none">AZ-104 Certified</span>
                    <span className="text-[10px] font-medium text-slate-500 mt-0.5">Azure Administrator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll indicator */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 hidden sm:block"
        style={{ animationDelay: '0.8s' }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-xs text-slate-400 transition-colors hover:text-azure-700"
          aria-label="Scroll down to About"
        >
          <span className="font-medium text-[11px]">Scroll</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-azure-700" />
        </a>
      </div>
    </section>
  );
}