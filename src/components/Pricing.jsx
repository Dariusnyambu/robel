import { Link } from "react-router-dom";
import { Check, Star } from "lucide-react";
import { packages } from "../data/pricing";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section className="bg-mist py-20 sm:py-28" id="pricing">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Pricing</span>
          <h2 className="section-heading mt-4">Research &amp; Thesis Packages</h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            Choose the package that matches your academic level and research requirements.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-8 ${
                  pkg.featured
                    ? "border-2 border-royal-600 bg-royal-900 text-white shadow-lift lg:-translate-y-3"
                    : "card-base text-ink"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 right-8 flex items-center gap-1 rounded-full bg-ember-600 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-white">
                    <Star size={11} fill="currentColor" /> Most Comprehensive
                  </span>
                )}

                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.2em] ${
                    pkg.featured ? "text-ember-500" : "text-royal-600"
                  }`}
                >
                  {pkg.level}
                </span>
                <h3 className="mt-3 font-serif text-2xl">{pkg.title}</h3>
                <p className={`mt-4 font-serif text-3xl ${pkg.featured ? "text-white" : "text-ink"}`}>
                  {pkg.range}
                </p>
                <p className={`mt-1 text-xs ${pkg.featured ? "text-white/60" : "text-ink/50"}`}>{pkg.note}</p>

                <ul className="mt-7 flex-1 space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${pkg.featured ? "text-verdant-500" : "text-verdant-600"}`}
                      />
                      <span className={pkg.featured ? "text-white/85" : "text-ink/75"}>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-8 w-full text-center ${pkg.featured ? "btn-primary" : "btn-ghost"}`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
