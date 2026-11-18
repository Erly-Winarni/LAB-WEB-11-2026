# Kedai Kopi Senja

Tugas Praktikum 7 — React Hooks (State & Props). React (Vite) + Tailwind CSS.

## Menjalankan

```bash
npm install
npm run dev
```

## Catatan desain state

- `App.jsx`: data menu, `kategoriAktif`, dan `pesanan` (array `{ id, jumlah }`).
- Jumlah item dan total harga **dihitung dari `pesanan`** (bukan state terpisah), sehingga Navbar dan Ringkasan selalu menampilkan angka yang sama.
- `MenuCard.jsx`: state `terbuka` sendiri-sendiri, jadi detail satu menu tidak memengaruhi menu lain.
- `FormPesan.jsx`: state `nama`, `meja`, `error`, `terkirim`.
