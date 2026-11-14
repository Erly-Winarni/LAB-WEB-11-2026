function Skills() {
  const skills = [
    'Web Development',
    'Basic Risk Analysis',
    'Microsoft Excel',
    'Microsoft Word',
    'Microsoft PowerPoint',
    'Kepemimpinan',
    'Komunikasi Lintas Budaya',
    'Bahasa Inggris (Professional Working)',
  ]

  const warna = [
    'bg-pink text-white',
    'bg-orange text-ink',
    'bg-sun text-ink',
    'bg-mint text-ink',
    'bg-sky text-ink',
    'bg-grape text-white',
  ]

  return (
    <section id="skills" className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-extrabold text-pink">Keahlian</h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <li
              key={index}
              className={`rounded-full px-6 py-3 text-lg font-bold shadow-md ${warna[index % warna.length]}`}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills