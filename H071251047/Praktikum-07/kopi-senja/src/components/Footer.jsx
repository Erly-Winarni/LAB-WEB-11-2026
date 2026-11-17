function Footer() {
  return (
    <footer className="mt-16 bg-amber-950 text-amber-100/80 py-8 border-t border-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:flex sm:items-center sm:justify-between gap-4">
        <div className="mb-4 sm:mb-0">
          <p className="font-semibold text-white text-sm">
            Kedai Kopi Senja
          </p>
          <p className="text-xs text-amber-200/60 mt-0.5">
            Sistem Pemesanan Mandiri Meja • Praktikum Pemrograman Web
          </p>
        </div>
        <div className="text-xs text-amber-200/60">
          &copy; {new Date().getFullYear()} Kedai Kopi Senja. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
