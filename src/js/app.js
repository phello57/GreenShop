import * as webp from "./modules/webP.js";
import * as mySlider from "./modules/slider.js";
import * as prodVie from "./modules/page-of-product.js";
import * as swiperSlider from "./modules/swiper.js";

import * as shopCalc from "./modules/shop-calculate.js";
import * as range from "./modules/input-range.js";
import * as burgerMenu from "./modules/burger.js";

import * as sss from "./modules/showCase.js";
import { ProductService } from "./modules/ProductService.js";
webp.isWebP;

const fileName = document.location.pathname;

if (fileName === "/page-cart.html") {
  shopCalc.shopCalc.start();
} else if (fileName === "/page-product-vie.html") {
  prodVie.slider.start();
  prodVie.description.start();
} else if (fileName === "/index.html") {
  mySlider.slider.start();
}
