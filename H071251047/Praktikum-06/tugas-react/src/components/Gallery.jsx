import ig from "../assets/gallery/ig.png";
import buku from "../assets/gallery/book.png";
import lab from "../assets/gallery/lab.png";
import somewhere from "../assets/gallery/somewhere.png";

function Gallery() {
  const galeriFoto = [
    { id: 1, src: ig, judul: "Instagram" },
    { id: 2, src: buku, judul: "Buku" },
    { id: 3, src: lab, judul: "LAB" },
    { id: 4, src: somewhere, judul: "Somewhere" },
  ];

  return (
    <section id="galeri" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Galeri
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galeriFoto.map((foto) => (
            <figure
              key={foto.id}
              className="group overflow-hidden rounded-2xl border border-ink/10 bg-paper p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={foto.src}
                  alt={foto.judul}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 px-1 text-center font-semibold text-ink">
                {foto.judul}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
