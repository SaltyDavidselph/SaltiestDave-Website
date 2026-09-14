document.getElementById("year").textContent = new Date().getFullYear();

let count = 0;
const countEl = document.getElementById("count");
const btn = document.getElementById("count-btn");

btn.addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;
});
