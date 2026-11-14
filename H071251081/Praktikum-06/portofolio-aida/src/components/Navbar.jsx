function Navbar() {
  const menu = ['Home', 'About', 'Skills', 'Gallery']

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-pink bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-3 sm:flex-row">
        <h2 className="font-display text-2xl font-extrabold">
          <span className="text-pink">Aida</span>
          <span className="text-orange">Dalili</span>
          <span className="text-mint">.</span>
        </h2>
        <ul className="flex flex-wrap justify-center gap-1 sm:gap-2">
          {menu.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => console.log(item)}
                className="block rounded-full px-4 py-1.5 text-sm font-bold transition hover:bg-grape hover:text-white focus-visible:outline-2 focus-visible:outline-grape"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar