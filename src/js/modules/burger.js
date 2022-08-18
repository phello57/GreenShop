const btnOpenSearchInput = document.querySelector(".btn-js__search-input-open")

const btnOpenBurgerMenu = document.querySelector(".btn-js__hamburger-menu")

const btnCloseBurgerMenu = document.querySelector(".btn-js__hamburger-exit")

btnOpenSearchInput.onclick = function() {
  document.querySelector(".plants-search__wrapper").classList.add("active__input-open")
  
  btnOpenSearchInput.classList.add("disable")
}
btnOpenBurgerMenu.onclick = function() {
  document.querySelector(".hamburger-menu").classList.add("active__burger-menu")
}
btnCloseBurgerMenu.onclick = function() {
  document.querySelector(".hamburger-menu").classList.remove("active__burger-menu")
}