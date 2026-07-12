import { motion, useReducedMotion } from 'framer-motion';

/**
 * Signature motif: a stylised spirometry flow–volume curve — the exact
 * shape Dr. Bhargava measures in a Pulmonary Function Test — used as a
 * recurring divider. The line draws itself on scroll (and renders fully
 * for reduced-motion users). Structure that encodes the subject, not decoration.
 */
export default function SpiroDivider({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const reduce = useReducedMotion();
  const stroke = tone === 'dark' ? '#5FBFB2' : '#2FA192';

  return (
    <div className="container-x py-2" aria-hidden="true">
      <svg
        viewBox="0 0 1200 60"
        className="h-8 w-full"
        fill="none"
        preserveAspectRatio="none"
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
    </div>
  );
}
