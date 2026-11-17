import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-linear-to-tr from-amber-500 to-orange-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                </svg>
              </span>
              <span className="font-bold text-slate-800 text-base">Pustaka Senja</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ruang baca dan perpustakaan komunitas di dekat kampus. Tempat hangat untuk membaca, berdiskusi, dan berbagi inspirasi setiap hari.
            </p>
          </div>

          {/* Navigasi Cepat */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-3">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/" className="hover:text-amber-600 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="hover:text-amber-600 transition-colors">
                  Katalog Koleksi Buku
                </Link>
              </li>
              <li>
                <Link href="/usulan" className="hover:text-amber-600 transition-colors">
                  Kirim Usulan Buku Baru
                </Link>
              </li>
            </ul>
          </div>

          {/* Info Ruang Baca */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-3">
              Kunjungi Kami
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="font-medium text-slate-700">Lokasi:</span>
                <span>Jl. Sahabat Kampus No. 12, Lingkar Universitas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-slate-700">Jam Buka:</span>
                <span>Senin - Sabtu (10:00 - 21:00 WITA)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-slate-700">Kontak:</span>
                <span>pustakasenja@komunitas.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {currentYear} Pustaka Senja. Seluruh hak cipta dilindungi.</p>
          <p>Tugas Praktikum 8 • Pemrograman Web • Next.js App Router</p>
        </div>
      </div>
    </footer>
  );
}
