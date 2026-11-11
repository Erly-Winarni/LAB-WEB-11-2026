"use server";
// Server Actions untuk Create, Update, Delete. Berjalan di server, boleh akses database.
// Catatan: berkas "use server" hanya boleh mengekspor fungsi async.

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import pool from "@/lib/db";
import { parseId } from "@/lib/buku";
import { daftarKategori } from "@/lib/kategori";

// Helper internal (tidak diekspor): validasi input form tambah/edit.
function validasiBuku(formData) {
  const values = {
    judul: String(formData.get("judul") ?? "").trim(),
    penulis: String(formData.get("penulis") ?? "").trim(),
    kategori: String(formData.get("kategori") ?? "").trim(),
    tahun: String(formData.get("tahun") ?? "").trim(),
    tersedia: String(formData.get("tersedia") ?? "").trim(),
    sinopsis: String(formData.get("sinopsis") ?? "").trim(),
  };
  const errors = [];
  const tahunSekarang = new Date().getFullYear();

  if (!values.judul) errors.push("Judul wajib diisi.");
  else if (values.judul.length > 200) errors.push("Judul maksimal 200 karakter.");

  if (!values.penulis) errors.push("Penulis wajib diisi.");
  else if (values.penulis.length > 150) errors.push("Penulis maksimal 150 karakter.");

  if (!daftarKategori.includes(values.kategori)) errors.push("Pilih kategori yang valid.");

  if (!/^\d{4}$/.test(values.tahun) || Number(values.tahun) < 1000 || Number(values.tahun) > tahunSekarang) {
    errors.push(`Tahun terbit harus berupa angka 4 digit (1000 - ${tahunSekarang}).`);
  }

  if (values.tersedia !== "true" && values.tersedia !== "false") {
    errors.push("Pilih status ketersediaan.");
  }

  if (!values.sinopsis) errors.push("Sinopsis wajib diisi.");

  return { errors, values };
}

// CREATE: dipakai dengan useActionState, sehingga signature-nya (prevState, formData).
export async function tambahBuku(prevState, formData) {
  const { errors, values } = validasiBuku(formData);
  if (errors.length > 0) {
    return { errors, sukses: null, values, kunci: Date.now() };
  }

  try {
    // Parameterized query: nilai dikirim terpisah dari string SQL (aman dari SQL Injection).
    await pool.query(
      "INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis) VALUES ($1, $2, $3, $4, $5, $6)",
      [
        values.judul,
        values.penulis,
        values.kategori,
        Number(values.tahun),
        values.tersedia === "true",
        values.sinopsis,
      ]
    );
  } catch (err) {
    console.error("Gagal INSERT buku:", err.message);
    return { errors: ["Terjadi kesalahan pada database. Coba lagi."], sukses: null, values, kunci: Date.now() };
  }

  revalidatePath("/katalog");
  revalidatePath("/");
  return { errors: [], sukses: `Buku "${values.judul}" berhasil ditambahkan.`, values: null, kunci: Date.now() };
}

// UPDATE: argumen pertama (id) diikat lewat .bind(null, id) di halaman edit.
export async function updateBuku(idMentah, prevState, formData) {
  const id = parseId(idMentah);
  if (id === null) {
    return { errors: ["ID buku tidak valid."], sukses: null, values: null, kunci: Date.now() };
  }

  const { errors, values } = validasiBuku(formData);
  if (errors.length > 0) {
    return { errors, sukses: null, values, kunci: Date.now() };
  }

  let hasil;
  try {
    // WHERE id = $7 memastikan hanya buku yang dipilih yang berubah.
    hasil = await pool.query(
      `UPDATE buku
          SET judul = $1, penulis = $2, kategori = $3, tahun = $4, tersedia = $5, sinopsis = $6
        WHERE id = $7`,
      [
        values.judul,
        values.penulis,
        values.kategori,
        Number(values.tahun),
        values.tersedia === "true",
        values.sinopsis,
        id,
      ]
    );
  } catch (err) {
    console.error("Gagal UPDATE buku:", err.message);
    return { errors: ["Terjadi kesalahan pada database. Coba lagi."], sukses: null, values, kunci: Date.now() };
  }

  if (hasil.rowCount === 0) {
    return { errors: ["Buku tidak ditemukan (mungkin sudah dihapus)."], sukses: null, values, kunci: Date.now() };
  }

  revalidatePath("/katalog");
  revalidatePath(`/katalog/${id}`);
  revalidatePath("/");
  // redirect() melempar sinyal khusus, jadi harus berada di luar try/catch.
  redirect(`/katalog/${id}`);
}

// DELETE: dipanggil dari TombolHapus (Client Component) setelah pengguna menyetujui konfirmasi.
export async function hapusBuku(idMentah, kembaliKeKatalog = false) {
  const id = parseId(idMentah);
  if (id === null) return;

  // WHERE id = $1 wajib agar hanya satu buku yang terhapus.
  await pool.query("DELETE FROM buku WHERE id = $1", [id]);

  revalidatePath("/katalog");
  revalidatePath("/");
  if (kembaliKeKatalog) redirect("/katalog");
}
