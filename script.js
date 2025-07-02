// Toggle between light and dark themes
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.documentElement.toggleAttribute("data-theme");
});
