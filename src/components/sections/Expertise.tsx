import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

/** Conditions treated — "why patients come to Dr. Bhargava". */
export default function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 bg-mist/40 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Areas of Expertise"
          title="Conditions cared for, from everyday to complex"
          intro="Focused, evidence-based treatment across the full range of respiratory and sleep conditions."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.expertise.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.name} delay={(i % 3) * 0.08}>
                <article className="group h-full rounded-2xl border border-mist bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:border-breath/40 hover:shadow-lg hover:shadow-pine/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pine/10 text-pine transition group-hover:bg-pine group-hover:text-breath-light">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-muted">{item.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
