function Skills() {
  const keahlian = [
    'HTML',
    'CSS',
    'Tailwind CSS',
    'JavaScript',
    'React',
    'SQL (PostgreSQL)',
  ]

  return (
    <section id="skills" className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-white">
          Keahlian <span className="text-sky-400">Saya</span>
        </h2>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {keahlian.map((skill, index) => (
            <li
              key={index}
              className="rounded-full border border-sky-400/40 bg-sky-500/10 px-5 py-2 text-sm font-medium text-sky-300 transition hover:-translate-y-1 hover:bg-sky-500/20 sm:text-base"
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
