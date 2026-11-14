function About() {
  const dataDiri = [
    { id: 1, label: 'Nama', value: 'Aida Dalili Fahimah', color: 'bg-pink' },
    { id: 2, label: 'Kampus', value: 'Universitas Hasanuddin', color: 'bg-orange' },
    { id: 3, label: 'Program Studi', value: 'S1 Sistem Informasi (Semester 3)', color: 'bg-mint' },
    { id: 4, label: 'Domisili', value: 'Maros, Makassar', color: 'bg-sky' },
    { id: 5, label: 'Email', value: 'aidalily27@gmail.com', color: 'bg-grape' },
    { id: 6, label: 'Bahasa', value: 'Indonesia (UKBI 713), Inggris (TOEFL EPT 470)', color: 'bg-pink' },
  ]

  const pencapaian = [
    { id: 1, judul: 'Google Student Ambassador 2026 Batch 2', warna: 'border-sky' },
    { id: 2, judul: 'Mahasiswa Berprestasi Departemen Matematika FMIPA Unhas 2025/2026', warna: 'border-sun' },
    { id: 3, judul: 'Juara 3 Lomba Karya Tulis Ilmiah Nasional, HMM Unhas 2025', warna: 'border-mint' },
    { id: 4, judul: 'Peserta ACTION! Competition Asuransi Astra 2026', warna: 'border-orange' },
    { id: 5, judul: 'Pembuat HitungRisiko, platform web evaluasi risiko untuk UMKM', warna: 'border-pink' },
  ]

  return (
    <section id="about" className="bg-sun/30 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-extrabold text-grape">Tentang saya</h2>
        <p className="mt-4 max-w-3xl text-lg">
          Saya mahasiswa Sistem Informasi yang suka menerapkan konsep analitis
          untuk menyelesaikan masalah nyata. Lewat HitungRisiko, saya belajar
          dasar aktuaria secara mandiri lalu mengubahnya menjadi alat yang
          membantu pemilik UMKM menilai risiko usahanya. Saya juga pernah
          menjadi Wakil Ketua OSIS MAN Insan Cendekia Gowa, guru bahasa Inggris
          sukarela, dan Duta Anak Kabupaten Maros.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <ul className="grid gap-3">
            {dataDiri.map((item) => (
              <li key={item.id} className="flex overflow-hidden rounded-2xl bg-white shadow">
                <span className={`${item.color} w-32 shrink-0 p-3 text-sm font-bold text-white sm:w-40`}>
                  {item.label}
                </span>
                <span className="p-3 font-medium">{item.value}</span>
              </li>
            ))}
          </ul>

          <ul className="grid content-start gap-3">
            {pencapaian.map((item) => (
              <li key={item.id} className={`rounded-2xl border-l-8 bg-white p-4 font-semibold shadow ${item.warna}`}>
                {item.judul}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About