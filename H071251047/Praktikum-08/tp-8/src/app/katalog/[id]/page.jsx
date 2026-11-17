import Link from "next/link";
import dataBuku from "@/data/dataBuku";

export default async function DetailBukuPage({ params }) {
  // Sesuai spesifikasi F4 poin 1: membaca parameter id dari props params dengan await
  const { id } = await params;

  // Sesuai spesifikasi F4 poin 2: mencari data buku dengan .find()
  const buku = dataBuku.find((item) => String(item.id) === String(id));

  // Sesuai spesifikasi F4 poin 4: jika id tidak ditemukan
  if (!buku) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
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

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-900">
              Buku Tidak Ditemukan
            </h1>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Maaf, buku dengan ID <span className="font-semibold text-slate-800 font-mono bg-slate-100 px-1.5 py-0.5 rounded">&quot;{id}&quot;</span> tidak terdaftar dalam koleksi katalog Pustaka Senja.
            </p>
          </div>

          <div>
            <Link
              href="/katalog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-amber-500 text-white hover:bg-amber-600 shadow-sm shadow-amber-500/20 transition-all active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Kembali ke Katalog</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Sesuai spesifikasi F4 poin 3: jika buku ditemukan, tampilkan informasi lengkap
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Tombol Kembali ke Katalog */}
      <div>
        <Link
          href="/katalog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Kembali ke Halaman Katalog</span>
        </Link>
      </div>

      {/* Kartu Detail Lengkap */}
      <article className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
        {/* Header Buku */}
        <div className="space-y-4 pb-6 border-b border-slate-100">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
              {buku.kategori}
            </span>

            {buku.tersedia ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                Status: Tersedia
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Status: Sedang Dipinjam
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {buku.judul}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 pt-1">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-800">Penulis:</span>
              <span>{buku.penulis}</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-800">Tahun Terbit:</span>
              <span>{buku.tahun}</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-800">Kode Buku:</span>
              <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-xs text-slate-700">
                ID-{buku.id}
              </span>
            </div>
          </div>
        </div>

        {/* Sinopsis Buku Lengkap */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-amber-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <span>Sinopsis Buku</span>
          </h2>
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
            <p className="text-slate-700 text-base leading-relaxed sm:text-lg">
              {buku.sinopsis}
            </p>
          </div>
        </div>

        {/* Bagian Aksi Bawah */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            {buku.tersedia
              ? "Buku ini dapat dibaca langsung di ruang baca atau dipinjam oleh anggota."
              : "Buku ini sedang dipinjam oleh pengunjung lain. Silakan periksa kembali nanti."}
          </p>

          <Link
            href="/katalog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 text-white hover:bg-slate-900 transition-all active:scale-95"
          >
            <span>Kembali ke Katalog</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
