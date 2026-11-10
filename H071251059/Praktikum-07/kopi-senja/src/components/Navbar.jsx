function Navbar({ jumlahItem, totalHarga }) {
  return (
    <header className="sticky top-0 z-30 border-b border-mocha/10 bg-krim/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <a href="#beranda" className="leading-none">
          <span className="block font-serif text-xl font-medium tracking-[0.18em] text-espresso">
            SENJA
          </span>
          <span className="block text-[10px] tracking-[0.35em] text-mocha/70">
            KEDAI KOPI
          </span>
        </a>

        <nav className="hidden gap-8 text-sm text-mocha sm:flex" aria-label="Navigasi utama">
          <a href="#beranda" className="hover:text-karamel">Beranda</a>
          <a href="#menu" className="hover:text-karamel">Menu</a>
          <a href="#pesan" className="hover:text-karamel">Pesanan</a>
        </nav>

        <a
          href="#pesan"
          className="flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm shadow-sm ring-1 ring-mocha/10 transition hover:ring-karamel focus:outline-none focus-visible:ring-2 focus-visible:ring-karamel"
          aria-label={`Pesanan: ${jumlahItem} item, total Rp ${totalHarga.toLocaleString("id-ID")}`}
        >
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-espresso px-1.5 text-xs font-medium text-krim">
            {jumlahItem}
          </span>
          <span className="font-medium text-espresso">
            Rp {totalHarga.toLocaleString("id-ID")}
          </span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
