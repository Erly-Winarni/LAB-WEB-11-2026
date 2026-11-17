function Hero() {
  
  const sapaan = "Halo, saya Karis Kabanga.";
  const deskripsi =
    "Mahasiswa Sistem Informasi semester 3.";

  const handleKenalan = () => {
    console.log("Tombol 'Lihat keahlian saya' diklik!");
    document.getElementById("keahlian")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="beranda"
      className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-20"
    >
      <div className="order-2 md:order-1">
        <h1 className="font-display text-5xl leading-[0.95] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          {sapaan}
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/80">
          {deskripsi}
        </p>
        <button
          type="button"
          onClick={handleKenalan}
          className="mt-8 cursor-pointer rounded-full border-2 border-ink bg-lilac px-7 py-3 font-bold text-ink shadow-[4px_4px_0_0_var(--color-ink)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          Lihat keahlian saya
        </button>
      </div>

      <div className="order-1 mx-auto w-full max-w-xs md:order-2 md:max-w-none">
        <div className="relative">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-peach" />
          <img
            src="/images/krs.jpeg"
            alt="Foto profil Karis Kabanga"
            className="relative aspect-[4/5] w-full rounded-[2rem] border-2 border-ink object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
