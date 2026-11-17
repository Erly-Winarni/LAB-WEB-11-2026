import { useState } from "react";
import Navbar from "./components/Navbar";
import MenuList from "./components/MenuList";
import RingkasanPesanan from "./components/RingkasanPesanan";
import FormPesan from "./components/FormPesan";
import Footer from "./components/Footer";

// Satu sumber data menu yang ditulis satu kali di App.jsx
const MENU_DATA = [
  {
    id: 1,
    nama: "Kopi Susu",
    kategori: "Kopi",
    harga: 18000,
    tersedia: true,
    deskripsi: "Espresso dengan susu segar dan gula aren.",
  },
  {
    id: 2,
    nama: "Americano",
    kategori: "Kopi",
    harga: 15000,
    tersedia: true,
    deskripsi: "Espresso dengan air panas, rasa kuat dan bersih.",
  },
  {
    id: 3,
    nama: "Cappuccino",
    kategori: "Kopi",
    harga: 22000,
    tersedia: true,
    deskripsi: "Espresso, susu panas, dan busa susu tebal.",
  },
  {
    id: 4,
    nama: "Matcha Latte",
    kategori: "Non-Kopi",
    harga: 24000,
    tersedia: true,
    deskripsi: "Teh hijau matcha dengan susu.",
  },
  {
    id: 5,
    nama: "Teh Tarik",
    kategori: "Non-Kopi",
    harga: 14000,
    tersedia: false,
    deskripsi: "Teh susu yang ditarik hingga berbusa.",
  },
  {
    id: 6,
    nama: "Cokelat Panas",
    kategori: "Non-Kopi",
    harga: 20000,
    tersedia: true,
    deskripsi: "Cokelat pekat dengan susu hangat.",
  },
  {
    id: 7,
    nama: "Roti Bakar",
    kategori: "Makanan",
    harga: 16000,
    tersedia: true,
    deskripsi: "Roti tebal dengan selai cokelat dan keju.",
  },
  {
    id: 8,
    nama: "Pisang Goreng",
    kategori: "Makanan",
    harga: 12000,
    tersedia: false,
    deskripsi: "Pisang goreng renyah dengan taburan keju.",
  },
  {
    id: 9,
    nama: "Nasi Goreng",
    kategori: "Makanan",
    harga: 25000,
    tersedia: true,
    deskripsi: "Nasi goreng kampung dengan telur mata sapi.",
  },
];

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pesanan, setPesanan] = useState([]);
  const [suksesOrder, setSuksesOrder] = useState(null);

  // Filter daftar menu berdasarkan kategori yang dipilih
  const menuTampil =
    kategoriAktif === "Semua"
      ? MENU_DATA
      : MENU_DATA.filter((item) => item.kategori === kategoriAktif);

  // Hitung total item & total harga secara terpusat (angka selalu sama)
  const totalItem = pesanan.reduce((sum, item) => sum + item.jumlah, 0);
  const totalHarga = pesanan.reduce(
    (sum, item) => sum + item.harga * item.jumlah,
    0
  );

  // Handler untuk menambah menu ke pesanan
  const handleTambahPesanan = (menuItem) => {
    // Hanya hentikan jika secara eksplisit bernilai false
    if (menuItem.tersedia === false) return;

    setPesanan((prevPesanan) => {
      const indexAda = prevPesanan.findIndex((item) => item.id === menuItem.id);
      if (indexAda !== -1) {
        return prevPesanan.map((item, index) =>
          index === indexAda
            ? { ...item, jumlah: item.jumlah + 1 }
            : item
        );
      } else {
        return [
          ...prevPesanan,
          {
            id: menuItem.id,
            nama: menuItem.nama,
            harga: menuItem.harga,
            jumlah: 1,
          },
        ];
      }
    });
  };

  // Handler untuk mengurangi jumlah menu di pesanan
  const handleKurangPesanan = (menuId) => {
    setPesanan((prevPesanan) => {
      const itemAda = prevPesanan.find((item) => item.id === menuId);
      if (!itemAda) return prevPesanan;

      if (itemAda.jumlah > 1) {
        return prevPesanan.map((item) =>
          item.id === menuId ? { ...item, jumlah: item.jumlah - 1 } : item
        );
      } else {
        return prevPesanan.filter((item) => item.id !== menuId);
      }
    });
  };

  // Handler untuk menghapus menu dari pesanan
  const handleHapusPesanan = (menuId) => {
    setPesanan((prevPesanan) =>
      prevPesanan.filter((item) => item.id !== menuId)
    );
  };

  // Handler saat pesanan berhasil dikirim dari FormPesan
  const handleOrderSubmit = ({ nama, nomorMeja }) => {
    // Simpan data konfirmasi untuk modal ucapan terima kasih
    setSuksesOrder({
      nama,
      nomorMeja,
      jumlahItem: totalItem,
      totalBiaya: totalHarga,
      rincian: [...pesanan],
    });
 
    // Mengosongkan pesanan sesuai petunjuk
    setPesanan([]);
  };

  const handleTutupSukses = () => {
    setSuksesOrder(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-100/60 font-sans">
      {/* Header & Navigasi Kategori */}
      <Navbar
        kategoriAktif={kategoriAktif}
        onPilihKategori={setKategoriAktif}
        totalItem={totalItem}
        totalHarga={totalHarga}
      />

      {/* Konten Utama */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Banner Ucapan Terima Kasih (Modal / Notifikasi Sukses) */}
        {suksesOrder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-amber-100 text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto mb-4">
                ✓
              </div>
              <h2 className="text-2xl font-black text-stone-900">
                Terima Kasih, {suksesOrder.nama}!
              </h2>
              <p className="text-sm text-stone-600 mt-2">
                Pesanan Anda untuk{" "}
                <span className="font-bold text-amber-700">
                  Meja {suksesOrder.nomorMeja}
                </span>{" "}
                telah berhasil diterima oleh kasir & barista kami.
              </p>

              <div className="mt-5 p-4 rounded-2xl bg-amber-50/70 border border-amber-100 text-left text-xs space-y-2">
                <div className="flex justify-between font-semibold text-stone-700 border-b border-amber-200/60 pb-2">
                  <span>Rincian Pesanan ({suksesOrder.jumlahItem} item)</span>
                  <span>Subtotal</span>
                </div>
                <div className="max-h-36 overflow-y-auto space-y-1.5 pt-1">
                  {suksesOrder.rincian.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between text-stone-600"
                    >
                      <span>
                        {item.nama} × {item.jumlah}
                      </span>
                      <span>
                        Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between font-bold text-sm text-amber-900 border-t border-amber-200/60 pt-2">
                  <span>Total Tagihan:</span>
                  <span>
                    Rp {suksesOrder.totalBiaya.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-400 mt-4">
                Pesanan sedang disiapkan, silakan tunggu di meja Anda.
              </p>

              <button
                type="button"
                onClick={handleTutupSukses}
                className="mt-6 w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 active:scale-[0.99] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Pesan Menu Lainnya
              </button>
            </div>
          </div>
        )}

        {/* Layout Grid: Kolom Kiri (Menu) & Kolom Kanan (Ringkasan & Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kolom Daftar Menu (8/12 di Desktop) */}
          <section className="lg:col-span-7 xl:col-span-8">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold text-stone-900">
                  {kategoriAktif === "Semua"
                    ? "Semua Pilihan Menu"
                    : `Menu ${kategoriAktif}`}
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  Menampilkan {menuTampil.length} menu yang siap dinikmati
                </p>
              </div>
            </div>

            <MenuList menuList={menuTampil} onTambah={handleTambahPesanan} />
          </section>

          {/* Kolom Pemesanan (4/12 di Desktop): Ringkasan & Form */}
          <aside className="lg:col-span-5 xl:col-span-4 space-y-6 lg:sticky lg:top-24">
            <RingkasanPesanan
              pesanan={pesanan}
              totalItem={totalItem}
              totalHarga={totalHarga}
              onTambah={handleTambahPesanan}
              onKurang={handleKurangPesanan}
              onHapus={handleHapusPesanan}
            />

            <FormPesan
              pesanan={pesanan}
              onSubmitPesanan={handleOrderSubmit}
            />
          </aside>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
