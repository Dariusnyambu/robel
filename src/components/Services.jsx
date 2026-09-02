import {
  ArrowUpRight,
  GraduationCap,
  FileText,
  ClipboardList,
  BarChart3,
  PenLine,
  SpellCheck2,
  Users,
  Presentation,
} from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import Reveal from "./Reveal";

const iconMap = {
  GraduationCap,
  FileText,
  ClipboardList,
  BarChart3,
  PenLine,
  SpellCheck2,
  Users,
  Presentation,
};

export default function Services({ compact = false }) {
  const list = compact ? services.slice(0, 8) : services;

  return (
    <section className="bg-white py-20 sm:py-28" id="services">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">What We Offer</span>
          <h2 className="section-heading mt-4">Research Services, Chapter by Chapter</h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            Every service below can stand alone or combine into a full research package — matched to your
            academic level and the stage your project is at.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((service, i) => {
            const Icon = iconMap[service.icon] || FileText;
            return (
              <Reveal key={service.id} delay={(i % 4) * 90}>
                <div className="group card-base flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-royal-200 hover:shadow-lift">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal-50 text-royal-600 transition-colors group-hover:bg-royal-600 group-hover:text-white">
                      <Icon size={20} />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink/30">
                      {service.ref}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-lg leading-snug text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {compact && (
          <div className="mt-10 flex justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 font-mono text-sm uppercase tracking-wide text-royal-600 hover:text-royal-700"
            >
              View all services <ArrowUpRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
