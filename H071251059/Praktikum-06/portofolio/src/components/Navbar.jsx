function Navbar() {
  // GANTI nama/logo sesuai identitasmu
  const logo = "karis.dev";

  const menu = [
    { id: 1, label: "Beranda", href: "#beranda" },
    { id: 2, label: "Tentang", href: "#tentang" },
    { id: 3, label: "Keahlian", href: "#keahlian" },
    { id: 4, label: "Galeri", href: "#galeri" },
  ];

  const handleMenuClick = (namaMenu) => {
    console.log(`Menu diklik: ${namaMenu}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-3 sm:flex-row sm:justify-between">
        <a
          href="#beranda"
          className="font-display text-xl font-extrabold tracking-tight"
        >
          {logo}
        </a>
        <ul className="flex flex-wrap justify-center gap-1 text-sm font-medium sm:text-base">
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => handleMenuClick(item.label)}
                className="rounded-full px-3 py-1.5 transition-colors hover:bg-blush focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
