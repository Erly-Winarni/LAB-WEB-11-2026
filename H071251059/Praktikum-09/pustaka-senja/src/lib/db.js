// Koneksi PostgreSQL (HANYA dipakai di kode server: Server Component & Server Action).
// Jangan mengimpor berkas ini dari Client Component ("use client").
import { Pool } from "pg";

// Saat development, Next.js me-reload modul berulang kali. Pool disimpan di globalThis
// agar tidak membuat koneksi baru setiap reload (menghindari "too many connections").
const globalUntukPool = globalThis;

const pool =
  globalUntukPool.__pgPool ??
  new Pool({ connectionString: process.env.DATABASE_URL });

if (process.env.NODE_ENV !== "production") {
  globalUntukPool.__pgPool = pool;
}

export default pool;
