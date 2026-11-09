import Link from "next/link";
import Hero from "@/components/Hero";
import dataBuku from "@/data/dataBuku";

export default function HomePage() {
  const totalBuku = dataBuku.length;
  const bukuTersedia = dataBuku.filter((b) => b.tersedia === true).length;
  const bukuDipinjam = dataBuku.filter((b) => b.tersedia === false).length;

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 1. Komponen Hero */}
      <Hero
        namaRuangBaca="Pustaka Senja"
        slogan="Sebuah ruang baca dan perpustakaan komunitas di dekat kampus yang menghadirkan ragam koleksi literatur pilihan untuk menemani senja dan inspirasimu."
        lokasi="Jl. Sahabat Kampus No. 12, Area Lingkar Kampus"
        jamBuka="Senin - Sabtu: 10:00 - 21:00 WITA"
      />

      {/* 2. Ringkasan Statistik Koleksi */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Ringkasan Koleksi Buku
            </h2>
            <p className="text-sm text-slate-500">
              Statistik ketersediaan buku yang terdaftar di Pustaka Senja saat ini
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {/* Total Buku */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                <path d="M6 6h10" />
                <path d="M6 10h10" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Total Koleksi Buku
              </p>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {totalBuku}
                </span>
                <span className="text-xs font-medium text-slate-500">buku</span>
              </div>
            </div>
          </div>

          {/* Buku Tersedia */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Buku Tersedia
              </p>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
                  {bukuTersedia}
                </span>
                <span className="text-xs font-medium text-slate-500">buku</span>
              </div>
            </div>
          </div>

          {/* Buku Dipinjam */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Buku Dipinjam
              </p>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-rose-700">
                  {bukuDipinjam}
                </span>
                <span className="text-xs font-medium text-slate-500">buku</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tombol Navigasi Cepat (Katalog & Usulan) */}
      <section className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 shadow-lg overflow-hidden relative">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Jelajahi & Berpartisipasi
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ingin membaca atau mengusulkan buku baru?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Temukan buku favoritmu di katalog atau ajukan judul buku yang ingin kamu baca di Pustaka Senja agar dapat kami sediakan untuk komunitas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/katalog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-linear-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-md shadow-orange-500/30 transition-all active:scale-95"
            >
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
              <span>Lihat Katalog Buku</span>
            </Link>

            <Link
              href="/usulan"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700 transition-all active:scale-95"
            >
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
                <path d="M12 5v14" />
                <path d="M5 12h14" />
              </svg>
              <span>Usulkan Buku</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
