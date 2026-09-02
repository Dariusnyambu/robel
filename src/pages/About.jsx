import PageHeader from "../components/PageHeader";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import CTA from "../components/CTA";
import useSEO from "../hooks/useSEO";

export default function AboutPage() {
  useSEO({
    title: "About Us | Robel Consulting — Research & Thesis Support in Kenya",
    description:
      "Learn about Robel Consulting, a trusted research partner providing thesis support, research consultation and data collection services across Kenya.",
    path: "/about",
  });

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Your Trusted Research Partner"
        description="Professional research and academic support for students, researchers and professionals across Kenya."
      />
      <About />
      <WhyChooseUs />
      <Process />
      <CTA />
    </>
  );
}
