import { Phone, Clock, Mail } from 'lucide-react';
import { site } from '@/data/site';

/** Slim contact utility strip above the main navigation (desktop only). */
export default function TopBar() {
  return (
    <div className="hidden bg-ink text-mist/90 lg:block">
      <div className="container-x flex h-10 items-center justify-between text-[0.8rem]">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-breath" aria-hidden="true" />
            {site.contact.hours[0].day} · {site.contact.hours[0].time}
          </span>
          <a
            href={site.contact.emailHref}
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <Mail className="h-3.5 w-3.5 text-breath" aria-hidden="true" />
            {site.contact.email}
          </a>
        </div>
        <a
          href={site.contact.phoneHref}
          className="inline-flex items-center gap-2 font-mono font-medium transition hover:text-white"
        >
          <Phone className="h-3.5 w-3.5 text-breath" aria-hidden="true" />
          {site.contact.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
