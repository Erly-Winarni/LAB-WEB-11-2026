function About() {
  const dataDiri = [
    { id: 1, label: 'Nama', nilai: 'Muh. Faiz Ilyas' },
    { id: 2, label: 'Kampus', nilai: 'Universitas Hasanuddin' },
    { id: 3, label: 'Program Studi', nilai: 'Sistem Informasi (Angkatan 2025)' },
    { id: 4, label: 'Asal Sekolah', nilai: 'MAN 2 Makassar (Lulus 2024)' },
    { id: 5, label: 'Minat', nilai: 'Mempelajari bahasa pemrograman' },
  ]

  return (
    <section id="about" className="bg-slate-800/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-white">
          Tentang <span className="text-sky-400">Saya</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-slate-300">
          Saya Muh. Faiz Ilyas, mahasiswa Sistem Informasi Universitas
          Hasanuddin angkatan 2025. Saya tertarik mengeksplorasi dan
          mempelajari berbagai bahasa pemrograman, dan saat ini sedang
          memperdalam pengembangan web dengan HTML, CSS, JavaScript, dan React.
        </p>
        <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {dataDiri.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-slate-700 bg-slate-900 p-4 transition hover:border-sky-400"
            >
              <dt className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                {item.label}
              </dt>
              <dd className="mt-1 text-slate-100">{item.nilai}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default About
