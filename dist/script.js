const faqs = document.querySelectorAll(".footer__item h4");
faqs.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});

const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__action");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  mobileNav.classList.toggle("open");
});