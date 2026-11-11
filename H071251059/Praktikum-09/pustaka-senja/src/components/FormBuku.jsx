"use client";
// Form dipakai ulang untuk Tambah dan Edit. Memakai useActionState (hook) -> Client Component.
// `action` adalah Server Action: tambahBuku, atau updateBuku.bind(null, id).

import { useActionState } from "react";
import { daftarKategori } from "@/lib/kategori";

const inputClass =
  "w-full rounded-lg border border-stone-300 bg-cream px-4 py-2 focus:border-forest focus:outline-none";

function FormBuku({ action, buku = null, labelTombol }) {
  const [state, formAction, sedangProses] = useActionState(action, {
    errors: [],
    sukses: null,
    values: null,
    kunci: 0,
  });

  // Prioritas nilai: input terakhir (saat gagal validasi) > data buku (edit) > nilai kosong.
  const nilai = state.values ?? buku ?? { judul: "", penulis: "", kategori: daftarKategori[0], tahun: "", tersedia: true, sinopsis: "" };

  return (
    // key berubah tiap hasil action -> form dirender ulang dengan defaultValue terbaru
    // (form otomatis kosong setelah sukses, dan terisi kembali setelah gagal validasi).
    <form key={state.kunci} action={formAction} className="space-y-4">
      <div>
        <label htmlFor="judul" className="mb-1 block text-sm text-stone-700">Judul</label>
        <input id="judul" name="judul" type="text" defaultValue={nilai.judul} className={inputClass} />
      </div>
      <div>
        <label htmlFor="penulis" className="mb-1 block text-sm text-stone-700">Penulis</label>
        <input id="penulis" name="penulis" type="text" defaultValue={nilai.penulis} className={inputClass} />
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="kategori" className="mb-1 block text-sm text-stone-700">Kategori</label>
          <select id="kategori" name="kategori" defaultValue={nilai.kategori} className={inputClass}>
            {daftarKategori.map((kat) => (
              <option key={kat} value={kat}>{kat}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="tahun" className="mb-1 block text-sm text-stone-700">Tahun Terbit</label>
          <input id="tahun" name="tahun" type="number" defaultValue={nilai.tahun} className={inputClass} />
        </div>
        <div>
          <label htmlFor="tersedia" className="mb-1 block text-sm text-stone-700">Status</label>
          <select id="tersedia" name="tersedia" defaultValue={String(nilai.tersedia)} className={inputClass}>
            <option value="true">Tersedia</option>
            <option value="false">Sedang Dipinjam</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="sinopsis" className="mb-1 block text-sm text-stone-700">Sinopsis</label>
        <textarea id="sinopsis" name="sinopsis" rows={4} defaultValue={nilai.sinopsis} className={inputClass} />
      </div>

      {state.errors.length > 0 && (
        <ul className="list-disc space-y-1 rounded-lg border border-red-300 bg-red-50 p-3 pl-7 text-sm text-red-700">
          {state.errors.map((pesan) => (
            <li key={pesan}>{pesan}</li>
          ))}
        </ul>
      )}
      {state.sukses && (
        <p className="rounded-lg border border-emerald-300 bg-emerald-50 p-3 text-sm text-emerald-800">
          {state.sukses}
        </p>
      )}

      <button
        type="submit"
        disabled={sedangProses}
        className="rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-cream transition hover:bg-forest-deep disabled:opacity-60"
      >
        {sedangProses ? "Menyimpan..." : labelTombol}
      </button>
    </form>
  );
}

export default FormBuku;
