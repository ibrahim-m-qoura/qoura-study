
const STORAGE = { data: "qouraStudyData", settings: "qouraStudySettings", tasks: "qouraStudyTasks", subjects: "qortexSubjects", theme: "qortexTheme" };

const state = {
  data: {},
  settings: { focus: 25, short: 5, long: 15 },
  tasks: [],
  subjects: [],
  theme: "natural-glass",
  timer: { mode: "focus", totalSeconds: 1500, remainingSeconds: 1500, running: false, interval: null, subjectId: "" }
};

const $ = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);
const today = () => new Date().toISOString().split('T')[0];
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
const escapeHTML = (str) => String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function toast(msg) {
  const t = document.createElement("div"); t.className = "toast"; t.textContent = msg;
  $("toastContainer").appendChild(t); setTimeout(() => t.remove(), 3000);
}

function save() {
  localStorage.setItem(STORAGE.data, JSON.stringify(state.data));
  localStorage.setItem(STORAGE.settings, JSON.stringify(state.settings));
  localStorage.setItem(STORAGE.tasks, JSON.stringify(state.tasks));
  localStorage.setItem(STORAGE.subjects, JSON.stringify(state.subjects));
  localStorage.setItem(STORAGE.theme, state.theme);
}

function load() {
  state.data = JSON.parse(localStorage.getItem(STORAGE.data) || "{}");
  state.settings = JSON.parse(localStorage.getItem(STORAGE.settings) || '{"focus":25,"short":5,"long":15}');
  state.tasks = JSON.parse(localStorage.getItem(STORAGE.tasks) || "[]");
  state.subjects = JSON.parse(localStorage.getItem(STORAGE.subjects) || "[]");
  state.theme = localStorage.getItem(STORAGE.theme) || "natural-glass";
  applyTheme(state.theme);
}
