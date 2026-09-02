import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "../data/content";
import Reveal from "./Reveal";

function Item({ faq, open, onToggle }) {
  return (
    <div className="border-b border-black/[0.08] py-5">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="font-serif text-base text-ink sm:text-lg">{faq.question}</span>
        <Plus
          size={18}
          className={`shrink-0 text-royal-600 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        />
      </button>
      <div
        className="grid overflow-hidden transition-all duration-300"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <p className="pt-3 text-sm leading-relaxed text-ink/65">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-mist py-20 sm:py-28" id="faqs">
      <div className="container-page grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <span className="eyebrow">FAQs</span>
          <h2 className="section-heading mt-4">Questions, Answered</h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/60">
            Can't find what you're looking for? Reach out on WhatsApp or send us your question directly.
          </p>
        </Reveal>

        <Reveal delay={100} className="card-base px-6 sm:px-8">
          {faqs.map((faq, i) => (
            <Item key={faq.question} faq={faq} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
