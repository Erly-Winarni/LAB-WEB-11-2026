"use client";

import { useState } from "react";
import Link from "next/link";
import TombolHapus from "@/components/TombolHapus";

function BukuCard({ id, judul, penulis, kategori, tahun, tersedia }) {
  const [favorit, setFavorit] = useState(false);

  return (
    <article className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-1 rounded-full">{kategori}</span>
          <span
            className={
              tersedia
                ? "text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full"
                : "text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded-full"
            }
          >
            {tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
        </div>
        <h2 className="text-lg font-semibold">{judul}</h2>
        <p className="text-sm text-stone-600">{penulis}</p>
        <p className="text-sm text-stone-500">Terbit {tahun}</p>
      </div>
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-stone-100">
        <button
          onClick={() => setFavorit(!favorit)}
          className={
            favorit
              ? "text-sm px-3 py-1.5 rounded-lg bg-amber-500 text-stone-900 font-semibold"
              : "text-sm px-3 py-1.5 rounded-lg border border-stone-300 hover:bg-stone-100"
          }
        >
          {favorit ? "★ Favorit" : "☆ Simpan"}
        </button>
        <div className="flex items-center gap-3">
          <Link href={`/katalog/${id}`} className="text-sm text-amber-700 font-medium hover:underline">
            Lihat Detail
          </Link>
          <Link href={`/katalog/${id}/edit`} className="text-sm text-blue-600 hover:underline">
            Edit
          </Link>
          <TombolHapus id={id} />
        </div>
      </div>
    </article>
  );
}

export default BukuCard;
