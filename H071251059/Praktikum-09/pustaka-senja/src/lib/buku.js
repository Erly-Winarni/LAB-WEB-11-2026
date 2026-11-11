// Fungsi pembaca data (SELECT) untuk Server Component. Semua memakai raw SQL via pool.query().
import pool from "@/lib/db";

// Memvalidasi id dari URL. Hanya angka positif (maks 9 digit agar muat di INTEGER PostgreSQL).
// Mengembalikan number, atau null jika tidak valid (mencegah error query & input aneh).
export function parseId(nilai) {
  const teks = String(nilai);
  if (!/^\d{1,9}$/.test(teks)) return null;
  const angka = Number(teks);
  return angka > 0 ? angka : null;
}

// SELECT semua buku. Jika kategori diberikan, difilter dengan parameterized query ($1).
export async function getSemuaBuku(kategori = null) {
  if (kategori) {
    const hasil = await pool.query(
      "SELECT id, judul, penulis, kategori, tahun, tersedia, sinopsis FROM buku WHERE kategori = $1 ORDER BY id",
      [kategori]
    );
    return hasil.rows;
  }
  const hasil = await pool.query(
    "SELECT id, judul, penulis, kategori, tahun, tersedia, sinopsis FROM buku ORDER BY id"
  );
  return hasil.rows;
}

// SELECT satu buku berdasarkan id (parameterized). Mengembalikan objek atau null.
export async function getBukuById(id) {
  const hasil = await pool.query(
    "SELECT id, judul, penulis, kategori, tahun, tersedia, sinopsis FROM buku WHERE id = $1",
    [id]
  );
  return hasil.rows[0] ?? null;
}

// Buku yang tersedia, dibatasi jumlahnya (LIMIT juga diparameterisasi).
export async function getBukuTersedia(batas) {
  const hasil = await pool.query(
    "SELECT id, judul, penulis, kategori, tahun, tersedia, sinopsis FROM buku WHERE tersedia = TRUE ORDER BY id LIMIT $1",
    [batas]
  );
  return hasil.rows;
}

// Statistik koleksi dihitung langsung oleh PostgreSQL.
export async function getStatistik() {
  const hasil = await pool.query(
    `SELECT
       COUNT(*)::int                           AS total,
       COUNT(*) FILTER (WHERE tersedia)::int   AS tersedia,
       COUNT(*) FILTER (WHERE NOT tersedia)::int AS dipinjam
     FROM buku`
  );
  return hasil.rows[0];
}

// Jumlah buku per kategori (untuk kartu kategori di Beranda).
export async function getJumlahPerKategori() {
  const hasil = await pool.query(
    "SELECT kategori, COUNT(*)::int AS jumlah FROM buku GROUP BY kategori"
  );
  return hasil.rows;
}
