function Skills() {
  // GANTI dengan keahlian milikmu (minimal 5)
  const keahlian = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git & GitHub",
    "PostgreSQL",
    "Figma",
  ];

  return (
    <section
      id="keahlian"
      className="scroll-mt-16 border-y-2 border-ink bg-mint text-ink"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Keahlian
        </h2>
        <ul className="mt-10 flex flex-wrap gap-3">
          {keahlian.map((skill, index) => (
            <li
              key={index}
              className="rounded-full border-2 border-ink bg-white px-5 py-2 text-base font-medium transition-colors hover:bg-blush sm:text-lg"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
