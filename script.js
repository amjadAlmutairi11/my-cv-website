// Get toggle button
const toggleBtn = document.getElementById("toggle-theme");

// Set theme icon
function setThemeIcon() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  toggleBtn.textContent = isDark ? "🌞" : "🌙";
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  setThemeIcon();
});

// Set initial icon on load
document.addEventListener("DOMContentLoaded", setThemeIcon);
