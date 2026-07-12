import { motion, useReducedMotion } from 'framer-motion';
import { CalendarCheck, Phone, BadgeCheck, Award } from 'lucide-react';
import { site } from '@/data/site';

/**
 * Hero = the thesis. The most characteristic thing in a pulmonologist's
 * world is breath, so the portrait sits inside a slow "breathing aura"
 * that expands and contracts at a calm respiration cadence — the site's
 * signature. Everything else stays quiet around it.
 */
export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden bg-paper">
      {/* Ambient background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-mist/60 via-paper to-paper"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-breath/10 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Copy */}
        <div>
          <motion.p
            className="eyebrow mb-5"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {site.hero.eyebrow}
          </motion.p>

          <motion.h1
            className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            {site.hero.headlineLead}{' '}
            <span className="italic text-pine">{site.hero.headlineEmphasis}</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-body sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {site.hero.subhead}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <a href="#contact" className="btn-primary">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </a>
            <a
              href={site.contact.phoneHref}
              className="btn-ghost border-pine/25 text-pine hover:bg-pine hover:text-paper"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.contact.phoneDisplay}
            </a>
          </motion.div>

          {/* Trust cues */}
          <motion.ul
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-muted"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <li className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-breath" aria-hidden="true" />
              {site.doctor.yearsExperience}+ years experience
            </li>
            <li className="inline-flex items-center gap-2">
              <Award className="h-4 w-4 text-brass" aria-hidden="true" />
              Professor &amp; Head, Respiratory Medicine
            </li>
          </motion.ul>
        </div>

        {/* Portrait + breathing aura */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <BreathingAura reduce={!!reduce} />

          <motion.div
            className="relative z-10 overflow-hidden rounded-[2rem] border border-white/60 bg-mist shadow-2xl shadow-pine/20"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={site.doctor.portrait}
              alt={`${site.doctor.name}, ${site.doctor.title}`}
              className="aspect-[5/6] w-full object-cover"
              width={600}
              height={720}
              loading="eager"
            />
            {/* Credential ribbon */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5 pt-10">
              <p className="font-display text-lg font-semibold text-white">{site.doctor.name}</p>
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-breath-light">
                {site.doctor.credentials}
              </p>
            </div>
          </motion.div>

          {/* Floating stat card */}
          <motion.div
            className="absolute -left-4 top-6 z-20 hidden rounded-2xl border border-mist bg-paper/95 px-4 py-3 shadow-xl backdrop-blur sm:block"
            initial={reduce ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="font-mono text-2xl font-medium text-pine">{site.doctor.yearsExperience}+</p>
            <p className="text-xs text-slate-muted">years caring for lungs</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** The slow, concentric respiration rings behind the portrait. */
function BreathingAura({ reduce }: { reduce: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
    >
      <div
        className={[
          'absolute h-[112%] w-[112%] rounded-full',
          'bg-[radial-gradient(circle,rgba(47,161,146,0.20)_0%,rgba(47,161,146,0.06)_45%,transparent_70%)]',
          reduce ? '' : 'animate-breathe',
        ].join(' ')}
      />
      <div
        className={[
          'absolute h-[92%] w-[92%] rounded-full border border-breath/20',
          reduce ? '' : 'animate-breathe',
        ].join(' ')}
        style={reduce ? undefined : { animationDelay: '0.8s' }}
      />
    </div>
  );
}
