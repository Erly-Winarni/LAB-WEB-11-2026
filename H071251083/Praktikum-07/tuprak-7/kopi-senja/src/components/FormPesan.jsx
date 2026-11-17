import { useState } from "react";

function FormPesan({ totalItem, onKirim }) {
  const [nama, setNama] = useState("");
  const [meja, setMeja] = useState("");
  const [error, setError] = useState("");
  const [terkirim, setTerkirim] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setTerkirim(false);

    if (totalItem === 0) {
      setError("Pesanan masih kosong. Tambahkan menu terlebih dahulu.");
      return;
    }
    if (nama.trim() === "") {
      setError("Nama wajib diisi.");
      return;
    }
    if (!/^[1-9]\d*$/.test(meja.trim())) {
      setError("Nomor meja harus berupa angka lebih dari 0.");
      return;
    }

    setError("");
    setTerkirim(true);
    setNama("");
    setMeja("");
    onKirim();
  }

  return (
    <section className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 className="mb-2 font-semibold">Data Pemesan</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full rounded-lg border border-stone-300 p-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
        />
        <input
          type="text"
          placeholder="Nomor meja"
          value={meja}
          onChange={(e) => setMeja(e.target.value)}
          className="w-full rounded-lg border border-stone-300 p-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-stone-900 py-2 text-sm font-semibold text-white transition hover:bg-stone-700 active:scale-95"
        >
          Kirim Pesanan
        </button>
      </form>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      {terkirim && <p className="mt-2 text-sm text-green-700">Terima kasih, pesanan Anda sudah terkirim!</p>}
    </section>
  );
}

export default FormPesan;
