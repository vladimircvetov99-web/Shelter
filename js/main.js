const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");
const navItems = document.querySelectorAll('nav .nav__list a');

const BURGER_MENU_SHOW_WIDTH = 768;

function toggleMenu() {
  if (window.innerWidth > BURGER_MENU_SHOW_WIDTH) {
    return;
  }

  burger.classList.toggle("open");
  nav.classList.toggle("open");
  body.style.overflow = opened ? '' : 'hidden';
  opened = !opened;
}

let opened = false;
burger.addEventListener("click", toggleMenu);

[...navItems].forEach((element) => {
  element.addEventListener("click", toggleMenu);
});


