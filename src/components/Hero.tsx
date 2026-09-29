import { ArrowRight, FileText, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profileImage from '../assets/profile.jpeg';

export default function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}Aakash_Trivedi_Resume.pdf`;

  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] sm:min-h-[84vh] items-center justify-center overflow-hidden px-6 pt-10 pb-16 sm:pt-16 sm:pb-20"
    >
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Clean Status Badge */}
        <div
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-azure-500/25 bg-azure-500/[0.08] px-4 py-1 text-xs font-medium text-azure-300 backdrop-blur-md animate-fade-in opacity-0"
          style={{ animationDelay: '0.05s' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>AZ-104 Certified • Azure Cloud Engineer</span>
        </div>

        {/* Profile Photo */}
        <div
          className="relative mb-6 animate-fade-in opacity-0"
          style={{ animationDelay: '0.15s' }}
        >
          <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full border-2 border-azure-400/40 bg-ink-900 shadow-xl shadow-azure-950/50">
            <img
              src={profileImage}
              alt="Aakash Trivedi"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-up opacity-0"
          style={{ animationDelay: '0.25s' }}
        >
          Aakash Trivedi
        </h1>

        {/* Professional Title */}
        <h2
          className="mt-3 text-lg font-semibold tracking-tight text-gray-200 sm:text-xl md:text-2xl animate-fade-up opacity-0"
          style={{ animationDelay: '0.35s' }}
        >
          <span className="gradient-text-azure">Azure Cloud Engineer</span>{' '}
          <span className="text-gray-400 font-normal">&amp; Infrastructure Specialist</span>
        </h2>

        {/* Clean, Human Value Proposition (DIVADSGN style) */}
        <p
          className="mt-5 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base animate-fade-up opacity-0"
          style={{ animationDelay: '0.45s' }}
        >
          Designing and maintaining secure, reliable Azure cloud infrastructure with hands-on focus on
          virtual networks, Terraform automation, and CI/CD pipelines.
        </p>

        {/* Clean CTA Buttons (DIVADSGN style) */}
        <div
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row animate-fade-up opacity-0"
          style={{ animationDelay: '0.55s' }}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-azure-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-azure-600/30 transition-all duration-200 hover:bg-azure-500 hover:shadow-azure-500/40 hover:-translate-y-0.5"
          >
            <span>Explore Projects</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href={resumeUrl}
            download="Aakash_Trivedi_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-gray-300 backdrop-blur-sm transition-all duration-200 hover:border-azure-400/40 hover:bg-white/[0.08] hover:text-white hover:-translate-y-0.5"
          >
            <FileText className="h-4 w-4 text-gray-400" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Clean, Minimal Social Links */}
        <div
          className="mt-8 flex items-center justify-center gap-4 text-xs text-gray-400 animate-fade-up opacity-0"
          style={{ animationDelay: '0.65s' }}
        >
          <a
            href="mailto:aakashtrivedi2003@gmail.com"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-azure-400"
          >
            <Mail className="h-4 w-4 text-azure-400" />
            <span>aakashtrivedi2003@gmail.com</span>
          </a>

          <span className="text-white/20">•</span>

          <a
            href="https://linkedin.com/in/aakashtrivedi1003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-azure-400"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>

          <span className="text-white/20">•</span>

          <a
            href="https://github.com/AAKASHTRIVEDI-01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Subtle Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in opacity-0"
        style={{ animationDelay: '0.9s' }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-xs text-gray-500 transition-colors hover:text-azure-400"
          aria-label="Scroll down to About"
        >
          <span>Scroll</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-azure-400/80" />
        </a>
      </div>
    </section>
  );
}