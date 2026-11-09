const dataPraktikan = [
  { nama: "lily", nilaiTugas: [90, 95, 97] },
  { nama: "Aisyah", nilaiTugas: [60, 60, 60] },
  { nama: "Anggi", nilaiTugas: [90, 90, 90] },
  { nama: "Ayu", nilaiTugas: [75, 75, 75] },
  { nama: "Ica", nilaiTugas: [45, 45, 45] }
];

function hitungNilaiAkhir(nilaiTugas) {
    const totalNilai = nilaiTugas.reduce((total, nilai) => total + nilai, 0);
    return nilaiAkhir = totalNilai / nilaiTugas.length;
}

const namaAsisten = prompt("Masukkan nama Anda: ");

if (namaAsisten != "" && namaAsisten != null) {
    alert("Selamat datang, " + namaAsisten + "!");

    const pengumuman = dataPraktikan.map(praktikan => {
        const nilaiAkhir = hitungNilaiAkhir(praktikan.nilaiTugas);
        return {
            nama: praktikan.nama,
            nilaiAkhir: nilaiAkhir,
            status: nilaiAkhir >= 75 ? "Lulus" : "Tidak Lulus"
        };
    });

    console.table(pengumuman);

    document.write(`
    <div style="font-family: 'Segoe UI', sans-serif; max-width: 900px; margin: 40px auto; padding: 24px; background-color: #ffffff; box-shadow: 0 10px 25px rgba(0,0,0,0.05); border-radius: 12px;">
      <header style="border-bottom: 2px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="margin: 0; color: #0f172a; font-size: 24px;">Sistem Evaluasi Praktikum</h1>
        <p style="margin: 6px 0 0 0; color: #64748b; font-size: 14px;">
          Asisten Lab Bertugas: <strong style="color: #2563eb;">${namaAsisten}</strong>
        </p>
      </header>

      <div style="display: flex; flex-wrap: wrap; gap: 16px;">
  `);

pengumuman.forEach((item) => {
    const isLulus = item.status === "Lulus";
    const warnaStatus = isLulus ? "#16a34a" : "#dc2626";
    const bgBadge = isLulus ? "#dcfce7" : "#fee2e2";
    const borderColor = isLulus ? "#bbf7d0" : "#fecaca";

    document.write(`
      <div style="flex: 1 1 calc(33.333% - 16px); min-width: 220px; box-sizing: border-box; border: 1px solid ${borderColor}; border-radius: 10px; padding: 16px; background-color: #fafafa; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <h3 style="margin: 0 0 8px 0; color: #1e293b; font-size: 18px;">${item.nama}</h3>
          <p style="margin: 4px 0; color: #475569; font-size: 14px;">
            Rata-rata: <strong>${item.nilaiAkhir.toFixed(1)}</strong>
          </p>
        </div>

        <div style="margin-top: 12px;">
          <span style="display: inline-block; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; color: ${warnaStatus}; background-color: ${bgBadge};">
            ${item.status}
          </span>
        </div>
      </div>
    `);
  });

  document.write(`
      </div>
    </div>
  `);

} else {
    alert("Anda harus memasukkan nama terlebih dahulu");
    document.write("Refresh halaman ini dan masukkan nama Anda.");
}
