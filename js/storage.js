const StorageManager = {
  save(state) {
    const keys = CONFIG.STORAGE_KEYS;
    localStorage.setItem(keys.data, JSON.stringify(state.data));
    localStorage.setItem(keys.settings, JSON.stringify(state.settings));
    localStorage.setItem(keys.tasks, JSON.stringify(state.tasks));
    localStorage.setItem(keys.subjects, JSON.stringify(state.subjects));
    localStorage.setItem(keys.theme, state.theme);
  },
  
  load() {
    const keys = CONFIG.STORAGE_KEYS;
    return {
      data: JSON.parse(localStorage.getItem(keys.data) || "{}"),
      settings: JSON.parse(localStorage.getItem(keys.settings) || '{"focus":25,"short":5,"long":15}'),
      tasks: JSON.parse(localStorage.getItem(keys.tasks) || "[]"),
      subjects: JSON.parse(localStorage.getItem(keys.subjects) || "[]"),
      theme: localStorage.getItem(keys.theme) || "natural-glass"
    };
  }
};
