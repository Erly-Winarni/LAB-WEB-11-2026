"use client";

import { useState } from "react";
import Link from "next/link";

function BukuCard({ id, judul, penulis, kategori, tahun, tersedia }) {
  const [favorit, setFavorit] = useState(false);

  return (
    <article className="flex flex-col justify-between rounded-xl border border-stone-300 bg-white p-5 shadow-sm">
      <div>
        <span className="text-xs font-medium text-orange-800">{kategori}</span>
        <h3 className="mt-1 text-lg font-semibold text-stone-900">{judul}</h3>
        <p className="text-sm text-stone-600">{penulis} • {tahun}</p>
        <span
          className={
            tersedia
              ? "mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800"
              : "mt-3 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800"
          }
        >
          {tersedia ? "Tersedia" : "Sedang Dipinjam"}
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-stone-200 pt-3">
        <button
          type="button"
          onClick={() => setFavorit(!favorit)}
          className={
            favorit
              ? "rounded-lg bg-orange-700 px-3 py-1.5 text-sm text-white transition"
              : "rounded-lg bg-stone-200 px-3 py-1.5 text-sm text-stone-800 transition hover:bg-stone-300"
          }
        >
          {favorit ? "★ Tersimpan" : "☆ Simpan"}
        </button>
        <Link href={`/katalog/${id}`} className="text-sm text-orange-800 hover:underline">
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}

export default BukuCard;
