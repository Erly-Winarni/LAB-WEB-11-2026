import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";

const dataMenu = [
  { id: 1, nama: "Kopi Susu", kategori: "Kopi", harga: 18000, tersedia: true, deskripsi: "Espresso dengan susu segar dan gula aren." },
  { id: 2, nama: "Americano", kategori: "Kopi", harga: 15000, tersedia: true, deskripsi: "Espresso dengan air panas, rasa kuat dan bersih." },
  { id: 3, nama: "Cappuccino", kategori: "Kopi", harga: 22000, tersedia: true, deskripsi: "Espresso, susu panas, dan busa susu tebal." },
  { id: 4, nama: "Matcha Latte", kategori: "Non-Kopi", harga: 24000, tersedia: true, deskripsi: "Teh hijau matcha dengan susu." },
  { id: 5, nama: "Teh Tarik", kategori: "Non-Kopi", harga: 14000, tersedia: false, deskripsi: "Teh susu yang ditarik hingga berbusa." },
  { id: 6, nama: "Cokelat Panas", kategori: "Non-Kopi", harga: 20000, tersedia: true, deskripsi: "Cokelat pekat dengan susu hangat." },
  { id: 7, nama: "Roti Bakar", kategori: "Makanan", harga: 16000, tersedia: true, deskripsi: "Roti tebal dengan selai cokelat dan keju." },
  { id: 8, nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, tersedia: false, deskripsi: "Pisang goreng renyah dengan taburan keju." },
  { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi." },
];

const daftarKategori = ["Kopi", "Non-Kopi", "Makanan"];

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Kopi");
  const [pesanan, setPesanan] = useState([]);

  const menuTampil = dataMenu.filter((m) => m.kategori === kategoriAktif);

  const itemPesanan = pesanan.map((p) => {
    const menu = dataMenu.find((m) => m.id === p.id);
    return { id: p.id, nama: menu.nama, harga: menu.harga, jumlah: p.jumlah };
  });
  const totalItem = itemPesanan.reduce((acc, i) => acc + i.jumlah, 0);
  const totalHarga = itemPesanan.reduce((acc, i) => acc + i.jumlah * i.harga, 0);

  function tambahPesanan(id) {
    const ada = pesanan.find((p) => p.id === id);
    if (ada) {
      setPesanan(pesanan.map((p) => (p.id === id ? { ...p, jumlah: p.jumlah + 1 } : p)));
    } else {
      setPesanan([...pesanan, { id, jumlah: 1 }]);
    }
  }

  function kosongkanPesanan() {
    setPesanan([]);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 text-stone-800">
      <Navbar
        kategoriList={daftarKategori}
        kategoriAktif={kategoriAktif}
        onKategoriClick={setKategoriAktif}
        totalItem={totalItem}
        totalHarga={totalHarga}
      />
      <main className="mx-auto grid max-w-5xl gap-6 p-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-lg font-bold">Menu {kategoriAktif}</h2>
            <span className="text-sm text-stone-500">{menuTampil.length} pilihan</span>
          </div>
          <MenuList menuList={menuTampil} onTambah={tambahPesanan} />
        </div>
        <div className="space-y-4 md:sticky md:top-32 md:self-start">
          <RingkasanPesanan items={itemPesanan} totalItem={totalItem} totalHarga={totalHarga} />
          <FormPesan totalItem={totalItem} onKirim={kosongkanPesanan} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
