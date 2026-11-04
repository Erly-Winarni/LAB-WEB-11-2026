"use client";

import { useState } from "react";

const PILIHAN_KATEGORI = [
  "Teknologi",
  "Fiksi",
  "Pengembangan Diri",
  "Sains & Matematika",
  "Sejarah & Budaya",
  "Lainnya",
];

export default function UsulanPage() {
  // State form input (controlled component)
  const [nama, setNama] = useState("");
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");
  const [alasan, setAlasan] = useState("");

  // State notifikasi pesan error & sukses
  const [pesanError, setPesanError] = useState("");
  const [pesanSukses, setPesanSukses] = useState("");

  // State daftar usulan yang dikirim selama sesi ini
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  // Handler pengiriman formulir
  const handleSubmit = (e) => {
    // F5 poin 2: cegah reload halaman dengan e.preventDefault()
    e.preventDefault();

    // Validasi setelah di-trim()
    const namaBersih = nama.trim();
    const judulBersih = judul.trim();
    const kategoriBersih = kategori.trim();
    const alasanBersih = alasan.trim();

    if (!namaBersih || !judulBersih || !kategoriBersih || !alasanBersih) {
      setPesanError("Seluruh kolom wajib diisi lengkap. Pastikan tidak ada data yang kosong!");
      setPesanSukses("");
      return;
    }

    // F5 poin 3: Jika validasi lolos
    const usulanBaru = {
      id: `usulan-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      nama: namaBersih,
      judul: judulBersih,
      kategori: kategoriBersih,
      alasan: alasanBersih,
      waktu: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setDaftarUsulan((prev) => [usulanBaru, ...prev]);
    setPesanSukses(
      `Terima kasih, ${namaBersih}! Usulan buku "${judulBersih}" berhasil dikirim dan ditambahkan ke daftar usulan sesi ini.`
    );
    setPesanError("");

    // Kosongkan kembali form input
    setNama("");
    setJudul("");
    setKategori("");
    setAlasan("");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      {/* Header Halaman */}
      <div className="pb-6 border-b border-slate-200">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 mb-2">
          Partisipasi Komunitas
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Formulir Usulan Buku
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Punya rekomendasi buku menarik yang belum ada di Pustaka Senja? Sampaikan usulanmu di bawah ini!
        </p>
      </div>

      {/* Formulir Usulan */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8">
        {/* Pesan Peringatan Validasi (Error) */}
        {pesanError && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-rose-500 shrink-0 mt-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-semibold">Validasi Gagal</p>
              <p className="text-xs sm:text-sm mt-0.5">{pesanError}</p>
            </div>
          </div>
        )}

        {/* Pesan Konfirmasi Berhasil (Sukses) */}
        {pesanSukses && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-800 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-semibold">Usulan Terkirim!</p>
              <p className="text-xs sm:text-sm mt-0.5">{pesanSukses}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Input Nama Pengusul */}
          <div className="space-y-1.5">
            <label
              htmlFor="nama"
              className="block text-sm font-semibold text-slate-800"
            >
              Nama Pengusul <span className="text-rose-500">*</span>
            </label>
            <input
              id="nama"
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama lengkap atau panggilan Anda"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-800 text-sm outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Input Judul Buku */}
          <div className="space-y-1.5">
            <label
              htmlFor="judul"
              className="block text-sm font-semibold text-slate-800"
            >
              Judul Buku yang Diusulkan <span className="text-rose-500">*</span>
            </label>
            <input
              id="judul"
              type="text"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              placeholder="Contoh: Pragmatic Programmer, Madilog, dll."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-800 text-sm outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Input Kategori */}
          <div className="space-y-1.5">
            <label
              htmlFor="kategori"
              className="block text-sm font-semibold text-slate-800"
            >
              Kategori Buku <span className="text-rose-500">*</span>
            </label>
            <select
              id="kategori"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-800 text-sm outline-none transition-all bg-white"
            >
              <option value="">-- Pilih Kategori --</option>
              {PILIHAN_KATEGORI.map((kat) => (
                <option key={kat} value={kat}>
                  {kat}
                </option>
              ))}
            </select>
          </div>

          {/* Input Alasan Usulan */}
          <div className="space-y-1.5">
            <label
              htmlFor="alasan"
              className="block text-sm font-semibold text-slate-800"
            >
              Alasan Usulan <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="alasan"
              rows={4}
              value={alasan}
              onChange={(e) => setAlasan(e.target.value)}
              placeholder="Ceritakan mengapa buku ini menarik dan bermanfaat untuk hadir di Pustaka Senja..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-800 text-sm outline-none transition-all placeholder:text-slate-400 resize-y"
            />
          </div>

          {/* Tombol Kirim */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-md shadow-orange-500/20 transition-all active:scale-95 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              <span>Kirim Usulan Buku</span>
            </button>
          </div>
        </form>
      </div>

      {/* F5 poin 3: Tampilkan daftar usulan yang baru saja dikirim di bawah form selama sesi tersebut berlangsung */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Daftar Usulan Sesi Ini</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-200 text-slate-700">
              {daftarUsulan.length}
            </span>
          </h2>
        </div>

        {daftarUsulan.length > 0 ? (
          <div className="space-y-3">
            {daftarUsulan.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-2 animate-in fade-in duration-200"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
                    {item.kategori}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Diajukan pukul {item.waktu}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {item.judul}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Diusulkan oleh:{" "}
                    <span className="text-slate-700 font-semibold">{item.nama}</span>
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <p className="italic">&ldquo;{item.alasan}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 text-center space-y-1">
            <p className="text-slate-600 font-medium text-sm">
              Belum ada usulan yang dikirim pada sesi ini.
            </p>
            <p className="text-slate-400 text-xs">
              Isi formulir di atas untuk menambahkan usulan buku pertama Anda.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
