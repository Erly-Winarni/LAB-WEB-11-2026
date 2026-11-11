import BukuSampul from "@/components/BukuSampul";

function Hero({ nama, slogan, lokasi, jamBuka, bukuUnggulan, children }) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cream via-sand to-[#e2d3b8] px-8 py-14 md:px-14">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-medium tracking-[0.25em] text-gold">
            TEMUKAN. BACA. TUMBUH.
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-[1.1] text-forest md:text-6xl">
            Buku untuk setiap pikiran &amp; senja.
          </h1>
          <p className="mt-5 max-w-md text-lg text-stone-600">{slogan}</p>
          <div className="mt-8 flex flex-wrap gap-3">{children}</div>
          <p className="mt-8 text-sm text-stone-500">
            {nama} &middot; {lokasi} &middot; {jamBuka}
          </p>
        </div>

        <div className="relative mx-auto flex h-80 w-full max-w-sm items-end justify-center md:h-96">
          {bukuUnggulan.map((b, i) => (
            <BukuSampul
              key={b.id}
              id={b.id}
              judul={b.judul}
              penulis={b.penulis}
              className={
                i === 0
                  ? "absolute left-2 w-36 -rotate-6 md:w-40"
                  : i === 1
                  ? "absolute z-10 w-44 md:w-48"
                  : "absolute right-2 w-36 rotate-6 md:w-40"
              }
            />
          ))}
          <div className="absolute -right-2 -top-2 z-20 flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full bg-forest text-center font-serif text-cream shadow-lg">
            <span className="text-lg leading-none">Koleksi</span>
            <span className="text-xs text-gold">pilihan senja</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
