import { HTMLService } from "./modules/HtmlService.js";
import { ProductService } from "./modules/ProductService.js";

const shopingCartWrapper = document.querySelector(".js-market-cart-wrapper");
const renderCartIcon = new HTMLService();
shopingCartWrapper.innerHTML =
  renderCartIcon.paintShopingCartIcon(countInShopCart);
const countInShopCart = localStorage
  .getItem("idsForShopCart")
  ?.split("").length;
shopingCartWrapper.addEventListener("click", () => {
  console.log("hi");
});
const fileName = document.location.pathname;
console.log(fileName);

const frontPage = document.querySelector(".price-range");
const cardPage = document.querySelector(".product-card");
const productPage = document.querySelector(".page-product__wrapper");
if (frontPage !== null) {
  indexHtml();
}
if (productPage !== null) {
  pageProdView();
}
if (cardPage !== null) {
  pageCart();
}

async function indexHtml() {
  let webp = await import("./modules/webP.js");
  let mySlider = await import("./modules/slider.js");
  let range = await import("./modules/input-range.js");
  let burgerMenu = await import("./modules/burger.js");
  let { productService, htmlRender } = await import("./modules/showCase.js");
  mySlider.slider.start();
  webp.isWebP;
}

async function pageProdView() {
  let webp = await import("./modules/webP.js");
  let swiperSlider = await import("./modules/swiper.js");

  webp.isWebP;
  const productWrapper = document.querySelector(".js-page-product");
  let renderProduct = JSON.parse(localStorage.getItem("renderObject"));

  startRenderProduct();
  async function startRenderProduct() {
    const htmlPageRender = new HTMLService();
    productWrapper.innerHTML = htmlPageRender.paintPageOfProduct(renderProduct);
    let prodVie = await import("./modules/page-of-product.js");
    prodVie.description.start();
  }
}

async function pageCart() {
  let webp = await import("./modules/webP.js");
  let shopCalc = await import("./modules/shop-calculate.js");
  const { data } = await import("./data.js");
  shopCalc.shopCalc.start();
  webp.isWebP;

  const cartWrapper = document.querySelector(".js-page-shoping-cart__wrapper");

  startRenderProduct();
  async function startRenderProduct() {
    const htmlCartRender = new HTMLService();
    const prodAddByUser = localStorage.getItem("idsForShopCart");
    const products = new ProductService(data);
    htmlCartRender.clearContainer(cartWrapper);
    cartWrapper.innerHTML += htmlCartRender.paintProductsInShopingCart(
      prodAddByUser,
      products
    );
  }
}
// var dateFields = [1970, 0, 1]; // 1 Jan 1970
// var d = new Date(...dateFields);
// console.log(d);
