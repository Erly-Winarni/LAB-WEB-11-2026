import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pustaka Senja | Ruang Baca",
  description: "Website Ruang Baca Pustaka Senja dengan Next.js App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-amber-50 text-stone-800">
        <Navbar />
        <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
