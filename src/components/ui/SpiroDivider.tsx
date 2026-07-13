import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { site } from '@/data/site';

/**
 * Signature motif: a stylised spirometry flow–volume curve — the exact
 * shape Dr. Bhargava measures in a Pulmonary Function Test — used as a
 * recurring divider. The line draws itself on scroll (and renders fully
 * for reduced-motion users). Structure that encodes the subject, not decoration.
 *
 * Hoverable/focusable: it quietly demonstrates expertise by explaining what
 * the curve actually measures, rather than just claiming it. The SVG stays
 * `aria-hidden` (still a decorative graphic); the wrapping button carries
 * the real accessible name, so keyboard and screen-reader users get the
 * same explanation as a sighted mouse user hovering it.
 */
export default function SpiroDivider({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const stroke = tone === 'dark' ? '#7DD3FC' : '#0EA5E9';

  return (
    <div className="container-x relative py-2">
      <button
        type="button"
        aria-label={site.spiroCurveExplainer}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="block w-full cursor-help"
      >
        <svg
          viewBox="0 0 1200 60"
          className="h-8 w-full"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* baseline */}
          <line
            x1="0"
            y1="52"
            x2="1200"
            y2="52"
            stroke={stroke}
            strokeOpacity="0.18"
            strokeWidth="1"
          />
          {/* flow–volume style curve: sharp rise to peak flow, gentle taper */}
          <motion.path
            d="M0 52 C 60 52 90 8 150 8 C 230 8 260 48 420 50 C 640 52 820 30 1200 46"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="1600"
            initial={reduce ? { strokeDashoffset: 0 } : { strokeDashoffset: 1600 }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="tooltip"
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 top-full z-20 mt-2 w-72 max-w-[90vw] -translate-x-1/2 rounded-xl bg-ink px-4 py-3 text-center text-xs leading-relaxed text-mist shadow-xl"
          >
            {site.spiroCurveExplainer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
