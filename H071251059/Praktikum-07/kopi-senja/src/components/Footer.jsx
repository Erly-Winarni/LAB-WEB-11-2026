function Footer() {
  return (
    <footer className="bg-[#140e0b] text-krim/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="leading-none">
          <span className="block font-serif text-lg tracking-[0.18em] text-krim">SENJA</span>
          <span className="block text-[10px] tracking-[0.35em]">KEDAI KOPI</span>
        </div>
        <p>Kopi yang hangat untuk senja yang lebih tenang.</p>
        <p>© 2026 Kedai Kopi Senja</p>
      </div>
    </footer>
  );
}

export default Footer;
