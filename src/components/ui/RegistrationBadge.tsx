import { site } from '@/data/site';

interface RegistrationBadgeProps {
  tone?: 'light' | 'dark';
}

/**
 * Renders the MPMC registration number placeholder with deliberate "pending"
 * styling — dashed border, brass tone (not red, which would read as broken)
 * — plus `sr-only` text so screen readers don't announce the bracketed
 * placeholder as if it were a real number.
 *
 * When the real registration number is supplied in `site.ts`, swap this
 * component's styling to a solid credential-chip look (drop the dashed
 * border and the sr-only caveat) — a single documented follow-up, not
 * scattered conditionals elsewhere.
 */
export default function RegistrationBadge({ tone = 'light' }: RegistrationBadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 rounded-full border border-dashed px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-wider',
        tone === 'dark' ? 'border-brass-light/50 text-brass-light' : 'border-brass/50 text-brass',
      ].join(' ')}
    >
      {site.doctor.registrationNumber}
      <span className="sr-only">(registration number pending verification)</span>
    </span>
  );
}
