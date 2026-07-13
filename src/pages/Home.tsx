import SEO from '@/components/ui/SEO';
import SpiroDivider from '@/components/ui/SpiroDivider';
import ProgressRail from '@/components/ui/ProgressRail';
import Hero from '@/components/sections/Hero';
import Expertise from '@/components/sections/Expertise';
import Triage from '@/components/sections/Triage';
import BreathingExercise from '@/components/sections/BreathingExercise';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Experience from '@/components/sections/Experience';
import Research from '@/components/sections/Research';
import Media from '@/components/sections/Media';
import Testimonials from '@/components/sections/Testimonials';
import FirstVisit from '@/components/sections/FirstVisit';
import Contact from '@/components/sections/Contact';

/**
 * The single-page experience, ordered as a narrative arc rather than a
 * stack of sections: the visitor's problem (Expertise/Triage, right after
 * the hero) → a calming, useful moment before anything is asked of them
 * (BreathingExercise) → the guide's authority (Stats/About) → the plan
 * (Services) → proof (Experience/Research/Media/Testimonials) → what to
 * expect (FirstVisit) → the ask (Contact).
 */
export default function Home() {
  return (
    <>
      <SEO />
      <ProgressRail />
      <Hero />
      <Expertise />
      <Triage />
      <BreathingExercise />
      <Stats />
      <About />
      <Services />
      <SpiroDivider />
      <Experience />
      <Research />
      <Media />
      <Testimonials />
      <FirstVisit />
      <Contact />
    </>
  );
}
