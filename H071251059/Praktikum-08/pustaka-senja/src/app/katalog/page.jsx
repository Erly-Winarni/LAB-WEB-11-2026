"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";
import dataBuku from "@/data/dataBuku";

const daftarKategori = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

export default function KatalogPage() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const bukuTampil =
    kategoriAktif === "Semua"
      ? dataBuku
      : dataBuku.filter((b) => b.kategori === kategoriAktif);

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Katalog Buku</h1>
        <p className="mt-1 text-stone-600">Jelajahi koleksi buku Pustaka Senja.</p>
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        {daftarKategori.map((kat) => (
          <button
            key={kat}
            type="button"
            onClick={() => setKategoriAktif(kat)}
            className={
              kategoriAktif === kat
                ? "rounded-full bg-orange-700 px-4 py-1.5 text-sm font-medium text-white"
                : "rounded-full bg-stone-200 px-4 py-1.5 text-sm text-stone-700 transition hover:bg-stone-300"
            }
          >
            {kat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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
    </section>
  );
}
