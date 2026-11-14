# Kedai Kopi Senja

Halaman pesan menu mandiri untuk tablet. Tugas Praktikum 7: React Hooks (State & Props).

## Menjalankan

npm install
npm run dev

## State dan props

- dataMenu: ditulis sekali di App.jsx, dikirim lewat props ke MenuList lalu MenuCard.
- kategoriAktif dan pesanan: state di App.jsx (lifting state up).
- totalItem dan totalHarga: dihitung sekali di App, dikirim ke Navbar dan RingkasanPesanan.
- detailTerbuka: state milik tiap MenuCard.
- nama, meja, pesan galat, terkirim: state milik FormPesan.