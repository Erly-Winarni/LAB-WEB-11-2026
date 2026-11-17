import Hero from "@/components/Hero";
import { dataBuku } from "@/data/dataBuku";

export default function HomePage() {
  // Statistik dihitung dari dataBuku, bukan ditulis manual
  const totalBuku = dataBuku.length;
  const bukuTersedia = dataBuku.filter((buku) => buku.tersedia).length;
  const bukuDipinjam = dataBuku.filter((buku) => !buku.tersedia).length;

  const statistik = [
    { label: "Total Koleksi Buku", nilai: totalBuku },
    { label: "Buku Tersedia", nilai: bukuTersedia },
    { label: "Buku Dipinjam", nilai: bukuDipinjam },
  ];

  return (
    <div className="space-y-8">
      <Hero
        nama="Pustaka Senja"
        deskripsi="Ruang baca dan perpustakaan komunitas di dekat kampus. Datang, pilih buku, dan baca sampai senja."
        lokasi="Dekat kampus"
        jamBuka="Setiap hari, 09.00 - 20.00"
      />

      <section className="grid gap-4 sm:grid-cols-3">
        {statistik.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-sm"
          >
            <p className="text-4xl font-bold text-amber-600">{item.nilai}</p>
            <p className="mt-1 text-sm text-stone-600">{item.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
}