// === Mobile Navigation ===
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarLinks = document.querySelectorAll(".navbar-link");

if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener("click", () => {
    const isOpen = navbarMenu.classList.toggle("active");
    navbarToggle.setAttribute("aria-expanded", isOpen);
  });

  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("active");
      navbarToggle.setAttribute("aria-expanded", "false");
    });
  });
}
