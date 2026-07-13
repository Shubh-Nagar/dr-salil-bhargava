import { CalendarCheck, MessageCircle, Phone } from 'lucide-react';
import { site } from '@/data/site';

/**
 * Slim, persistent bottom bar on mobile — Call, WhatsApp, Book Appointment —
 * so a mobile visitor never has to scroll back up to the nav. Global chrome
 * like Navbar/Footer, mounted once in App.tsx rather than per-page.
 */
export default function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 flex divide-x divide-mist border-t border-mist bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    >
      <a
        href={site.contact.phoneHref}
        aria-label="Call the clinic"
        className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-xs font-medium text-slate-body"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call
      </a>
      <a
        href={site.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on WhatsApp"
        className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-xs font-medium text-slate-body"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        WhatsApp
      </a>
      <a
        href="#contact"
        aria-label="Book an appointment"
        className="flex flex-1 flex-col items-center gap-0.5 bg-brass py-2.5 text-xs font-semibold text-ink"
      >
        <CalendarCheck className="h-5 w-5" aria-hidden="true" />
        Book
      </a>
    </nav>
  );
}
