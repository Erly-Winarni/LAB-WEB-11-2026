"use client";
// Client Component: butuh window.confirm dan hook useTransition (interaktivitas browser).

import { useTransition } from "react";
import { hapusBuku } from "@/app/katalog/actions";

function TombolHapus({ id, judul, kembaliKeKatalog = false }) {
  const [sedangProses, startTransition] = useTransition();

  function handleKlik() {
    // Jika pengguna membatalkan, tidak ada yang dijalankan dan data tetap aman.
    const setuju = window.confirm(`Hapus buku "${judul}"? Tindakan ini tidak bisa dibatalkan.`);
    if (!setuju) return;

    startTransition(async () => {
      await hapusBuku(id, kembaliKeKatalog);
    });
  }

  return (
    <button
      type="button"
      onClick={handleKlik}
      disabled={sedangProses}
      className="rounded-full border border-red-300 px-4 py-1.5 text-sm text-red-700 transition hover:bg-red-50 disabled:opacity-50"
    >
      {sedangProses ? "Menghapus..." : "Hapus"}
    </button>
  );
}

export default TombolHapus;
