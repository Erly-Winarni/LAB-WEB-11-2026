-- =====================================================================
-- Pustaka Senja - Praktikum 9
-- Jalankan di pgAdmin Query Tool.
-- Langkah 1: buat database (jalankan sendiri, terhubung ke DB "postgres"):
--     CREATE DATABASE pustaka_senja;
-- Langkah 2: buka Query Tool pada database pustaka_senja, lalu jalankan sisanya.
-- =====================================================================

-- DDL: struktur tabel
DROP TABLE IF EXISTS buku;

CREATE TABLE buku (
  id        SERIAL PRIMARY KEY,
  judul     VARCHAR(200) NOT NULL,
  penulis   VARCHAR(150) NOT NULL,
  kategori  VARCHAR(80)  NOT NULL,
  tahun     INTEGER      NOT NULL,
  tersedia  BOOLEAN      NOT NULL DEFAULT TRUE,
  sinopsis  TEXT         NOT NULL
);

-- DML: 9 data awal
-- CATATAN: GANTI dengan 9 buku asli dari Praktikum 8 (judul, penulis,
-- kategori, tahun, status, sinopsis) agar sesuai ketentuan tugas.
INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis) VALUES
('Laskar Pelangi', 'Andrea Hirata', 'Novel', 2005, TRUE,
 'Kisah sepuluh anak dari Belitung yang berjuang menuntut ilmu di sekolah sederhana dengan semangat dan persahabatan.'),
('Bumi Manusia', 'Pramoedya Ananta Toer', 'Sejarah', 1980, FALSE,
 'Perjalanan Minke, pribumi terpelajar, menghadapi ketidakadilan kolonial pada awal abad ke-20.'),
('Laut Bercerita', 'Leila S. Chudori', 'Novel', 2017, TRUE,
 'Kisah aktivis mahasiswa yang hilang pada 1998 dan keluarga yang terus mencarinya.'),
('Filosofi Teras', 'Henry Manampiring', 'Pengembangan Diri', 2018, TRUE,
 'Pengantar filsafat Stoisisme untuk menghadapi emosi negatif dan hidup lebih tenang.'),
('Sapiens', 'Yuval Noah Harari', 'Sains', 2011, FALSE,
 'Sejarah singkat umat manusia dari zaman purba hingga era modern.'),
('Atomic Habits', 'James Clear', 'Pengembangan Diri', 2018, TRUE,
 'Cara membangun kebiasaan kecil yang memberi dampak besar secara konsisten.'),
('Cantik Itu Luka', 'Eka Kurniawan', 'Novel', 2002, TRUE,
 'Saga keluarga lintas generasi yang memadukan sejarah, mitos, dan realisme magis.'),
('Clean Code', 'Robert C. Martin', 'Teknologi', 2008, FALSE,
 'Panduan menulis kode yang bersih, mudah dibaca, dan mudah dipelihara.'),
('Negeri 5 Menara', 'Ahmad Fuadi', 'Novel', 2009, TRUE,
 'Enam santri dari berbagai daerah mengejar mimpi besar dengan prinsip man jadda wajada.');

-- Verifikasi (jadikan bukti F1):
SELECT * FROM buku ORDER BY id;
