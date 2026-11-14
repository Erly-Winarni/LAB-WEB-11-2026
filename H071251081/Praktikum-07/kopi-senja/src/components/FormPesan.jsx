import { useState } from "react";

function FormPesan({ totalItem, onKirim }) {
  const [nama, setNama] = useState("");
  const [meja, setMeja] = useState("");
  const [galatNama, setGalatNama] = useState("");
  const [galatMeja, setGalatMeja] = useState("");
  const [galatPesanan, setGalatPesanan] = useState("");
  const [terkirim, setTerkirim] = useState(null); // berisi { nama, meja } setelah berhasil

  function handleSubmit(e) {
    e.preventDefault();

    const namaBersih = nama.trim();
    const mejaBersih = meja.trim();
    const nomorMeja = Number(mejaBersih);

    let pesanNama = "";
    let pesanMeja = "";
    let pesanPesanan = "";

    if (namaBersih.length < 2) {
      pesanNama = "Nama wajib diisi, minimal 2 karakter.";
    }

    if (mejaBersih === "") {
      pesanMeja = "Nomor meja wajib diisi.";
    } else if (!Number.isInteger(nomorMeja) || nomorMeja < 1) {
      pesanMeja = "Nomor meja harus berupa angka bulat lebih dari 0.";
    }

    if (totalItem === 0) {
      pesanPesanan = "Pesanan masih kosong. Tambahkan menu terlebih dahulu.";
    }

    setGalatNama(pesanNama);
    setGalatMeja(pesanMeja);
    setGalatPesanan(pesanPesanan);

    if (pesanNama || pesanMeja || pesanPesanan) {
      setTerkirim(null);
      return;
    }

    // Data valid: tampilkan terima kasih, kosongkan form dan pesanan
    setTerkirim({ nama: namaBersih, meja: mejaBersih });
    setNama("");
    setMeja("");
    onKirim();
  }

  return (
    <section className="rounded-2xl bg-white p-5 shadow">
      <h2 className="text-xl font-bold">Kirim pesanan</h2>

      <form onSubmit={handleSubmit} noValidate className="mt-3 flex flex-col gap-4">
        <div>
          <label htmlFor="nama" className="font-semibold">
            Nama
          </label>
          <input
            id="nama"
            type="text"
            placeholder="Nama kamu"
            value={nama}
            onChange={(e) => {
              setNama(e.target.value);
              setTerkirim(null);
            }}
            className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
          />
          {galatNama && <p className="mt-1 text-sm font-semibold text-red-600">{galatNama}</p>}
        </div>

        <div>
          <label htmlFor="meja" className="font-semibold">
            Nomor meja
          </label>
          <input
            id="meja"
            type="text"
            placeholder="Contoh: 7"
            value={meja}
            onChange={(e) => {
              setMeja(e.target.value);
              setTerkirim(null);
            }}
            className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
          />
          {galatMeja && <p className="mt-1 text-sm font-semibold text-red-600">{galatMeja}</p>}
        </div>

        {/* Pesan ini hilang sendiri begitu pesanan terisi */}
        {galatPesanan && totalItem === 0 && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
            {galatPesanan}
          </p>
        )}

        <button
          type="submit"
          className="rounded-xl bg-stone-900 px-5 py-3 font-bold text-white hover:bg-stone-700"
        >
          Kirim pesanan
        </button>
      </form>

      {terkirim && (
        <p className="mt-4 rounded-xl bg-amber-100 px-4 py-3 font-semibold text-amber-800">
          Terima kasih, {terkirim.nama}! Pesanan untuk meja {terkirim.meja} sudah kami terima.
        </p>
      )}
    </section>
  );
}

export default FormPesan;