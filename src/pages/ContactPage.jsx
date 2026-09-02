import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import useSEO from "../hooks/useSEO";

export default function ContactPage() {
  useSEO({
    title: "Contact Us | Robel Consulting — Research Support in Kenya",
    description:
      "Get in touch with Robel Consulting for a personalized thesis, research or data collection quotation. Call, WhatsApp or email us today.",
    path: "/contact",
  });

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Discuss Your Research"
        description="Tell us about your project and our team will get back to you with a personalized quotation."
      />
      <Contact />
      <FAQ />
    </>
  );
}
