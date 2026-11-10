"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const daftarMenu = [
  { nama: "Beranda", path: "/" },
  { nama: "Katalog", path: "/katalog" },
  { nama: "Usulan Buku", path: "/usulan" },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-20 border-b border-sand bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="leading-none">
          <span className="block font-serif text-2xl font-semibold tracking-wide text-forest">
            Pustaka Senja
          </span>
          <span className="text-[0.65rem] tracking-[0.3em] text-gold">RUANG BACA</span>
        </Link>
        <ul className="flex items-center gap-7 text-sm">
          {daftarMenu.map((item) => {
            const isActive =
              item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={
                    isActive
                      ? "border-b-2 border-gold pb-1 font-semibold text-forest"
                      : "pb-1 text-stone-500 transition hover:text-forest"
                  }
                >
                  {item.nama}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
