import { useState } from "react";

function MenuCard({ id, nama, kategori, harga, tersedia, deskripsi, onTambah }) {
  // Setiap kartu punya state detail sendiri, jadi tidak memengaruhi menu lain
  const [detailTerbuka, setDetailTerbuka] = useState(false);

  return (
    <div
      className={
        tersedia
          ? "flex flex-col rounded-2xl bg-white p-5 shadow"
          : "flex flex-col rounded-2xl bg-stone-200 p-5 opacity-70"
      }
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold">{nama}</h3>
          <p className="text-sm text-amber-700">{kategori}</p>
        </div>
        <p className="font-bold">Rp {harga.toLocaleString("id-ID")}</p>
      </div>

      {detailTerbuka && <p className="mt-3 text-sm text-stone-600">{deskripsi}</p>}

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setDetailTerbuka(!detailTerbuka)}
          className="text-sm font-semibold text-amber-700 hover:underline"
        >
          {detailTerbuka ? "Tutup detail" : "Lihat detail"}
        </button>

        <button
          type="button"
          onClick={() => onTambah(id)}
          disabled={!tersedia}
          className="rounded-xl bg-amber-400 px-5 py-2 font-bold hover:bg-amber-500 disabled:cursor-not-allowed disabled:bg-stone-300 disabled:text-red-600"
        >
          {tersedia ? "Tambah" : "Habis"}
        </button>
      </div>
    </div>
  );
}

export default MenuCard;