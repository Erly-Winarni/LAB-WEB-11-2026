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
      <div className="mb-8">
        <h1 className="font-serif text-4xl font-semibold text-forest">Katalog Buku</h1>
        <p className="mt-2 text-stone-600">
          {bukuTampil.length} buku menunggu untuk dibaca.
        </p>
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        {daftarKategori.map((kat) => (
          <button
            key={kat}
            type="button"
            onClick={() => setKategoriAktif(kat)}
            className={
              kategoriAktif === kat
                ? "rounded-full bg-forest px-5 py-2 text-sm font-medium text-cream"
                : "rounded-full border border-stone-300 px-5 py-2 text-sm text-stone-600 transition hover:border-forest hover:text-forest"
            }
          >
            {kat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
