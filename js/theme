function applyTheme(id) {
  document.body.setAttribute("data-theme", id);
}

function renderThemesUI(state) {
  const grid = document.getElementById("themesGrid");
  grid.innerHTML = CONFIG.THEMES.map(t => `
    <div class="theme-card ${state.theme === t.id ? 'active' : ''}" data-theme-id="${t.id}">
      <div class="theme-preview" style="--tp-bg: ${t.bg}; --tp-surface: ${t.surface}; --tp-accent: ${t.accent};">
        <div class="tp-header"><div class="tp-dot"></div></div>
        <div class="tp-body"><div class="tp-card"></div></div>
      </div>
      <div class="theme-name">${t.name}</div>
    </div>
  `).join("");
}

function handleThemeClick(id, state, callbacks) {
  state.theme = id;
  applyTheme(id);
  callbacks.save();
  callbacks.renderThemes();
  callbacks.toast("Theme applied");
}
