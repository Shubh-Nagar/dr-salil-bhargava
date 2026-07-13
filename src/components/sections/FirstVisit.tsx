import { ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

/**
 * "What happens when you book" — a short walkthrough placed right before
 * Contact, at the exact moment a visitor is deciding, to remove the fear of
 * the unknown around visiting the clinic for the first time.
 */
export default function FirstVisit() {
  const steps = site.firstVisit.steps;

  return (
    <section className="bg-mist/30 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={site.firstVisit.eyebrow}
          title={site.firstVisit.title}
          intro={site.firstVisit.intro}
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 0.08} className="relative">
                <article className="flex h-full flex-col items-center rounded-2xl border border-mist bg-paper p-6 text-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pine font-mono text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-breath/10 text-pine">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-semibold text-pine">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-muted">{step.desc}</p>
                </article>
                {i < steps.length - 1 && (
                  <ChevronRight
                    className="absolute -right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-breath/50 lg:block"
                    aria-hidden="true"
                  />
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
