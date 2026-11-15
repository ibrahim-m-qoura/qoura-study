function setupModals() {
  // إغلاق الـ Modal
  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById(btn.dataset.close).classList.remove("open");
    });
  });

  // فتح Modal المدة
  document.getElementById("timerDisplay").addEventListener("click", () => {
    const t = Timer.state;
    document.getElementById("customHours").value = Math.floor(t.totalSeconds / 3600);
    document.getElementById("customMinutes").value = Math.floor((t.totalSeconds % 3600) / 60);
    document.getElementById("durationModal").classList.add("open");
  });
}
