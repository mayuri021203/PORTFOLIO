// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("modeToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
