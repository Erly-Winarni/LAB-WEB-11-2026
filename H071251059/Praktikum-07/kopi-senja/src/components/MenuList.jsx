import MenuCard from "./MenuCard";

const daftarKategori = ["Semua", "Kopi", "Non-Kopi", "Makanan"];

function MenuList({ daftarMenu, kategoriAktif, onPilihKategori, pesanan, onTambah }) {
  const menuTampil =
    kategoriAktif === "Semua"
      ? daftarMenu
      : daftarMenu.filter((menu) => menu.kategori === kategoriAktif);

  return (
    <section id="menu" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs tracking-[0.2em] text-mocha/70">Menu</p>
          <h2 className="font-serif text-4xl font-medium text-espresso md:text-5xl">
            Pilihan favorit.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategori">
          {daftarKategori.map((kategori) => {
            const aktif = kategori === kategoriAktif;
            return (
              <button
                key={kategori}
                type="button"
                onClick={() => onPilihKategori(kategori)}
                aria-pressed={aktif}
                className={`rounded-full px-5 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-karamel focus-visible:ring-offset-2 ${
                  aktif
                    ? "bg-espresso text-krim"
                    : "border border-mocha/30 text-mocha hover:border-espresso"
                }`}
              >
                {kategori}
              </button>
            );
          })}
        </div>
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {menuTampil.map((menu) => {
          const itemPesanan = pesanan.find((p) => p.id === menu.id);
          return (
            <li key={menu.id}>
              <MenuCard
                menu={menu}
                jumlahDipesan={itemPesanan ? itemPesanan.jumlah : 0}
                onTambah={onTambah}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MenuList;
