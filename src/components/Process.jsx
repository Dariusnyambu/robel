import { FileInput, Receipt, FlaskConical, CheckCircle2 } from "lucide-react";
import { process } from "../data/content";
import Reveal from "./Reveal";

const iconMap = { FileInput, Receipt, FlaskConical, CheckCircle2 };

export default function Process() {
  return (
    <section className="bg-royal-900 py-20 text-white sm:py-28" id="process">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-white/70 before:bg-ember">How It Works</span>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
            A Clear Path From Brief to Defence
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {process.map((step, i) => {
            const Icon = iconMap[step.icon] || CheckCircle2;
            return (
              <Reveal key={step.step} delay={i * 100} className="relative">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-white/20">{step.step}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ember-600/15 text-ember-500">
                      <Icon size={18} />
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-lg text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="absolute right-[-13px] top-1/2 hidden h-px w-6 -translate-y-1/2 bg-white/15 lg:block" />
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
