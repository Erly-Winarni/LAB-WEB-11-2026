# Pustaka Senja

Tugas Praktikum 9 — Next.js Data Fetching & Database. Next.js App Router + Tailwind CSS + PostgreSQL (driver `pg`, raw SQL, tanpa ORM).

## Menyiapkan database

1. Buat database kosong bernama `pustaka_senja` di pgAdmin.
2. Buka Query Tool, jalankan seluruh isi `db/seed.sql` (membuat tabel `buku` + 9 data awal).
3. Ubah `PASSWORD_KAMU` di `.env.local` dengan password PostgreSQL kamu.
   Password berisi karakter khusus harus di-encode (`@` menjadi `%40`).

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Setiap kali `.env.local` diubah, hentikan server (Ctrl+C) lalu jalankan ulang.

## Berkas penting

| Berkas | Fungsi |
|---|---|
| `src/lib/db.js` | Koneksi `Pool` ke PostgreSQL |
| `src/app/katalog/actions.js` | Server Actions: `tambahBuku` (INSERT), `ubahBuku` (UPDATE), `hapusBuku` (DELETE) |
| `src/app/katalog/page.jsx` | Read (SELECT) + form tambah |
| `src/app/katalog/[id]/page.jsx` | Detail (SELECT ... WHERE id = $1) |
| `src/app/katalog/[id]/edit/page.jsx` | Form edit |
| `src/components/TombolHapus.jsx` | Client Component: konfirmasi `confirm()` sebelum hapus |

`.env.local` jangan diunggah ke repositori (sudah diabaikan `.gitignore`).
