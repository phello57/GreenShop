

import * as range from "./modules/input-range.js";
import * as flsFunctions from "./modules/functions.js";
import * as localSlider from "./modules/slider.js";
// import * as handler from "./modules/icons-inner-img.js";
flsFunctions.isWebP();

import Swiper, { Navigation, Pagination } from 'swiper';

 localSlider.slider.start()


const imageWrappers = document.querySelector(".showcase__slots-wrapper")
console.log(imageWrappers);
// imageWrappers.onmouseenter = handler
// imageWrappers.onmouseleave = handler

imageWrappers.onmouseover = function(event) {
  let iconsWrapper = event.target.parentNode.parentNode.parentNode.lastChild.firstChild
  iconsWrapper.classList.add("active__icons-inner-img")
};
imageWrappers.onmouseout = function(event) {
  let iconsWrapper = event.target.parentNode.parentNode.parentNode.lastChild.firstChild
  iconsWrapper.classList.remove("active__icons-inner-img") 
};

// function handler(event) {
//   let iconsWrapper = event.target.parentNode.parentNode.parentNode.lastChild.firstChild
//   if (event.type === 'mouseenter') {
//     console.log(1);
//     iconsWrapper.classList.add("active__icons-inner-img")
//   }
//   if (event.type === 'mouseleave' ) {
//     console.log(2);
//     iconsWrapper.classList.remove("active__icons-inner-img")
//   }
// };

// Наведенная мышка на изображение и на иконки дает иконкам класс .active__icons-inner-img
// Наведенная мышка вне блока убирает с иконок active__icons-inner-img

// active__icons-inner-img  дает иконкам visibility: visible;


// =========================================================================
// burger menu
const btnOpenSearchInput = document.querySelector(".btn__search-input-open")
const btnOpenBurgerMenu = document.querySelector(".btn__hamburger-menu")
const btnCloseBurgerMenu = document.querySelector(".btn__hamburger-exit")

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

