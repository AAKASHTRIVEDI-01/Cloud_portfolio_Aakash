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
              className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl animate-fade-up opacity-0 leading-tight"
              style={{ animationDelay: '0.15s' }}
            >
              Aakash Trivedi
            </h1>

            {/* Professional Title with Darker, Richer Azure Highlight */}
            <h2
              className="mt-3 text-lg font-semibold tracking-tight text-slate-800 sm:text-xl md:text-2xl animate-fade-up opacity-0"
              style={{ animationDelay: '0.25s' }}
            >
              <span className="text-azure-700 font-bold">Azure Cloud Engineer</span>{' '}
              <span className="text-slate-600 font-medium">&amp; Infrastructure Specialist</span>
            </h2>

            {/* Human Value Proposition */}
            <p
              className="mt-4 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base animate-fade-up opacity-0 font-normal"
              style={{ animationDelay: '0.35s' }}
            >
              Designing and administering secure, high-availability Azure cloud infrastructure with hands-on focus on
              virtual networks, Terraform automation, and continuous delivery pipelines.
            </p>

            {/* Clean Microsoft Buttons with Darker Royal Azure CTA */}
            <div
              className="mt-7 flex flex-col sm:flex-row items-center gap-3 animate-fade-up opacity-0 w-full sm:w-auto"
              style={{ animationDelay: '0.45s' }}
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-azure-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-900/15 transition-all duration-200 hover:bg-azure-700 hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={resumeUrl}
                download="Aakash_Trivedi_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-2xs transition-all duration-200 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 hover:-translate-y-0.5"
              >
                <FileText className="h-4 w-4 text-slate-500" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Clean Social Links with Deep Azure Icons */}
            <div
              className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-600 animate-fade-up opacity-0"
              style={{ animationDelay: '0.55s' }}
            >
              <a
                href="mailto:aakashtrivedi2003@gmail.com"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-azure-700 font-medium"
              >
                <Mail className="h-4 w-4 text-azure-700" />
                <span>aakashtrivedi2003@gmail.com</span>
              </a>

              <span className="text-slate-300">•</span>

              <a
                href="https://linkedin.com/in/aakashtrivedi1003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-azure-700 font-medium"
              >
                <Linkedin className="h-4 w-4 text-slate-600 hover:text-azure-700 transition-colors" />
                <span>LinkedIn</span>
              </a>

              <span className="text-slate-300">•</span>

              <a
                href="https://github.com/AAKASHTRIVEDI-01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-slate-900 font-medium"
              >
                <Github className="h-4 w-4 text-slate-600 hover:text-slate-900 transition-colors" />
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