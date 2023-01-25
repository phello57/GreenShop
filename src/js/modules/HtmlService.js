export class HTMLService {
  clearContainer(container) {
    [...container?.children].forEach((element) => {
      element.remove();
    });
  }
  paintShopingCartIcon(count = "0") {
    return `
    <button class="btn__market-cart">
      <svg class='svg__market-cart'>
        <use aria-label="market-cart" xlink:href="images/icons/icons.svg#market-cart"></use>
      </svg>
      <span class="icons__countOnMarketCart">${count}</span>
    </button>
    `;
  }
  paintProductInShopingCart(product = {}) {
    return `
    <div class="cart__wrapper">
      <picture>
        <source srcset="${product.image}" type="image/webp">
        <img class="cart__product-img" src="images/content/image8.png" alt="">
      </picture>
      <div class="cart__info-wrapper">
        <a class="cart__prod-name" href="#">${product.title}</a>
        <div class="cart__prod-sku-wrapper">
          <div class="cart__prod-sku-title">SKU:</div>
          <div class="cart__prod-sku">${product.sku}</div> 
        </div>
      </div>
      <div class="cart__price">$${product.price}</div>
      <div class="cart__quantity-wrapper">
        <button class="btn__change-count btn__change-count-resize js__btn-change-count-less">-</button>
        <div class="cart__quantity">1</div>
        <button class="btn__change-count btn__change-count-resize js__btn-change-count-more">+</button>
      </div>
      <div class="cart__total">$${product.price}</div>
      <button class="btn__delete.js-btn-delete-prod">
        <svg class="svg__delete">
          <use xlink:href="images/icons/icons.svg#Delete"></use>
        </svg>
      </button>
    </div>
    `;
  }
  paintProductsInShopingCart(ids = "", data = []) {
    return ids
      .split("")
      .map((item) => {
        return this.paintProductInShopingCart(data.products[item - 1]);
      })
      .join("");
  }
  paintProduct(product) {
    return `
    <div data-id="${product.id}"class="slot__wrapper js-slot__wrapper">
      <a href="#" class="slot__image-wrapper">
        <img src="${product.image}" alt="${
      product.category
    }" class="slot__image" />
      </a>
      <a href="" class="slot__name">${product.title}</a>
      <div class="slot__cost">$${product.price}</div>
      ${product.sale && `<span class='slot__sale'>$${product.oldPrice}</span>`}
      ${
        product.sale &&
        `<span class="slot__card-sale">${product.sale}% OFF</span>`
      }
      ${product.new ? `<span class="slot__card-new">NEW</span>` : ""}
      <div class="slot__category-name">${product.category}</div>
      <div class="slot__icons-inner-img">
        <div class="icons-inner-img">
          <button class=" icons-inner-img__item js-icon-inner-img js-icon-inner-img__addToCart">
            
              <svg class="svg__market-cart">
                <use xlink:href="images/icons/icons.svg#market-cart"></use>
              </svg>
            
          </button>

          <button class="css-icons-inner-img icons-inner-img__item js-icon-inner-img js-icon-inner-img__like">
            <span> 
              <svg class="heart-animation-svg svg__redHeart">
                <use xlink:href="images/icons/icons.svg#redHeart"></use>
              </svg>
            </span>
          </button>

          <button class="css-icons-inner-img icons-inner-img__item js-icon-inner-img js-icon-inner-img__viewMore">
            <svg class="svg__search">
              <use xlink:href="images/icons/icons.svg#search"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
    `;
  }
  paintProducts(product = []) {
    return product.map((item) => this.paintProduct(item)).join("");
  }
  paintCategory(category) {
    return `
    <div class="category__wrapper js-category__wrapper">
      <button class="btn__categories-types">${category.kind}</button>
      <button class="btn__categories-types">(${category.count})</button>
    </div>
    `;
  }
  paintCategories(categories = []) {
    return categories.map((item) => this.paintCategory(item)).join("");
  }
  paintPageOfProduct(product = {}) {
    return `
      <div class="page-product__nav-wrapper">
        <div class="page-product__main-section">Home /  </div> 
        <div class="page-product__subsection">${product.category} /</div>
        <div class="page-product__subsection">${product.title}</div>
      </div>
      <div class="page-product__wrapper">
        <div class="page-product__slider-wrapper">
          <div class="product-slider__secondary-slides-wrapper">
            <img src="${
              product.image
            }" alt="" class="product-slider__secondary-img" />
            <img src="${
              product.image
            }" alt="" class="product-slider__secondary-img" />
            <img src="${
              product.image
            }" alt="" class="product-slider__secondary-img" />
            <img src="${
              product.image
            }" alt="" class="product-slider__secondary-img" />
          </div>
          <div class="product-slider__main-slides">
            <img src=${product.image} alt="" class="product-slider__main-img" />
          </div>
        </div>
        <div class="page-product__description-wrapper">
          <div class="product-vie">
            <div class="product-vie__slider"></div>
            <div class="product-vie__description">
              <div class="description__name">${product.title}</div>
              <div class="description__cost">$${product.price}</div>
              <div class="description__rating-wrapper">
                <div class="stars__wrapper">

                </div>
              </div>
              <div class="description__short-wrapper">
                <div class="description__short-title"> Short Description:</div>
                <div class="description__short-text">${
                  product.shortDescription
                }</div>
              </div>
              <div>
                <div class="description__size-title"> Sizes:</div>
                <div class="description__size-wrapper">
                  ${
                    product.sizes.split(",")[0]
                      ? `<button class="btn__size">${
                          product.sizes.split(",")[0]
                        }</button>`
                      : ""
                  }
                  ${
                    product.sizes.split(",")[1]
                      ? `<button class="btn__size">${
                          product.sizes.split(",")[1]
                        }</button>`
                      : ""
                  }
                  ${
                    product.sizes.split(",")[2]
                      ? `<button class="btn__size">${
                          product.sizes.split(",")[2]
                        }</button>`
                      : ""
                  }
                  ${
                    product.sizes.split(",")[3]
                      ? `<button class="btn__size">${
                          product.sizes.split(",")[3]
                        }</button>`
                      : ""
                  }
                </div>
              </div> 
              <div class="description__btn-wrapper">
                <button class="btn__buyNow"> Buy NOW</button>
                <button class="btn__addToCart"> ADD TO CART</button>
              </div>
              <div class="description__info-wrapper">
                <div class="description__sku-wrapper">
                  <div class="description__info-title">SKU:</div>
                  <div class="description__sku"> ${product.sku}</div>
                </div>
                <div class="description__categories-wrapper">
                  <div class="description__info-title">Category:</div>
                    <a href="" class="description__link">${
                      product.category
                    }</a>  
                </div>
                <div class="description__tags-wrapper">
                  <div class="description__info-title">Tags:</div>
                    ${
                      product.tags.split(",")[0]
                        ? `<a href="" class="description__link">${
                            product.tags.split(",")[0]
                          }</a>`
                        : ""
                    }
                    ${
                      product.tags.split(",")[1]
                        ? `<a href="" class="description__link">${
                            product.tags.split(",")[1]
                          }</a>`
                        : ""
                    }
                    ${
                      product.tags.split(",")[2]
                        ? `<a href="" class="description__link">${
                            product.tags.split(",")[2]
                          }</a>`
                        : ""
                    }
                    ${
                      product.tags.split(",")[3]
                        ? `<a href="" class="description__link">${
                            product.tags.split(",")[3]
                          }</a>`
                        : ""
                    }
                </div>
                <div class="description__share-wrapper">
                  <div>Share this products:</div>
                  <button class="btn__facebook">
                    <svg class="svg__facebook">
                      <use xlink:href="images/icons/icons.svg#Facebook"></use>
                    </svg>
                  </button>
                  <button class="btn__twitter">
                    <svg class="svg__twitter">
                      <use xlink:href="images/icons/icons.svg#Twitter"></use>
                    </svg>
                  </button>
                  <button class="btn__linkedIn">
                    <svg class="svg__linkedIn">
                      <use xlink:href="images/icons/icons.svg#Linkedin"></use>
                    </svg>
                  </button>
                  <button class="btn__mail">
                    <svg class="svg__mail">
                      <use xlink:href="images/icons/icons.svg#mail"></use>
                    </svg></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-product__full-description-wrapper"></div>
      <div class="full-description__title-wrapper">
        <button class="btn__full-description active__link">Product Description</button>
        <button class="btn__full-reviews">
          <div>Reviews</div>
          <div>(${product.countOfCustomersReview})</div>
        </button>
      </div>
      <div class="full-desctiption__text-wrapper">
        <div class="full-desctiption__text">${product.fullDescription}</div>
      </div>
`;
  }
}
