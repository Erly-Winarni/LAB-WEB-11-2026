import pool from "@/lib/db";
import DaftarBuku from "@/components/DaftarBuku";
import FormBuku from "@/components/FormBuku";
import { tambahBuku } from "./actions";

export const dynamic = "force-dynamic";

export default async function KatalogPage({ searchParams }) {
  const { error } = await searchParams;
  const { rows } = await pool.query("SELECT * FROM buku ORDER BY id");

  return (
    <section>
      <h1 className="text-3xl font-bold mb-1">Katalog Buku</h1>
      <p className="text-stone-600 mb-5">Koleksi Pustaka Senja yang tersimpan di database.</p>

      <div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold mb-3">Tambah Buku</h2>
        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
        <FormBuku action={tambahBuku} labelTombol="Simpan Buku" />
      </div>

      <DaftarBuku bukuList={rows} />
    </section>
  );
}
