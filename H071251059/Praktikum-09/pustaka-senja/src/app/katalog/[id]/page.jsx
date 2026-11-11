// Server Component: detail satu buku dari PostgreSQL (SELECT ... WHERE id = $1).
import Link from "next/link";
import BukuSampul from "@/components/BukuSampul";
import TombolHapus from "@/components/TombolHapus";
import { getBukuById, parseId } from "@/lib/buku";

function BukuTidakDitemukan({ id }) {
  return (
    <div className="py-20 text-center">
      <h1 className="mb-4 font-serif text-3xl font-semibold text-forest">
        Buku dengan ID &quot;{id}&quot; tidak ditemukan.
      </h1>
      <p className="mb-6 text-stone-600">Mungkin tautannya keliru atau bukunya sudah dihapus.</p>
      <Link href="/katalog" className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream transition hover:bg-forest-deep">
        &larr; Kembali ke Katalog
      </Link>
    </div>
  );
}

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const idAngka = parseId(id);
  // ID yang bukan angka positif tidak pernah dikirim ke database.
  const buku = idAngka === null ? null : await getBukuById(idAngka);

  if (!buku) return <BukuTidakDitemukan id={id} />;

  return (
    <article className="grid items-center gap-10 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[18rem_1fr] md:p-12">
      <div className="mx-auto w-60 rounded-2xl bg-sand/60 p-6 md:w-full">
        <BukuSampul id={buku.id} judul={buku.judul} penulis={buku.penulis} ukuran="lg" />
      </div>
      <div>
        <span className="text-sm font-medium text-gold">{buku.kategori}</span>
        <h1 className="mt-1 font-serif text-4xl font-semibold text-forest">{buku.judul}</h1>
        <p className="mt-1 text-stone-500">{buku.penulis} &middot; Terbit {buku.tahun}</p>
        <span
          className={
            buku.tersedia
              ? "mt-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800"
              : "mt-4 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800"
          }
        >
          {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
        </span>
        <p className="my-6 max-w-xl font-serif text-lg leading-relaxed text-stone-700">{buku.sinopsis}</p>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/katalog" className="rounded-full border border-forest px-5 py-2 text-sm font-medium text-forest transition hover:bg-forest hover:text-cream">
            &larr; Kembali ke Katalog
          </Link>
          <Link href={`/katalog/${buku.id}/edit`} className="rounded-full border border-stone-300 px-5 py-2 text-sm text-stone-700 transition hover:border-forest hover:text-forest">
            Edit
          </Link>
          {/* Setelah dihapus dari halaman detail, pengguna dikembalikan ke katalog */}
          <TombolHapus id={buku.id} judul={buku.judul} kembaliKeKatalog />
        </div>
      </div>
    </article>
  );
}
