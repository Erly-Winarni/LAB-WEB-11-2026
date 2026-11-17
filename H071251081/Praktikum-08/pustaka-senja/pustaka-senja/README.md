# Pustaka Senja

Aplikasi multi-halaman untuk ruang baca Pustaka Senja.
Tugas Praktikum 8: Framework React (Next.js Intro).

## Menjalankan

npm install
npm run dev

Buka http://localhost:3000

## Halaman

- / : Beranda (Hero + statistik koleksi)
- /katalog : Katalog buku dengan filter kategori
- /katalog/[id] : Detail buku (dynamic route)
- /usulan : Form usulan buku

## Server dan Client Component

- Server Component: layout.jsx, Footer.jsx, Hero.jsx, app/page.jsx, katalog/[id]/page.jsx
- Client Component ("use client"): Navbar.jsx (usePathname), BukuCard.jsx (useState),
  katalog/page.jsx (useState), usulan/page.jsx (useState)

## Sumber data

Data 9 buku ditulis satu kali di src/data/dataBuku.js dan diimpor lewat "@/data/dataBuku".