function Navbar({
  daftarKategori,
  kategoriAktif,
  onKategoriClick,
  totalItem,
  totalHarga,
}) {
  return (
    <header className="sticky top-0 z-10 bg-stone-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 pt-4">
        <h1 className="text-2xl font-bold sm:text-3xl">Kedai Kopi Senja</h1>
        <p className="rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-stone-900 sm:text-base">
          {totalItem} item - Rp {totalHarga.toLocaleString("id-ID")}
        </p>
      </div>

      <nav className="mx-auto max-w-6xl px-4 pb-4 pt-3">
        <ul className="flex flex-wrap gap-2">
          {daftarKategori.map((kategori) => (
            <li key={kategori}>
              <button
                type="button"
                onClick={() => onKategoriClick(kategori)}
                className={
                  kategori === kategoriAktif
                    ? "rounded-full bg-white px-5 py-2 font-bold text-stone-900"
                    : "rounded-full border border-white/30 px-5 py-2 font-semibold text-white/80 hover:bg-white/10"
                }
              >
                {kategori}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;