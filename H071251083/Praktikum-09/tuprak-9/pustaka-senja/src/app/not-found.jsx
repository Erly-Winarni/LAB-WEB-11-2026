import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Buku tidak ditemukan</h1>
      <Link href="/katalog" className="text-amber-700 hover:underline">
        &larr; Kembali ke Katalog
      </Link>
    </div>
  );
}
