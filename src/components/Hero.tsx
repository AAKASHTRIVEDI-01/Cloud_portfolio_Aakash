import { ArrowDown, FileText, FolderGit2 } from 'lucide-react';
import profileImage from '../assets/profile.jpeg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gold-600/[0.07] blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[400px] rounded-full bg-gold-500/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Profile photo */}
        <div
          className="mb-6 animate-fade-in opacity-0"
          style={{ animationDelay: '0.05s' }}
        >
          <img
            src={profileImage}
            alt="Aakash Trivedi"
            className="h-32 w-32 rounded-full border-2 border-gold-500/30 object-cover shadow-xl shadow-gold-900/20 sm:h-36 sm:w-36"
          />
        </div>

        {/* Eyebrow */}
        <div
          className="mb-8 animate-fade-in opacity-0"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="eyebrow rounded-full border border-gold-500/20 bg-gold-500/[0.06] px-4 py-1.5 text-gold-300">
            AZ-104 Certified
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl animate-fade-up opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          Aakash Trivedi
        </h1>

        {/* Title */}
        <h2
          className="mt-4 font-display text-xl font-medium text-gray-300 sm:text-2xl animate-fade-up opacity-0"
          style={{ animationDelay: '0.35s' }}
        >
          Azure Cloud Engineer &amp; Consultant
        </h2>

        {/* Tagline */}
        <p
          className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg animate-fade-up opacity-0"
          style={{ animationDelay: '0.5s' }}
        >
          Designing secure, scalable Azure infrastructure — from architecture to automation.
        </p>

        {/* Buttons */}
        <div
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row animate-fade-up opacity-0"
          style={{ animationDelay: '0.65s' }}
        >
          {/* View Projects */}
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gold-900/30 transition-all duration-300 hover:shadow-gold-900/50 hover:brightness-110"
          >
            <FolderGit2 className="h-4 w-4" />
            View Projects
          </a>

          {/* Download Resume */}
          <a
            href={`${import.meta.env.BASE_URL}Aakash_Trivedi_Resume.pdf`}
            download="Aakash_Trivedi_Resume.pdf"
            className="group flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-gold-500/40 hover:text-gold-300"
          >
            <FileText className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0"
        style={{ animationDelay: '1s' }}
      >
        <ArrowDown className="h-5 w-5 text-gray-600 animate-bounce" />
      </div>
    </section>
  );
}