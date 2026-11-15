function renderDashboardUI(state) {
  const hour = new Date().getHours();
  const greet = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  
  const greetEl = document.getElementById("greetingText");
  if(greetEl) greetEl.textContent = `${greet} 👋`;
  
  const dateEl = document.getElementById("currentDate");
  if(dateEl) dateEl.textContent = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  const todayStr = new Date().toISOString().split('T')[0];
  const d = state.data[todayStr] || { minutes: 0, sessions: 0 };
  
  document.getElementById("todayMinutes").textContent = d.minutes || 0;
  document.getElementById("dailyGoalPct").textContent = Math.min(100, Math.round(((d.minutes || 0) / 120) * 100));
  document.getElementById("activeSubjectsCount").textContent = state.subjects.length;

  // Streak calculation
  let streak = 0; let curDate = new Date();
  while (true) {
    const k = curDate.toISOString().split('T')[0];
    if (state.data[k] && state.data[k].minutes > 0) { 
      streak++; curDate.setDate(curDate.getDate() - 1); 
    } else { 
      if (streak === 0 && k === todayStr) { curDate.setDate(curDate.getDate() - 1); continue; } 
      break; 
    }
  }
  document.getElementById("streakCount").textContent = streak;
}

function renderInspirationUI() {
  const q = CONFIG.QUOTES[Math.floor(Math.random() * CONFIG.QUOTES.length)];
  const card = document.getElementById("inspirationCard");
  if(card) {
    card.innerHTML = `
      <p style="font-size:18px; font-weight:500; line-height:1.7; margin:0 0 16px;">"${q.text}"</p>
      <div style="font-size:14px; color:var(--muted); font-weight:600;">— ${q.author}</div>
    `;
  }
  const dashCard = document.getElementById("dashboardInspiration");
  if(dashCard) {
    dashCard.innerHTML = `
      <p style="font-size:16px; font-weight:500; line-height:1.6; margin:0 0 12px;">"${q.text}"</p>
      <p style="font-size:13px; color:var(--muted); margin:0;">— ${q.author}</p>
    `;
  }
}
