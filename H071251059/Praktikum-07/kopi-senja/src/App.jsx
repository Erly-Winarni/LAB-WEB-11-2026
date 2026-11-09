import { useState } from "react";
import Navbar from "./components/Navbar";
import MenuList from "./components/MenuList";
import RingkasanPesanan from "./components/RingkasanPesanan";
import FormPesan from "./components/FormPesan";
import Footer from "./components/Footer";

// Satu-satunya sumber data menu.
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

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pesanan, setPesanan] = useState([]); // [{ id, jumlah }]
  const [ucapan, setUcapan] = useState(null); // null atau { nama, meja }

  const tambahPesanan = (id) => {
    const menu = dataMenu.find((m) => m.id === id);
    if (!menu || !menu.tersedia) return;

    setUcapan(null);
    setPesanan((sebelumnya) => {
      const sudahAda = sebelumnya.some((p) => p.id === id);
      if (sudahAda) {
        return sebelumnya.map((p) => (p.id === id ? { ...p, jumlah: p.jumlah + 1 } : p));
      }
      return [...sebelumnya, { id, jumlah: 1 }];
    });
  };

  const kurangiPesanan = (id) => {
    setPesanan((sebelumnya) =>
      sebelumnya
        .map((p) => (p.id === id ? { ...p, jumlah: p.jumlah - 1 } : p))
        .filter((p) => p.jumlah > 0)
    );
  };

  const hapusPesanan = (id) => {
    setPesanan((sebelumnya) => sebelumnya.filter((p) => p.id !== id));
  };

  const kirimPesanan = (nama, meja) => {
    setUcapan({ nama, meja });
    setPesanan([]);
  };

  // Data turunan: dihitung dari state `pesanan`, tidak disimpan di state lain.
  const itemPesanan = pesanan.map((p) => {
    const menu = dataMenu.find((m) => m.id === p.id);
    return { ...menu, jumlah: p.jumlah, subtotal: menu.harga * p.jumlah };
  });
  const jumlahItem = itemPesanan.reduce((total, item) => total + item.jumlah, 0);
  const totalHarga = itemPesanan.reduce((total, item) => total + item.subtotal, 0);

  return (
    <div className="min-h-screen bg-krim">
      <Navbar jumlahItem={jumlahItem} totalHarga={totalHarga} />

      <main>
        {/* Hero */}
        <section
          id="beranda"
          className="relative overflow-hidden bg-krimtua"
        >
          <div
            className="absolute inset-y-0 right-0 hidden w-3/5 bg-cover bg-center md:block"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #EADBC8 0%, rgba(234,219,200,0) 45%), url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=70')",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="max-w-md">
              <p className="mb-5 text-xs tracking-[0.2em] text-mocha/70">
                Kedai kopi kecil · Senja yang lebih hangat
              </p>
              <h1 className="font-serif text-5xl font-medium leading-[1.02] text-espresso sm:text-6xl md:text-7xl">
                Pesan sendiri,
                <br />
                nikmati{" "}
                <span className="text-karamel">senja.</span>
              </h1>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-mocha">
                Pilih menu favoritmu langsung dari meja, tanpa antre di kasir.
                Biji kopi pilihan, rasa yang hangat, dan tempat untuk
                melambatkan hari.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#menu"
                  className="rounded-full bg-espresso px-6 py-3 text-sm font-medium text-krim transition hover:bg-mocha focus:outline-none focus-visible:ring-2 focus-visible:ring-karamel focus-visible:ring-offset-2"
                >
                  Lihat menu →
                </a>
                <a
                  href="#pesan"
                  className="text-sm font-medium text-mocha underline-offset-4 hover:underline"
                >
                  Langsung ke pesanan
                </a>
              </div>
              <dl className="mt-12 flex gap-8 text-sm">
                <div className="border-l border-mocha/30 pl-4">
                  <dt className="text-mocha/70">Pilihan menu</dt>
                  <dd className="font-serif text-xl text-espresso">{dataMenu.length}</dd>
                </div>
                <div className="border-l border-mocha/30 pl-4">
                  <dt className="text-mocha/70">Tersedia hari ini</dt>
                  <dd className="font-serif text-xl text-espresso">
                    {dataMenu.filter((m) => m.tersedia).length}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Menu */}
        <MenuList
          daftarMenu={dataMenu}
          kategoriAktif={kategoriAktif}
          onPilihKategori={setKategoriAktif}
          pesanan={pesanan}
          onTambah={tambahPesanan}
        />

        {/* Pesanan */}
        <section id="pesan" className="bg-espresso text-krim">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:gap-16">
            <RingkasanPesanan
              itemPesanan={itemPesanan}
              jumlahItem={jumlahItem}
              totalHarga={totalHarga}
              onTambah={tambahPesanan}
              onKurangi={kurangiPesanan}
              onHapus={hapusPesanan}
            />
            <FormPesan
              jumlahItem={jumlahItem}
              ucapan={ucapan}
              onKirim={kirimPesanan}
              onTutupUcapan={() => setUcapan(null)}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
