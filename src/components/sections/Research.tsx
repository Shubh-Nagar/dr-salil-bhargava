import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import AqiCard from '@/components/ui/AqiCard';
import { site } from '@/data/site';

/** Publications, research and public-health initiatives — clean air & TB work up front. */
export default function Research() {
  return (
    <section id="research" className="scroll-mt-24 bg-mist/40 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={site.research.lead}
          title="Research, teaching & the fight for cleaner air"
          intro={site.research.intro}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {site.research.initiatives.map((item, i) => {
            const Icon = item.icon;
            const featured = i === 0; // Clean-air work leads — it's the distinctive story.
            return (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className={featured ? 'lg:row-span-1' : ''}
              >
                <article
                  className={[
                    'flex h-full flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl',
                    featured
                      ? 'border-pine/20 bg-pine text-mist hover:shadow-pine/25'
                      : 'border-mist bg-paper hover:border-breath/40 hover:shadow-pine/15',
                  ].join(' ')}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className={[
                        'flex h-12 w-12 items-center justify-center rounded-xl',
                        featured ? 'bg-white/10 text-breath-light' : 'bg-breath/10 text-pine',
                      ].join(' ')}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span
                      className={[
                        'rounded-full px-3 py-1 font-mono text-[0.62rem] uppercase tracking-wider',
                        featured ? 'bg-white/10 text-breath-light' : 'bg-mist text-slate-muted',
                      ].join(' ')}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3
                    className={[
                      'text-lg font-semibold',
                      featured ? 'text-white' : 'text-ink',
                    ].join(' ')}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={[
                      'mt-2 text-sm leading-relaxed',
                      featured ? 'text-mist/80' : 'text-slate-muted',
                    ].join(' ')}
                  >
                    {item.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.24}>
          <AqiCard />
        </Reveal>
      </div>
    </section>
  );
}
