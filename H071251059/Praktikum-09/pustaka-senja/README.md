# Pustaka Senja - Praktikum 9 (Next.js + PostgreSQL, raw SQL)

1. Buat database `pustaka_senja` di pgAdmin, lalu jalankan isi `db/schema.sql` di Query Tool.
2. Edit `.env.local`, ganti `PASSWORD_ANDA` pada `DATABASE_URL`.
3. `npm install` lalu `npm run dev`, buka http://localhost:3000

Catatan: tanpa ORM. Semua query SQL ditulis langsung dengan `pool.query()` (driver `pg`)
dan memakai parameterized query ($1, $2, ...). `.env.local` tidak boleh di-commit.
