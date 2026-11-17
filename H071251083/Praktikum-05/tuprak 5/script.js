const statusAnggota = document.getElementById("status-anggota");
const daftarAnggota = document.getElementById("daftar-anggota");
const judulTugas = document.getElementById("judul-tugas");
const ringkasan = document.getElementById("ringkasan");
const statusTugas = document.getElementById("status-tugas");
const kolomCari = document.getElementById("cari");
const daftarTugas = document.getElementById("daftar-tugas");
const kosong = document.getElementById("kosong");
const formTugas = document.getElementById("form-tugas");
const inputJudul = document.getElementById("judul-baru");
const tombolSimpan = document.getElementById("tombol-simpan");
const errorForm = document.getElementById("error-form");
const notifikasi = document.getElementById("notifikasi");

let idDipilih = null;

// daftar anggota 
async function muatAnggota() {
  statusAnggota.textContent = "Memuat anggota...";
  try {
    const respons = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!respons.ok) {
      throw new Error("Status " + respons.status);
    }
    const anggota = await respons.json();

    anggota.forEach((orang) => {
      const tombol = document.createElement("button");
      tombol.textContent = orang.name;
      tombol.setAttribute("class", "text-left border border-gray-300 hover:border-blue-500 p-2 rounded");
      tombol.addEventListener("click", () => {
        pilihAnggota(orang.id, orang.name, tombol);
      });
      daftarAnggota.appendChild(tombol);
    });

    statusAnggota.textContent = "";
  } catch (error) {
    statusAnggota.textContent = "Gagal memuat anggota: " + error.message;
  }
}

// tugas anggota 
async function pilihAnggota(id, nama, tombol) {
  idDipilih = id;

  // hanya satu anggota yang bertanda
  const semuaTombol = daftarAnggota.querySelectorAll("button");
  semuaTombol.forEach((b) => {
    b.classList.remove("bg-blue-600");
    b.classList.remove("text-white");
  });
  tombol.classList.add("bg-blue-600");
  tombol.classList.add("text-white");

  judulTugas.textContent = "Tugas " + nama;
  daftarTugas.innerHTML = "";
  ringkasan.textContent = "";
  kolomCari.value = "";
  kosong.classList.add("hidden");
  statusTugas.textContent = "Memuat tugas...";

  try {
    const respons = await fetch("https://jsonplaceholder.typicode.com/todos?userId=" + id);
    if (!respons.ok) {
      throw new Error("Status " + respons.status);
    }
    const tugas = await respons.json();

    tugas.forEach((t) => {
      buatTugas(t.title, t.completed);
    });

    statusTugas.textContent = "";
    perbaruiRingkasan();
  } catch (error) {
    statusTugas.textContent = "Gagal memuat tugas: " + error.message;
  }
}

// Membuat satu baris tugas 
function buatTugas(judulTugasBaris, selesai) {
  const li = document.createElement("li");
  const baris = document.createElement("div");
  baris.setAttribute("class", "flex items-center gap-2 border border-gray-300 rounded p-2");

  const teks = document.createElement("span");
  teks.setAttribute("class", "judul-tugas flex-1");
  teks.textContent = judulTugasBaris;
  baris.appendChild(teks);

  if (selesai) {
    teks.classList.add("line-through");
    teks.classList.add("text-gray-400");
  } else {
    // tombol Tandai selesai
    const tombolSelesai = document.createElement("button");
    tombolSelesai.textContent = "Tandai selesai";
    tombolSelesai.setAttribute("class", "text-sm bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded");
    tombolSelesai.addEventListener("click", () => {
      teks.classList.add("line-through");
      teks.classList.add("text-gray-400");
      tombolSelesai.remove();
      perbaruiRingkasan();
    });
    baris.appendChild(tombolSelesai);
  }

  // tombol Hapus
  const tombolHapus = document.createElement("button");
  tombolHapus.textContent = "Hapus";
  tombolHapus.setAttribute("class", "text-sm bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded");
  tombolHapus.addEventListener("click", () => {
    li.remove();
    perbaruiRingkasan();
    terapkanPencarian();
  });
  baris.appendChild(tombolHapus);

  li.appendChild(baris);
  daftarTugas.appendChild(li);
}

// Ringkasan 
function perbaruiRingkasan() {
  const semua = daftarTugas.querySelectorAll(".judul-tugas");
  let selesai = 0;
  semua.forEach((el) => {
    if (el.classList.contains("line-through")) {
      selesai++;
    }
  });
  ringkasan.textContent = selesai + " dari " + semua.length + " tugas selesai";
}

// pencarian 
function terapkanPencarian() {
  const kata = kolomCari.value.trim().toLowerCase();
  const semuaLi = daftarTugas.querySelectorAll("li");
  let cocok = 0;

  semuaLi.forEach((li) => {
    const teksTugas = li.querySelector(".judul-tugas").textContent.toLowerCase();
    if (teksTugas.includes(kata)) {
      li.classList.remove("hidden");
      cocok++;
    } else {
      li.classList.add("hidden");
    }
  });

  if (semuaLi.length > 0 && cocok === 0) {
    kosong.classList.remove("hidden");
  } else {
    kosong.classList.add("hidden");
  }
}

kolomCari.addEventListener("input", terapkanPencarian);

// tambah tugas 
function simpanTugas(judulBaru) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sudahAda = false;
      const semua = daftarTugas.querySelectorAll(".judul-tugas");
      semua.forEach((el) => {
        if (el.textContent.toLowerCase() === judulBaru.toLowerCase()) {
          sudahAda = true;
        }
      });

      if (sudahAda) {
        reject(new Error('Tugas "' + judulBaru + '" sudah ada di daftar.'));
      } else {
        resolve({ title: judulBaru, completed: false });
      }
    }, 1000);
  });
}

formTugas.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorForm.textContent = "";

  if (idDipilih === null) {
    errorForm.textContent = "Pilih anggota terlebih dahulu.";
    return;
  }

  const judulBaru = inputJudul.value.trim();
  if (judulBaru.length < 5) {
    errorForm.textContent = "Judul tugas minimal 5 karakter.";
    return;
  }

  tombolSimpan.textContent = "Menyimpan...";

  try {
    const tugasBaru = await simpanTugas(judulBaru);
    buatTugas(tugasBaru.title, tugasBaru.completed);
    perbaruiRingkasan();
    terapkanPencarian();
    inputJudul.value = "";

    notifikasi.textContent = "Tugas berhasil ditambahkan.";
    setTimeout(() => {
      notifikasi.textContent = "";
    }, 3000);
  } catch (error) {
    errorForm.textContent = error.message;
  } finally {
    tombolSimpan.textContent = "Simpan";
  }
});

// Mulai saat halaman dibuka
muatAnggota();