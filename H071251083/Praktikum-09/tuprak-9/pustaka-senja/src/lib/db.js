import { Pool } from "pg";

// dipakai bergantian oleh semua halaman.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Validasi id dari URL/form: harus bilangan bulat positif yang muat di kolom INTEGER.
// Mengembalikan angka, atau null jika tidak valid (misalnya "abc" atau "-1").
export function parseId(nilai) {
  if (!/^\d{1,9}$/.test(String(nilai))) return null;
  const id = Number(nilai);
  return id > 0 ? id : null;
}

export default pool;
