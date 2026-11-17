"use client";

import { useState } from "react";
import Link from "next/link";

function BukuCard({ id, judul, penulis, kategori, tahun, tersedia }) {
  // Setiap kartu punya state favorit sendiri
  const [favorit, setFavorit] = useState(false);

  return (
    <article className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <div>
        <div className="mb-3 flex items-start justify-between gap-3">
          <span className="text-xs font-semibold text-amber-700">{kategori}</span>
          <span
            className={
              tersedia
                ? "rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700"
                : "rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700"
            }
          >
            {tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
        </div>

        <h3 className="text-lg font-bold">{judul}</h3>
        <p className="text-sm text-stone-600">{penulis}</p>
        <p className="mt-1 text-sm text-stone-500">Terbit {tahun}</p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-3">
        <button
          type="button"
          onClick={() => setFavorit(!favorit)}
          className={
            favorit
              ? "rounded-lg bg-amber-400 px-3 py-1.5 text-sm font-semibold text-stone-900"
              : "rounded-lg bg-stone-100 px-3 py-1.5 text-sm transition hover:bg-stone-200"
          }
        >
          {favorit ? "★ Favorit" : "☆ Simpan"}
        </button>

        <Link
          href={`/katalog/${id}`}
          className="text-sm font-medium text-amber-700 hover:underline"
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}

export default BukuCard;