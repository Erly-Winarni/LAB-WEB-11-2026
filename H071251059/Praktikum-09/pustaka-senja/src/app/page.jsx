// Server Component: seluruh data (statistik, buku unggulan) dibaca langsung dari PostgreSQL.
import Link from "next/link";
import Hero from "@/components/Hero";
import BukuSampul from "@/components/BukuSampul";
import { getStatistik, getBukuTersedia, getJumlahPerKategori } from "@/lib/buku";

// Data berasal dari database, jadi halaman dirender saat diminta (bukan dibekukan saat build).
export const dynamic = "force-dynamic";

const kategoriList = [
  { nama: "Teknologi", simbol: "</>", ket: "Kode & sistem" },
  { nama: "Fiksi", simbol: "❦", ket: "Cerita & sejarah" },
  { nama: "Pengembangan Diri", simbol: "☼", ket: "Fokus & kebiasaan" },
];

export default async function HomePage() {
  // Tiga query dijalankan paralel.
  const [stat, pilihan, perKategori] = await Promise.all([
    getStatistik(),
    getBukuTersedia(4),
    getJumlahPerKategori(),
  ]);

  const statistik = [
    { label: "Total Koleksi Buku", nilai: stat.total },
    { label: "Buku Tersedia", nilai: stat.tersedia },
    { label: "Buku Dipinjam", nilai: stat.dipinjam },
  ];
  const bukuUnggulan = pilihan.slice(0, 3);

  return (
    <div className="space-y-16">
      <div>
        <Hero
          nama="Pustaka Senja"
          slogan="Ruang baca komunitas untuk membaca, berdiskusi, dan menemukan buku favorit berikutnya."
          lokasi="Jl. Perintis Kemerdekaan No. 10"
          jamBuka="Buka 10.00 – 20.00"
          bukuUnggulan={bukuUnggulan}
        >
          <Link href="/katalog" className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream transition hover:bg-forest-deep">
            Lihat Katalog Buku
          </Link>
          <Link href="/usulan" className="rounded-full border border-forest px-6 py-3 text-sm font-medium text-forest transition hover:bg-forest hover:text-cream">
            Usulkan Buku
          </Link>
        </Hero>

        <section className="relative -mt-8 grid grid-cols-3 divide-x divide-sand rounded-2xl bg-white px-4 py-6 shadow-lg sm:mx-10">
          {statistik.map((s) => (
            <div key={s.label} className="px-2 text-center">
              <p className="font-serif text-4xl font-semibold text-forest">{s.nilai}</p>
              <p className="text-xs text-stone-500 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </section>
      </div>

      <section>
        <h2 className="mb-6 font-serif text-3xl font-semibold text-forest">Temukan Bacaan Berikutnya</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {kategoriList.map((k) => {
            const jumlah = perKategori.find((p) => p.kategori === k.nama)?.jumlah ?? 0;
            return (
              <Link
                key={k.nama}
                href={`/katalog?kategori=${encodeURIComponent(k.nama)}`}
                className="group relative flex h-44 flex-col items-center justify-end overflow-hidden rounded-2xl bg-gradient-to-b from-forest to-forest-deep p-5 text-center text-cream transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="absolute top-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 font-serif text-xl text-gold transition group-hover:bg-gold group-hover:text-forest">
                  {k.simbol}
                </span>
                <span className="font-semibold">{k.nama}</span>
                <span className="text-xs text-stone-400">{k.ket} &middot; {jumlah} buku</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-serif text-3xl font-semibold text-forest">Siap Dipinjam Hari Ini</h2>
          <Link href="/katalog" className="text-sm font-medium text-forest underline-offset-4 hover:underline">
            Semua buku
          </Link>
        </div>
        {pilihan.length === 0 ? (
          <p className="text-stone-500">Belum ada buku yang tersedia saat ini.</p>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {pilihan.map((b) => (
              <Link key={b.id} href={`/katalog/${b.id}`} className="group block">
                <div className="rounded-xl bg-sand/60 px-6 py-5 transition group-hover:-translate-y-1">
                  <BukuSampul id={b.id} judul={b.judul} penulis={b.penulis} />
                </div>
                <p className="mt-3 font-serif font-semibold text-forest">{b.judul}</p>
                <p className="text-sm text-stone-500">{b.penulis}</p>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-3xl bg-forest px-8 py-12 text-center text-cream">
        <h2 className="font-serif text-3xl font-semibold">Ada buku yang belum kami punya?</h2>
        <p className="mx-auto mt-3 max-w-md text-stone-300">
          Beri tahu kami judulnya, dan kami pertimbangkan untuk menghadirkannya di rak Pustaka Senja.
        </p>
        <Link href="/usulan" className="mt-6 inline-block rounded-full bg-gold px-6 py-3 text-sm font-medium text-forest-deep transition hover:brightness-110">
          Usulkan Buku
        </Link>
      </section>
    </div>
  );
}
