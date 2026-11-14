function RingkasanPesanan({ items, totalItem, totalHarga, onTambah, onKurang }) {
  return (
    <section className="rounded-2xl bg-white p-5 shadow">
      <h2 className="text-xl font-bold">Ringkasan pesanan</h2>

      {items.length === 0 ? (
        <p className="mt-3 text-sm text-stone-500">
          Belum ada pesanan. Tekan Tambah pada menu yang kamu mau.
        </p>
      ) : (
        <div className="mt-3 divide-y divide-stone-200">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-3 py-3">
              <div>
                <p className="font-semibold">{item.nama}</p>
                <p className="text-sm text-stone-500">
                  Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onKurang(item.id)}
                  className="h-9 w-9 rounded-full bg-stone-200 text-lg font-bold hover:bg-stone-300"
                >
                  -
                </button>
                <span className="w-6 text-center font-bold">{item.jumlah}</span>
                <button
                  type="button"
                  onClick={() => onTambah(item.id)}
                  className="h-9 w-9 rounded-full bg-amber-400 text-lg font-bold hover:bg-amber-500"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between border-t border-stone-200 pt-4">
        <p className="font-semibold">{totalItem} item</p>
        <p className="text-lg font-bold">Rp {totalHarga.toLocaleString("id-ID")}</p>
      </div>
    </section>
  );
}

export default RingkasanPesanan;