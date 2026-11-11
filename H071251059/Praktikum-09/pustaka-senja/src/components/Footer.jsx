import Link from "next/link";

const tautan = [
  { nama: "Beranda", path: "/" },
  { nama: "Katalog", path: "/katalog" },
  { nama: "Usulan Buku", path: "/usulan" },
];

function Footer() {
  return (
    <footer className="mt-20 bg-forest text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-cream">Pustaka Senja</p>
          <p className="mt-3 max-w-xs text-sm text-stone-400">
            Ruang baca komunitas dekat kampus. Kami percaya buku punya kuasa mengubah hidup.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-gold">Jelajahi</p>
          <ul className="space-y-2 text-sm">
            {tautan.map((t) => (
              <li key={t.path}>
                <Link href={t.path} className="transition hover:text-cream">{t.nama}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-gold">Kunjungi Kami</p>
          <p className="text-sm text-stone-400">Jl. Perintis Kemerdekaan No. 10</p>
          <p className="text-sm text-stone-400">Setiap hari, 10.00 – 20.00</p>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-stone-500">
        &copy; 2026 Pustaka Senja. Dibangun dengan Next.js &amp; Tailwind CSS.
      </p>
    </footer>
  );
}

export default Footer;
