function Hero() {
  const handleClick = () => {
    console.log('Terima kasih sudah mampir ke portofolio Aida!')
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-br from-grape via-pink to-orange text-white"
    >
      <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-sun/70" />
      <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-sky/60" />
      <div className="absolute bottom-0 left-1/3 h-24 w-24 rounded-full bg-mint/80" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="text-center md:text-left">
          <p className="inline-block rounded-full bg-white px-4 py-1 text-sm font-bold text-grape">
            Google Student Ambassador 2026 Batch 2
          </p>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            Halo, saya Aida Dalili Fahimah
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg md:mx-0">
            Mahasiswa Sistem Informasi Universitas Hasanuddin dan Mahasiswa
            Berprestasi Departemen Matematika 2025/2026. Saya membangun
            solusi digital yang mudah dipakai untuk masyarakat dan UMKM.
          </p>
          <button
            onClick={handleClick}
            className="mt-8 cursor-pointer rounded-full bg-sun px-8 py-3 font-extrabold text-ink shadow-[0_6px_0_0_#1d1536] transition hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#1d1536] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Kenalan dulu
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="/fotoku.jpeg"
            alt="Foto profil Aida Dalili Fahimah"
            className="aspect-square w-64 rounded-full border-8 border-white object-cover shadow-2xl sm:w-80"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero