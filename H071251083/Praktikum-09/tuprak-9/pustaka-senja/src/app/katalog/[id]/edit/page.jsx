import Link from "next/link";
import { notFound } from "next/navigation";
import pool, { parseId } from "@/lib/db";
import FormBuku from "@/components/FormBuku";
import { ubahBuku } from "../../actions";

export const dynamic = "force-dynamic";

export default async function EditBukuPage({ params, searchParams }) {
  const { id } = await params;
  const { error } = await searchParams;
  const idBuku = parseId(id);
  if (idBuku === null) notFound();

  const { rows } = await pool.query("SELECT * FROM buku WHERE id = $1", [idBuku]);
  const buku = rows[0];
  if (!buku) notFound();

  return (
    <div className="max-w-xl mx-auto bg-white border border-stone-200 rounded-2xl shadow-sm p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Buku #{buku.id}</h1>
      {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
      <FormBuku action={ubahBuku} buku={buku} labelTombol="Simpan Perubahan" />
      <Link href="/katalog" className="inline-block mt-4 text-sm text-stone-600 hover:underline">
        Batal
      </Link>
    </div>
  );
}
