import Link from "next/link";
import { notFound } from "next/navigation";
import pool, { parseId } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const idBuku = parseId(id);
  if (idBuku === null) notFound(); // contoh: /katalog/abc

  const { rows } = await pool.query("SELECT * FROM buku WHERE id = $1", [idBuku]);
  const buku = rows[0];
  if (!buku) notFound(); // contoh: /katalog/99

  return (
    <article className="max-w-2xl mx-auto bg-white border border-stone-200 rounded-2xl shadow-sm p-8">
      <div className="flex gap-2 mb-3">
        <span className="text-xs font-medium bg-amber-100 text-amber-800 px-3 py-1 rounded-full">{buku.kategori}</span>
        <span
          className={
            buku.tersedia
              ? "text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full"
              : "text-xs font-semibold bg-red-100 text-red-700 px-3 py-1 rounded-full"
          }
        >
          {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
        </span>
      </div>
      <h1 className="text-3xl font-bold">{buku.judul}</h1>
      <p className="text-stone-600 mt-1">
        {buku.penulis} &middot; Terbit {buku.tahun}
      </p>
      <h2 className="font-semibold mt-6 mb-1">Sinopsis</h2>
      <p className="text-stone-700 leading-relaxed mb-6">{buku.sinopsis}</p>
      <div className="flex gap-3">
        <Link href="/katalog" className="bg-stone-800 hover:bg-stone-700 text-white px-4 py-2 rounded-lg text-sm">
          &larr; Kembali ke Katalog
        </Link>
        <Link href={`/katalog/${buku.id}/edit`} className="border border-blue-500 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm">
          Edit Buku
        </Link>
      </div>
    </article>
  );
}
