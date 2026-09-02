import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import useSEO from "../hooks/useSEO";

export default function ServicesPage() {
  useSEO({
    title: "Research & Thesis Services | Robel Consulting Kenya",
    description:
      "Thesis and dissertation support, research proposal development, data collection, data analysis, academic editing and presentation preparation in Kenya.",
    path: "/services",
  });

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Research Services, Chapter by Chapter"
        description="Every service can stand alone or combine into a full research package, matched to your academic level."
      />
      <Services />
      <Process />
      <FAQ />
      <CTA />
    </>
  );
}
