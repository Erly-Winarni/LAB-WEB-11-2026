function Navbar({ kategoriList, kategoriAktif, onKategoriClick, totalItem, totalHarga }) {
  return (
    <header className="sticky top-0 z-10 bg-stone-900 text-white shadow-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 p-4">
        <div>
          <h1 className="text-xl font-bold tracking-wide text-amber-400">Kedai Kopi Senja</h1>
          <p className="text-xs text-stone-400">Pilih menu, tambahkan, lalu kirim pesananmu</p>
        </div>
        <p className="rounded-full bg-stone-800 px-3 py-1 text-sm">
          {totalItem} item · <span className="font-semibold text-amber-400">Rp {totalHarga.toLocaleString("id-ID")}</span>
        </p>
      </div>
      <nav className="mx-auto flex max-w-5xl gap-2 px-4 pb-3">
        {kategoriList.map((k) => (
          <button
            key={k}
            onClick={() => onKategoriClick(k)}
            className={
              "rounded-full px-4 py-1 text-sm transition " +
              (k === kategoriAktif ? "bg-amber-500 font-semibold text-stone-900" : "bg-stone-700 hover:bg-stone-600")
            }
          >
            {k}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
