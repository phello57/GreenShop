import { ProductService } from "./ProductService.js";
import { HTMLService } from "./HtmlService.js";
import { data } from "../data.js";
import { countCategories } from "../categories.js";
import { inputRange } from "./input-range.js";

// -------БЛОК для товаров-----------------------------------------------
// кнопки фильрации
const btnAllPlants = document.querySelector(".js-btn__category-all");
const btnNewPlants = document.querySelector(".js-btn__category-new-arrivals");
const btnDiscountPlants = document.querySelector(".js-btn__category-sale");

const cartContainer = document.querySelector(".js-showcase__slots-wrapper");
const categoryContainer = document.querySelector(".js-categories");
const inputFilter = document.getElementById("js-filter");

// фильтр по цене
const btnFilterByPrice = document.querySelector(".js-btn-filterByPrice");
const strByPriceRange = document.querySelector(".js-price-range__vie-cost");
const inputPriceRange = document.querySelector(".js-input-filter-by-price");

const btnsFilter = document.querySelector(".js-showcase__categories");

// *файлы не приходят с бека, хранятся в папке проекта
// data - данные, пришедшие с бека. Попадают, фильтруются в ProductService
export const productService = new ProductService(data);
// countCategories - еще один файл приходящий с бека, хранит количество товаров по категориям
const categoryService = new ProductService(countCategories);
// htmlRender содержит форму верски карточки товара и категории. Отвечает только за отрисовку или очистку контейнера
export const htmlRender = new HTMLService();

let selectedCategoryBtn = document.querySelector(".js-btn__category-all");

// нужен для запоминания фильтрации что бы фильтровать по инпуту
let nowConditionOfContainer = [];

// ----- Код -----
renderProducts(productService.products);
renderCategories();
strByPriceRange.innerHTML = inputPriceRange.value;

// ----- Функции -----

// подсветка
function highlight(target) {
  if (selectedCategoryBtn) {
    selectedCategoryBtn.classList.remove("active__showcase-sort");
  }
  selectedCategoryBtn = target;
  selectedCategoryBtn.classList.add("active__showcase-sort");
}

// логика внутри контейнера товаров \ фильтрация
// --- Логика внутри контейнера товаров ---

function renderProducts(container) {
  htmlRender.clearContainer(cartContainer);
  cartContainer.innerHTML += htmlRender.paintProducts(container);
  listenerForHiddenBtns();
  listenerForMouseover();
}
function renderCategories() {
  categoryContainer.innerHTML += htmlRender.paintCategories(
    categoryService.products
  );
  listenerForCategories();
}

// Hidden buttons
function listenerForHiddenBtns() {
  const parent = [...document.getElementsByClassName("icons-inner-img")];
  parent.forEach((item) => {
    item.addEventListener("click", (event) => {
      const target = event.target.closest(".js-icon-inner-img");
      const btnAddToCart = target.classList.contains(
        "js-icon-inner-img__addToCart"
      );
      const btnLike = target.classList.contains("js-icon-inner-img__like");
      const btnViewMore = target.classList.contains(
        "js-icon-inner-img__viewMore"
      );
      if (!target) return;

      if (btnAddToCart) {
        let targetId = event.target.closest(".js-slot__wrapper").dataset.id;
        console.log("addToCart");
      }
      if (btnLike) {
        let targetId = event.target.closest(".js-slot__wrapper").dataset.id;
        console.log("like this");
      }
      if (btnViewMore) {
        let targetId = event.target.closest(".js-slot__wrapper").dataset.id;
        productService.pageOfProduct = productService.findProductById(targetId);
        console.log(targetId);
        //window.open("page-product-vie.html");
      }
    });
  });
}

// mouse over
function listenerForMouseover() {
  const carts = [...document.getElementsByClassName("js-slot__wrapper")];
  carts.forEach((item) => {
    const nomerOfHiddenIcons = item.children.length - 1;
    item.addEventListener("mouseover", () => {
      const icons = item.children[nomerOfHiddenIcons];
      icons.classList.add("active__icons-inner-img");
    });
    item.addEventListener("mouseleave", () => {
      const icons = item.children[nomerOfHiddenIcons];
      icons.classList.remove("active__icons-inner-img");
    });
  });
}

// --- Логика фильтрации ---

btnsFilter.addEventListener("click", (event) => {
  const target = event.target;
  if (!target) return;
  const AllPlants = target.classList.contains("js-btn__category-all");
  const newPlants = target.classList.contains("js-btn__category-new-arrivals");
  const salePlants = target.classList.contains("js-btn__category-sale");
  // логика для трех кнопок
  if (AllPlants) {
    highlight(target);
    renderProducts(productService.products);
  }
  if (newPlants) {
    highlight(target);
    const filteredProducts = productService.filterByType("new");
    nowConditionOfContainer = filteredProducts;
    renderProducts(filteredProducts);
  }
  if (salePlants) {
    highlight(target);
    const filteredProducts = productService.filterByType("sale");
    nowConditionOfContainer = filteredProducts;
    renderProducts(filteredProducts);
  }
  reRenderInputRange();
});
// есть баг который не закрашивает полоску инпута при обновлении
function reRenderInputRange() {
  inputPriceRange.value = inputPriceRange.max;
  strByPriceRange.innerHTML = inputPriceRange.value;
  inputRange();
}
// сортировка по инпуту при наборе текста
inputFilter.addEventListener("input", (event) => {
  const title = event.target.value;
  const filteredProducts = productService.filterByTitle(
    title,
    productService.products
  );
  nowConditionOfContainer = filteredProducts;
  renderProducts(filteredProducts);
});

function listenerForCategories() {
  const categoryBtnWrapper = [
    ...document.querySelectorAll(".js-category__wrapper"),
  ];
  categoryBtnWrapper.forEach((item) => {
    const nomerNameOfCategory = 0;
    item.addEventListener("click", (event) => {
      // подсветка
      let target = event.target.closest(".js-category__wrapper").children[
        nomerNameOfCategory
      ];
      highlight(target);

      // определение категории это innerHTML в кнопке на которую нажали
      let searchCategory = event.target.closest(".js-category__wrapper")
        .children[nomerNameOfCategory].innerHTML;

      // Передаю в фильтрацию название той категории, по которой кликнули
      const filteredProducts = productService.filterByCategories(
        searchCategory,
        productService.products
      );
      nowConditionOfContainer = filteredProducts;

      renderProducts(filteredProducts);
    });
  });
}

inputPriceRange.addEventListener("input", () => {
  strByPriceRange.innerHTML = inputPriceRange.value;
});

btnFilterByPrice.addEventListener("click", () => {
  let maxPrice = inputPriceRange.value;
  const filteredProducts = productService.filterByPrice(
    maxPrice,
    productService.products
  );

  nowConditionOfContainer = filteredProducts;
  renderProducts(filteredProducts);
});
