// DATA PRAKTIKAN
const dataPraktikan = [
  { nama: "Karis", nilaiTugas: [80, 85, 90] },
  { nama: "Kesia", nilaiTugas: [60, 60, 60] },
  { nama: "Aisya", nilaiTugas: [90, 90, 90] },
  { nama: "Amelia", nilaiTugas: [75, 75, 75] },
  { nama: "Nadhifa", nilaiTugas: [45, 45, 45] }
];


const namaAsisten = prompt("Masukkan nama Anda (Asisten Lab):");


function prosesData(data) {
  return data.map(function (p) {
    const total = p.nilaiTugas.reduce((a, b) => a + b, 0);
    const rata = total / p.nilaiTugas.length;
    let status = "Tidak Lulus";
    if (rata >= 75) {
      status = "Lulus";
    }
    return { nama: p.nama, rataRata: rata, status: status };
  });
}


document.write(
  "<style>" +
    "body{font-family:Arial;background:#f1f5f9;margin:0;padding:40px 20px}" +
    ".box{max-width:760px;margin:auto;background:white;padding:30px;" +
    "border-radius:16px;box-shadow:0 4px 16px rgba(0,0,0,0.08)}" +
    "h1{margin:0;color:#1e293b;font-size:36px;font-weight:bold;letter-spacing:-1px}" +
    ".sub{color:#64748b;margin:4px 0 20px;padding-bottom:16px;border-bottom:1px solid #eee}" +
    ".info{background:#eff6ff;border-left:4px solid #3b82f6;color:#1e40af;padding:14px 18px;margin-bottom:16px}" +
    ".tolak{background:#fef2f2;border-left-color:#dc2626;color:#991b1b}" +
    ".baris{display:flex;justify-content:space-between;align-items:center;" +
    "border:1px solid #e5e7eb;border-radius:10px;padding:14px 18px;margin-bottom:12px}" +
    ".baris h3{margin:0;color:#000;font-weight:bold}.baris p{margin:4px 0 0;color:#475569;font-size:14px}" +
    ".badge{padding:4px 12px;border-radius:999px;font-size:13px;font-weight:bold}" +
    ".lulus{background:#dcfce7;color:#166534}" +
    ".gagal{background:#fee2e2;color:#991b1b}" +
    "</style>" +
    '<div class="box">' +
    "<h1>Sistem Laporan Praktikum</h1>" +
    '<div class="sub">Evaluasi kelulusan berbasis JavaScript murni</div>'
);

if (namaAsisten) {
  const hasil = prosesData(dataPraktikan);

  document.write(
    '<div class="info"><b>Selamat datang Asisten ' + namaAsisten + "!</b><br>" +
    "Berikut adalah laporan hasil evaluasi praktikum.</div>"
  );

  for (const p of hasil) {
    let kelas = "gagal";
    if (p.status == "Lulus") {
      kelas = "lulus";
    }
    document.write(
      '<div class="baris"><div><h3>' + p.nama + "</h3>" +
      "<p>Rata-rata: " + p.rataRata + "</p></div>" +
      '<span class="badge ' + kelas + '">' + p.status + "</span></div>"
    );
  }

  
  console.log(hasil);
} else {
  document.write(
    '<div class="info tolak"><b>Akses Ditolak</b><br>' +
    "Anda tidak memasukkan identitas asisten.</div>"
  );
}

document.write("</div>");