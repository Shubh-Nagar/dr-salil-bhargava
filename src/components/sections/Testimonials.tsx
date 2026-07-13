import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { site } from '@/data/site';

const REAL_COUNT = site.testimonials.length;
const MAX_VISIBLE = 3;
// Duplicated leading items appended so the track always has enough cards
// to fill the visible window through the final seamless-loop step.
const track = [...site.testimonials, ...site.testimonials.slice(0, MAX_VISIBLE)];

/** How many cards are visible at once for the current viewport width. */
function useVisibleCount() {
  const [count, setCount] = useState(MAX_VISIBLE);

  useEffect(() => {
    const mqLg = window.matchMedia('(min-width: 768px)');
    const update = () => setCount(mqLg.matches ? MAX_VISIBLE : 1);
    update();
    mqLg.addEventListener('change', update);
    return () => mqLg.removeEventListener('change', update);
  }, []);

  return count;
}

/**
 * Auto-advancing carousel: shows 3 testimonials at a time and slides one
 * card along every few seconds, looping seamlessly through all 6. Pauses
 * on hover so visitors can actually read, and drops the sliding animation
 * (while still rotating content) for prefers-reduced-motion.
 */
export default function Testimonials() {
  const reduce = useReducedMotion();
  const visibleCount = useVisibleCount();
  const [index, setIndex] = useState(0);
  const [instant, setInstant] = useState(false);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setIndex((i) => i + 1);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const step = 100 / visibleCount;

  return (
    <section id="testimonials" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Patient Voices"
          title="Care that patients remember"
          intro="What people value most is being heard, understood, and given a plan that works."
          align="center"
        />

        <div
          className="mt-12 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${index * step}%` }}
            transition={instant || reduce ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => {
              if (index === REAL_COUNT) {
                setInstant(true);
                setIndex(0);
              } else if (instant) {
                setInstant(false);
              }
            }}
          >
            {track.map((t, i) => (
              <div key={i} className="w-full shrink-0 px-3 md:w-1/3">
                <figure className="flex h-full flex-col rounded-3xl border border-mist bg-mist/30 p-7">
                  <Quote className="h-7 w-7 text-breath" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-slate-body">
                    “{t.body}”
                  </blockquote>
                  <div className="mt-5 flex gap-0.5 text-brass" aria-label="Five out of five stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-mist pt-4">
                    <img
                      src={t.avatar}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-mist"
                    />
                    <div>
                      <p className="text-sm font-semibold text-ink">{t.name}</p>
                      <p className="text-xs text-slate-muted">{t.meta}</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
