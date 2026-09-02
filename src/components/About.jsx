import { BookOpen, Compass, Database, Edit3, Presentation, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const pillars = [
  { icon: Compass, label: "Research methodology" },
  { icon: BookOpen, label: "Structured academic work" },
  { icon: Database, label: "Data collection" },
  { icon: Edit3, label: "Editing and revisions" },
  { icon: Presentation, label: "Presentation preparation" },
  { icon: ShieldCheck, label: "Confidentiality" },
];

export default function About() {
  return (
    <section className="bg-mist py-20 sm:py-28" id="about">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="eyebrow">About Robel Consulting</span>
          <h2 className="section-heading mt-4">Your Trusted Research Partner</h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70">
            Robel Consulting provides professional research and academic support services for students,
            researchers and professionals across Kenya. Our work is grounded in research quality, sound
            methodology and clear academic structure — supporting you through consultation, data collection,
            writing and presentation, at whichever stage your project needs it most.
          </p>

          <div className="mt-8 rounded-2xl border-l-4 border-ember-600 bg-white p-6 shadow-card">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember-700">Our Mission</p>
            <p className="mt-3 font-serif text-lg leading-snug text-ink">
              "To provide reliable, professional and research-focused solutions that help clients successfully
              navigate their academic and research journey."
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, label }) => (
              <div key={label} className="card-base flex flex-col gap-3 p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal-50 text-royal-600">
                  <Icon size={19} />
                </span>
                <p className="text-sm font-medium leading-snug text-ink">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
