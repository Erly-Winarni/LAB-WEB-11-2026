// Server Component: membaca buku dari PostgreSQL. Filter kategori lewat URL (?kategori=Fiksi)
// sehingga filter dilakukan oleh SQL (WHERE kategori = $1), bukan oleh state di browser.
import Link from "next/link";
import BukuCard from "@/components/BukuCard";
import FormBuku from "@/components/FormBuku";
import { getSemuaBuku } from "@/lib/buku";
import { daftarKategori } from "@/lib/kategori";
import { tambahBuku } from "@/app/katalog/actions";

const pilihanFilter = ["Semua", ...daftarKategori];

export default async function KatalogPage({ searchParams }) {
  const { kategori } = await searchParams;
  // Nilai dari URL divalidasi terhadap daftar resmi sebelum dipakai.
  const aktif = daftarKategori.includes(kategori) ? kategori : "Semua";
  const daftarBuku = await getSemuaBuku(aktif === "Semua" ? null : aktif);

  return (
    <section>
      <div className="mb-8">
        <h1 className="font-serif text-4xl font-semibold text-forest">Katalog Buku</h1>
        <p className="mt-2 text-stone-600">{daftarBuku.length} buku menunggu untuk dibaca.</p>
      </div>

      {/* Form Tambah Buku (Create) */}
      <details className="mb-8 rounded-2xl border border-sand bg-white p-5 shadow-sm">
        <summary className="cursor-pointer font-serif text-lg font-semibold text-forest">
          + Tambah Buku Baru
        </summary>
        <div className="mt-5">
          <FormBuku action={tambahBuku} labelTombol="Simpan Buku" />
        </div>
      </details>

      <div className="mb-8 flex flex-wrap gap-2">
        {pilihanFilter.map((kat) => (
          <Link
            key={kat}
            href={kat === "Semua" ? "/katalog" : `/katalog?kategori=${encodeURIComponent(kat)}`}
            className={
              aktif === kat
                ? "rounded-full bg-forest px-5 py-2 text-sm font-medium text-cream"
                : "rounded-full border border-stone-300 px-5 py-2 text-sm text-stone-600 transition hover:border-forest hover:text-forest"
            }
          >
            {kat}
          </Link>
        ))}
      </div>

      {daftarBuku.length === 0 ? (
        <p className="py-10 text-center text-stone-500">Belum ada buku pada kategori ini.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {daftarBuku.map((buku) => (
            <BukuCard
              key={buku.id}
              id={buku.id}
              judul={buku.judul}
              penulis={buku.penulis}
              kategori={buku.kategori}
              tahun={buku.tahun}
              tersedia={buku.tersedia}
            />
          ))}
        </div>
      )}
    </section>
  );
}
