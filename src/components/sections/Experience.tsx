import { Trophy } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

/**
 * Career & academic timeline. Order genuinely carries meaning here
 * (present → past), so a sequential timeline is the honest structure.
 */
export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-ink py-20 text-mist sm:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Heading + awards */}
        <div>
          <SectionHeading
            eyebrow="Experience & Academic Profile"
            title="A career in academic pulmonology"
            intro="Three decades of clinical leadership, teaching and public-health service in Indore."
            tone="dark"
          />

          <Reveal className="mt-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Trophy className="h-4 w-4 text-brass-light" aria-hidden="true" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Recognition
                </h3>
              </div>
              <ul className="space-y-3 text-sm">
                {site.research.awards.map((award) => (
                  <li key={award} className="flex gap-3 text-mist/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <ol className="relative border-l border-white/15 pl-8">
          {site.timeline.map((item, i) => (
            <Reveal as="li" key={`${item.year}-${item.role}`} delay={i * 0.06} className="mb-9 last:mb-0">
              <span
                className="absolute -left-[0.5rem] flex h-4 w-4 items-center justify-center rounded-full bg-breath ring-4 ring-ink"
                aria-hidden="true"
              />
              <p className="font-mono text-xs uppercase tracking-wider text-breath-light">
                {item.year}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">{item.role}</h3>
              <p className="text-sm text-mist/70">{item.org}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
