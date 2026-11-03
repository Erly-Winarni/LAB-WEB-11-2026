import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pustaka Senja | Ruang Baca Komunitas",
  description: "Katalog buku dan usulan buku Pustaka Senja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col bg-stone-100 text-stone-900">
        <Navbar />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
