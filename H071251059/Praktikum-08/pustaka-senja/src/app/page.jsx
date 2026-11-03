import Link from "next/link";
import Hero from "@/components/Hero";
import dataBuku from "@/data/dataBuku";

export default function HomePage() {
  const total = dataBuku.length;
  const tersedia = dataBuku.filter((b) => b.tersedia).length;
  const dipinjam = dataBuku.filter((b) => !b.tersedia).length;

  const statistik = [
    { label: "Total Koleksi Buku", nilai: total },
    { label: "Buku Tersedia", nilai: tersedia },
    { label: "Buku Dipinjam", nilai: dipinjam },
  ];

  return (
    <div className="space-y-8">
      <Hero
        nama="Pustaka Senja"
        slogan="Ruang baca komunitas untuk membaca, berdiskusi, dan menemukan buku baru."
        lokasi="Jl. Kampus Raya No. 12, dekat kampus"
        jamBuka="Buka setiap hari, 10.00 – 20.00"
      />
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {statistik.map((s) => (
          <div key={s.label} className="rounded-xl border border-stone-300 bg-white p-5 text-center">
            <p className="text-3xl font-bold text-orange-800">{s.nilai}</p>
            <p className="text-sm text-stone-600">{s.label}</p>
          </div>
        ))}
      </section>
      <div className="flex justify-center gap-4">
        <Link href="/katalog" className="rounded-lg bg-orange-700 px-5 py-2.5 font-medium text-white transition hover:bg-orange-600">
          Lihat Katalog Buku
        </Link>
        <Link href="/usulan" className="rounded-lg border border-stone-400 px-5 py-2.5 font-medium text-stone-800 transition hover:bg-stone-200">
          Usulkan Buku
        </Link>
      </div>
    </div>
  );
}
