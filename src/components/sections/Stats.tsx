import { useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { useCountUp } from '@/hooks/useCountUp';
import { site } from '@/data/site';

/** Splits a stat like "50k+" into its animatable number (50) and static suffix ("k+"). */
function parseStatValue(value: string) {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (!match) return null;
  return { number: parseInt(match[1].replace(/,/g, ''), 10), suffix: match[2] };
}

function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduce = useReducedMotion();
  const parsed = parseStatValue(value);
  const count = useCountUp(parsed?.number ?? 0, inView && !!parsed && !reduce);

  const display = !parsed || reduce ? value : `${count.toLocaleString()}${parsed.suffix}`;

  return (
    <p ref={ref} className="font-mono text-3xl font-medium tabular-nums text-white sm:text-4xl">
      {display}
    </p>
  );
}

/** A quiet band of trust figures set in mono, echoing a clinical monitor readout. */
export default function Stats() {
  return (
    <section className="bg-pine text-mist">
      <div className="container-x grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
        {site.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center lg:text-left">
            <StatValue value={stat.value} />
            <p className="mt-1 text-sm text-mist/70">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
