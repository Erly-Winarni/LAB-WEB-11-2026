import Link from "next/link";

function Hero({ nama, deskripsi, lokasi, jamBuka }) {
  return (
    <section className="rounded-2xl bg-stone-900 px-6 py-16 text-center text-white shadow-lg">
      <span className="mb-4 inline-block rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400">
        Ruang Baca Komunitas
      </span>
      <h1 className="mb-3 text-4xl font-bold">
        Selamat datang di <span className="text-amber-400">{nama}</span>
      </h1>
      <p className="mx-auto mb-4 max-w-xl text-stone-300">{deskripsi}</p>
      <p className="mb-8 text-sm text-stone-400">
        {lokasi} &middot; {jamBuka}
      </p>

      <div className="flex justify-center gap-4">
        <Link
          href="/katalog"
          className="rounded-lg bg-amber-400 px-5 py-2.5 font-semibold text-stone-900 transition hover:bg-amber-300"
        >
          Jelajahi Katalog
        </Link>
        <Link
          href="/usulan"
          className="rounded-lg border border-stone-600 px-5 py-2.5 font-medium text-stone-200 transition hover:bg-stone-800"
        >
          Usulkan Buku
        </Link>
      </div>
    </section>
  );
}

export default Hero;