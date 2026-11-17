import { useState } from "react";

function MenuCard({ menu, onTambah }) {
  const [terbuka, setTerbuka] = useState(false);

  return (
    <article
      className={
        "rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition hover:shadow-md " +
        (menu.tersedia ? "" : "opacity-60")
      }
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700">
          {menu.nama.charAt(0)}
        </div>
        <div className="flex flex-1 items-start justify-between gap-2">
          <h2 className="font-semibold">{menu.nama}</h2>
          <span className="font-semibold text-amber-700">Rp {menu.harga.toLocaleString("id-ID")}</span>
        </div>
      </div>
      {!menu.tersedia && (
        <span className="mt-1 inline-block rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">
          Habis
        </span>
      )}
      {terbuka && <p className="mt-2 text-sm text-stone-600">{menu.deskripsi}</p>}
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => setTerbuka(!terbuka)}
          className="rounded-lg border border-stone-300 px-3 py-1 text-sm transition hover:bg-stone-100"
        >
          {terbuka ? "Tutup" : "Detail"}
        </button>
        <button
          onClick={() => onTambah(menu.id)}
          disabled={!menu.tersedia}
          className="rounded-lg bg-amber-500 px-3 py-1 text-sm font-semibold text-stone-900 transition hover:bg-amber-400 active:scale-95 disabled:cursor-not-allowed disabled:bg-stone-300 disabled:text-stone-500"
        >
          Tambah
        </button>
      </div>
    </article>
  );
}

export default MenuCard;
