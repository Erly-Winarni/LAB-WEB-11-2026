# LAB-WEB-11-2026

Repository ini digunakan sebagai tempat pengumpulan tugas **Praktikum Lab Web 11 2026**.

Setiap mahasiswa telah disediakan folder berdasarkan **NIM masing-masing**. Tugas dikumpulkan ke dalam folder praktikum yang sesuai di dalam folder NIM tersebut.

---

# 📥 Alur Pengumpulan Tugas

### Langkah 1 Fork Repository (Hanya Sekali)

1. Buka repository utama **LAB-WEB-11-2026** di GitHub.
2. Klik tombol **`Fork`** di pojok kanan atas halaman.
3. Pastikan opsi **"Copy the `main` branch only"** tercentang.
4. Klik **`Create fork`**.
5. Repository akan ter-copy ke akun GitHub Anda.

Contoh:

```text
Repository utama:
https://github.com/Erly-Winarni/LAB-WEB-11-2026

Repository fork:
https://github.com/USERNAME-ANDA/LAB-WEB-11-2026
```

> ⚠️ Selanjutnya, seluruh proses pengerjaan dan push tugas dilakukan melalui **repository fork Anda**, bukan repository utama.

---

### Langkah 2 Clone Fork ke Komputer Lokal (Hanya Sekali)

Clone **repository fork Anda**, bukan repository utama:

```bash
git clone https://github.com/USERNAME-ANDA/LAB-WEB-11-2026.git
cd LAB-WEB-11-2026
```

Kemudian tambahkan repository utama sebagai `upstream`:

```bash
git remote add upstream https://github.com/Erly-Winarni/LAB-WEB-11-2026.git
```

Verifikasi remote:

```bash
git remote -v
```

Output yang diharapkan:

```text
origin    https://github.com/USERNAME-ANDA/LAB-WEB-11-2026.git (fetch)
origin    https://github.com/USERNAME-ANDA/LAB-WEB-11-2026.git (push)
upstream  https://github.com/Erly-Winarni/LAB-WEB-11-2026.git (fetch)
upstream  https://github.com/Erly-Winarni/LAB-WEB-11-2026.git (push)
```

Keterangan:

* `origin` → repository fork milik Anda.
* `upstream` → repository utama **Erly-Winarni/LAB-WEB-11-2026**.

---

### Langkah 3 Sinkronisasi Sebelum Mengerjakan Tugas Baru

**Setiap kali akan mengerjakan tugas baru**, sinkronkan repository terlebih dahulu untuk mendapatkan perubahan terbaru dari repository utama.

```bash
git fetch upstream
git merge upstream/main
git push origin main
```

> 💡 Langkah ini penting karena folder praktikum atau informasi tugas baru dapat ditambahkan ke repository utama setelah praktikum berlangsung.

Dengan melakukan sinkronisasi, repository fork Anda akan memiliki versi terbaru dari repository utama.

---

### Langkah 4 Kerjakan & Simpan Tugas

Buka folder **NIM Anda** yang telah disediakan di dalam repository.

Kemudian masuk ke folder praktikum sesuai dengan tugas yang sedang dikerjakan.

Contoh, jika NIM Anda adalah `H071241001` dan sedang mengerjakan Praktikum 01:

```text
H071241001/
└── Praktikum-01/
```

Seluruh file tugas **Praktikum 01** harus diletakkan di dalam folder tersebut.

Untuk Praktikum 02:

```text
H071241001/
└── Praktikum-02/
```

> ⚠️ **Jangan mengubah, menghapus, atau mengunggah tugas ke folder NIM mahasiswa lain.**

> ⚠️ **Jangan mengumpulkan tugas langsung di root repository.**

Pastikan seluruh file yang diperlukan untuk tugas sudah berada di folder praktikum yang sesuai.

---

### Langkah 5 Commit & Push ke Fork

Setelah tugas selesai, buka terminal pada folder repository kemudian jalankan:

```bash
git add .
```

Commit tugas menggunakan format:

```text
type: Submit Tugas Praktikum XX - NIM - Nama Lengkap
```

Untuk pengumpulan tugas praktikum, gunakan **`feat`** sebagai `type`.

Contoh:

```bash
git commit -m "feat: Submit Tugas Praktikum 01 - H071241001 - Erly Winarni"
```

Kemudian push ke repository fork:

```bash
git push origin main
```

#### Aturan Commit Message

Gunakan format **Conventional Commit** berikut:

```text
type: deskripsi
```

Jenis `type` yang digunakan:

| Type       | Penggunaan                                     |
| ---------- | ---------------------------------------------- |
| `feat`     | Menambahkan fitur atau tugas baru              |
| `fix`      | Memperbaiki kesalahan atau bug                 |
| `docs`     | Menambahkan atau memperbarui dokumentasi       |
| `refactor` | Mengubah struktur kode tanpa mengubah fungsi   |
| `style`    | Perubahan format atau tampilan kode            |
| `chore`    | Perubahan konfigurasi atau kebutuhan pendukung |

**Untuk pengumpulan tugas praktikum, gunakan `feat` sebagai default.**

Contoh:

```bash
git commit -m "feat: Submit Tugas Praktikum 01 - H071241001 - Erly Winarni"
```

```bash
git commit -m "feat: Submit Tugas Praktikum 05 - H071241002 - Ly"
```

> 💡 Gunakan nomor praktikum, NIM, dan nama lengkap yang sesuai dengan identitas Anda.

---

### Langkah 6 — Buat Pull Request (PR)

Setelah berhasil melakukan push ke repository fork:

1. Buka repository **fork Anda** di GitHub.
2. Klik **`Contribute`**.
3. Pilih **`Open Pull Request`**.
4. Pastikan arah Pull Request sudah benar:

```text
base: Erly-Winarni/LAB-WEB-11-2026 (main)
              ←
head: USERNAME-ANDA/LAB-WEB-11-2026 (main)
```

5. Isi judul Pull Request dengan format:

```text
feat: Submit Tugas Praktikum XX - NIM - Nama Lengkap
```

Contoh:

```text
feat: Submit Tugas Praktikum 01 - H071241001 - Erly Winarni
```

6. Tambahkan keterangan singkat jika diperlukan.
7. Klik **`Create Pull Request`**.

> ⏳ **Pull Request akan diperiksa oleh asisten praktikum.** Pastikan tugas sudah berada di folder yang benar sebelum membuat Pull Request.

---

# 🔄 Ringkasan Alur Pengumpulan

```text
┌─────────────────────────────────────────────────────────────┐
│                    SETUP AWAL (SEKALI)                      │
│                                                             │
│   Fork Repository → Clone Fork → Tambah Upstream            │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 SETIAP PENGUMPULAN TUGAS                    │
│                                                             │
│   Sync Upstream                                             │
│        ↓                                                    │
│   Kerjakan Tugas                                            │
│        ↓                                                    │
│   Folder NIM → Folder Praktikum                             │
│        ↓                                                    │
│   Commit → Push ke Fork                                     │
│        ↓                                                    │
│   Buat Pull Request                                         │
└─────────────────────────────────────────────────────────────┘
```

---

# ⚠️ Hal yang Wajib Diperhatikan

* Gunakan **repository fork** untuk mengerjakan dan mengunggah tugas.
* Selalu lakukan **sinkronisasi dengan upstream** sebelum mengerjakan tugas baru.
* Upload tugas pada **folder NIM masing-masing**.
* Letakkan tugas pada **folder praktikum yang sesuai**.
* Jangan mengubah atau menghapus folder mahasiswa lain.
* Jangan mengunggah tugas langsung ke repository utama.
* Gunakan format **Conventional Commit** yang telah ditentukan.
* Untuk pengumpulan tugas, gunakan **`feat:`** sebagai default.
* Pastikan Pull Request mengarah ke repository utama **Erly-Winarni/LAB-WEB-11-2026**.
* Pastikan seluruh file yang diperlukan sudah di-push sebelum membuat Pull Request.
* Jangan mengunggah `node_modules/`, file hasil build, atau file yang tidak diperlukan lainnya.

---

## 📌 Catatan

Repository utama merupakan sumber informasi dan struktur pengumpulan tugas. Apabila terdapat perubahan folder, tugas, atau ketentuan pengumpulan, lakukan **sinkronisasi upstream** terlebih dahulu sebelum mengerjakan atau mengumpulkan tugas.
