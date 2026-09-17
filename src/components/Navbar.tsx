import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import atLogo from '../assets/at.jpg';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
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
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl rounded-2xl px-4 py-2.5 sm:px-6 sm:py-3 transition-all duration-300 ${
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

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 lg:gap-2 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-medium transition-all duration-200 rounded-lg ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-gray-400 hover:text-gold-300 hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] rounded-full bg-gold-400" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
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
        <div className="pointer-events-auto fixed inset-x-4 top-[70px] z-50 rounded-2xl border border-white/10 bg-ink-900/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden animate-scale-in">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-gold-300"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-4 w-4 text-gray-500" />
              </a>
            ))}
            <div className="mt-2 border-t border-white/8 pt-3">
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
