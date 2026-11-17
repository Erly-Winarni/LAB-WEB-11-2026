function Navbar() {
  const menu = [
    { id: 1, nama: 'Home', target: '#home' },
    { id: 2, nama: 'About', target: '#about' },
    { id: 3, nama: 'Skills', target: '#skills' },
    { id: 4, nama: 'Gallery', target: '#gallery' },
  ]

  const handleMenuClick = (nama) => {
    console.log('Menu diklik:', nama)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/60 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-3 sm:flex-row sm:px-6">
        <h2 className="text-xl font-bold tracking-wide text-sky-400">
          Faiz<span className="text-white">.dev</span>
        </h2>
        <ul className="flex flex-wrap justify-center gap-1 sm:gap-2">
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.target}
                onClick={() => handleMenuClick(item.nama)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-sky-500/20 hover:text-sky-300 active:bg-sky-500/30"
              >
                {item.nama}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
