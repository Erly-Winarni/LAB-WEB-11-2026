const palet = [
  "bg-gradient-to-br from-[#1b2a41] to-[#0b1320] text-amber-200",
  "bg-gradient-to-br from-[#7a2e2e] to-[#3d1414] text-orange-100",
  "bg-gradient-to-br from-[#2f4a3a] to-[#142319] text-amber-100",
  "bg-gradient-to-br from-[#243b55] to-[#141e30] text-sky-100",
  "bg-gradient-to-br from-[#c8a46a] to-[#8a6a35] text-stone-900",
  "bg-gradient-to-br from-[#5b3a29] to-[#2b1a12] text-amber-100",
  "bg-gradient-to-br from-[#e8d9c0] to-[#cdb78f] text-stone-800",
  "bg-gradient-to-br from-[#3b2f4f] to-[#1d1629] text-violet-100",
  "bg-gradient-to-br from-[#b4532a] to-[#6e2c12] text-orange-50",
];

const ukuranTeks = {
  sm: { judul: "text-sm", penulis: "text-[0.6rem]" },
  lg: { judul: "text-3xl", penulis: "text-sm" },
};

function BukuSampul({ id, judul, penulis, ukuran = "sm", className = "" }) {
  const warna = palet[(Number(id) - 1 + palet.length) % palet.length];
  const teks = ukuranTeks[ukuran];

  return (
    <div
      className={`relative flex aspect-[2/3] flex-col justify-between overflow-hidden rounded-r-md rounded-l-sm border-l-[6px] border-black/30 p-4 text-center shadow-xl ${warna} ${className}`}
    >
      <div className="mx-auto h-px w-8 bg-current opacity-60" />
      <h3 className={`font-serif font-semibold leading-tight ${teks.judul}`}>{judul}</h3>
      <p className={`tracking-widest opacity-80 ${teks.penulis}`}>{penulis}</p>
    </div>
  );
}

export default BukuSampul;
