"use client";

import { useState } from "react";

const daftarKategori = ["Teknologi", "Fiksi", "Pengembangan Diri"];
const inputClass =
  "w-full border border-stone-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:border-amber-500";

export default function UsulanPage() {
  const [nama, setNama] = useState("");
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("Teknologi");
  const [alasan, setAlasan] = useState("");
  const [pesan, setPesan] = useState({ tipe: "", teks: "" });
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  function handleSubmit(e) {
    e.preventDefault(); // cegah reload halaman

    if (nama.trim() === "" || judul.trim() === "" || alasan.trim() === "") {
      setPesan({ tipe: "error", teks: "Semua kolom wajib diisi." });
      return;
    }

    const usulanBaru = { id: Date.now(), nama: nama.trim(), judul: judul.trim(), kategori, alasan: alasan.trim() };
    setDaftarUsulan([usulanBaru, ...daftarUsulan]);
    setPesan({ tipe: "sukses", teks: "Terima kasih, usulan Anda berhasil dikirim!" });
    setNama("");
    setJudul("");
    setKategori("Teknologi");
    setAlasan("");
  }

  return (
    <section className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-1">Usulan Buku</h1>
      <p className="text-stone-600 mb-6">Ingin buku tertentu hadir di Pustaka Senja? Usulkan di sini.</p>

      <form onSubmit={handleSubmit} className="bg-white border border-stone-200 rounded-2xl shadow-sm p-6 space-y-4">
        <div>
          <label className="block text-sm mb-1">Nama Pengusul</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama Anda"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Judul Buku yang Diusulkan</label>
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            placeholder="Judul buku"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Kategori</label>
          <select value={kategori} onChange={(e) => setKategori(e.target.value)} className={inputClass}>
            {daftarKategori.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Alasan Usulan</label>
          <textarea
            rows={4}
            value={alasan}
            onChange={(e) => setAlasan(e.target.value)}
            placeholder="Kenapa buku ini perlu ada?"
            className={inputClass}
          />
        </div>
        <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold py-2.5 rounded-lg">
          Kirim Usulan
        </button>
        {pesan.teks && (
          <p className={pesan.tipe === "error" ? "text-sm text-red-600" : "text-sm text-green-700"}>{pesan.teks}</p>
        )}
      </form>

      {daftarUsulan.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">Usulan Terkirim</h2>
          <ul className="space-y-3">
            {daftarUsulan.map((usulan) => (
              <li key={usulan.id} className="bg-white border border-stone-200 rounded-xl p-4">
                <p className="font-semibold">{usulan.judul}</p>
                <p className="text-xs text-amber-700 mb-1">
                  {usulan.kategori} &middot; diusulkan oleh {usulan.nama}
                </p>
                <p className="text-sm text-stone-600">{usulan.alasan}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
