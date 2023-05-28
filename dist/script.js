const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__action");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  mobileNav.classList.toggle("open");
});
