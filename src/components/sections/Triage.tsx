import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import MicroCTA from '@/components/ui/MicroCTA';
import { site } from '@/data/site';

/**
 * Symptom-to-specialist mini triage — the highest-leverage trust move on the
 * page: a visitor picks what brought them here and immediately sees that
 * Dr. Bhargava treats exactly that, before they've spoken to anyone. Chips
 * are real buttons (`aria-pressed`), and the result panel is `aria-live` so
 * screen reader users hear that the content updated.
 */
export default function Triage() {
  const [selected, setSelected] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const symptom = selected === null ? null : site.triage.symptoms[selected];
  const match = symptom
    ? site.expertise.find((e) => e.name === symptom.expertiseMatch)
    : undefined;

  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={site.triage.eyebrow}
          title={site.triage.title}
          intro={site.triage.intro}
          align="center"
        />

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Symptoms">
            {site.triage.symptoms.map((s, i) => {
              const isActive = selected === i;
              return (
                <button
                  key={s.label}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelected(isActive ? null : i)}
                  className={[
                    'rounded-full border px-5 py-2.5 text-sm font-medium transition',
                    isActive
                      ? 'border-pine bg-pine text-white shadow-md'
                      : 'border-mist bg-mist/30 text-slate-body hover:border-breath/50 hover:bg-mist/60',
                  ].join(' ')}
                >
                  {s.label}
                </button>
              );
            })}
          </div>

          <div aria-live="polite" className="mt-8">
            <AnimatePresence mode="wait">
              {symptom && (
                <motion.div
                  key={selected}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-3xl border border-breath/30 bg-mist/30 p-6 sm:p-8"
                >
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-breath" aria-hidden="true" />
                    <p className="text-base leading-relaxed text-ink">{symptom.message}</p>
                  </div>

                  {match && (
                    <div className="mt-5 flex flex-col items-start gap-4 border-t border-mist pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pine/10 text-pine">
                          <match.icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="font-semibold text-ink">{match.name}</p>
                          <p className="text-sm text-slate-muted">{match.desc}</p>
                        </div>
                      </div>
                      <div className="shrink-0 sm:pl-4">
                        <MicroCTA reason={match.reason} />
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
