import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import MicroCTA from '@/components/ui/MicroCTA';
import { site } from '@/data/site';

/** Conditions treated — "is this you?" — the visitor's problem, right after the hero. */
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
                <article className="group h-full overflow-hidden rounded-2xl border border-mist bg-paper transition duration-300 hover:-translate-y-1 hover:border-breath/40 hover:shadow-xl hover:shadow-pine/15">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
                    <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-pine text-breath-light shadow-md">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-pine">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-muted">{item.desc}</p>
                    <div className="mt-4">
                      <MicroCTA reason={item.reason} />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
