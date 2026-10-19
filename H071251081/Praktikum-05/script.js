// --- Menampilkan Daftar Anggota ---
async function fetchUsers() {
    const loading = document.getElementById('users-loading');
    const errorContainer = document.getElementById('users-error');
    const list = document.getElementById('users-list');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Gagal mengambil data anggota dari server.');
        }
        const users = await response.json();

        // Sembunyikan loading
        loading.remove(); 
        list.innerHTML = ""; 

        users.forEach(user => {
            // Membuat elemen button untuk setiap anggota
            const btn = document.createElement('button');
            btn.textContent = user.name;
            btn.className = 'user-btn text-left p-3 border border-gray-300 rounded bg-gray-50 hover:bg-gray-200 transition-colors';
            
            // Event klik dipasang murni dengan addEventListener
            btn.addEventListener('click', () => {
                loadTodos(user.id, user.name, btn);
            });
            
            list.appendChild(btn);
        });
    } catch (err) {
        loading.classList.add('hidden');
        errorContainer.textContent = err.message;
        errorContainer.classList.remove('hidden');
    }
}

// --- F2: Menampilkan Tugas Anggota ---
async function loadTodos(userId, userName, buttonElement) {
    // hapus biru tombol lain
    const allBtns = document.querySelectorAll('.user-btn');
    allBtns.forEach(btn => {
        btn.classList.remove('bg-blue-100', 'border-blue-600', 'font-bold');
    });
    buttonElement.classList.add('bg-blue-100', 'border-blue-600', 'font-bold');

    // Ubah judul
    document.getElementById('todo-title').textContent = 'Tugas ' + userName;
    document.getElementById('todo-actions').classList.remove('hidden');
    
    // Reset pencarian
    document.getElementById('search-input').value = "";

    const list = document.getElementById('todos-list');
    const loading = document.getElementById('todos-loading');
    const errorContainer = document.getElementById('todos-error');
    const emptySearch = document.getElementById('todos-empty-search');

    // Mengosongkan daftar tugas lama
    list.innerHTML = ""; 
    errorContainer.classList.add('hidden');
    emptySearch.classList.add('hidden');
    loading.classList.remove('hidden');

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        if (!response.ok) {
            throw new Error('Gagal memuat tugas dari server.');
        }
        const todos = await response.json();

        loading.classList.add('hidden');
        
        todos.forEach(todo => {
            const taskElement = createTaskElement(todo);
            list.appendChild(taskElement);
        });
        
        updateSummary();
    } catch (err) {
        loading.classList.add('hidden');
        errorContainer.textContent = err.message;
        errorContainer.classList.remove('hidden');
        document.getElementById('todo-actions').classList.add('hidden');
    }
}

// --- Fungsi Membuat Elemen Tugas & F5 (Menandai Selesai dan Menghapus) ---
function createTaskElement(task) {
    const div = document.createElement('div');
    div.className = 'task-item flex justify-between items-center p-3 border border-gray-300 rounded bg-white';
    if (task.completed) {
        div.classList.add('task-completed'); // Penanda bahwa tugas ini selesai
    }

    const titleSpan = document.createElement('span');
    titleSpan.className = 'task-title flex-1 mr-4';
    titleSpan.textContent = task.title;

    // Jika sudah selesai, coret teksnya
    if (task.completed) {
        titleSpan.classList.add('line-through', 'text-gray-400');
    }

    const actionDiv = document.createElement('div');
    actionDiv.className = 'flex gap-2';

    // F5: Tombol "Tandai selesai"
    if (!task.completed) {
        const btnDone = document.createElement('button');
        btnDone.textContent = 'Tandai selesai';
        btnDone.className = 'bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm';
        
        btnDone.addEventListener('click', () => {
            task.completed = true;
            div.classList.add('task-completed');
            titleSpan.classList.add('line-through', 'text-gray-400');
            btnDone.remove(); // Menghapus tombol itu sendiri
            updateSummary();
        });
        
        actionDiv.appendChild(btnDone);
    }

    // Tombol "Hapus"
    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Hapus';
    btnDelete.className = 'bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm';
    
    btnDelete.addEventListener('click', () => {
        div.remove(); // Menghapus elemen tugas dari halaman
        updateSummary();
        checkEmptySearch(); 
    });

    actionDiv.appendChild(btnDelete);
    div.appendChild(titleSpan);
    div.appendChild(actionDiv);

    return div;
}

// Fungsi Ringkasan "X dari Y tugas selesai"
function updateSummary() {
    const list = document.getElementById('todos-list');
    const totalTasks = list.children.length;
    let completedTasks = 0;

    for (let i = 0; i < totalTasks; i++) {
        if (list.children[i].classList.contains('task-completed')) {
            completedTasks++;
        }
    }

    document.getElementById('todo-summary').textContent = `${completedTasks} dari ${totalTasks} tugas selesai`;
}

// --- F3: Mencari Tugas ---
document.getElementById('search-input').addEventListener('input', (event) => {
    const keyword = event.target.value.trim().toLowerCase();
    const list = document.getElementById('todos-list');

    for (let i = 0; i < list.children.length; i++) {
        const taskDiv = list.children[i];
        const titleSpan = taskDiv.querySelector('.task-title');
        
        if (titleSpan.textContent.toLowerCase().includes(keyword)) {
            taskDiv.classList.remove('hidden'); // Menampilkan jika cocok
        } else {
            taskDiv.classList.add('hidden'); // Menyembunyikan dengan class hidden
        }
    }
    
    checkEmptySearch();
});

// Mengecek jika tidak ada tugas yang tampil saat pencarian
function checkEmptySearch() {
    const list = document.getElementById('todos-list');
    const emptyMsg = document.getElementById('todos-empty-search');
    let visibleCount = 0;
    
    for (let i = 0; i < list.children.length; i++) {
        if (!list.children[i].classList.contains('hidden')) {
            visibleCount++; 
        }
    }
    
    if (visibleCount === 0 && list.children.length > 0) {
        emptyMsg.classList.remove('hidden');
    } else {
        emptyMsg.classList.add('hidden');
    }
}

// Mengambil semua judul dari DOM untuk validasi judul kembar
function getExistingTitles() {
    const titles = [];
    const list = document.getElementById('todos-list');
    for (let i = 0; i < list.children.length; i++) {
        const span = list.children[i].querySelector('.task-title');
        if (span) {
            titles.push(span.textContent.toLowerCase());
        }
    }
    return titles;
}

// Simulasi Simpan Ke Server
function simpanTugas(judul) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const existingTitles = getExistingTitles();
            
            // Cek jika sudah ada (tidak membedakan huruf besar kecil)
            if (existingTitles.includes(judul.toLowerCase())) {
                reject(new Error('Tugas dengan judul ini sudah ada di daftar!'));
            } else {
                resolve({ title: judul, completed: false });
            }
        }, 1000); // Tunggu 1 detik
    });
}

// --- F4: Menambah Tugas Baru ---
document.getElementById('add-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Mencegah halaman dimuat ulang

    const inputElement = document.getElementById('add-input');
    const btnSubmit = document.getElementById('btn-submit');
    const errorElement = document.getElementById('add-error');
    const successElement = document.getElementById('add-success');

    const judul = inputElement.value.trim();

    errorElement.classList.add('hidden');
    successElement.classList.add('hidden');

    // Validasi judul
    if (judul.length < 5) {
        errorElement.textContent = 'Judul tugas minimal 5 karakter setelah spasi dibuang.';
        errorElement.classList.remove('hidden');
        return;
    }

    // Merubah tombol saat menunggu
    btnSubmit.textContent = 'Menyimpan...';
    btnSubmit.disabled = true;

    try {
        const newTask = await simpanTugas(judul);
        
        // Memasukkan tugas ke daftar
        const taskElement = createTaskElement(newTask);
        document.getElementById('todos-list').prepend(taskElement); // Memasukkan di posisi paling atas
        
        // Mengosongkan input dan memperbarui ringkasan
        inputElement.value = '';
        updateSummary();
        
        // Memicu event pencarian agar tugas baru menyesuaikan kolom search saat ini
        document.getElementById('search-input').dispatchEvent(new Event('input'));

        // Menampilkan notifikasi berhasil
        successElement.classList.remove('hidden');
        setTimeout(() => {
            successElement.classList.add('hidden');
        }, 3000);

    } catch (error) {
        errorElement.textContent = error.message;
        errorElement.classList.remove('hidden');
    } finally {
        // Mengembalikan tombol kembali seperti semula
        btnSubmit.textContent = 'Simpan';
        btnSubmit.disabled = false;
    }
});

// Panggil fungsi saat halaman pertama kali dimuat
window.addEventListener('DOMContentLoaded', fetchUsers);