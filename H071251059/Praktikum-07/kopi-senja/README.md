# Kedai Kopi Senja

Halaman pemesanan mandiri (tablet di meja) untuk Kedai Kopi Senja. Dibuat dengan React (Vite) + Tailwind CSS v3.

## Menjalankan

```bash
npm install
npm run dev
```

Buka alamat yang tampil di terminal (biasanya http://localhost:5173).

## Struktur state (App.jsx)

| State | Fungsi |
| --- | --- |
| `kategoriAktif` | Kategori menu yang sedang dipilih |
| `pesanan` | Daftar `{ id, jumlah }` pesanan |
| `ucapan` | Data ucapan terima kasih setelah pesanan terkirim |

Jumlah item, total harga, dan rincian pesanan **dihitung** dari `pesanan` (bukan disimpan di state lain),
sehingga angka di Navbar dan di Ringkasan Pesanan selalu sama.

State lokal: `MenuCard` (`detailTerbuka`, independen per kartu) dan `FormPesan` (`nama`, `meja`, `error`).
