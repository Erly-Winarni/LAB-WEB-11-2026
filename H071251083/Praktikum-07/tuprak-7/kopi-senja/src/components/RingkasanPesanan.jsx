function RingkasanPesanan({ items, totalItem, totalHarga }) {
  return (
    <section className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 className="mb-2 font-semibold">Ringkasan Pesanan</h2>
      {items.length === 0 ? (
        <p className="text-sm text-stone-500">Belum ada pesanan.</p>
      ) : (
        <ul className="space-y-1 text-sm">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>
                {item.nama} x{item.jumlah}
              </span>
              <span>Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}</span>
            </li>
          ))}
        </ul>
      )}
      <hr className="my-2" />
      <p className="flex justify-between rounded-lg bg-amber-100 px-3 py-2 text-sm font-bold text-amber-900">
        <span>{totalItem} item</span>
        <span>Rp {totalHarga.toLocaleString("id-ID")}</span>
      </p>
    </section>
  );
}

export default RingkasanPesanan;
