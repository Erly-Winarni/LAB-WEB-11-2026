function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="bg-ink py-8 text-center text-paper/80">
      <p className="px-5 text-sm">
        &copy; {tahun} Muhammad ALif Syamsir. Seluruh hak cipta dilindungi.
      </p>
    </footer>
  );
}

export default Footer;
