import { useEffect, useState } from 'react';
import { Menu, X, CalendarCheck } from 'lucide-react';
import { navLinks } from '@/data/nav';
import { site } from '@/data/site';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import TopBar from './TopBar';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(navLinks.map((l) => l.href.slice(1)));

  // Switch the header to a solid background once the user scrolls past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <nav
        className={[
          'transition-colors duration-300',
          scrolled
            ? 'bg-paper/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-paper/80'
            : 'bg-paper',
        ].join(' ')}
        aria-label="Primary"
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3" aria-label="Dr. Salil Bhargava — home">
            <Monogram />
            <span className="leading-tight">
              <span className="block font-display text-xl font-semibold text-pine">
                {site.doctor.name}
              </span>
              <span className="block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-slate-muted">
                Pulmonologist · Indore
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={[
                      'relative text-sm font-medium transition-colors',
                      isActive ? 'text-pine' : 'text-slate-body hover:text-pine',
                    ].join(' ')}
                  >
                    {link.label}
                    <span
                      className={[
                        'absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-breath transition-all duration-300',
                        isActive ? 'w-full' : 'w-0',
                      ].join(' ')}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-primary hidden md:inline-flex">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </a>
            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-x-0 top-16 z-40 border-t border-mist bg-paper shadow-lg md:hidden">
          <ul className="container-x flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-mist/70 py-4 text-base font-medium text-slate-body"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

/** Small bronchial monogram matching the favicon. */
function Monogram() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pine">
      <svg viewBox="0 0 64 64" className="h-6 w-6" fill="none">
        <g stroke="#7DD3FC" strokeWidth="3.4" strokeLinecap="round">
          <path d="M32 14 V30" />
          <path d="M32 30 C24 32 20 40 20 50" />
          <path d="M32 30 C40 32 44 40 44 50" />
          <path d="M20 50 q-4 0 -4 -4" />
          <path d="M44 50 q4 0 4 -4" />
        </g>
        <circle cx="32" cy="13" r="3.4" fill="#B9893E" />
      </svg>
    </span>
  );
}
