

function Gallery() {
  const galeriFoto = [
    { id: 1, src: "/GSA.jpeg", judul: 'Google Student Ambassador', warna: 'bg-sky' },
    { id: 2, src: "/HitungRisiko.jpeg", judul: 'Proyek HitungRisiko', warna: 'bg-sun' },
    { id: 3, src: "/MBF.jpeg", judul: 'MBF', warna: 'bg-mint' },
  ]

  return (
    <section id="gallery" className="bg-ink px-5 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-extrabold text-sun">Galeri</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galeriFoto.map((foto) => (
            <figure key={foto.id} className={`overflow-hidden rounded-3xl p-2 ${foto.warna}`}>
              <img
                src={foto.src}
                alt={foto.judul}
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <figcaption className="px-2 py-3 text-center font-bold text-ink">
                {foto.judul}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery