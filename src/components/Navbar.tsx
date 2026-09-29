import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  User,
  Cpu,
  FolderGit2,
  Award,
  Briefcase,
  Send,
  Github,
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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-xs'
          : 'bg-white/60 backdrop-blur-md border-b border-slate-200/40'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-all duration-200 group-hover:border-azure-500">
            <img src={atLogo} alt="Aakash Trivedi" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-tight text-slate-900 group-hover:text-azure-700 transition-colors">
              Aakash Trivedi
            </span>
            <span className="hidden sm:inline-block text-[11px] text-slate-500 font-medium">
              Azure Cloud Engineer
            </span>
          </div>
        </a>

        {/* Desktop Links (Clean Microsoft Fluent style) */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium transition-all duration-200 rounded-lg ${
                  isActive
                    ? 'text-azure-700 bg-[#EAF2F8] font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] rounded-full bg-azure-700" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action button & Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-azure-600 px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-azure-700"
          >
            <span>Get in Touch</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur-xl md:hidden animate-fade-in">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#EAF2F8] text-azure-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className="h-4 w-4 text-azure-700" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
            <div className="flex items-center gap-3 text-slate-500">
              <a
                href="https://linkedin.com/in/aakashtrivedi1003"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-azure-700"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/AAKASHTRIVEDI-01"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-xs font-semibold text-azure-600 hover:underline"
            >
              Contact Me →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
