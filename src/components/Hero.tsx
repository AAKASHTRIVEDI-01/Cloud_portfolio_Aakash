import {
  ArrowDown,
  FileText,
  FolderGit2,
  ShieldCheck,
  Cloud,
  Terminal,
  Boxes,
  Github,
  Linkedin,
  Mail,
  GitBranch,
} from 'lucide-react';
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
        {/* Architecture & Engineering Status Badge */}
        <div
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold-500/30 bg-gold-500/[0.08] px-4 py-1.5 text-xs font-semibold text-gold-300 shadow-lg shadow-gold-950/40 animate-fade-in opacity-0 backdrop-blur-md"
          style={{ animationDelay: '0.05s' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="tracking-wide">Enterprise Azure Architecture &amp; DevOps Engineering</span>
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

        {/* Live Architecture & Operations Telemetry Pill */}
        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md animate-fade-up opacity-0 text-[11px] font-mono text-gray-400 shadow-inner"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AZ-REGION: Production / Global</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 text-azure-400">
            <Terminal className="h-3.5 w-3.5" />
            <span>IaC: Terraform &amp; Bicep</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 text-gold-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Zero-Trust &amp; RBAC</span>
          </div>
        </div>

        {/* Key Competency Badges with Icons */}
        <div
          className="mt-6 flex flex-wrap justify-center gap-2.5 sm:gap-3 animate-fade-up opacity-0"
          style={{ animationDelay: '0.55s' }}
        >
          <a
            href="#certifications"
            className="inline-flex items-center gap-2 rounded-xl border border-gold-500/30 bg-gold-500/[0.08] px-3.5 py-1.5 text-xs font-semibold text-gold-300 transition-all duration-200 hover:border-gold-400 hover:bg-gold-500/15 hover:shadow-[0_0_12px_rgba(212,175,55,0.2)]"
          >
            <ShieldCheck className="h-4 w-4 text-gold-400" />
            <span>AZ-104 Certified</span>
          </a>
          <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-gray-300">
            <Cloud className="h-4 w-4 text-azure-400" />
            <span>2+ Years Cloud Experience</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-gray-300">
            <GitBranch className="h-4 w-4 text-emerald-400" />
            <span>IaC &amp; CI/CD Pipelines</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-gray-300">
            <Boxes className="h-4 w-4 text-violet-400" />
            <span>Containers &amp; AKS</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row animate-fade-up opacity-0"
          style={{ animationDelay: '0.65s' }}
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-gold-950/50 transition-all duration-300 hover:shadow-gold-900/60 hover:brightness-110 hover:-translate-y-0.5"
          >
            <FolderGit2 className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span>Explore Architecture Projects</span>
          </a>

          <a
            href={resumeUrl}
            download="Aakash_Trivedi_Resume.pdf"
            className="group flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-gray-200 backdrop-blur-sm transition-all duration-300 hover:border-gold-500/40 hover:bg-gold-500/[0.06] hover:text-gold-300 hover:-translate-y-0.5"
          >
            <FileText className="h-4 w-4 transition-transform group-hover:scale-110 text-gray-400 group-hover:text-gold-400" />
            <span>Technical Profile (PDF)</span>
          </a>
        </div>

        {/* Quick Social & Connect Links with Icons */}
        <div
          className="mt-6 flex items-center justify-center gap-3 animate-fade-up opacity-0"
          style={{ animationDelay: '0.75s' }}
        >
          <a
            href="https://github.com/AAKASHTRIVEDI-01"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-gray-400 transition-all hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
          >
            <Github className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/aakashtrivedi1003"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 rounded-lg border border-azure-500/20 bg-azure-500/[0.03] px-3 py-1.5 text-xs font-medium text-gray-400 transition-all hover:border-azure-400/50 hover:bg-azure-500/10 hover:text-azure-300"
          >
            <Linkedin className="h-3.5 w-3.5 text-azure-400 transition-transform group-hover:scale-110" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:aakashtrivedi2003@gmail.com"
            className="group flex items-center gap-1.5 rounded-lg border border-gold-500/20 bg-gold-500/[0.03] px-3 py-1.5 text-xs font-medium text-gray-400 transition-all hover:border-gold-400/50 hover:bg-gold-500/10 hover:text-gold-300"
          >
            <Mail className="h-3.5 w-3.5 text-gold-400 transition-transform group-hover:scale-110" />
            <span>Email</span>
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