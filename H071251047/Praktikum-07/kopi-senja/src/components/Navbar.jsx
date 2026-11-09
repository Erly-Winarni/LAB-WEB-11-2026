function Navbar({ kategoriAktif, onPilihKategori, totalItem, totalHarga }) {
  const daftarKategori = ["Semua", "Kopi", "Non-Kopi", "Makanan"];

  return (
    <header className="sticky top-0 z-30 bg-amber-950/95 text-amber-50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600 text-white font-bold text-xl shadow-inner">
              ☕
            </span>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white leading-none">
                Kedai Kopi Senja
              </h1>
              <p className="text-xs text-amber-200/80 mt-1">
                Pesan Mandiri di Meja • Cepat & Nikmat
              </p>
            </div>
          </div>

          {/* Quick Counter untuk Tampilan Mobile */}
          <div className="flex md:hidden flex-col items-end bg-amber-900/80 px-3 py-1.5 rounded-lg border border-amber-800">
            <span className="text-[11px] text-amber-200">
              {totalItem} Pesanan
            </span>
            <span className="text-xs font-semibold text-amber-300">
              Rp {totalHarga.toLocaleString("id-ID")}
            </span>
          </div>
        </div>

        {/* Filter Kategori */}
        <nav aria-label="Kategori Menu" className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {daftarKategori.map((kategori) => {
            const isAktif = kategoriAktif === kategori;
            return (
              <button
                key={kategori}
                type="button"
                onClick={() => onPilihKategori(kategori)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isAktif
                    ? "bg-amber-500 text-stone-900 shadow-sm font-semibold"
                    : "bg-amber-900/60 text-amber-200 hover:bg-amber-800/80 hover:text-white"
                }`}
              >
                {kategori}
              </button>
            );
          })}
        </nav>

        {/* Counter Ringkasan di Atas Halaman (Desktop) */}
        <div className="hidden md:flex items-center gap-4 bg-amber-900/70 border border-amber-800/80 px-4 py-2 rounded-xl">
          <div className="text-right">
            <div className="text-xs text-amber-200 font-medium">
              Total Pesanan:{" "}
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-1 text-xs font-bold rounded-full bg-amber-500 text-stone-950">
                {totalItem} item
              </span>
            </div>
            <div className="text-base font-bold text-amber-300">
              Rp {totalHarga.toLocaleString("id-ID")}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
