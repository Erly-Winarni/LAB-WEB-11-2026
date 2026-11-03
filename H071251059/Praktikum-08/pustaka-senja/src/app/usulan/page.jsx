"use client";

import { useState } from "react";

const daftarKategori = ["Teknologi", "Fiksi", "Pengembangan Diri"];
const inputClass =
  "w-full rounded-lg border border-stone-300 bg-white px-4 py-2 focus:border-orange-600 focus:outline-none";

export default function UsulanPage() {
  const [nama, setNama] = useState("");
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("Teknologi");
  const [alasan, setAlasan] = useState("");
  const [pesan, setPesan] = useState(null);
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!nama.trim() || !judul.trim() || !kategori.trim() || !alasan.trim()) {
      setPesan({ jenis: "error", teks: "Mohon lengkapi semua kolom sebelum mengirim usulan." });
      return;
    }

    const usulanBaru = {
      id: `${Date.now()}-${daftarUsulan.length}`,
      nama: nama.trim(),
      judul: judul.trim(),
      kategori,
      alasan: alasan.trim(),
    };

    setDaftarUsulan([usulanBaru, ...daftarUsulan]);
    setPesan({ jenis: "sukses", teks: "Usulan berhasil dikirim. Terima kasih!" });
    setNama("");
    setJudul("");
    setKategori("Teknologi");
    setAlasan("");
  }

  return (
    <section className="mx-auto max-w-lg">
      <div className="rounded-2xl border border-stone-300 bg-white p-6 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold">Usulan Buku</h1>
        <p className="mb-6 text-sm text-stone-600">
          Usulkan judul buku yang ingin kamu baca di Pustaka Senja.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nama" className="mb-1 block text-sm text-stone-700">Nama Pengusul</label>
            <input id="nama" type="text" value={nama} onChange={(e) => setNama(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label htmlFor="judul" className="mb-1 block text-sm text-stone-700">Judul Buku yang Diusulkan</label>
            <input id="judul" type="text" value={judul} onChange={(e) => setJudul(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label htmlFor="kategori" className="mb-1 block text-sm text-stone-700">Kategori</label>
            <select id="kategori" value={kategori} onChange={(e) => setKategori(e.target.value)} className={inputClass}>
              {daftarKategori.map((kat) => (
                <option key={kat} value={kat}>{kat}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="alasan" className="mb-1 block text-sm text-stone-700">Alasan Usulan</label>
            <textarea id="alasan" rows={4} value={alasan} onChange={(e) => setAlasan(e.target.value)} className={inputClass} />
          </div>
          <button type="submit" className="w-full rounded-lg bg-orange-700 py-2.5 font-medium text-white transition hover:bg-orange-600">
            Kirim Usulan
          </button>
        </form>
        {pesan && (
          <p
            className={
              pesan.jenis === "error"
                ? "mt-4 rounded-lg border border-red-300 bg-red-50 p-3 text-center text-sm text-red-700"
                : "mt-4 rounded-lg border border-green-300 bg-green-50 p-3 text-center text-sm text-green-800"
            }
          >
            {pesan.teks}
          </p>
        )}
      </div>

      {daftarUsulan.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-3 text-lg font-semibold">Usulan yang Baru Dikirim</h2>
          <ul className="space-y-3">
            {daftarUsulan.map((u) => (
              <li key={u.id} className="rounded-xl border border-stone-300 bg-white p-4">
                <p className="font-semibold">{u.judul}</p>
                <p className="text-xs text-orange-800">{u.kategori} • diusulkan oleh {u.nama}</p>
                <p className="mt-1 text-sm text-stone-700">{u.alasan}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
