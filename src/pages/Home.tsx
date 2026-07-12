import SEO from '@/components/ui/SEO';
import SpiroDivider from '@/components/ui/SpiroDivider';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Expertise from '@/components/sections/Expertise';
import Services from '@/components/sections/Services';
import Experience from '@/components/sections/Experience';
import Research from '@/components/sections/Research';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

/**
 * The single-page experience. Sections are ordered to build trust
 * progressively: who he is → what he treats → how → proof → action.
 * The spirometry-flow divider recurs between light sections as the motif.
 */
export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Stats />
      <About />
      <SpiroDivider />
      <Expertise />
      <Services />
      <SpiroDivider />
      <Experience />
      <Research />
      <Testimonials />
      <Contact />
    </>
  );
}
