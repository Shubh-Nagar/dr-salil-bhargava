import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

/** In-clinic diagnostic & therapeutic services (PFT, sleep study, CPAP, NIV, etc.). */
export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Diagnostics & Treatment"
            title="Advanced respiratory services under one roof"
            intro="Modern pulmonary diagnostics and therapies, performed and interpreted by a specialist you can talk to."
          />
          <Reveal>
            <a
              href="#contact"
              className="btn-ghost hidden shrink-0 border-pine/25 text-pine hover:bg-pine hover:text-paper md:inline-flex"
            >
              Enquire about a service
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-mist bg-mist sm:grid-cols-2 lg:grid-cols-4">
          {site.services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.name} delay={(i % 4) * 0.06}>
                <article className="group h-full bg-paper p-6 transition hover:bg-mist/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-breath/10 text-pine">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-semibold leading-snug text-ink">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-muted">{service.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
