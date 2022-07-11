import * as range from "./modules/input-range.js";
import * as flsFunctions from "./modules/functions.js";
import * as localSlider from "./modules/slider.js";
import * as prodVie from "./modules/page-prod.js";
import * as swiperSlider from "./modules/swiper.js";
import Swiper from 'swiper';

// import * as handler from "./modules/icons-inner-img.js";
flsFunctions.isWebP();

let swiper = new Swiper('.swiperRelated', {
  slidesPerView: 4,
  spaceBetween: 30,
  
});

prodVie.description.start()
prodVie.slider.start()
localSlider.slider.start()

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

