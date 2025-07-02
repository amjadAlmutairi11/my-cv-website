const toggleBtn = document.getElementById("toggle-theme");

function setThemeIcon() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  toggleBtn.textContent = isDark ? "🌞" : "🌙";
}

// Toggle theme and icon
toggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  setThemeIcon();
});

// On first load, set correct icon
setThemeIcon();
