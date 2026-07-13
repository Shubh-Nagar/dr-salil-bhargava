import { navLinks } from '@/data/nav';
import { useScrollSpy } from '@/hooks/useScrollSpy';

/**
 * Desktop-only scroll progress indicator: a vertical rail of dots, one per
 * section, reusing the same `useScrollSpy` hook and `navLinks` data as the
 * Navbar — no separate scroll tracker, and each dot doubles as real anchor
 * navigation. Wrapped in a frosted capsule so the dots stay legible over
 * every section background (light or dark) without per-section theming.
 */
export default function ProgressRail() {
  const active = useScrollSpy(navLinks.map((l) => l.href.slice(1)));

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col items-center gap-3 rounded-full border border-mist/60 bg-paper/80 px-2 py-3 shadow-sm backdrop-blur">
        {navLinks.map((link) => {
          const isActive = active === link.href.slice(1);
          return (
            <li key={link.href}>
              <a
                href={link.href}
                aria-label={link.label}
                aria-current={isActive ? 'true' : undefined}
                className="group flex h-4 w-4 items-center justify-center"
              >
                <span
                  className={[
                    'block rounded-full transition-all duration-300',
                    isActive
                      ? 'h-2.5 w-2.5 bg-pine'
                      : 'h-1.5 w-1.5 bg-slate-muted/50 group-hover:bg-pine/70',
                  ].join(' ')}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
