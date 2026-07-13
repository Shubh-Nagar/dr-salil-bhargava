import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

interface BreathingLungProps {
  /** `lg` for the hero's opening presence, `sm` for its quieter reprise near Contact. */
  size?: 'lg' | 'sm';
}

const SIZE_CLASSES: Record<'lg' | 'sm', string> = {
  lg: 'h-[42rem] w-[42rem] opacity-[0.07]',
  sm: 'h-64 w-64 opacity-[0.05]',
};

/**
 * The signature ambient motif: a simple bronchial-tree line drawing, matching the
 * favicon/monogram's stroke style, that sits behind a section's content and ties
 * its scale/opacity to scroll position. Two independent instances (Hero, Contact)
 * bookend the page with the same breath it opened with — not one shared node
 * repositioned via a page-spanning scroll target, which would be fragile to any
 * future section reorder.
 *
 * Scroll motion and idle motion are deliberately on two nested elements: the outer
 * motion.div carries the scroll-linked scale/opacity (compositor-only, no layout
 * cost), and the inner div carries the existing `animate-breathe` CSS keyframe.
 * Putting both on one element would have them fight over the same `transform`/
 * `opacity` properties every frame.
 */
export default function BreathingLung({ size = 'lg' }: BreathingLungProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.55, 1, 0.55]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
    >
      <motion.div style={reduce ? undefined : { scale, opacity }}>
        <div className={[SIZE_CLASSES[size], reduce ? '' : 'animate-breathe'].join(' ')}>
          <LungSvg />
        </div>
      </motion.div>
    </div>
  );
}

/** Bilateral bronchial tree over soft lung-lobe silhouettes, one brass carina node. */
function LungSvg() {
  return (
    <svg viewBox="0 0 300 360" className="h-full w-full" fill="none">
      {/* Soft lung-lobe silhouettes */}
      <path
        d="M95 108 C58 120 38 182 48 252 C57 312 98 332 128 300 C150 268 138 178 118 128 C113 116 104 110 95 108 Z"
        fill="#0EA5E9"
        fillOpacity="0.12"
      />
      <path
        d="M205 108 C242 120 262 182 252 252 C243 312 202 332 172 300 C150 268 162 178 182 128 C187 116 196 110 205 108 Z"
        fill="#0EA5E9"
        fillOpacity="0.12"
      />

      {/* Bronchial tree */}
      <g stroke="#7DD3FC" strokeWidth="3.2" strokeLinecap="round">
        <path d="M150 20 V88" />
        <path d="M150 88 C120 98 100 118 95 148" />
        <path d="M150 88 C180 98 200 118 205 148" />
        <path d="M95 148 C80 158 70 178 65 208" />
        <path d="M95 148 C100 168 105 193 100 223" />
        <path d="M205 148 C220 158 230 178 235 208" />
        <path d="M205 148 C200 168 195 193 200 223" />
        <path d="M65 208 q-4 6 -10 6" />
        <path d="M100 223 q-2 8 -8 10" />
        <path d="M235 208 q4 6 10 6" />
        <path d="M200 223 q2 8 8 10" />
      </g>

      <circle cx="150" cy="87" r="4" fill="#B9893E" />
    </svg>
  );
}
