 
// DEKLARASI ELEMEN DOM
const usersListEl = document.getElementById('users-list');
const usersMsgEl = document.getElementById('users-msg');

const welcomePanel = document.getElementById('welcome-panel');
const todoPanel = ocument.getElementById('todo-panel');
const todoTitleEl = document.getElementById('todo-title');
const todoSummaryEl = document.getElementById('todo-summary');
const todosListEl = document.getElementById('todos-list');
const todosMsgEl = document.getElementById('todos-msg');

const searchInput = document.getElementById('search-input');
const noMatchMsg = document.getElementById('no-match-msg');

const addForm = document.getElementById('add-form');
const addInput = document.getElementById('add-input');
const btnSubmit = document.getElementById('btn-submit');
const formError = document.getElementById('form-error');
const toast = document.getElementById('toast');

let userButtons = [];

// F1. MENAMPILKAN DAFTAR ANGGOTA
async function loadUsers() {
    try {
        // F1 Poin 2: memuat anggota
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Cek apakah response tidak ok (F1 Poin 4)
        if (!response.ok) {
            throw new Error(`Gagal memuat. Status: ${response.status}`);
        }

        const users = await response.json();
        usersMsgEl.textContent = ""; 
        usersMsgEl.classList.add('hidden');

        // F1 Poin 3: Membuat elemen dengan createElement
        users.forEach(user => {
            const btn = document.createElement('button');
            btn.className = 'w-full text-left p-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700';
            btn.textContent = user.name;
            
         // addEventListener 
            btn.addEventListener('click', () => {
                selectUser(user.id, user.name, btn);
            });

            usersListEl.appendChild(btn);
            userButtons.push(btn);
        });

    } catch (error) {
        // F1 Poin 4: Tampilkan pesan error jika putus/gagal
        usersMsgEl.textContent = `Error: ${error.message}`;
        usersMsgEl.classList.remove('text-slate-500');
        usersMsgEl.classList.add('text-red-500');
    }
}

// F2. MENAMPILKAN TUGAS ANGGOTA

async function selectUser(userId, userName, clickedBtn) {
    // F2 Poin 2: Hapus penanda classList.remove() dari semua tombol anggota
    userButtons.forEach(btn => {
        btn.classList.remove('bg-red-50', 'border-indigo-400', 'text-indigo-700');
        btn.classList.add('bg-white', 'border-slate-200', 'text-slate-700');
    });

    //classList.add() 
    clickedBtn.classList.remove('bg-white', 'border-slate-200', 'text-slate-700');
    clickedBtn.classList.add('bg-red-50', 'border-indigo-400', 'text-indigo-700');

    // Tampilkan panel tugas, sembunyikan welcome panel
    welcomePanel.classList.add('hidden');
    todoPanel.classList.remove('hidden');
    todoPanel.classList.add('flex');

    // F2 Poin 3: Judul berubah
    todoTitleEl.textContent = `Tugas ${userName}`;

    // Reset pencarian dan form
    searchInput.value = "";
    addInput.value = "";
    formError.textContent = "";
    noMatchMsg.classList.add('hidden');

    // F2 Poin 4: innterhtml
    todosListEl.innerHTML = "";
    
    // loading tugas
    todosMsgEl.textContent = "Memuat tugas...";
    todosMsgEl.classList.remove('hidden', 'text-red-500');
    todosMsgEl.classList.add('text-slate-500');

    try {
        // F2 Poin 1: Fetch tugas anggota dari server
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        
        if (!response.ok) {
            throw new Error(`Gagal memuat tugas. Status: ${response.status}`);
        }

        const todos = await response.json();
        todosMsgEl.classList.add('hidden'); 
       
        todos.forEach(todo => {
            const li = createTodoElement(todo.title, todo.completed);
            todosListEl.appendChild(li);
        });

        
        updateSummary();

    } catch (error) {
        // F2 Poin 7: Tampilkan error
        todosMsgEl.textContent = `Error: ${error.message}`;
        todosMsgEl.classList.remove('text-slate-500');
        todosMsgEl.classList.add('text-red-500');
    }
}

// elemen <li> (F2 Poin 5 & F5 Poin 1,2)
function createTodoElement(titleText, isCompleted) {
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow transition-shadow';

    // F2 Poin 5:judul dan styling selesai
    const spanTitle = document.createElement('span');
    spanTitle.className = 'task-title text-sm flex-1 font-medium transition-all duration-300';
    spanTitle.textContent = titleText;
    
    if (isCompleted) {
        spanTitle.classList.add('line-through', 'text-slate-400', 'completed-task');
    } else {
        spanTitle.classList.add('text-slate-700');
    }

    const actionDiv = document.createElement('div');
    actionDiv.className = 'flex gap-2 ml-4 shrink-0';

    // F5 Poin 1: Tombol donee
    if (!isCompleted) {
        const btnComplete = document.createElement('button');
        btnComplete.textContent = "Tandai selesai";
        btnComplete.className = 'text-xs bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-3 py-1.5 rounded-lg font-semibold transition-colors';
        
        btnComplete.addEventListener('click', () => {
            // Beri class selesai
            spanTitle.classList.add('line-through', 'text-slate-400', 'completed-task');
            spanTitle.classList.remove('text-slate-700');
            // remove
            btnComplete.remove();
            // F5 Poin 3: Ringkasan update otomatis
            updateSummary();
        });
        actionDiv.appendChild(btnComplete);
    }

    // F5 Poin 2: Tombol Hapus dengan remove()
    const btnDelete = document.createElement('button');
    btnDelete.textContent = "Hapus";
    btnDelete.className = 'text-xs bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded-lg font-semibold transition-colors';
    
    btnDelete.addEventListener('click', () => {
        li.remove();
        // F5 Poin 3: Ringkasan update otomatis
        updateSummary();
    });

    actionDiv.appendChild(btnDelete);
    li.appendChild(spanTitle);
    li.appendChild(actionDiv);

    return li;
}

// Fungsi F2 Poin 6: Tampilkan ringkasan progres
function updateSummary() {
    const listItems = todosListEl.children; //
    let total = listItems.length;
    let completedCount = 0;

    for (let i = 0; i < total; i++) {
        // Hitung tugas (class completed-task)
        if (listItems[i].querySelector('.completed-task')) {
            completedCount++;
        
            
        }

        
    }

    let notcompleted = total - completedCount       
    todoSummaryEl.textContent = `${completedCount} dari ${total} tugas selesai..... masih ada ${notcompleted} Tugas yang belum  `;
}

// F3. MENCARI TUGAS
searchInput.addEventListener('input', (e) => {
    // F3 Poin 2: toLowerCase()
    const keyword = e.target.value.toLowerCase();
    const listItems = todosListEl.children;
    let matchCount = 0;

    for (let i = 0; i < listItems.length; i++) {
        const li = listItems[i];
        const titleSpan = li.querySelector('.task-title');
        const titleText = titleSpan.textContent.toLowerCase();

        // includes()
        if (titleText.includes(keyword)) {
            // F3 Poin 3: Hapus class hidden
            li.classList.remove('hidden');
            li.classList.add('flex');
            matchCount++;
        } else {
            // Sembunyikan dengan menambahkan class hidden
            li.classList.remove('flex');
            li.classList.add('hidden');
        }
    }

    // F3 Poin 4: Tampilkan "Tidak ada tugas yang cocok"
    if (matchCount === 0 && listItems.length > 0) {
        noMatchMsg.classList.remove('hidden');
    } else {
        noMatchMsg.classList.add('hidden');
    }
});


// F4. MENAMBAH TUGAS BARU

// F4 Poin 3: Promise server
function simpanTugas(judul) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const listItems = todosListEl.children;
            let isDuplicate = false;

            // Cek duplikasi
            for (let i = 0; i < listItems.length; i++) {
                const existingTitle = listItems[i].querySelector('.task-title').textContent.toLowerCase();
                if (existingTitle === judul.toLowerCase()) {
                    isDuplicate = true;
                    break;
                }
            }

            if (isDuplicate) {
                reject(new Error("Tugas tersebut sudah ada di daftar JADI GABISAA AHAHAH"));
            } else {
                resolve({ title: judul, completed: false });
            }
        }, 1000);
    });
}

addForm.addEventListener('submit', async (e) => {
    // F4 Poin 1: Cegah reload
    e.preventDefault();

    // bersihkan error sebelumnya
    formError.textContent = "";
    
    // F4 Poin 2: Validasi trim() dan < 5 karakter
    const judul = addInput.value.trim();
    if (judul.length < 5) {
        formError.textContent = "Judul tugas tidak boleh kosong dan minimal 5 karakter.";
        return; 
    }

    // F4 Poin 4: try catch
    try {
        btnSubmit.textContent = "Menyimpan...";
        btnSubmit.classList.add('opacity-50', 'cursor-not-allowed');
        btnSubmit.disabled = true;

        const tugasBaru = await simpanTugas(judul);
    // Jika berhasil:
        const liBaru = createTodoElement(tugasBaru.title, tugasBaru.completed);
        // Memasukkan ke paling atas daftar
        todosListEl.insertBefore(liBaru, todosListEl.firstChild);
        addInput.value = "";
        updateSummary()
        // F4 Poin 5: Tampilkan notifikasi hilang otomatis setelah 3 detik
        toast.classList.remove('hidden');
        toast.classList.add('opacity-100');
        setTimeout(() => {
            toast.classList.add('hidden');
            toast.classList.remove('opacity-100');
        }, 5000);

    } catch (error) {
        formError.textContent = error.message;
    } finally {
        // Kembali ke semula
        btnSubmit.textContent = "Simpan";
        btnSubmit.classList.remove('opacity-50', 'cursor-not-allowed');
        btnSubmit.disabled = false;
    }
});

// INISIALISASI SAAT HALAMAN DIMUAT (F1 Poin 1)
window.addEventListener('DOMContentLoaded', () => {
    loadUsers();
});