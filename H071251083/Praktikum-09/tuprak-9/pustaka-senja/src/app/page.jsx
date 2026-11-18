import Link from "next/link";
import Hero from "@/components/Hero";
import pool from "@/lib/db";

export const dynamic = "force-dynamic"; // selalu ambil data terbaru dari database

export default async function BerandaPage() {
  // Statistik dihitung langsung oleh PostgreSQL dari data yang tersimpan
  const { rows } = await pool.query(
    "SELECT COUNT(*)::int AS total, COUNT(*) FILTER (WHERE tersedia)::int AS tersedia FROM buku",
  );
  const { total, tersedia } = rows[0];
  const dipinjam = total - tersedia;

  const statistik = [
    { label: "Total Koleksi Buku", nilai: total },
    { label: "Buku Tersedia", nilai: tersedia },
    { label: "Buku Dipinjam", nilai: dipinjam },
  ];

  return (
    <div className="space-y-8">
      <Hero
        nama="Pustaka Senja"
        slogan="Ruang baca nyaman untuk mahasiswa dan warga sekitar. Pinjam, baca, dan usulkan buku favoritmu."
        lokasi="Jl. Kampus No. 9, dekat kampus"
        jamBuka="Buka setiap hari 08.00 - 20.00"
      />

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {statistik.map((item) => (
          <div key={item.label} className="bg-white border border-stone-200 rounded-xl p-5 text-center shadow-sm">
            <p className="text-3xl font-bold text-amber-600">{item.nilai}</p>
            <p className="text-sm text-stone-600">{item.label}</p>
          </div>
        ))}
      </section>

      <div className="flex justify-center gap-4">
        <Link href="/katalog" className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-5 py-2.5 rounded-lg">
          Lihat Katalog
        </Link>
        <Link href="/usulan" className="border border-stone-400 hover:bg-stone-100 px-5 py-2.5 rounded-lg">
          Usulkan Buku
        </Link>
      </div>
    </div>
  );
}
