function setupNavigation() {
  const navItems = document.querySelectorAll(".nav-item, .bottom-nav-item");
  
  navItems.forEach(el => {
    el.addEventListener("click", () => {
      const page = el.dataset.page;
      
      // إخفاء كل الصفحات
      document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
      
      // إظهار الصفحة المطلوبة
      const targetPage = document.getElementById(`page-${page}`);
      if (targetPage) targetPage.classList.add("active");
      
      // تحديث حالة الأزرار
      navItems.forEach(n => n.classList.toggle("active", n.dataset.page === page));
      
      window.scrollTo(0, 0);
    });
  });
}
