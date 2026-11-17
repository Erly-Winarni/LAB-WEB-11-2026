import Link from "next/link";
import { dataBuku } from "@/data/dataBuku";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((item) => item.id === id);

  if (!buku) {
    return (
      <div className="py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold text-red-600">
          Buku dengan ID &quot;{id}&quot; tidak ditemukan.
        </h1>
        <Link href="/katalog" className="text-amber-700 hover:underline">
          &larr; Kembali ke Katalog
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-2xl rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
          {buku.kategori}
        </span>
        <span
          className={
            buku.tersedia
              ? "rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700"
              : "rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700"
          }
        >
          {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
        </span>
      </div>

      <h1 className="text-3xl font-bold">{buku.judul}</h1>
      <p className="mt-1 text-stone-600">
        {buku.penulis} &middot; Terbit {buku.tahun}
      </p>

      <h2 className="mb-2 mt-6 text-lg font-semibold">Sinopsis</h2>
      <p className="mb-8 leading-relaxed text-stone-700">{buku.sinopsis}</p>

      <Link
        href="/katalog"
        className="inline-block rounded-lg bg-stone-900 px-4 py-2 text-sm text-white transition hover:bg-stone-700"
      >
        &larr; Kembali ke Katalog
      </Link>
    </article>
  );
}