import { ArrowRight } from 'lucide-react';
import { site } from '@/data/site';

interface MicroCTAProps {
  reason?: string;
  /** `dark` for cards with a pine/ink background (e.g. Services' featured tile). */
  tone?: 'light' | 'dark';
}

/**
 * Small contextual link shown under an Expertise/Service card, so a visitor
 * already interested in a specific condition isn't forced to scroll back to
 * one generic CTA. Dispatches a same-page `CustomEvent` so Contact.tsx can
 * preselect the matching reason — a `?reason=` query string won't do here:
 * this is a true SPA where Contact is already mounted, so a second card
 * click needs it to react again, which a "read location.search on mount"
 * approach can't do.
 */
export default function MicroCTA({ reason, tone = 'light' }: MicroCTAProps) {
  return (
    <a
      href="#contact"
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent('preselect-reason', { detail: reason ?? site.bookingReasons[0] }),
        )
      }
      className={[
        'inline-flex items-center gap-1 text-sm font-medium transition-all hover:gap-1.5',
        tone === 'dark' ? 'text-breath-light hover:text-white' : 'text-pine hover:text-breath',
      ].join(' ')}
    >
      {site.microCtaLabel}
      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
    </a>
  );
}
