// 8-script.js - Hamburger toggle with smooth animation
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    const isActive = hamburger.classList.toggle("active");
    navMenu.classList.toggle("show");

    // Accessibility
    hamburger.setAttribute("aria-expanded", isActive);
  });

  // Close menu when clicking a link (optional)
  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("show");
      hamburger.setAttribute("aria-expanded", false);
    });
  });

  // Update footer year
  document.getElementById("year").textContent = new Date().getFullYear();
});
