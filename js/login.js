export function initLoginDropdown() {
  const login = document.querySelector(".login");
  const loginHide = document.querySelector(".login__hide");
  const loginArrow = document.querySelector(".login__arrow svg");

  if (!login || !loginHide || !loginArrow) return;

  login.addEventListener("click", (event) => {
    event.stopPropagation(); 
    loginHide.classList.toggle("hidden");
    loginArrow.style.transform = loginHide.classList.contains("hidden")
      ? "rotate(0deg)"
      : "rotate(180deg)";
  });

  document.addEventListener("click", (event) => {
    if (!login.contains(event.target)) {
      loginHide.classList.add("hidden");
      loginArrow.style.transform = "rotate(0deg)";
    }
  });
}
