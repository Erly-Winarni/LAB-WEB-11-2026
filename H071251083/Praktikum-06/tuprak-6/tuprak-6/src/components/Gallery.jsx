import foto1 from '../assets/gallery/foto1.jpg'
import foto2 from '../assets/gallery/foto2.jpg'
import foto3 from '../assets/gallery/foto3.jpg'
import foto4 from '../assets/gallery/foto4.jpg'

function Gallery() {
  const galeriFoto = [
    { id: 1, src: foto1, judul: 'Momen Favorit', posisi: 'object-center' },
    { id: 2, src: foto2, judul: 'Bersama Teman', posisi: 'object-bottom' },
    { id: 3, src: foto3, judul: 'Kegiatan Kampus', posisi: 'object-center' },
    { id: 4, src: foto4, judul: 'Belajar Coding', posisi: 'object-top' },
  ]

  return (
    <section id="gallery" className="bg-slate-800/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-white">
          Galeri <span className="text-sky-400">Foto</span>
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galeriFoto.map((foto) => (
            <figure
              key={foto.id}
              className="group overflow-hidden rounded-xl border border-slate-700 bg-slate-900"
            >
              <img
                src={foto.src}
                alt={foto.judul}
                className={`h-64 w-full object-cover ${foto.posisi} transition duration-300 group-hover:scale-105`}
              />
              <figcaption className="p-3 text-center text-sm text-slate-300">
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
