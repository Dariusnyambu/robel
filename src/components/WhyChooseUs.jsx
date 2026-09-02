import { Award, Layers, ShieldCheck, RefreshCw, Presentation, ClipboardList, BadgeCheck, MessageCircle, Check } from "lucide-react";
import { whyChooseUs } from "../data/services";
import Reveal from "./Reveal";

const iconMap = { Award, Layers, ShieldCheck, RefreshCw, Presentation, ClipboardList, BadgeCheck, MessageCircle };

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-28" id="why-us">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Why Robel Consulting</span>
          <h2 className="section-heading mt-4">Why Choose Robel Consulting?</h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Check;
            return (
              <Reveal key={item.title} delay={(i % 4) * 80} className="bg-white p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-verdant-50 text-verdant-600">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 font-serif text-base text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
