import PageHeader from "../components/PageHeader";
import Pricing from "../components/Pricing";
import DataCollection from "../components/DataCollection";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import useSEO from "../hooks/useSEO";

export default function PricingPage() {
  useSEO({
    title: "Thesis & Research Pricing (KES) | Robel Consulting Kenya",
    description:
      "PhD, Masters and Undergraduate thesis packages and data collection pricing in KES from Robel Consulting, Kenya.",
    path: "/pricing",
  });

  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Research & Thesis Packages"
        description="Choose the package that matches your academic level and research requirements — all prices in KES."
      />
      <Pricing />
      <DataCollection />
      <FAQ />
      <CTA />
    </>
  );
}
