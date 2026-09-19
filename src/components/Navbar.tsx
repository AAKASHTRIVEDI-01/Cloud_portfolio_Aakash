import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  Sparkles,
  User,
  Cpu,
  FolderGit2,
  Award,
  Briefcase,
  Send,
  Github,
  Mail,
  Linkedin,
} from 'lucide-react';
import atLogo from '../assets/at.jpg';

const NAV_LINKS = [
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Cpu },
  { label: 'Certifications', href: '#certifications', icon: Award },
  { label: 'Projects', href: '#projects', icon: FolderGit2 },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Contact', href: '#contact', icon: Send },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_LINKS.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 sm:pt-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl rounded-2xl px-3.5 py-2 sm:px-5 sm:py-2.5 transition-all duration-300 ${
          scrolled
            ? 'glass-panel shadow-2xl shadow-black/60 border-white/10'
            : 'bg-ink-900/60 backdrop-blur-md border border-white/5 shadow-lg shadow-black/20'
        }`}
      >
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center overflow-hidden rounded-xl border border-gold-500/30 bg-black transition-all duration-300 group-hover:border-gold-500/70 group-hover:shadow-[0_0_12px_rgba(212,175,55,0.3)]">
            <img src={atLogo} alt="Aakash Trivedi" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
              Aakash Trivedi
            </span>
            <span className="hidden sm:inline-block text-[11px] text-gray-400 font-medium">
              Azure Cloud Engineer
            </span>
          </div>
        </a>

        {/* Desktop Links with Icons */}
        <div className="hidden items-center gap-1 lg:gap-1.5 md:flex">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`group relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-all duration-200 rounded-lg ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-gray-400 hover:text-gold-300 hover:bg-white/[0.04]'
                }`}
              >
                <Icon
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isActive
                      ? 'text-gold-400'
                      : 'text-gray-400 group-hover:text-gold-400 group-hover:scale-110'
                  }`}
                />
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] rounded-full bg-gold-400 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Buttons: Direct Contact, LinkedIn, GitHub & Get in Touch */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="mailto:aakashtrivedi2003@gmail.com"
            className="flex h-8 items-center gap-1.5 rounded-xl border border-gold-500/30 bg-gold-500/10 px-2.5 text-xs font-mono text-gold-300 transition-all duration-200 hover:border-gold-400 hover:bg-gold-500/20"
            title="Email: aakashtrivedi2003@gmail.com"
            aria-label="Send direct email"
          >
            <Mail className="h-3.5 w-3.5 text-gold-400" />
            <span className="hidden lg:inline text-[11px]">aakashtrivedi2003@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/aakashtrivedi1003"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-200 hover:border-azure-400/50 hover:bg-azure-500/10 hover:text-azure-300"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>

          <a
            href="https://github.com/AAKASHTRIVEDI-01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-200 hover:border-gold-500/40 hover:bg-gold-500/10 hover:text-gold-300"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-xl border border-gold-500/40 bg-gold-500/10 px-3.5 py-1.5 text-xs font-semibold text-gold-300 transition-all duration-300 hover:border-gold-400 hover:bg-gold-500/20 hover:shadow-[0_0_16px_rgba(212,175,55,0.25)]"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold-400 transition-transform group-hover:rotate-12" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="flex items-center justify-center rounded-xl border border-white/10 p-2 text-gray-300 transition-colors hover:border-gold-500/40 hover:text-gold-300 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-[65px] z-50 rounded-2xl border border-white/10 bg-ink-900/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden animate-scale-in">
          <div className="flex flex-col gap-1">
            {/* Direct Contact Banner inside Mobile Menu */}
            <div className="mb-2 rounded-xl border border-gold-500/30 bg-gold-500/[0.08] p-3 text-center">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-400 block mb-1">
                Direct Contact
              </span>
              <a
                href="mailto:aakashtrivedi2003@gmail.com"
                className="font-mono text-xs text-gold-200 font-semibold flex items-center justify-center gap-1.5 break-all hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 text-gold-400 flex-none" />
                <span>aakashtrivedi2003@gmail.com</span>
              </a>
            </div>

            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-gold-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                      <Icon className="h-4 w-4 text-gold-400" />
                    </div>
                    <span>{link.label}</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">→</span>
                </a>
              );
            })}
            <div className="mt-2 border-t border-white/8 pt-3 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://linkedin.com/in/aakashtrivedi1003"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-gray-200 hover:border-azure-400 hover:text-azure-300"
                >
                  <Linkedin className="h-3.5 w-3.5 text-azure-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/AAKASHTRIVEDI-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-gray-200 hover:border-white/30 hover:text-white"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-gold-900/30"
              >
                <Sparkles className="h-4 w-4 text-white" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
