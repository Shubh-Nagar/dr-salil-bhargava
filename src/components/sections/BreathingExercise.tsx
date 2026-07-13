import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { site } from '@/data/site';

const PHASES = ['Breathe in…', 'Hold…', 'Breathe out…', 'Hold…'] as const;
const PHASE_SECONDS = 4;
const TOTAL_CYCLES = 4;

type Status = 'idle' | 'running' | 'done';

/**
 * The isolation-effect moment: a guided box-breathing pacer, deliberately
 * unlike every other section on the page — one centered focal element
 * instead of a grid, no site-wide button styling override needed since the
 * layout itself carries the difference. Genuinely useful and calming, not a
 * gimmick: box breathing is a real technique used in pulmonary rehab.
 *
 * Muted by default (no audio), and doesn't auto-start on scroll-into-view —
 * the visitor opts in with the Start button, keeping a sense of control.
 */
export default function BreathingExercise() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>('idle');
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (status !== 'running') return;
    const id = setInterval(() => {
      setPhaseIndex((p) => {
        const next = (p + 1) % PHASES.length;
        if (next === 0) {
          setCycle((c) => {
            const nextCycle = c + 1;
            if (nextCycle >= TOTAL_CYCLES) setStatus('done');
            return nextCycle;
          });
        }
        return next;
      });
    }, PHASE_SECONDS * 1000);
    return () => clearInterval(id);
  }, [status]);

  function start() {
    setPhaseIndex(0);
    setCycle(0);
    setStatus('running');
  }

  const expanded = phaseIndex === 0 || phaseIndex === 1;

  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
      {reduce ? (
        // Static fallback for prefers-reduced-motion: the same ambient wash
        // this section used before the video, no autoplaying motion at all.
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(14,165,233,0.14)_0%,rgba(14,165,233,0.04)_45%,transparent_70%)]"
        />
      ) : (
        <>
          <video
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          >
            <source src="/assets/lung-background.mp4" type="video/mp4" />
          </video>
          {/* Paper tint keeps the existing dark text/circle legible over the footage. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-paper/80" />
        </>
      )}

      <div className="container-x relative z-10 mx-auto flex max-w-xl flex-col items-center text-center">
        <p className="eyebrow mb-3">{site.breathingExercise.eyebrow}</p>
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
          {site.breathingExercise.title}
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-slate-muted">
          {site.breathingExercise.intro}
        </p>

        {reduce ? (
          // Static, non-timed fallback: the technique explained in words, no
          // auto-advancing content for prefers-reduced-motion.
          <div className="mt-10 rounded-3xl border border-mist bg-mist/30 p-7 text-left">
            <p className="font-semibold text-ink">Box breathing, one round:</p>
            <ol className="mt-3 space-y-1.5 text-sm text-slate-muted">
              <li>1. Breathe in slowly for 4 seconds.</li>
              <li>2. Hold for 4 seconds.</li>
              <li>3. Breathe out slowly for 4 seconds.</li>
              <li>4. Hold for 4 seconds, then repeat.</li>
            </ol>
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center">
            <div className="relative flex h-52 w-52 items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full bg-breath/15"
                animate={{ scale: status === 'running' ? (expanded ? 1.35 : 1) : 1 }}
                transition={{ duration: PHASE_SECONDS, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-6 rounded-full border-2 border-breath/40"
                animate={{ scale: status === 'running' ? (expanded ? 1.2 : 1) : 1 }}
                transition={{ duration: PHASE_SECONDS, ease: 'easeInOut' }}
              />
              <div className="relative z-10 font-mono text-sm uppercase tracking-wider text-pine">
                {status === 'running' ? PHASES[phaseIndex] : status === 'done' ? 'Done' : 'Ready?'}
              </div>
            </div>

            <div className="mt-8" aria-live="polite">
              {status === 'idle' && (
                <button type="button" onClick={start} className="btn-primary">
                  Start breathing exercise
                </button>
              )}
              {status === 'running' && (
                <div className="flex flex-col items-center gap-3">
                  <p className="text-sm text-slate-muted">
                    Round {cycle + 1} of {TOTAL_CYCLES}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn-ghost border-pine/25 text-pine hover:bg-pine hover:text-paper"
                  >
                    Stop
                  </button>
                </div>
              )}
              {status === 'done' && (
                <div className="flex flex-col items-center gap-3">
                  <p className="text-sm text-slate-muted">Nicely done — feeling steadier?</p>
                  <button type="button" onClick={start} className="btn-primary">
                    Do it again
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
