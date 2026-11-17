import { useState } from "react";

const gayaKategori = {
  Kopi: { emoji: "☕", latar: "from-[#6b4429] via-[#4a2e1c] to-[#2a1a10]" },
  "Non-Kopi": { emoji: "🍵", latar: "from-[#7a5a3a] via-[#54402a] to-[#2b2118]" },
  Makanan: { emoji: "🍞", latar: "from-[#8a5a2b] via-[#5e3d1f] to-[#2c1b0e]" },
};

function MenuCard({ menu, jumlahDipesan, onTambah }) {
  const { id, nama, kategori, harga, tersedia, deskripsi } = menu;
  const [detailTerbuka, setDetailTerbuka] = useState(false);
  const gaya = gayaKategori[kategori];

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br ${gaya.latar} p-5 text-krim shadow-lg shadow-mocha/20 ${
        tersedia ? "" : "opacity-70"
      }`}
    >
      <div
        className="pointer-events-none absolute -right-4 -top-4 select-none text-8xl opacity-30"
        aria-hidden="true"
      >
        {gaya.emoji}
      </div>

      <div className="relative flex items-start justify-between">
        <span className="text-xs tracking-wide text-krim/70">{kategori}</span>
        {!tersedia && (
          <span className="rounded-full bg-krim px-3 py-1 text-xs font-medium text-espresso">
            Habis
          </span>
        )}
        {tersedia && jumlahDipesan > 0 && (
          <span className="rounded-full bg-madu px-3 py-1 text-xs font-medium text-espresso">
            {jumlahDipesan} dipesan
          </span>
        )}
      </div>

      <div className="relative mt-16 flex-1">
        <h3 className="font-serif text-2xl font-medium">{nama}</h3>

        <button
          type="button"
          onClick={() => setDetailTerbuka(!detailTerbuka)}
          aria-expanded={detailTerbuka}
          className="mt-1 text-sm text-krim/80 underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-madu"
        >
          {detailTerbuka ? "Tutup detail" : "Lihat detail"}
        </button>

        {detailTerbuka && (
          <p className="mt-3 text-sm leading-relaxed text-krim/90">{deskripsi}</p>
        )}
      </div>

      <div className="relative mt-5 flex items-center justify-between">
        <p className="text-lg font-medium">Rp {harga.toLocaleString("id-ID")}</p>
        <button
          type="button"
          onClick={() => onTambah(id)}
          disabled={!tersedia}
          aria-label={tersedia ? `Tambah ${nama}` : `${nama} sedang habis`}
          className="flex items-center gap-2 rounded-full bg-krim px-4 py-2 text-sm font-medium text-espresso transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-madu focus-visible:ring-offset-2 focus-visible:ring-offset-espresso disabled:cursor-not-allowed disabled:bg-krim/30 disabled:text-krim/60"
        >
          {tersedia ? (
            <>
              <span aria-hidden="true" className="text-lg leading-none">+</span> Tambah
            </>
          ) : (
            "Habis"
          )}
        </button>
      </div>
    </article>
  );
}

export default MenuCard;
