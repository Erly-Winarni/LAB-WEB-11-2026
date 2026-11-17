import Link from "next/link";
import BukuSampul from "@/components/BukuSampul";
import dataBuku from "@/data/dataBuku";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((item) => item.id === id);

  if (!buku) {
    return (
      <div className="py-20 text-center">
        <h1 className="mb-4 font-serif text-3xl font-semibold text-forest">
          Buku dengan ID &quot;{id}&quot; tidak ditemukan.
        </h1>
        <p className="mb-6 text-stone-600">Mungkin tautannya keliru. Coba cari di katalog.</p>
        <Link href="/katalog" className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream transition hover:bg-forest-deep">
          &larr; Kembali ke Katalog
        </Link>
      </div>
    );
  }

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
        <Link href="/katalog" className="inline-block rounded-full border border-forest px-5 py-2.5 text-sm font-medium text-forest transition hover:bg-forest hover:text-cream">
          &larr; Kembali ke Katalog
        </Link>
      </div>
    </article>
  );
}
