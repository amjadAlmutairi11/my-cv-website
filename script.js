// Get theme toggle button
const toggleBtn = document.getElementById("toggle-theme");

// Set icon based on current theme
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

// Update icon on page load
document.addEventListener("DOMContentLoaded", setThemeIcon);
