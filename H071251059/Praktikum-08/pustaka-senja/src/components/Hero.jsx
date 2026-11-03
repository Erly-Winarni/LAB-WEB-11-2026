function Hero({ nama, slogan, lokasi, jamBuka }) {
  return (
    <section className="rounded-2xl border border-stone-300 bg-amber-100 px-6 py-14 text-center shadow-sm">
      <h1 className="mb-3 text-4xl font-bold text-stone-900">{nama}</h1>
      <p className="mx-auto mb-6 max-w-xl text-lg text-stone-700">{slogan}</p>
      <p className="text-sm text-stone-600">{lokasi}</p>
      <p className="text-sm text-stone-600">{jamBuka}</p>
    </section>
  );
}

export default Hero;
