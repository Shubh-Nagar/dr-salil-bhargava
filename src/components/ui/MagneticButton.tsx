import { useRef, type MouseEvent, type ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

const STRENGTH = 0.35; // fraction of cursor offset the button follows
const MAX_OFFSET = 10; // px — keeps the pull subtle, never competes for attention

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps a primary CTA so it drifts slightly toward the cursor on hover and
 * springs back on leave — a soft "magnetic pull." The wrapper itself carries
 * the transform, so the button/link inside keeps its normal markup, styling
 * and behaviour untouched. No-ops entirely under prefers-reduced-motion.
 */
export default function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relX * STRENGTH)));
    y.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relY * STRENGTH)));
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={reduce ? undefined : { x: springX, y: springY }}
      className={['inline-block', className].filter(Boolean).join(' ')}
    >
      {children}
    </motion.div>
  );
}
