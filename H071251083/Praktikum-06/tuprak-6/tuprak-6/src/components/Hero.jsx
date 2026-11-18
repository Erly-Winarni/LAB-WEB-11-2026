function Hero() {
  const handleClick = () => {
    console.log('Halo! Terima kasih sudah mengunjungi portofolio Faiz.')
  }

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950"
    >
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-16 sm:px-6 md:flex-row md:py-24">
        <div className="text-center md:w-1/2 md:text-left">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-sky-400">
            Selamat datang
          </p>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Halo, saya <span className="text-sky-400">Faiz</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Mahasiswa Sistem Informasi Universitas Hasanuddin yang senang
            mengeksplorasi berbagai bahasa pemrograman dan membangun website
            yang rapi serta responsif.
          </p>
          <button
            onClick={handleClick}
            className="mt-8 rounded-full bg-sky-500 px-8 py-3 font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-95"
          >
            Sapa Saya
          </button>
        </div>
        <div className="flex justify-center md:w-1/2">
          <img
            src="/images/foto-profil.jpg"
            alt="Foto profil Faiz"
            className="h-56 w-56 rounded-full border-4 border-sky-400 object-cover object-[50%_35%] shadow-2xl shadow-sky-500/20 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
