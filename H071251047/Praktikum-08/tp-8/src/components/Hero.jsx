export default function Hero({ namaRuangBaca, slogan, lokasi, jamBuka }) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white p-8 sm:p-12 shadow-xl shadow-orange-500/10">
      {/* Decorative background shapes */}
      <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-black/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-semibold tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-amber-200 animate-pulse" />
          Selamat Datang di Ruang Baca
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          {namaRuangBaca}
        </h1>

        <p className="text-base sm:text-lg text-amber-50/95 leading-relaxed font-normal">
          {slogan}
        </p>

        <div className="pt-2 flex flex-wrap gap-3 text-xs sm:text-sm font-medium">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black/15 backdrop-blur-xs text-white/95 border border-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-amber-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{lokasi}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black/15 backdrop-blur-xs text-white/95 border border-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-amber-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{jamBuka}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
