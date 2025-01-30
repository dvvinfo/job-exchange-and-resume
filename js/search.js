export function initSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const noResults = document.getElementById("noResults");
  const searchForm = document.getElementById("searchForm");

  const data = [
    "Reels maker",
    "Reels съёмка",
    "Reels монтаж",
    "Reels обучение",
    "Монтаж видео",
    "Съемка контента",
    "Графический дизайнер",
    "Видеооператор",
  ];

  function filterData(query) {
    return data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }

  function renderResults(results) {
    searchResults.innerHTML = "";

    if (results.length === 0) {
      searchResults.style.display = "none";
      noResults.classList.remove("hidden"); // Показываем сообщение
      return;
    }

    noResults.classList.add("hidden"); // Скрываем сообщение

    results.forEach((result) => {
      const div = document.createElement("div");
      div.classList.add("form__result-item");
      div.textContent = result;
      div.addEventListener("click", () => {
        searchInput.value = result;
        searchResults.style.display = "none";
      });
      searchResults.appendChild(div);
    });

    searchResults.style.display = "block";
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();

    if (query === "") {
      searchResults.style.display = "none";
      noResults.classList.add("hidden"); // Скрываем, если очистили поле
      return;
    }

    const filtered = filterData(query);
    renderResults(filtered);
  });

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = "none";
    }
  });

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Отменяем стандартное поведение формы
    console.log("Поиск отправлен: ", searchInput.value);
  });
}
