import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/content";
import Reveal from "./Reveal";

function Card({ t }) {
  return (
    <div className="card-base flex h-full flex-col p-7">
      <Quote size={22} className="text-ember-600" />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">"{t.quote}"</p>
      <div className="mt-6 flex items-center justify-between border-t border-black/[0.06] pt-4">
        <div>
          <p className="text-sm font-semibold text-ink">{t.name}</p>
          <p className="text-xs text-ink/50">
            {t.level} · {t.service}
          </p>
        </div>
        <div className="flex gap-0.5 text-ember-500">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Client Voices</span>
          <h2 className="section-heading mt-4">What Clients Say</h2>
        </Reveal>

        {/* Desktop grid */}
        <div className="mt-12 hidden gap-6 sm:grid sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 90}>
              <Card t={t} />
            </Reveal>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="mt-10 sm:hidden">
          <Card t={testimonials[index]} />
          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink/60"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-royal-600" : "bg-black/15"}`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink/60"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
