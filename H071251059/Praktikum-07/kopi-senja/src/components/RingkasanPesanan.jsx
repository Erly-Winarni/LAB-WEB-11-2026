function RingkasanPesanan({ itemPesanan, jumlahItem, totalHarga, onTambah, onKurangi, onHapus }) {
  return (
    <div>
      <p className="mb-2 text-xs tracking-[0.2em] text-krim/60">Ringkasan</p>
      <h2 className="font-serif text-4xl font-medium leading-tight">
        Pesananmu.
      </h2>

      {itemPesanan.length === 0 ? (
        <p className="mt-6 max-w-sm leading-relaxed text-krim/70">
          Belum ada pesanan. Pilih menu di atas lalu tekan Tambah.
        </p>
      ) : (
        <ul className="mt-6 divide-y divide-krim/15 border-y border-krim/15">
          {itemPesanan.map((item) => (
            <li key={item.id} className="flex items-center justify-between gap-4 py-4">
              <div>
                <p className="font-medium">{item.nama}</p>
                <p className="text-sm text-krim/60">
                  Rp {item.harga.toLocaleString("id-ID")} × {item.jumlah}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-full border border-krim/30">
                  <button
                    type="button"
                    onClick={() => onKurangi(item.id)}
                    aria-label={`Kurangi ${item.nama}`}
                    className="h-8 w-8 rounded-full text-lg hover:bg-krim/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-madu"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm">{item.jumlah}</span>
                  <button
                    type="button"
                    onClick={() => onTambah(item.id)}
                    aria-label={`Tambah ${item.nama}`}
                    className="h-8 w-8 rounded-full text-lg hover:bg-krim/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-madu"
                  >
                    +
                  </button>
                </div>
                <p className="w-24 text-right font-medium">
                  Rp {item.subtotal.toLocaleString("id-ID")}
                </p>
                <button
                  type="button"
                  onClick={() => onHapus(item.id)}
                  aria-label={`Hapus ${item.nama}`}
                  className="text-sm text-krim/60 underline-offset-4 hover:text-krim hover:underline"
                >
                  Hapus
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <dl className="mt-6 space-y-2">
        <div className="flex justify-between text-krim/70">
          <dt>Jumlah pesanan</dt>
          <dd>{jumlahItem} item</dd>
        </div>
        <div className="flex items-baseline justify-between">
          <dt>Total harga</dt>
          <dd className="font-serif text-3xl text-madu">
            Rp {totalHarga.toLocaleString("id-ID")}
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default RingkasanPesanan;
