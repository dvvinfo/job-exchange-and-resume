export function initTabs() {
    const tabs = document.querySelectorAll(".tab");
    const sections = document.querySelectorAll(".tabs-cards");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab; // Получаем нужный ID
  
        // Убираем активность у всех кнопок
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
  
        // Показываем нужный блок, скрываем остальные
        sections.forEach((section) => {
          section.id === target
            ? section.classList.remove("hidden")
            : section.classList.add("hidden");
        });
      });
    });
  }