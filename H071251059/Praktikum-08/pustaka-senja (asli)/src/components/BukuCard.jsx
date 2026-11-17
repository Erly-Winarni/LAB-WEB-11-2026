"use client";

import { useState } from "react";
import Link from "next/link";
import BukuSampul from "@/components/BukuSampul";

function BukuCard({ id, judul, penulis, kategori, tahun, tersedia }) {
  const [favorit, setFavorit] = useState(false);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-sand bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="bg-sand/60 px-10 py-6">
        <BukuSampul id={id} judul={judul} penulis={penulis} />
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <span className="text-xs font-medium text-gold">{kategori}</span>
          <h3 className="mt-1 font-serif text-lg font-semibold text-forest">{judul}</h3>
          <p className="text-sm text-stone-500">{penulis} &middot; {tahun}</p>
          <span
            className={
              tersedia
                ? "mt-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800"
                : "mt-3 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800"
            }
          >
            {tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-sand pt-4">
          <button
            type="button"
            onClick={() => setFavorit(!favorit)}
            className={
              favorit
                ? "rounded-full bg-forest px-4 py-1.5 text-sm text-cream transition"
                : "rounded-full border border-stone-300 px-4 py-1.5 text-sm text-stone-600 transition hover:border-forest hover:text-forest"
            }
          >
            {favorit ? "♥ Tersimpan" : "♡ Simpan"}
          </button>
          <Link href={`/katalog/${id}`} className="text-sm font-medium text-forest underline-offset-4 hover:underline">
            Lihat Detail
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BukuCard;
