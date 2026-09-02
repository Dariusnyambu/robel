import { useEffect, useRef, useState } from "react";
import { stats } from "../data/config";
import Reveal from "./Reveal";

function Counter({ value }) {
  const ref = useRef(null);
  const isCountable = /^\d/.test(value) && !value.includes("/");
  const [display, setDisplay] = useState(isCountable ? "0" : value);
  const numeric = isCountable ? parseInt(value.replace(/[^\d]/g, ""), 10) : NaN;
  const suffix = isCountable ? value.replace(/[\d,]/g, "") : "";

  useEffect(() => {
    if (Number.isNaN(numeric)) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1200;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(numeric * eased).toString());
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [numeric]);

  return (
    <span ref={ref} className="font-serif text-4xl text-ink sm:text-5xl">
      {Number.isNaN(numeric) ? value : display}
      {!Number.isNaN(numeric) ? suffix : ""}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-b border-black/[0.06] bg-white">
      <div className="container-page grid grid-cols-2 divide-x divide-y divide-black/[0.06] border-black/[0.06] lg:grid-cols-4 lg:divide-y-0">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80} className="flex flex-col gap-1 px-6 py-10 sm:px-8">
            <Counter value={stat.value} />
            <p className="mt-1 text-sm font-semibold text-ink">{stat.label}</p>
            <p className="font-mono text-[11px] uppercase tracking-wide text-ink/40">{stat.note}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
