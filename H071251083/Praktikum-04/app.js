
const dataPraktikan = [
  { nama: "Budi", nilaiTugas: [80, 85, 90] },
  { nama: "Siti", nilaiTugas: [60, 60, 60] },
  { nama: "Andi", nilaiTugas: [90, 90, 90] },
  { nama: "Dewi", nilaiTugas: [75, 75, 75] },
  { nama: "Eko", nilaiTugas: [45, 45, 45] }
];
 
const batasLulus = 75;
 
// VERIFIKASI ASISTEN LAB 
let namaAsisten = prompt("Masukkan nama Asisten Lab:");
 
function hitungRataRata(daftarNilai) {
  let total = 0;
  for (let nilai of daftarNilai) {
    total = total + nilai;
  }
  return total / daftarNilai.length;
}
 
function tentukanStatus(rataRata) {
  if (rataRata >= batasLulus) {
    return "Lulus";
  }
  return "Tidak Lulus";
}
 
function tentukanPredikat(rataRata) {
  if (rataRata >= 90) {
    return "A";
  }
  if (rataRata >= 75) {
    return "B";
  }
  if (rataRata >= 60) {
    return "C";
  }
  return "D";
}
 
function prosesData(data) {
  let hasil = [];
 
  for (let praktikan of data) {
    let rataRata = hitungRataRata(praktikan.nilaiTugas);
 
    let hasilPraktikan = {
      nama: praktikan.nama,
      nilaiTugas: praktikan.nilaiTugas,
      rataRata: Math.round(rataRata),
      predikat: tentukanPredikat(rataRata),
      status: tentukanStatus(rataRata)
    };
 
    hasil.push(hasilPraktikan);
  }
 
  return hasil;
}
 
function tampilkanKartu(p) {
  
  let warnaGaris = "border-red-500";
  let warnaLabel = "bg-red-100 text-red-700";
  let warnaBar = "bg-red-500";
 
  if (p.status === "Lulus") {
    warnaGaris = "border-green-500";
    warnaLabel = "bg-green-100 text-green-700";
    warnaBar = "bg-green-500";
  }
 
  document.write('<div class="bg-white rounded-xl border-t-4 p-5 shadow ' + warnaGaris + '">');
  document.write('<h2 class="text-xl font-bold">' + p.nama + '</h2>');
  document.write('<span class="px-3 py-1 rounded-full text-sm ' + warnaLabel + '">' + p.status + '</span>');
  document.write('<p class="text-4xl font-bold mt-4">' + p.rataRata + '</p>');
  document.write('<p class="text-sm text-gray-500">Predikat ' + p.predikat + '</p>');
  document.write('<div class="w-full h-3 bg-gray-200 rounded-full mt-3">');
  document.write('<div class="h-3 rounded-full ' + warnaBar + '" style="width:' + p.rataRata + '%"></div>');
  document.write('</div>');
  document.write('<p class="text-sm text-gray-600 mt-3">Nilai tugas: ' + p.nilaiTugas.join(", ") + '</p>');
  document.write('</div>');
}
 

function tampilkanBarisTabel(p) {
  document.write('<tr>');
  document.write('<td class="p-2 border">' + p.nama + '</td>');
  document.write('<td class="p-2 border text-center">' + p.rataRata + '</td>');
  document.write('<td class="p-2 border text-center">' + p.predikat + '</td>');
  document.write('<td class="p-2 border text-center">' + p.status + '</td>');
  document.write('</tr>');
}
 

function hitungJumlahLulus(hasil) {
  let jumlah = 0;
  for (let p of hasil) {
    if (p.status === "Lulus") {
      jumlah = jumlah + 1;
    }
  }
  return jumlah;
}
 

function tampilkanLaporan(hasil) {
  let jumlahLulus = hitungJumlahLulus(hasil);
  let jumlahTidakLulus = hasil.length - jumlahLulus;
 
  // Header
  document.write('<header class="bg-slate-800 text-white p-6 text-center">');
  document.write('<h1 class="text-3xl font-bold">Laporan Evaluasi Praktikum</h1>');
  document.write('<p class="mt-1">Asisten Lab: ' + namaAsisten + '</p>');
  document.write('</header>');
 
  document.write('<main class="max-w-5xl mx-auto p-4">');
 
  // Kartu evaluasi
  document.write('<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">');
  for (let p of hasil) {
    tampilkanKartu(p);
  }
  document.write('</section>');
 
  // Tabel ringkasan
  document.write('<section class="bg-white rounded-xl shadow p-4">');
  document.write('<table class="w-full border-collapse">');
  document.write('<caption class="font-bold text-lg mb-2">Ringkasan Nilai</caption>');
 
  document.write('<thead class="bg-slate-200">');
  document.write('<tr>');
  document.write('<th scope="col" class="p-2 border">Nama</th>');
  document.write('<th scope="col" class="p-2 border">Rata-rata</th>');
  document.write('<th scope="col" class="p-2 border">Predikat</th>');
  document.write('<th scope="col" class="p-2 border">Status</th>');
  document.write('</tr>');
  document.write('</thead>');
 
  document.write('<tbody>');
  for (let p of hasil) {
    tampilkanBarisTabel(p);
  }
  document.write('</tbody>');
 
  document.write('<tfoot>');
  document.write('<tr><td colspan="4" class="p-2 border bg-slate-100">');
  document.write('Total: ' + hasil.length + ' praktikan, ' + jumlahLulus + ' lulus, ' + jumlahTidakLulus + ' tidak lulus (batas lulus ' + batasLulus + ')');
  document.write('</td></tr>');
  document.write('</tfoot>');
 
  document.write('</table>');
  document.write('</section>');
 
  document.write('</main>');
 
  // Footer
  document.write('<footer class="text-center text-gray-500 text-sm p-4">&copy; 2026 Praktikum Pemrograman Web</footer>');
}
 
//PROGRAM UTAMA 
if (namaAsisten) {
  let hasilAkhir = prosesData(dataPraktikan);
  tampilkanLaporan(hasilAkhir);
  console.log(hasilAkhir);
} else {
  document.write('<p class="text-center text-red-600 font-bold p-10">Akses ditolak: nama Asisten Lab tidak dimasukkan.</p>');
}