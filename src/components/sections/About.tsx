import { GraduationCap, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_0.85fr]">
        {/* Narrative */}
        <div>
          <SectionHeading eyebrow="About" title={site.about.lead} />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-body">
            {site.about.paragraphs.map((p, i) => (
              <Reveal as="div" key={i} delay={i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Memberships */}
          <Reveal className="mt-10">
            <div className="mb-3 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-breath" aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
                Professional Memberships
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {site.memberships.map((m) => (
                <li
                  key={m}
                  className="rounded-full border border-mist bg-mist/50 px-3 py-1.5 text-xs font-medium text-slate-body"
                >
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Qualifications card */}
        <Reveal className="lg:pt-4">
          <div className="rounded-3xl border border-mist bg-mist/40 p-7 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pine">
                <GraduationCap className="h-5 w-5 text-breath-light" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-ink">Education & Training</p>
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-slate-muted">
                  MGM Medical College, Indore
                </p>
              </div>
            </div>

            <ol className="relative space-y-6 border-l border-pine/15 pl-6">
              {site.about.qualifications.map((q) => (
                <li key={q.degree} className="relative">
                  <span
                    className="absolute -left-[1.72rem] top-1.5 h-2.5 w-2.5 rounded-full bg-breath ring-4 ring-mist/40"
                    aria-hidden="true"
                  />
                  <p className="font-mono text-xs text-brass">{q.year}</p>
                  <p className="mt-0.5 font-medium text-ink">{q.degree}</p>
                  <p className="text-sm text-slate-muted">{q.place}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
