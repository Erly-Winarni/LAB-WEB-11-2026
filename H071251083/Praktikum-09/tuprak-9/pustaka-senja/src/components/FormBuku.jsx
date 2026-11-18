// Form dipakai bersama untuk Tambah dan Edit. Tanpa hook, jadi tetap Server Component.
const inputClass =
  "w-full border border-stone-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:border-amber-500";

function FormBuku({ action, buku, labelTombol }) {
  return (
    <form action={action} className="space-y-3">
      {buku && <input type="hidden" name="id" value={buku.id} />}
      <input name="judul" placeholder="Judul" defaultValue={buku?.judul} required maxLength={150} className={inputClass} />
      <input
        name="penulis"
        placeholder="Penulis"
        defaultValue={buku?.penulis}
        required
        maxLength={100}
        className={inputClass}
      />
      <div className="grid grid-cols-2 gap-3">
        <select name="kategori" defaultValue={buku?.kategori ?? "Teknologi"} className={inputClass}>
          <option value="Teknologi">Teknologi</option>
          <option value="Fiksi">Fiksi</option>
          <option value="Pengembangan Diri">Pengembangan Diri</option>
        </select>
        <input
          name="tahun"
          type="number"
          min="1000"
          max="2026"
          placeholder="Tahun terbit"
          defaultValue={buku?.tahun}
          required
          className={inputClass}
        />
      </div>
      <textarea name="sinopsis" rows={4} placeholder="Sinopsis" defaultValue={buku?.sinopsis} required className={inputClass} />
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="tersedia" defaultChecked={buku ? buku.tersedia : true} />
        Buku tersedia (tidak sedang dipinjam)
      </label>
      <button type="submit" className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold rounded-lg px-5 py-2">
        {labelTombol}
      </button>
    </form>
  );
}

export default FormBuku;
