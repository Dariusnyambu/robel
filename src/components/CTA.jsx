import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { contact } from "../data/config";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-royal-600 py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-ruled opacity-[0.12]" />
      <div className="container-page relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
            Ready to Move Your Research Forward?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/80">
            Get professional research support tailored to your academic requirements.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <a href={contact.whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary">
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
