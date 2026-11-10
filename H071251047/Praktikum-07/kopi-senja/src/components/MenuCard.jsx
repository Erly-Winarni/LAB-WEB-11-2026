import { useState } from "react";

function MenuCard({ menu, onTambah }) {
  const [bukaDetail, setBukaDetail] = useState(false);

  const toggleDetail = () => {
    setBukaDetail(!bukaDetail);
  };

  const handleKlikTambah = () => {
    if (menu.tersedia) {
      onTambah(menu);
    }
  };

  return (
    <div
      className={`flex flex-col justify-between rounded-2xl bg-white p-5 shadow-sm border transition-all duration-200 ${
        menu.tersedia
          ? "border-amber-100 hover:shadow-md hover:border-amber-200"
          : "border-stone-200 bg-stone-50/70 opacity-80"
      }`}
    >
      <div>
        {/* Header Kartu: Kategori & Ketersediaan */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-900">
            {menu.kategori}
          </span>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
              menu.tersedia
                ? "bg-emerald-100 text-emerald-800"
                : "bg-rose-100 text-rose-700"
            }`}
          >
            {menu.tersedia ? "Tersedia" : "Habis"}
          </span>
        </div>

        {/* Nama Menu */}
        <h3 className="text-lg font-bold text-stone-900 tracking-tight leading-snug">
          {menu.nama}
        </h3>

        {/* Harga */}
        <p className="mt-1 text-base font-semibold text-amber-700">
          Rp {menu.harga.toLocaleString("id-ID")}
        </p>

        {/* Detail Accordion */}
        <div className="mt-3">
          <button
            type="button"
            onClick={toggleDetail}
            className="text-xs font-medium text-amber-600 hover:text-amber-800 hover:underline flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>{bukaDetail ? "Sembunyikan Detail" : "Lihat Detail"}</span>
            <span
              className={`transform transition-transform text-[10px] duration-150 ${
                bukaDetail ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>

          {bukaDetail && (
            <p className="mt-2 text-xs text-stone-600 leading-relaxed bg-amber-50/60 p-3 rounded-xl border border-amber-100 animate-fadeIn">
              {menu.deskripsi}
            </p>
          )}
        </div>
      </div>

      {/* Footer Kartu / Aksi */}
      <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-end">
        <button
          type="button"
          onClick={handleKlikTambah}
          disabled={!menu.tersedia}
          className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            menu.tersedia
              ? "bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white shadow-sm cursor-pointer"
              : "bg-stone-200 text-stone-400 cursor-not-allowed"
          }`}
        >
          {menu.tersedia ? (
            <>
              <span className="text-base leading-none font-bold">+</span>
              <span>Tambah</span>
            </>
          ) : (
            <span>Menu Habis</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
