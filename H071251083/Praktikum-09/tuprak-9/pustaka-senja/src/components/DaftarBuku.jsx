"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";

const daftarKategori = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

// Data buku dibaca dari database oleh Server Component (katalog/page.jsx),
// lalu dikirim lewat props. Komponen ini hanya mengurus filter kategori (useState).
function DaftarBuku({ bukuList }) {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const bukuTampil = kategoriAktif === "Semua" ? bukuList : bukuList.filter((buku) => buku.kategori === kategoriAktif);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {daftarKategori.map((kategori) => (
          <button
            key={kategori}
            onClick={() => setKategoriAktif(kategori)}
            className={
              kategori === kategoriAktif
                ? "px-4 py-1.5 rounded-full bg-amber-500 text-stone-900 font-semibold text-sm"
                : "px-4 py-1.5 rounded-full bg-stone-200 hover:bg-stone-300 text-sm"
            }
          >
            {kategori}
          </button>
        ))}
        <span className="text-sm text-stone-500 ml-2">{bukuTampil.length} buku</span>
      </div>

      {bukuTampil.length === 0 ? (
        <p className="text-stone-500">Belum ada buku pada kategori ini.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {bukuTampil.map((buku) => (
            <BukuCard
              key={buku.id}
              id={buku.id}
              judul={buku.judul}
              penulis={buku.penulis}
              kategori={buku.kategori}
              tahun={buku.tahun}
              tersedia={buku.tersedia}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DaftarBuku;
