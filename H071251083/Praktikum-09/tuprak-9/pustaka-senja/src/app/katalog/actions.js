"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import pool, { parseId } from "@/lib/db";

const daftarKategori = ["Teknologi", "Fiksi", "Pengembangan Diri"];

// Membaca dan memvalidasi isi form. Mengembalikan { data } atau { error }.
function bacaForm(formData) {
  const judul = String(formData.get("judul") ?? "").trim();
  const penulis = String(formData.get("penulis") ?? "").trim();
  const kategori = String(formData.get("kategori") ?? "");
  const sinopsis = String(formData.get("sinopsis") ?? "").trim();
  const tahunTeks = String(formData.get("tahun") ?? "").trim();
  const tersedia = formData.get("tersedia") === "on";

  if (!judul || !penulis || !sinopsis || !tahunTeks) return { error: "Judul, penulis, tahun, dan sinopsis wajib diisi." };
  if (judul.length > 150) return { error: "Judul maksimal 150 karakter." };
  if (penulis.length > 100) return { error: "Penulis maksimal 100 karakter." };
  if (!daftarKategori.includes(kategori)) return { error: "Kategori tidak valid." };
  if (!/^\d{4}$/.test(tahunTeks) || Number(tahunTeks) < 1000 || Number(tahunTeks) > 2026) {
    return { error: "Tahun terbit harus berupa angka 4 digit (1000-2026)." };
  }

  return { data: { judul, penulis, kategori, tahun: Number(tahunTeks), tersedia, sinopsis } };
}

export async function tambahBuku(formData) {
  const { data, error } = bacaForm(formData);
  if (error) redirect(`/katalog?error=${encodeURIComponent(error)}`);

  await pool.query(
    "INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis) VALUES ($1, $2, $3, $4, $5, $6)",
    [data.judul, data.penulis, data.kategori, data.tahun, data.tersedia, data.sinopsis],
  );

  revalidatePath("/");
  revalidatePath("/katalog");
  redirect("/katalog");
}

export async function ubahBuku(formData) {
  const id = parseId(formData.get("id"));
  if (id === null) redirect("/katalog");

  const { data, error } = bacaForm(formData);
  if (error) redirect(`/katalog/${id}/edit?error=${encodeURIComponent(error)}`);

  const hasil = await pool.query(
    "UPDATE buku SET judul = $1, penulis = $2, kategori = $3, tahun = $4, tersedia = $5, sinopsis = $6 WHERE id = $7",
    [data.judul, data.penulis, data.kategori, data.tahun, data.tersedia, data.sinopsis, id],
  );
  if (hasil.rowCount === 0) redirect("/katalog"); // buku sudah tidak ada

  revalidatePath("/");
  revalidatePath("/katalog");
  revalidatePath(`/katalog/${id}`);
  redirect(`/katalog/${id}`);
}

export async function hapusBuku(formData) {
  const id = parseId(formData.get("id"));
  if (id === null) return;

  await pool.query("DELETE FROM buku WHERE id = $1", [id]);

  revalidatePath("/");
  revalidatePath("/katalog");
}
