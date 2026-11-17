function RingkasanPesanan({
  pesanan,
  totalItem,
  totalHarga,
  onTambah,
  onKurang,
  onHapus,
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 flex flex-col h-full">
      <div className="flex items-center justify-between pb-4 border-b border-stone-100">
        <div className="flex items-center gap-2">
          <span className="text-xl">📋</span>
          <h2 className="text-lg font-bold text-stone-900">Ringkasan Pesanan</h2>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900">
          {totalItem} Item
        </span>
      </div>

      {pesanan.length === 0 ? (
        <div className="py-12 px-4 text-center my-auto">
          <div className="w-16 h-16 mx-auto mb-3 text-4xl flex items-center justify-center rounded-2xl bg-amber-50 text-amber-400">
            🛒
          </div>
          <p className="text-sm font-medium text-stone-700">
            Pesanan Masih Kosong
          </p>
          <p className="text-xs text-stone-400 mt-1 max-w-[200px] mx-auto">
            Silakan pilih menu favorit Anda di samping untuk memulai pesanan.
          </p>
        </div>
      ) : (
        <div className="flex-1 flex flex-col justify-between mt-4">
          {/* List Pesanan */}
          <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1">
            {pesanan.map((item) => {
              const subtotal = item.harga * item.jumlah;
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-amber-50/50 border border-amber-100/70"
                >
                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="text-sm font-semibold text-stone-800 truncate">
                      {item.nama}
                    </h4>
                    <p className="text-xs text-stone-500">
                      Rp {item.harga.toLocaleString("id-ID")} × {item.jumlah}
                    </p>
                    <p className="text-xs font-bold text-amber-700 mt-0.5">
                      Rp {subtotal.toLocaleString("id-ID")}
                    </p>
                  </div>

                  {/* Tombol Kontrol Kuantitas */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => onKurang(item.id)}
                      className="w-7 h-7 rounded-lg bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 flex items-center justify-center font-bold text-sm cursor-pointer transition-colors"
                      title="Kurangi satu"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-xs font-bold text-stone-800">
                      {item.jumlah}
                    </span>
                    <button
                      type="button"
                      onClick={() => onTambah(item)}
                      className="w-7 h-7 rounded-lg bg-amber-600 text-white hover:bg-amber-700 flex items-center justify-center font-bold text-sm cursor-pointer transition-colors"
                      title="Tambah satu"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => onHapus(item.id)}
                      className="ml-1 text-stone-400 hover:text-rose-500 p-1 text-xs cursor-pointer transition-colors"
                      title="Hapus menu"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Rincian Total Pesanan */}
          <div className="mt-5 pt-4 border-t border-stone-100 space-y-2">
            <div className="flex justify-between text-xs text-stone-600">
              <span>Total Menu Dipesan</span>
              <span className="font-semibold text-stone-800">{totalItem} porsi</span>
            </div>
            <div className="flex justify-between items-baseline pt-1">
              <span className="text-sm font-bold text-stone-900">Total Harga</span>
              <span className="text-lg font-extrabold text-amber-700">
                Rp {totalHarga.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RingkasanPesanan;
