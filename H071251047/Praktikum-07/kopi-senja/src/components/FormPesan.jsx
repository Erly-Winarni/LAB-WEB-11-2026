import { useState } from "react";

function FormPesan({ pesanan, onSubmitPesanan }) {
  const [nama, setNama] = useState("");
  const [nomorMeja, setNomorMeja] = useState("");
  const [pesanError, setPesanError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi 1: Pesanan tidak boleh kosong
    if (pesanan.length === 0) {
      setPesanError("Pesanan masih kosong! Silakan pilih menu terlebih dahulu.");
      return;
    }

    // Validasi 2: Nama harus diisi
    const namaBersih = nama.trim();
    if (!namaBersih) {
      setPesanError("Nama pemesan wajib diisi!");
      return;
    }

    // Validasi 3: Nomor meja harus diisi dengan angka valid
    const mejaBersih = nomorMeja.trim();
    if (!mejaBersih || isNaN(Number(mejaBersih)) || Number(mejaBersih) <= 0) {
      setPesanError("Nomor meja harus berupa angka yang valid (minimal meja 1)!");
      return;
    }

    // Lolos validasi: bersihkan pesan error
    setPesanError("");

    // Kirim data pesanan ke handler utama
    onSubmitPesanan({
      nama: namaBersih,
      nomorMeja: mejaBersih,
    });

    // Mengosongkan form setelah pesanan terkirim
    setNama("");
    setNomorMeja("");
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
      <div className="flex items-center gap-2 pb-4 border-b border-stone-100">
        <span className="text-xl">📝</span>
        <h2 className="text-lg font-bold text-stone-900">Konfirmasi Pemesanan</h2>
      </div>

      {pesanError && (
        <div
          role="alert"
          className="mt-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-start gap-2.5"
        >
          <span className="text-sm shrink-0 leading-none">⚠️</span>
          <span>{pesanError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label
            htmlFor="namaPemesan"
            className="block text-xs font-semibold text-stone-700 mb-1.5"
          >
            Nama Pelanggan <span className="text-rose-500">*</span>
          </label>
          <input
            id="namaPemesan"
            type="text"
            value={nama}
            onChange={(e) => {
              setNama(e.target.value);
              if (pesanError) setPesanError("");
            }}
            placeholder="Contoh: Budi Santoso"
            className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 text-sm text-stone-800 placeholder-stone-400 bg-stone-50/50 transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="nomorMeja"
            className="block text-xs font-semibold text-stone-700 mb-1.5"
          >
            Nomor Meja <span className="text-rose-500">*</span>
          </label>
          <input
            id="nomorMeja"
            type="number"
            min="1"
            value={nomorMeja}
            onChange={(e) => {
              setNomorMeja(e.target.value);
              if (pesanError) setPesanError("");
            }}
            placeholder="Contoh: 05"
            className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 text-sm text-stone-800 placeholder-stone-400 bg-stone-50/50 transition-colors"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-amber-600 hover:bg-amber-700 active:scale-[0.99] shadow-md shadow-amber-600/20 transition-all duration-150 cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Kirim Pesanan Sekarang</span>
          <span>➔</span>
        </button>
      </form>
    </div>
  );
}

export default FormPesan;
