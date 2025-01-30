import { initTabs } from "./tabs.js";
import { initSearch } from "./search.js";
import { initLoginDropdown } from "./login.js";

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initSearch();
  initLoginDropdown();
});