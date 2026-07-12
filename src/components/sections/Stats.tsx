import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

/** A quiet band of trust figures set in mono, echoing a clinical monitor readout. */
export default function Stats() {
  return (
    <section className="bg-pine text-mist">
      <div className="container-x grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
        {site.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center lg:text-left">
            <p className="font-mono text-3xl font-medium text-white sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-mist/70">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
