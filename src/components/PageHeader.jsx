export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-royal-900 py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-ruled opacity-[0.3]" />
      <div className="container-page relative fade-up">
        <span className="eyebrow border border-white/15 bg-white/5 px-3 py-1.5 text-white">{eyebrow}</span>
        <h1 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-xl text-white/70">{description}</p>}
      </div>
    </section>
  );
}
