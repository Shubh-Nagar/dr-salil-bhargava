import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import MicroCTA from '@/components/ui/MicroCTA';
import { site } from '@/data/site';

// Index → span classes for the bento layout, `lg:`-prefixed only so the
// `sm:grid-cols-2` mobile/tablet stack is untouched. Hardcoding by array
// index is fine here since `site.services` is authored editorial content,
// not user data — "featured" is meant to travel with the item if reordered.
const BENTO_SPANS: Record<number, string> = {
  0: 'lg:col-span-2', // Sleep Study — wide tile, breaks the grid's rhythm
  1: 'lg:col-span-2 lg:row-span-2', // Consultation — flagship, the primary way patients start
};

/** In-clinic diagnostic & therapeutic services, presented as a path rather than a catalogue. */
export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-mist/30 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Diagnostics & Treatment"
          title="Advanced respiratory services under one roof"
          intro="Modern pulmonary diagnostics and therapies, performed and interpreted by a specialist you can talk to."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(180px,auto)]">
          {site.services.map((service, i) => {
            const Icon = service.icon;
            const featured = i === 1;
            return (
              <Reveal key={service.name} delay={(i % 4) * 0.06} className={BENTO_SPANS[i] ?? ''}>
                <article
                  className={[
                    'group flex h-full flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl',
                    featured
                      ? 'border-pine/20 bg-pine text-mist hover:shadow-pine/25'
                      : 'border-mist bg-paper hover:border-breath/40 hover:shadow-pine/15',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'flex h-11 w-11 items-center justify-center rounded-lg',
                      featured ? 'bg-white/10 text-breath-light' : 'bg-breath/10 text-pine',
                    ].join(' ')}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3
                    className={[
                      'mt-4 font-semibold leading-snug',
                      featured ? 'text-white' : 'text-pine',
                    ].join(' ')}
                  >
                    {service.name}
                  </h3>
                  <p
                    className={[
                      'mt-2 text-sm leading-relaxed',
                      featured ? 'text-mist/80' : 'text-slate-muted',
                    ].join(' ')}
                  >
                    {service.desc}
                  </p>
                  <div className="mt-auto">
                    <MicroCTA reason={service.reason} tone={featured ? 'dark' : 'light'} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
