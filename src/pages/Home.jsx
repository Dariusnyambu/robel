import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import DataCollection from "../components/DataCollection";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import useSEO from "../hooks/useSEO";

export default function Home() {
  useSEO({
    title: "Robel Consulting | Professional Thesis & Research Services in Kenya",
    description:
      "Robel Consulting provides professional thesis, dissertation, research writing, data collection, data analysis and academic research support services in Kenya.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services compact />
      <Pricing />
      <DataCollection />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
