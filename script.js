// 🌙 Theme toggle logic
const toggleBtn = document.getElementById("toggle-theme");

function setThemeIcon() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  toggleBtn.textContent = isDark ? "🌞" : "🌙";
}

toggleBtn.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  setThemeIcon();
});

// ✨ Fade-in on scroll
function handleScrollAnimation() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setThemeIcon();
  handleScrollAnimation();
});

window.addEventListener("scroll", handleScrollAnimation);
