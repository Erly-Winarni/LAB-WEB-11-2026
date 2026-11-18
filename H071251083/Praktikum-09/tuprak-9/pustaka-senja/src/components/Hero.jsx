function Hero({ nama, slogan, lokasi, jamBuka }) {
  return (
    <section className="bg-stone-900 text-white rounded-2xl px-6 py-14 text-center shadow-lg">
      <span className="inline-block bg-amber-400/10 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        Ruang Baca Komunitas
      </span>
      <h1 className="text-4xl font-bold mb-3">
        Selamat datang di <span className="text-amber-400">{nama}</span>
      </h1>
      <p className="text-stone-300 max-w-xl mx-auto mb-6">{slogan}</p>
      <p className="text-sm text-stone-400">
        {lokasi} &middot; {jamBuka}
      </p>
    </section>
  );
}

export default Hero;
