const toggleBtn = document.getElementById("toggle-theme");

function setThemeIcon() {
  const isDark = document.documentElement.hasAttribute("data-theme");
  toggleBtn.textContent = isDark ? "🌞" : "🌙";
}

// Toggle theme and icon
toggleBtn.addEvent
