import Link from "next/link";
import dataBuku from "@/data/dataBuku";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((item) => item.id === id);

  if (!buku) {
    return (
      <div className="py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold text-red-700">
          Buku dengan ID &quot;{id}&quot; tidak ditemukan.
        </h1>
        <Link href="/katalog" className="text-orange-800 hover:underline">
          &larr; Kembali ke Katalog
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-2xl rounded-2xl border border-stone-300 bg-white p-6 shadow-sm">
      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800">
        {buku.kategori}
      </span>
      <h1 className="mb-1 mt-3 text-2xl font-bold">{buku.judul}</h1>
      <p className="text-stone-600">{buku.penulis} • Terbit {buku.tahun}</p>
      <span
        className={
          buku.tersedia
            ? "mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800"
            : "mt-3 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800"
        }
      >
        {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
      </span>
      <p className="my-6 leading-relaxed text-stone-700">{buku.sinopsis}</p>
      <Link href="/katalog" className="inline-block rounded-lg bg-stone-200 px-4 py-2 text-sm transition hover:bg-stone-300">
        &larr; Kembali ke Katalog
      </Link>
    </article>
  );
}
