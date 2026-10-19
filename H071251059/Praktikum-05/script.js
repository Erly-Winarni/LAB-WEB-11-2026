const p = (id) => document.getElementById(id);
const els = {
  memberStatus: p("member-status"),
  memberList: p("member-list"),
  taskTitle: p("task-title"),
  summary: p("summary"),
  progressBar: p("progress-bar"),
  search: p("search"),
  taskStatus: p("task-status"),
  emptyMessage: p("empty-message"),
  taskList: p("task-list"),
  form: p("task-form"),
  input: p("task-input"),
  submit: p("task-submit"),
  formError: p("form-error"),
  toast: p("toast"),
};

const MEMBER_IDLE = ["text-slate-700", "hover:bg-slate-100"];
const MEMBER_ACTIVE = ["bg-blue-50", "text-blue-700"];
const BADGE_IDLE = ["border-slate-200", "bg-white", "text-slate-500"];
const BADGE_ACTIVE = ["border-blue-600", "bg-blue-600", "text-white"];
const CIRCLE_IDLE = ["border-slate-300"];
const CIRCLE_DONE = ["border-green-600", "bg-green-600", "text-white"];
const TITLE_DONE = ["line-through", "text-gray-400"];

// Tugas tiap anggota disimpan di memori supaya perubahan tidak hilang
// saat berpindah anggota. Semua kembali seperti semula saat halaman dimuat ulang.
const state = {
  currentId: null,
  todos: null, // array tugas anggota terpilih; null = belum siap
  cache: new Map(),
  requestId: 0,
  saving: false,
  toastTimer: null,
};

/* ---------- Helper tampilan ---------- */

function describeError(error) {
  if (error instanceof TypeError) {
    return "Koneksi bermasalah. Periksa internet Anda lalu coba lagi.";
  }
  return error.message;
}

// kind: "loading" | "error" | undefined (mengosongkan)
function setStatus(container, kind, message, onRetry) {
  container.textContent = "";
  if (!kind) return;

  const text = document.createElement("p");
  text.textContent = message;
  text.className =
    kind === "error"
      ? "my-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
      : "my-4 text-slate-500";
  container.appendChild(text);

  if (kind === "error" && onRetry) {
    const retry = document.createElement("button");
    retry.type = "button";
    retry.textContent = "Coba lagi";
    retry.className =
      "mb-4 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50";
    retry.addEventListener("click", onRetry);
    container.appendChild(retry);
  }
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.remove("hidden");
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => {
    els.toast.classList.add("hidden");
  }, 3000);
}

function updateFormState() {
  const disabled = state.todos === null || state.saving;
  els.input.disabled = disabled;
  els.submit.disabled = disabled;
}

function updateSummary() {
  const todos = state.todos || [];
  const total = todos.length;
  const done = todos.filter((todo) => todo.completed).length;
  els.summary.textContent = `${done} dari ${total} tugas selesai`;
  els.progressBar.style.width = total ? `${(done / total) * 100}%` : "0%";
}

function applyFilter() {
  const keyword = els.search.value.trim().toLowerCase();
  const items = els.taskList.querySelectorAll("li");
  let visible = 0;

  items.forEach((li) => {
    const match = li.dataset.title.toLowerCase().includes(keyword);
    if (match) {
      li.classList.remove("hidden");
      visible++;
    } else {
      li.classList.add("hidden");
    }
  });

  if (state.todos === null) {
    els.emptyMessage.classList.add("hidden");
  } else if (items.length === 0) {
    els.emptyMessage.textContent = "Belum ada tugas.";
    els.emptyMessage.classList.remove("hidden");
  } else if (visible === 0) {
    els.emptyMessage.textContent = "Tidak ada tugas yang cocok.";
    els.emptyMessage.classList.remove("hidden");
  } else {
    els.emptyMessage.classList.add("hidden");
  }
}

/* ---------- F1: daftar anggota ---------- */

function createMemberButton(user, index) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.id = user.id;
  button.className =
    "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600/40";
  button.classList.add(...MEMBER_IDLE);

  const badge = document.createElement("span");
  badge.textContent = String(index + 1).padStart(2, "0");
  badge.className =
    "font-mono-num flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-xs font-semibold";
  badge.classList.add(...BADGE_IDLE);

  const name = document.createElement("span");
  name.textContent = user.name;

  button.appendChild(badge);
  button.appendChild(name);
  button.addEventListener("click", () => selectMember(user, button));
  li.appendChild(button);
  return li;
}

async function loadMembers() {
  els.memberList.textContent = "";
  setStatus(els.memberStatus, "loading", "Memuat anggota...");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`Server menjawab dengan status ${response.status}.`);
    }
    const users = await response.json();

    setStatus(els.memberStatus); // hapus teks "Memuat anggota..."
    users.forEach((user, index) => {
      els.memberList.appendChild(createMemberButton(user, index));
    });

    // Anggota pertama langsung dipilih agar halaman tidak kosong
    if (users.length > 0) {
      selectMember(users[0], els.memberList.querySelector("button"));
    }
  } catch (error) {
    setStatus(
      els.memberStatus,
      "error",
      `Gagal memuat anggota. ${describeError(error)}`,
      loadMembers
    );
  }
}

/* ---------- F2: tugas anggota ---------- */

function markSelected(activeButton) {
  els.memberList.querySelectorAll("button").forEach((button) => {
    const badge = button.firstElementChild;
    if (button === activeButton) {
      button.classList.remove(...MEMBER_IDLE);
      button.classList.add(...MEMBER_ACTIVE);
      badge.classList.remove(...BADGE_IDLE);
      badge.classList.add(...BADGE_ACTIVE);
      button.setAttribute("aria-current", "true");
    } else {
      button.classList.remove(...MEMBER_ACTIVE);
      button.classList.add(...MEMBER_IDLE);
      badge.classList.remove(...BADGE_ACTIVE);
      badge.classList.add(...BADGE_IDLE);
      button.removeAttribute("aria-current");
    }
  });
}

function createTaskItem(todo, todos) {
  const li = document.createElement("li");
  li.className = "border-b border-slate-200 px-8 py-4 hover:bg-slate-50";
  li.dataset.title = todo.title;

  const row = document.createElement("div");
  row.className = "flex items-center gap-4";

  const circle = document.createElement("span");
  circle.className =
    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold";
  circle.setAttribute("aria-hidden", "true");

  const title = document.createElement("span");
  title.textContent = todo.title;
  title.className = "min-w-0 flex-1";

  function showDone() {
    circle.classList.remove(...CIRCLE_IDLE);
    circle.classList.add(...CIRCLE_DONE);
    circle.textContent = "✓";
    title.classList.add(...TITLE_DONE);
  }

  if (todo.completed) {
    showDone();
  } else {
    circle.classList.add(...CIRCLE_IDLE);
  }

  const actions = document.createElement("div");
  actions.className = "flex shrink-0 gap-2";
  const buttonClass =
    "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-100";

  if (!todo.completed) {
    const doneButton = document.createElement("button");
    doneButton.type = "button";
    doneButton.textContent = "Tandai selesai";
    doneButton.className = buttonClass;
    doneButton.addEventListener("click", () => {
      todo.completed = true;
      showDone();
      doneButton.remove();
      updateSummary();
    });
    actions.appendChild(doneButton);
  }

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Hapus";
  deleteButton.className = buttonClass;
  deleteButton.addEventListener("click", () => {
    const index = todos.indexOf(todo);
    if (index !== -1) todos.splice(index, 1);
    li.remove();
    updateSummary();
    applyFilter();
  });
  actions.appendChild(deleteButton);

  row.appendChild(circle);
  row.appendChild(title);
  row.appendChild(actions);
  li.appendChild(row);
  return li;
}

function renderTasks(todos) {
  els.taskList.innerHTML = ""; // hanya untuk mengosongkan
  todos.forEach((todo) => {
    els.taskList.appendChild(createTaskItem(todo, todos));
  });
  updateSummary();
  applyFilter();
}

async function selectMember(user, button) {
  markSelected(button);
  state.currentId = user.id;
  const requestId = ++state.requestId;

  // Reset tampilan untuk anggota baru
  els.taskTitle.textContent = `Tugas ${user.name}`;
  els.search.value = "";
  els.formError.textContent = "";
  els.taskList.innerHTML = ""; // kosongkan daftar lama
  state.todos = null;
  updateSummary();
  applyFilter();
  updateFormState();

  if (state.cache.has(user.id)) {
    setStatus(els.taskStatus);
    state.todos = state.cache.get(user.id);
    renderTasks(state.todos);
    updateFormState();
    return;
  }

  setStatus(els.taskStatus, "loading", "Memuat tugas...");

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`);
    if (!response.ok) {
      throw new Error(`Server menjawab dengan status ${response.status}.`);
    }
    const data = await response.json();
    if (requestId !== state.requestId) return; // pengguna sudah pindah anggota

    const todos = data.map((item) => ({ title: item.title, completed: item.completed }));
    state.cache.set(user.id, todos);
    state.todos = todos;
    setStatus(els.taskStatus);
    renderTasks(todos);
    updateFormState();
  } catch (error) {
    if (requestId !== state.requestId) return;
    setStatus(
      els.taskStatus,
      "error",
      `Gagal memuat tugas. ${describeError(error)}`,
      () => selectMember(user, button)
    );
  }
}

/* ---------- F3: pencarian ---------- */

els.search.addEventListener("input", applyFilter);

/* ---------- F4: tambah tugas ---------- */

function simpanTugas(judul) {
  const daftar = state.todos;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kembar = daftar.some(
        (todo) => todo.title.trim().toLowerCase() === judul.toLowerCase()
      );
      if (kembar) {
        reject(new Error(`Tugas "${judul}" sudah ada di daftar.`));
      } else {
        resolve({ title: judul, completed: false });
      }
    }, 1000);
  });
}

els.input.addEventListener("input", () => {
  els.formError.textContent = "";
});

els.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (state.saving || state.todos === null) return;

  const judul = els.input.value.trim();
  if (judul.length < 5) {
    els.formError.textContent = judul
      ? "Judul tugas minimal 5 karakter."
      : "Judul tugas tidak boleh kosong.";
    return;
  }

  els.formError.textContent = "";
  const todos = state.todos;
  const userId = state.currentId;

  state.saving = true;
  els.submit.textContent = "Menyimpan...";
  updateFormState();

  try {
    const todoBaru = await simpanTugas(judul);
    todos.unshift(todoBaru);

    if (state.currentId === userId) {
      els.taskList.prepend(createTaskItem(todoBaru, todos));
      updateSummary();
      applyFilter();
      els.input.value = "";
    }
    showToast("Tugas berhasil ditambahkan.");
  } catch (error) {
    els.formError.textContent = error.message;
  } finally {
    state.saving = false;
    els.submit.textContent = "Simpan";
    updateFormState();
  }
});

/* ---------- Mulai ---------- */

updateFormState();
loadMembers();