const btnOpenBurgerMenu = document.querySelector(".btn-js__hamburger-menu");

const btnCloseBurgerMenu = document.querySelector(".btn-js__hamburger-exit");

btnOpenBurgerMenu.onclick = function () {
  document
    .querySelector(".hamburger-menu")
    .classList.add("active__burger-menu");
};
btnCloseBurgerMenu.onclick = function () {
  document
    .querySelector(".hamburger-menu")
    .classList.remove("active__burger-menu");
};
