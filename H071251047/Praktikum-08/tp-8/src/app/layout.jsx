import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pustaka Senja - Ruang Baca & Perpustakaan Komunitas",
  description:
    "Aplikasi multi-halaman Pustaka Senja untuk menjelajah katalog koleksi buku, melihat detail buku, dan menyampaikan usulan buku baru.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-200 selection:text-amber-900">
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
