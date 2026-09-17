import { ArrowDown, FileText, FolderGit2, ShieldCheck, Cloud, Terminal, Sparkles } from 'lucide-react';
import profileImage from '../assets/profile.jpeg';

export default function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}Aakash_Trivedi_Resume.pdf`;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[550px] w-[750px] -translate-x-1/2 rounded-full bg-gold-600/[0.08] blur-[140px]" />
        <div className="absolute right-1/4 top-1/2 h-[350px] w-[450px] rounded-full bg-azure-500/[0.05] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Availability Badge */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.08] px-3.5 py-1.5 text-xs font-medium text-emerald-300 shadow-lg shadow-emerald-950/40 animate-fade-in opacity-0"
          style={{ animationDelay: '0.05s' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>Open to Cloud Engineering &amp; Consulting Roles</span>
        </div>

        {/* Profile Photo with Glow Ring */}
        <div
          className="relative mb-6 animate-fade-in opacity-0"
          style={{ animationDelay: '0.15s' }}
        >
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-gold-500/40 via-azure-500/20 to-gold-400/50 opacity-75 blur-md animate-pulse-glow" />
          <div className="relative h-32 w-32 sm:h-36 sm:w-36 overflow-hidden rounded-full border-2 border-gold-400/50 bg-ink-900 shadow-2xl shadow-gold-900/40">
            <img
              src={profileImage}
              alt="Aakash Trivedi"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl animate-fade-up opacity-0"
          style={{ animationDelay: '0.25s' }}
        >
          Aakash Trivedi
        </h1>

        {/* Professional Title */}
        <h2
          className="mt-3.5 font-display text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl animate-fade-up opacity-0"
          style={{ animationDelay: '0.35s' }}
        >
          <span className="gradient-text-gold">Azure Cloud Engineer</span>{' '}
          <span className="text-gray-400 font-normal">&amp; Infrastructure Specialist</span>
        </h2>

        {/* Tagline / Value Proposition */}
        <p
          className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg animate-fade-up opacity-0"
          style={{ animationDelay: '0.45s' }}
        >
          Designing and deploying secure, high-availability enterprise cloud platforms with a strong
          focus on <strong className="font-semibold text-white">Azure Infrastructure</strong>,{' '}
          <strong className="font-semibold text-white">IaC (Bicep/Terraform)</strong>, and{' '}
          <strong className="font-semibold text-white">Automated CI/CD DevOps Pipelines</strong>.
        </p>

        {/* Key Competency Badges */}
        <div
          className="mt-7 flex flex-wrap justify-center gap-2.5 sm:gap-3.5 animate-fade-up opacity-0"
          style={{ animationDelay: '0.55s' }}
        >
          <a
            href="#certifications"
            className="inline-flex items-center gap-2 rounded-xl border border-gold-500/30 bg-gold-500/[0.08] px-3.5 py-1.5 text-xs font-semibold text-gold-300 transition-all duration-200 hover:border-gold-400 hover:bg-gold-500/15"
          >
            <ShieldCheck className="h-4 w-4 text-gold-400" />
            <span>AZ-104 Certified</span>
          </a>
          <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-gray-300">
            <Cloud className="h-4 w-4 text-azure-400" />
            <span>2+ Years Cloud Experience</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-gray-300">
            <Terminal className="h-4 w-4 text-emerald-400" />
            <span>IaC &amp; CI/CD Pipelines</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row animate-fade-up opacity-0"
          style={{ animationDelay: '0.65s' }}
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-gold-950/50 transition-all duration-300 hover:shadow-gold-900/60 hover:brightness-110 hover:-translate-y-0.5"
          >
            <FolderGit2 className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span>View Architecture Projects</span>
          </a>

          <a
            href={resumeUrl}
            download="Aakash_Trivedi_Resume.pdf"
            className="group flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-gray-200 backdrop-blur-sm transition-all duration-300 hover:border-gold-500/40 hover:bg-gold-500/[0.06] hover:text-gold-300 hover:-translate-y-0.5"
          >
            <FileText className="h-4 w-4 transition-transform group-hover:scale-110 text-gray-400 group-hover:text-gold-400" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Subtle Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in opacity-0"
        style={{ animationDelay: '1s' }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-xs font-medium text-gray-500 transition-colors hover:text-gold-400"
          aria-label="Scroll down to About section"
        >
          <span>Explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce text-gold-400/70" />
        </a>
      </div>
    </section>
  );
}