import { useState } from "react";

function FormPesan({ jumlahItem, ucapan, onKirim, onTutupUcapan }) {
  const [nama, setNama] = useState("");
  const [meja, setMeja] = useState("");
  const [error, setError] = useState({});

  const ubahNama = (e) => {
    setNama(e.target.value);
    setError({ ...error, nama: undefined, pesanan: undefined });
  };

  const ubahMeja = (e) => {
    setMeja(e.target.value);
    setError({ ...error, meja: undefined, pesanan: undefined });
  };

  const kirim = (e) => {
    e.preventDefault();
    const namaBersih = nama.trim();
    const mejaBersih = meja.trim();
    const errorBaru = {};

    if (jumlahItem === 0) {
      errorBaru.pesanan = "Pesanan masih kosong. Tambahkan minimal satu menu.";
    }
    if (namaBersih === "") {
      errorBaru.nama = "Nama wajib diisi.";
    } else if (namaBersih.length < 2) {
      errorBaru.nama = "Nama minimal 2 karakter.";
    }
    if (mejaBersih === "") {
      errorBaru.meja = "Nomor meja wajib diisi.";
    } else if (!/^\d+$/.test(mejaBersih) || Number(mejaBersih) < 1 || Number(mejaBersih) > 99) {
      errorBaru.meja = "Nomor meja harus berupa angka 1 sampai 99.";
    }

    if (Object.keys(errorBaru).length > 0) {
      setError(errorBaru);
      return;
    }

    onKirim(namaBersih, mejaBersih);
    setNama("");
    setMeja("");
    setError({});
  };

  const kelasInput = (adaError) =>
    `mt-2 w-full rounded-xl border bg-transparent px-4 py-3 text-krim placeholder:text-krim/40 focus:outline-none focus:ring-2 focus:ring-madu ${
      adaError ? "border-red-400" : "border-krim/30"
    }`;

  return (
    <div>
      <p className="mb-2 text-xs tracking-[0.2em] text-krim/60">Kirim pesanan</p>
      <h2 className="font-serif text-4xl font-medium leading-tight">
        Siapa dan di mana?
      </h2>

      {ucapan && (
        <div
          role="status"
          className="mt-6 rounded-2xl bg-madu/20 p-5 ring-1 ring-madu/50"
        >
          <p className="font-serif text-xl">Terima kasih, {ucapan.nama}!</p>
          <p className="mt-1 text-sm text-krim/80">
            Pesananmu untuk meja {ucapan.meja} sudah kami terima dan segera disiapkan.
          </p>
          <button
            type="button"
            onClick={onTutupUcapan}
            className="mt-3 text-sm underline underline-offset-4 hover:text-madu"
          >
            Tutup
          </button>
        </div>
      )}

      <form onSubmit={kirim} noValidate className="mt-6 space-y-5">
        <div>
          <label htmlFor="nama" className="text-sm text-krim/80">Nama</label>
          <input
            id="nama"
            type="text"
            value={nama}
            onChange={ubahNama}
            placeholder="Contoh: Dimas"
            aria-invalid={Boolean(error.nama)}
            className={kelasInput(error.nama)}
          />
          {error.nama && <p className="mt-1 text-sm text-red-300">{error.nama}</p>}
        </div>

        <div>
          <label htmlFor="meja" className="text-sm text-krim/80">Nomor meja</label>
          <input
            id="meja"
            type="text"
            inputMode="numeric"
            value={meja}
            onChange={ubahMeja}
            placeholder="Contoh: 5"
            aria-invalid={Boolean(error.meja)}
            className={kelasInput(error.meja)}
          />
          {error.meja && <p className="mt-1 text-sm text-red-300">{error.meja}</p>}
        </div>

        {error.pesanan && (
          <p role="alert" className="rounded-xl bg-red-400/15 px-4 py-3 text-sm text-red-200">
            {error.pesanan}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-full bg-krim px-6 py-3 font-medium text-espresso transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-madu focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
        >
          Kirim pesanan
        </button>
      </form>
    </div>
  );
}

export default FormPesan;
