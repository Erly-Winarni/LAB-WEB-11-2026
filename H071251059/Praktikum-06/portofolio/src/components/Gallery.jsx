import foto1 from "../assets/gallery/kk.jpeg";
import foto2 from "../assets/gallery/k.jpeg";
import foto3 from "../assets/gallery/kkkk.jpeg";
import foto4 from "../assets/gallery/kkk.jpeg";

function Gallery() {
  const galeriFoto = [
    { id: 1, src: foto1, judul: "foto manja ceunah" },
    { id: 2, src: foto2, judul: "foto lagi" },
    { id: 3, src: foto3, judul: "lagi" },
    { id: 4, src: foto4, judul: "again" },
  ];

  return (
    <section
      id="galeri"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14 md:py-20"
    >
      <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        Galeri
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {galeriFoto.map((foto) => (
          <figure
            key={foto.id}
            className="overflow-hidden border-2 border-ink bg-white"
          >
            <img
              src={foto.src}
              alt={foto.judul}
              className="aspect-[4/3] w-full object-cover sm:aspect-square"
            />
            <figcaption className="border-t-2 border-ink bg-butter px-4 py-3 font-medium">
              {foto.judul}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
