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
  { id: 5, nama: "Teh Tarik", kategori: "Non-Kopi", harga: 14000, tersedia: true, deskripsi: "Teh susu yang ditarik hingga berbusa." },
  { id: 6, nama: "Cokelat Panas", kategori: "Non-Kopi", harga: 20000, tersedia: true, deskripsi: "Cokelat pekat dengan susu hangat." },
  { id: 7, nama: "Roti Bakar", kategori: "Makanan", harga: 16000, tersedia: true, deskripsi: "Roti tebal dengan selai cokelat dan keju." },
  { id: 8, nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, tersedia: false, deskripsi: "Pisang goreng renyah dengan taburan keju." },
  { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi." },
];

const daftarKategori = ["Semua", "Kopi", "Non-Kopi", "Makanan"];

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  // pesanan hanya menyimpan id dan jumlah, nama & harga diambil dari dataMenu
  const [pesanan, setPesanan] = useState([]);

  // Nilai turunan: dihitung dari state, bukan state baru
  const menuTampil =
    kategoriAktif === "Semua"
      ? dataMenu
      : dataMenu.filter((menu) => menu.kategori === kategoriAktif);

  const itemPesanan = pesanan.map((p) => {
    const menu = dataMenu.find((m) => m.id === p.id);
    return { id: menu.id, nama: menu.nama, harga: menu.harga, jumlah: p.jumlah };
  });

  const totalItem = itemPesanan.reduce((total, item) => total + item.jumlah, 0);
  const totalHarga = itemPesanan.reduce(
    (total, item) => total + item.harga * item.jumlah,
    0,
  );

  function tambahMenu(id) {
    const menu = dataMenu.find((m) => m.id === id);
    if (!menu.tersedia) return; // menu habis tidak boleh dipesan

    const sudahAda = pesanan.find((p) => p.id === id);
    if (sudahAda) {
      setPesanan(
        pesanan.map((p) =>
          p.id === id ? { id: p.id, jumlah: p.jumlah + 1 } : p,
        ),
      );
    } else {
      setPesanan([...pesanan, { id: id, jumlah: 1 }]);
    }
  }

  function kurangiMenu(id) {
    const pesananBaru = pesanan
      .map((p) => (p.id === id ? { id: p.id, jumlah: p.jumlah - 1 } : p))
      .filter((p) => p.jumlah > 0);
    setPesanan(pesananBaru);
  }

  function kosongkanPesanan() {
    setPesanan([]);
  }

  return (
    <div className="flex min-h-screen flex-col bg-stone-100 text-stone-900">
      <Navbar
        daftarKategori={daftarKategori}
        kategoriAktif={kategoriAktif}
        onKategoriClick={setKategoriAktif}
        totalItem={totalItem}
        totalHarga={totalHarga}
      />

      <main className="mx-auto grid w-full max-w-6xl flex-1 gap-8 px-4 py-8 lg:grid-cols-[1fr_22rem]">
        <MenuList
          menu={menuTampil}
          kategoriAktif={kategoriAktif}
          onTambah={tambahMenu}
        />

        <aside className="flex flex-col gap-6 lg:self-start">
          <RingkasanPesanan
            items={itemPesanan}
            totalItem={totalItem}
            totalHarga={totalHarga}
            onTambah={tambahMenu}
            onKurang={kurangiMenu}
          />
          <FormPesan totalItem={totalItem} onKirim={kosongkanPesanan} />
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;