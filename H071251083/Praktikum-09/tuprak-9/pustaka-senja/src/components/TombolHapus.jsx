"use client";

import { hapusBuku } from "@/app/katalog/actions";

// Client Component: hanya bagian ini yang butuh confirm() milik browser.
function TombolHapus({ id }) {
  return (
    <form
      action={hapusBuku}
      onSubmit={(e) => {
        if (!confirm("Yakin hapus buku ini?")) e.preventDefault(); // batal -> data tetap aman
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="text-sm text-red-600 hover:underline">
        Hapus
      </button>
    </form>
  );
}

export default TombolHapus;
