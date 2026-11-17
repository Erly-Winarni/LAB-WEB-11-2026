import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Pustaka Senja | Ruang Baca Komunitas",
  description: "Katalog buku dan usulan buku Pustaka Senja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${playfair.variable} ${inter.variable} flex min-h-screen flex-col bg-cream font-sans text-ink`}>
        <TopBar />
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
