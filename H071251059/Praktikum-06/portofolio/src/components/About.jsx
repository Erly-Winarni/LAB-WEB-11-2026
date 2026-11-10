function About() {
  const dataDiri = [
    { id: 1, label: "Nama lengkap", value: "Karis Kabanga" },
    { id: 2, label: "Program studi", value: "Sistem Informasi" },
    { id: 3, label: "Semester", value: "3" },
    { id: 4, label: "Hobi", value: "apapun ku lakukan asal saya happy" },
    { id: 5, label: "Email", value: "karis@email.com" },
  ];

  return (
    <section
      id="tentang"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14 md:py-20"
    >
      <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        Tentang saya
      </h2>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-lg leading-relaxed text-ink/85">
          <p>
            Saya mahasiswi prodi Sistem Informasi, Fakultas Matematika dan 
            Ilmu Pengetahuan Alam, Universitas Hasanuddin.
          </p>
          <p>
            Di luar kuliah khususny saat libur semester, saya suka 
            mengeksplore cafe estetik dan foto-foto manja.
          </p>
        </div>

        <dl className="divide-y-2 divide-ink border-2 border-ink bg-white">
          {dataDiri.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <dt className="text-sm font-medium text-ink/60">{item.label}</dt>
              <dd className="font-bold">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default About;
