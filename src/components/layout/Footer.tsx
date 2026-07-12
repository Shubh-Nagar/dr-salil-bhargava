import { Phone, Mail, MapPin } from 'lucide-react';
import { navLinks } from '@/data/nav';
import { site } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-mist/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:pr-6">
          <p className="font-display text-xl font-semibold text-white">{site.doctor.name}</p>
          <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-breath">
            {site.doctor.credentials}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist/70">
            {site.doctor.title} in Indore — {site.doctor.yearsExperience}+ years of expert
            respiratory care.
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-breath" aria-hidden="true" />
              <span>{site.contact.addressLines.join(', ')}</span>
            </li>
            <li>
              <a
                href={site.contact.phoneHref}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-breath" aria-hidden="true" />
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.contact.emailHref}
                className="flex items-center gap-3 break-all transition hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-breath" aria-hidden="true" />
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Hours</h3>
          <ul className="space-y-2 text-sm">
            {site.contact.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span className="text-mist/70">{h.day}</span>
                <span className="text-mist/90">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-mist/60 sm:flex-row">
          <p>
            © {year} {site.doctor.name}. All rights reserved.
          </p>
          <p className="text-mist/50">
            For medical emergencies, please call your nearest hospital or emergency services.
          </p>
        </div>
      </div>
    </footer>
  );
}
