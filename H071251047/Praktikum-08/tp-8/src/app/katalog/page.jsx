"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";
import dataBuku from "@/data/dataBuku";

const KATEGORI_LIST = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

export default function KatalogPage() {
  const [kategoriTerpilih, setKategoriTerpilih] = useState("Semua");

  const bukuTerfilter =
    kategoriTerpilih === "Semua"
      ? dataBuku
      : dataBuku.filter((buku) => buku.kategori === kategoriTerpilih);

  return (
    <div className="space-y-8">
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 mb-2">
            Koleksi Ruang Baca
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Katalog Buku
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Jelajahi dan temukan seluruh buku favorit yang tersedia di Pustaka Senja.
          </p>
        </div>

        <div className="text-sm text-slate-600 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 self-start sm:self-auto shadow-2xs">
          Menampilkan:{" "}
          <span className="font-bold text-amber-600">{bukuTerfilter.length}</span> dari{" "}
          <span className="font-bold text-slate-800">{dataBuku.length}</span> buku
        </div>
      </div>

      {/* Tombol Filter Kategori */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
          Filter Berdasarkan Kategori:
        </label>
        <div className="flex flex-wrap gap-2">
          {KATEGORI_LIST.map((kategori) => {
            const isActive = kategoriTerpilih === kategori;
            return (
              <button
                key={kategori}
                type="button"
                onClick={() => setKategoriTerpilih(kategori)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer active:scale-95 ${
                  isActive
                    ? "bg-amber-500 text-white shadow-md shadow-amber-500/20"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {kategori}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Kartu Buku */}
      {bukuTerfilter.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bukuTerfilter.map((buku) => (
            <BukuCard key={buku.id} buku={buku} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
          <p className="text-slate-500 font-medium">
            Tidak ada buku untuk kategori &quot;{kategoriTerpilih}&quot;.
          </p>
        </div>
      )}
    </div>
  );
}
