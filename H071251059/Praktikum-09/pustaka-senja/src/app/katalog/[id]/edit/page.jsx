// Server Component: mengambil data lama dari PostgreSQL lalu mengisinya ke form edit.
import Link from "next/link";
import FormBuku from "@/components/FormBuku";
import { getBukuById, parseId } from "@/lib/buku";
import { updateBuku } from "@/app/katalog/actions";

export default async function EditBukuPage({ params }) {
  const { id } = await params;
  const idAngka = parseId(id);
  const buku = idAngka === null ? null : await getBukuById(idAngka);

  if (!buku) {
    return (
      <div className="py-20 text-center">
        <h1 className="mb-4 font-serif text-3xl font-semibold text-forest">
          Buku dengan ID &quot;{id}&quot; tidak ditemukan.
        </h1>
        <Link href="/katalog" className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream transition hover:bg-forest-deep">
          &larr; Kembali ke Katalog
        </Link>
      </div>
    );
  }

  // .bind(null, buku.id) mengikat id sebagai argumen pertama Server Action updateBuku.
  const aksiUpdate = updateBuku.bind(null, buku.id);

  return (
    <section className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-sm">
      <h1 className="mb-1 font-serif text-3xl font-semibold text-forest">Edit Buku</h1>
      <p className="mb-6 text-sm text-stone-500">Ubah data &quot;{buku.judul}&quot; lalu simpan.</p>
      <FormBuku action={aksiUpdate} buku={buku} labelTombol="Simpan Perubahan" />
      <Link href={`/katalog/${buku.id}`} className="mt-5 inline-block text-sm text-stone-600 underline-offset-4 hover:underline">
        Batal
      </Link>
    </section>
  );
}
