import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight, ShieldCheck, Clock3, BadgeCheck, Microscope } from "lucide-react";
import { contact } from "../data/config";

const trustPoints = [
  { icon: Microscope, label: "Professional Research Support" },
  { icon: ShieldCheck, label: "Confidential Service" },
  { icon: BadgeCheck, label: "Quality Assured" },
  { icon: Clock3, label: "Timely Delivery" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-royal-900">
      <div className="absolute inset-0 bg-ruled opacity-[0.35]" />
      <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-royal-600/30 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-ember-600/10 blur-3xl" />

      <div className="container-page relative grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div className="fade-up">
          <span className="eyebrow border border-white/15 bg-white/5 px-3 py-1.5 text-white">
            Robel Consulting, Kenya
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Professional Thesis &amp; Research Solutions
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            From undergraduate dissertations to PhD research, Robel Consulting provides professional research
            support, thesis development, academic writing assistance, data collection and research consultation
            tailored to your academic needs.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <a href={contact.whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {trustPoints.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col gap-2 border-t border-white/15 pt-4">
                <Icon size={18} className="text-ember-600" />
                <dt className="text-xs leading-snug text-white/70">{label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="fade-up" style={{ animationDelay: "120ms" }}>
          <div className="relative mx-auto max-w-md rounded-2xl border border-white/10 bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-royal-600">
                Research Snapshot
              </span>
              <span className="rounded-full bg-verdant-50 px-2.5 py-1 font-mono text-[10px] uppercase text-verdant-700">
                Live
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between text-xs text-ink/50">
                  <span>Literature Review</span>
                  <span className="font-mono">Ch. 2</span>
                </div>
                <div className="h-2 rounded-full bg-mist">
                  <div className="h-2 w-[86%] rounded-full bg-royal-600" />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-xs text-ink/50">
                  <span>Data Collection</span>
                  <span className="font-mono">Ch. 3</span>
                </div>
                <div className="h-2 rounded-full bg-mist">
                  <div className="h-2 w-[64%] rounded-full bg-ember-600" />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-xs text-ink/50">
                  <span>Analysis &amp; Findings</span>
                  <span className="font-mono">Ch. 4</span>
                </div>
                <div className="h-2 rounded-full bg-mist">
                  <div className="h-2 w-[38%] rounded-full bg-verdant-600" />
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-black/[0.06] pt-5">
              <div>
                <p className="font-serif text-xl text-ink">n=214</p>
                <p className="text-[11px] text-ink/50">Sample size</p>
              </div>
              <div>
                <p className="font-serif text-xl text-ink">98%</p>
                <p className="text-[11px] text-ink/50">On-time delivery</p>
              </div>
              <div>
                <p className="font-serif text-xl text-ink">p&lt;.05</p>
                <p className="text-[11px] text-ink/50">Analysis-ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
