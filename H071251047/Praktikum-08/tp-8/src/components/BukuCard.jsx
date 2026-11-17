"use client";

import Link from "next/link";
import { useState } from "react";

export default function BukuCard({ buku, ...restProps }) {
  const item = buku || restProps;
  const { id, judul, penulis, kategori, tahun, tersedia } = item;

  const [isFavorit, setIsFavorit] = useState(false);

  const toggleFavorit = () => {
    setIsFavorit((prev) => !prev);
  };

  return (
    <div className="flex flex-col bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 p-5 group">
      {/* Top row: Kategori & Status Badge */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
          {kategori}
        </span>

        {tersedia ? (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Tersedia
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            Sedang Dipinjam
          </span>
        )}
      </div>

      {/* Book details */}
      <div className="flex-1 space-y-1">
        <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-amber-600 transition-colors line-clamp-2">
          {judul}
        </h3>
        <p className="text-sm text-slate-600 font-medium">
          Oleh: <span className="text-slate-800">{penulis}</span>
        </p>
        <p className="text-xs text-slate-500">
          Tahun Terbit: <span className="font-semibold text-slate-700">{tahun}</span>
        </p>
      </div>

      {/* Actions: Favorit button & Lihat Detail link */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={toggleFavorit}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 active:scale-95 ${
            isFavorit
              ? "bg-rose-50 text-rose-600 border border-rose-200 shadow-2xs"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800"
          }`}
          aria-label={isFavorit ? "Hapus dari favorit" : "Tambah ke favorit"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 transition-transform ${isFavorit ? "fill-rose-500 text-rose-500 scale-110" : "fill-none text-slate-400"}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span>{isFavorit ? "Difavoritkan" : "Favorit"}</span>
        </button>

        <Link
          href={`/katalog/${id}`}
          className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 text-white hover:bg-amber-600 shadow-xs shadow-amber-500/20 transition-all active:scale-95"
        >
          <span>Lihat Detail</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
