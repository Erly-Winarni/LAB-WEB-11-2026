function Footer() {
  const nama = "Karis Kabanga";
  const tahun = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-ink bg-lilac">
      <p className="mx-auto max-w-6xl px-5 py-6 text-center text-sm font-medium">
        &copy; {tahun} {nama}. Hak cipta dilindungi.
      </p>
    </footer>
  );
}

export default Footer;
