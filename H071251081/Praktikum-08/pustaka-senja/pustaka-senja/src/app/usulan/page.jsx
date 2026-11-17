"use client";

import { useState } from "react";

const daftarKategori = ["Teknologi", "Fiksi", "Pengembangan Diri"];

export default function UsulanPage() {
  const [nama, setNama] = useState("");
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");
  const [alasan, setAlasan] = useState("");
  const [peringatan, setPeringatan] = useState("");
  const [berhasil, setBerhasil] = useState(false);
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const namaBersih = nama.trim();
    const judulBersih = judul.trim();
    const alasanBersih = alasan.trim();

    if (
      namaBersih === "" ||
      judulBersih === "" ||
      kategori === "" ||
      alasanBersih === ""
    ) {
      setPeringatan("Semua kolom wajib diisi sebelum usulan dikirim.");
      setBerhasil(false);
      return;
    }

    const usulanBaru = {
      id: Date.now(),
      nama: namaBersih,
      judul: judulBersih,
      kategori: kategori,
      alasan: alasanBersih,
    };

    setDaftarUsulan([usulanBaru, ...daftarUsulan]);
    setPeringatan("");
    setBerhasil(true);
    setNama("");
    setJudul("");
    setKategori("");
    setAlasan("");
  }

  const inputKelas =
    "w-full rounded-lg border border-stone-300 bg-white px-4 py-2 outline-none focus:border-amber-500";

  return (
    <section className="mx-auto max-w-lg">
      <h1 className="mb-1 text-3xl font-bold">Usulan Buku</h1>
      <p className="mb-6 text-stone-600">
        Ada buku yang ingin kamu baca di Pustaka Senja? Usulkan di sini.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
      >
        <div>
          <label htmlFor="nama" className="mb-1 block text-sm font-medium">
            Nama Pengusul
          </label>
          <input
            id="nama"
            type="text"
            placeholder="Nama kamu"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className={inputKelas}
          />
        </div>

        <div>
          <label htmlFor="judul" className="mb-1 block text-sm font-medium">
            Judul Buku yang Diusulkan
          </label>
          <input
            id="judul"
            type="text"
            placeholder="Judul buku"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className={inputKelas}
          />
        </div>

        <div>
          <label htmlFor="kategori" className="mb-1 block text-sm font-medium">
            Kategori
          </label>
          <select
            id="kategori"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className={inputKelas}
          >
            <option value="">Pilih kategori</option>
            {daftarKategori.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="alasan" className="mb-1 block text-sm font-medium">
            Alasan Usulan
          </label>
          <textarea
            id="alasan"
            rows={4}
            placeholder="Kenapa buku ini perlu ada?"
            value={alasan}
            onChange={(e) => setAlasan(e.target.value)}
            className={inputKelas}
          />
        </div>

        {peringatan && (
          <p
            role="alert"
            className="rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
          >
            {peringatan}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-stone-900 py-2.5 font-semibold text-white transition hover:bg-stone-700"
        >
          Kirim Usulan
        </button>
      </form>

      {berhasil && (
        <p
          role="status"
          className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-emerald-700"
        >
          Usulan berhasil dikirim. Terima kasih!
        </p>
      )}

      {daftarUsulan.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-3 text-xl font-bold">
            Usulan yang baru dikirim ({daftarUsulan.length})
          </h2>
          <ul className="space-y-3">
            {daftarUsulan.map((usulan) => (
              <li
                key={usulan.id}
                className="rounded-xl border border-stone-200 bg-white p-4"
              >
                <p className="font-semibold">{usulan.judul}</p>
                <p className="text-sm text-amber-700">{usulan.kategori}</p>
                <p className="mt-1 text-sm text-stone-600">{usulan.alasan}</p>
                <p className="mt-2 text-xs text-stone-500">
                  Diusulkan oleh {usulan.nama}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}