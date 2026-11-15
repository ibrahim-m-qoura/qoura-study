const Timer = {
  state: { mode: "focus", totalSeconds: 1500, remainingSeconds: 1500, running: false, interval: null },
  
  updateDisplay() {
    const m = Math.floor(this.state.remainingSeconds / 60);
    const s = this.state.remainingSeconds % 60;
    document.getElementById("timerDisplay").textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    document.getElementById("startBtn").innerHTML = this.state.running 
      ? `<svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> Pause`
      : `<svg class="icon icon-sm" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg> Start`;
  },

  start(onComplete) {
    if (this.state.running) {
      clearInterval(this.state.interval); 
      this.state.running = false; 
      this.updateDisplay(); 
      return;
    }
    this.state.running = true;
    this.state.interval = setInterval(() => {
      if (this.state.remainingSeconds > 0) { 
        this.state.remainingSeconds--; 
        this.updateDisplay(); 
      } else {
        clearInterval(this.state.interval); 
        this.state.running = false; 
        this.updateDisplay();
        onComplete(Math.round(this.state.totalSeconds / 60));
        this.reset();
      }
    }, 1000);
  },

  reset(defaultFocus) {
    clearInterval(this.state.interval);
    this.state.running = false;
    this.state.remainingSeconds = defaultFocus * 60;
    this.state.totalSeconds = defaultFocus * 60;
    this.updateDisplay();
  },

  setCustomDuration(hours, minutes) {
    const total = (hours * 60) + minutes;
    if (total < 1) return false;
    this.state.totalSeconds = total * 60;
    this.state.remainingSeconds = total * 60;
    this.updateDisplay();
    return true;
  }
};
