function Hero() {
  const handleClick = () => {
    console.log("Tombol 'Lihat galeri' diklik, menuju bagian Galeri.");
    document.getElementById("galeri")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="beranda"
      className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-[1.25fr_1fr] md:gap-16 md:pb-28 md:pt-20"
    >
      <div className="order-2 md:order-1">
        <p className="text-lg font-medium text-laut">Halo, selamat datang.</p>
        <h1 className="mt-3 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          Saya Alif Syamsir, mahasiswa Sistem Informasi.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
          Saya kuliah di Universitas Hasanuddin, Makassar. Saya membangun
          aplikasi desktop dengan Java dan JavaFX, dan sekarang sedang
          mendalami pengembangan antarmuka web dengan React.
        </p>
        <button
          type="button"
          onClick={handleClick}
          className="mt-9 cursor-pointer rounded-full bg-laut px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-laut"
        >
          Lihat galeri
        </button>
      </div>

      <div className="order-1 flex justify-center md:order-2">
        <div className="relative group">
          <div className="absolute -inset-2 rounded-3xl bg-linear-to-tr from-laut/30 to-blue-500/20 blur-xl opacity-70 transition-opacity group-hover:opacity-100"></div>
          <img
            src="/images/profile2.png"
            alt="Foto profil Muhammad ALif Syamsir"
            className="relative h-64 w-64 rounded-3xl border-4 border-white bg-slate-100 object-cover object-top shadow-xl transition-transform duration-300 group-hover:scale-[1.02] sm:h-72 sm:w-72 md:h-80 md:w-80"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
