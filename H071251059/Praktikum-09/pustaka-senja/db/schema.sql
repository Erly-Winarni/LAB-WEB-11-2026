-- =====================================================================
-- Pustaka Senja - Praktikum 9
-- Jalankan di pgAdmin: klik kanan database "pustaka_senja" > Query Tool
-- (buat dulu databasenya:  CREATE DATABASE pustaka_senja;  lalu connect ke sana)
-- =====================================================================

-- DDL: membuat tabel buku
CREATE TABLE IF NOT EXISTS buku (
  id        SERIAL PRIMARY KEY,          -- ID otomatis (1, 2, 3, ...)
  judul     VARCHAR(200) NOT NULL,
  penulis   VARCHAR(150) NOT NULL,
  kategori  VARCHAR(50)  NOT NULL,       -- Teknologi | Fiksi | Pengembangan Diri
  tahun     INTEGER      NOT NULL,
  tersedia  BOOLEAN      NOT NULL DEFAULT TRUE,
  sinopsis  TEXT         NOT NULL
);

-- DML: 9 data awal (sama dengan Praktikum 8)
INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis) VALUES
('Clean Code', 'Robert C. Martin', 'Teknologi', 2008, TRUE,
 'Panduan menulis kode perangkat lunak yang bersih, mudah dibaca, dan mudah dipelihara oleh tim pengembang.'),
('Designing Data-Intensive Applications', 'Martin Kleppmann', 'Teknologi', 2017, TRUE,
 'Pembahasan mendalam mengenai arsitektur sistem terdistribusi, basis data, dan pengolahan data skala besar.'),
('Refactoring', 'Martin Fowler', 'Teknologi', 2018, FALSE,
 'Teknik sistematis untuk memperbaiki struktur internal kode program tanpa mengubah perilaku eksternalnya.'),
('Laut Bercerita', 'Leila S. Chudori', 'Fiksi', 2017, TRUE,
 'Kisah persahabatan, perjuangan, dan kehilangan para aktivis mahasiswa di penghujung era Orde Baru.'),
('Bumi Manusia', 'Pramoedya Ananta Toer', 'Fiksi', 1980, TRUE,
 'Perjalanan Minke, seorang pemuda pribumi terpelajar, dalam menghadapi ketidakadilan hukum kolonial di awal abad ke-20.'),
('Cantik Itu Luka', 'Eka Kurniawan', 'Fiksi', 2002, FALSE,
 'Epos keluarga Dewi Ayu di kota pesisir Halimunda yang memadukan sejarah kelam dengan unsur realisme magis.'),
('Atomic Habits', 'James Clear', 'Pengembangan Diri', 2018, TRUE,
 'Cara membangun kebiasaan baik yang bertahan lama dan menghentikan kebiasaan buruk melalui perubahan kecil setiap hari.'),
('Deep Work', 'Cal Newport', 'Pengembangan Diri', 2016, TRUE,
 'Strategi melatih fokus mendalam tanpa distraksi untuk menghasilkan karya bernilai tinggi di era digital.'),
('Filosofi Teras', 'Henry Manampiring', 'Pengembangan Diri', 2018, TRUE,
 'Penerapan filsafat Stoisisme kuno untuk menjaga ketenangan mental dan mengelola emosi negatif di kehidupan modern.');

-- Cek hasilnya (harus tampil 9 baris)
SELECT * FROM buku ORDER BY id;

-- (Opsional) mengulang dari awal:
-- TRUNCATE TABLE buku RESTART IDENTITY;
