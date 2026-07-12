import { Quote, Star } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

/**
 * Placeholder-ready testimonials. Swap the `body`/`name`/`meta` fields in
 * src/data/site.ts with real, consented patient reviews before going live.
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Patient Voices"
          title="Care that patients remember"
          intro="What people value most is being heard, understood, and given a plan that works."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-mist bg-mist/30 p-7">
                <Quote className="h-7 w-7 text-breath" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-slate-body">
                  “{t.body}”
                </blockquote>
                <div
                  className="mt-5 flex gap-0.5 text-brass"
                  aria-label="Five out of five stars"
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <figcaption className="mt-3 border-t border-mist pt-3">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-slate-muted">{t.meta}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
