import { Link } from "react-router-dom";
import { dataCollection } from "../data/pricing";
import Reveal from "./Reveal";

export default function DataCollection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl bg-royal-900 text-white">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16">
            <Reveal>
              <span className="eyebrow text-white/70 before:bg-ember">Data Collection</span>
              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">{dataCollection.title}</h2>
              <p className="mt-5 max-w-md text-white/70">{dataCollection.subheading}</p>

              <p className="mt-8 font-serif text-4xl text-ember-500">{dataCollection.range}</p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <span className="rounded-full bg-verdant-600/15 px-4 py-2 font-mono text-xs uppercase tracking-wide text-verdant-500">
                  {dataCollection.startingFrom}
                </span>
                <span className="rounded-full bg-ember-600/15 px-4 py-2 font-mono text-xs uppercase tracking-wide text-ember-500">
                  {dataCollection.largeProjects}
                </span>
              </div>

              <Link to="/contact" className="btn-secondary mt-8 inline-flex">
                Request Data Collection Quote
              </Link>
            </Reveal>

            <Reveal delay={100}>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                Pricing depends on
              </p>
              <div className="mt-5 space-y-5">
                {dataCollection.factors.map((factor) => (
                  <div key={factor.number} className="flex gap-4 border-t border-white/10 pt-5">
                    <span className="font-serif text-2xl text-white/30">{factor.number}</span>
                    <div>
                      <p className="font-semibold text-white">{factor.title}</p>
                      <ul className="mt-1.5 space-y-1">
                        {factor.items.map((item) => (
                          <li key={item} className="text-sm text-white/60">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
