const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const themeToggle = document.getElementById("theme-toggle");

function updateToggleIcon() {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  themeToggle.textContent = isLight ? "☀️" : "🌙";
}

const flashOverlay = document.getElementById("flash-overlay");

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateToggleIcon();

  if (next === "light") {
    flashOverlay.classList.remove("flash");
    void flashOverlay.offsetWidth; // restart animation if clicked rapidly
    flashOverlay.classList.add("flash");
  }
});

updateToggleIcon();

let count = 0;
const countEl = document.getElementById("count");
const btn = document.getElementById("count-btn");

if (btn && countEl) {
  btn.addEventListener("click", () => {
    count += 1;
    countEl.textContent = count;
  });
}
