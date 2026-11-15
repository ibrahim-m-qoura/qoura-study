const App = {
  state: {
    data: {},
    settings: { focus: 25, short: 5, long: 15 },
    tasks: [],
    subjects: [],
    theme: "natural-glass"
  },

  init() {
    // 1. تحميل البيانات
    const loaded = StorageManager.load();
    this.state = { ...this.state, ...loaded };
    
    // 2. تطبيق الثيم
    applyTheme(this.state.theme);

    // 3. تجهيز الـ UI
    this.renderAll();
    setupNavigation();
    setupModals();
    setupHeader();

    // 4. ربط الأحداث (Events)
    this.bindEvents();
  },

  renderAll() {
    renderThemesUI(this.state);
    renderDashboardUI(this.state);
    renderInspirationUI();
    this.renderSubjects();
    this.renderTasks();
    this.renderFocusSubjectPicker();
    
    // تحديث الإعدادات
    document.getElementById("setFocus").value = this.state.settings.focus;
    document.getElementById("setShort").value = this.state.settings.short;
    document.getElementById("setLong").value = this.state.settings.long;
  },

  save() {
    StorageManager.save(this.state);
  },

  toast(msg) {
    const t = document.createElement("div"); t.className = "toast"; t.textContent = msg;
    document.getElementById("toastContainer").appendChild(t); 
    setTimeout(() => t.remove(), 3000);
  },

  // --- Subjects UI ---
  renderSubjects() {
    const list = document.getElementById("subjectsList");
    if (!this.state.subjects.length) {
      list.innerHTML = `<div class="empty-state"><svg class="icon icon-xl" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg><br>No subjects yet. Add one to get started.</div>`;
      return;
    }
    list.innerHTML = this.state.subjects.map(s => `
      <div class="glass card" style="display:flex; align-items:center; gap:16px;">
        <div style="width:40px; height:40px; border-radius:12px; background:${s.color}; display:grid; place-items:center; color:white; font-weight:700;">${s.name.charAt(0).toUpperCase()}</div>
        <div style="flex:1;">
          <div style="font-weight:600; font-size:16px;">${this.escapeHTML(s.name)}</div>
        </div>
        <button data-delete-subject="${s.id}" style="color:var(--muted);"><svg class="icon" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
      </div>
    `).join("");

    // ربط حدث الحذف
    list.querySelectorAll("[data-delete-subject]").forEach(btn => {
      btn.addEventListener("click", () => {
        if (!confirm("Delete this subject?")) return;
        this.state.subjects = this.state.subjects.filter(s => s.id !== btn.dataset.deleteSubject);
        this.save(); this.renderSubjects(); this.renderFocusSubjectPicker();
      });
    });
  },

  renderFocusSubjectPicker() {
    const picker = document.getElementById("focusSubject");
    picker.innerHTML = `<option value="">General Focus</option>` + 
      this.state.subjects.map(s => `<option value="${s.id}">${this.escapeHTML(s.name)}</option>`).join("");
  },

  // --- Tasks UI ---
  renderTasks() {
    const list = document.getElementById("taskList");
    if (!this.state.tasks.length) {
      list.innerHTML = `<div class="empty-state">No tasks yet.</div>`;
      return;
    }
    list.innerHTML = this.state.tasks.map(t => `
      <div style="display:flex; align-items:center; gap:12px; padding:12px 0; border-bottom:1px solid var(--border);">
        <input type="checkbox" ${t.done ? 'checked' : ''} data-toggle-task="${t.id}" style="width:20px; height:20px; accent-color:var(--accent);">
        <span style="flex:1; font-size:15px; ${t.done ? 'text-decoration:line-through; color:var(--muted);' : ''}">${this.escapeHTML(t.text)}</span>
        <button data-delete-task="${t.id}" style="color:var(--muted);"><svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
    `).join("");

    // ربط الأحداث
    list.querySelectorAll("[data-toggle-task]").forEach(cb => {
      cb.addEventListener("change", () => {
        const t = this.state.tasks.find(x => x.id === cb.dataset.toggleTask);
        if (t) { t.done = cb.checked; this.save(); this.renderTasks(); }
      });
    });
    list.querySelectorAll("[data-delete-task]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.state.tasks = this.state.tasks.filter(x => x.id !== btn.dataset.deleteTask);
        this.save(); this.renderTasks();
      });
    });
  },

  escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  },

  // --- ربط كل الأحداث ---
  bindEvents() {
    // زر تشغيل المؤقت
    document.getElementById("startBtn").addEventListener("click", () => {
      Timer.start((minutesDone) => {
        this.toast("Session Complete! Great job.");
        const todayStr = new Date().toISOString().split('T')[0];
        if (!this.state.data[todayStr]) this.state.data[todayStr] = { minutes: 0, sessions: 0 };
        this.state.data[todayStr].minutes += minutesDone;
        this.state.data[todayStr].sessions += 1;
        this.save();
        renderDashboardUI(this.state);
      });
    });

    // زر إعادة تعيين المؤقت
    document.getElementById("resetBtn").addEventListener("click", () => {
      Timer.reset(this.state.settings.focus);
    });

    // تأكيد المدة المخصصة
    document.getElementById("confirmDuration").addEventListener("click", () => {
      const h = Number(document.getElementById("customHours").value) || 0;
      const m = Number(document.getElementById("customMinutes").value) || 0;
      if (Timer.setCustomDuration(h, m)) {
        document.getElementById("durationModal").classList.remove("open");
      } else {
        this.toast("Minimum 1 minute");
      }
    });

    // إضافة مادة
    document.getElementById("addSubjectBtn").addEventListener("click", () => {
      document.getElementById("subjectName").value = "";
      document.getElementById("subjectModal").classList.add("open");
    });

    document.getElementById("saveSubjectBtn").addEventListener("click", () => {
      const name = document.getElementById("subjectName").value.trim();
      const color = document.getElementById("subjectColor").value;
      if (!name) return;
      this.state.subjects.push({ id: Date.now().toString(36), name, color });
      this.save(); 
      document.getElementById("subjectModal").classList.remove("open");
      this.renderSubjects(); 
      this.renderFocusSubjectPicker(); 
      this.toast("Subject added");
    });

    // إضافة مهمة
    document.getElementById("taskForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const text = document.getElementById("taskInput").value.trim();
      if (!text) return;
      this.state.tasks.push({ id: Date.now().toString(36), text, done: false });
      document.getElementById("taskInput").value = "";
      this.save(); this.renderTasks();
    });

    // حفظ الإعدادات
    document.getElementById("saveSettingsBtn").addEventListener("click", () => {
      this.state.settings.focus = Number(document.getElementById("setFocus").value) || 25;
      this.state.settings.short = Number(document.getElementById("setShort").value) || 5;
      this.state.settings.long = Number(document.getElementById("setLong").value) || 15;
      this.save(); 
      Timer.reset(this.state.settings.focus); 
      this.toast("Settings saved");
    });

    // تصدير البيانات
    document.getElementById("exportBtn").addEventListener("click", () => {
      const payload = { ...this.state };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `qortex-backup.json`; a.click();
      this.toast("Backup downloaded");
    });

    // مسح البيانات
    document.getElementById("clearBtn").addEventListener("click", () => {
      if (!confirm("Are you sure? This will delete ALL your data.")) return;
      localStorage.clear(); location.reload();
    });

    // تغيير الاقتباس
    document.getElementById("newQuoteBtn").addEventListener("click", () => {
      renderInspirationUI();
    });

    // الضغط على الثيمات
    document.getElementById("themesGrid").addEventListener("click", (e) => {
      const card = e.target.closest("[data-theme-id]");
      if (card) {
        handleThemeClick(card.dataset.themeId, this.state, {
          save: () => this.save(),
          renderThemes: () => renderThemesUI(this.state),
          toast: (msg) => this.toast(msg)
        });
      }
    });

    // أزرار الـ Quick Actions
    document.querySelectorAll(".quick-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.dataset.action === "start-focus") { 
          document.querySelector('[data-page="focus"]').click(); 
        }
        if (btn.dataset.action === "add-subject") { 
          document.getElementById("addSubjectBtn").click(); 
        }
        if (btn.dataset.action === "add-task") { 
          document.querySelector('[data-page="tasks"]').click(); 
          document.getElementById("taskInput").focus(); 
        }
      });
    });
  }
};

// تشغيل التطبيق
document.addEventListener("DOMContentLoaded", () => App.init());
