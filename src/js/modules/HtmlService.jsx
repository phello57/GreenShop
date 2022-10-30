export class HTMLService {
  clearContainer(container) {
    [...container.children].forEach((element) => {
      element.remove();
    });
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
          <button class="icons-inner-img__item js-icon-inner-img js-icon-inner-img__addToCart">
            <svg class="svg__market-cart">
              <use xlink:href="images/icons/icons.svg#market-cart"></use>
            </svg>
          </button>
          <button class="icons-inner-img__item js-icon-inner-img js-icon-inner-img__like">
            <svg class="svg__like">
              <use xlink:href="images/icons/icons.svg#like"></use>
            </svg>
          </button>
          <button class="icons-inner-img__item js-icon-inner-img js-icon-inner-img__viewMore">
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
      <section class="section-outer page-product">
        <div className="page-product__nav-wrapper">
          <div className="page-product__main-section">Home</div> 
          <div className="page-product__subsection">${product.category}</div>
          <div className="page-product__subsection">${product.title}</div>
        </div>
        <div className="page-product__wrapper">
          <div className="page-product__slider-wrapper">
            <div className="product-slider__secondary-slides-wrapper">
              <img src="" alt="" className="product-slider__secondary-img" />
              <img src="" alt="" className="product-slider__secondary-img" />
              <img src="" alt="" className="product-slider__secondary-img" />
              <img src="" alt="" className="product-slider__secondary-img" />
            </div>
            <div className="product-slider__main-slides">
              <img src="" alt="" className="product-slider__main-img" />
            </div>
          </div>
          <div className="page-product__description-wrapper">
            <div className="product-vie">
              <div className="product-vie__slider"></div>
              <div className="product-vie__description">
                <div className="description__name">${product.title}</div>
                <div className="description__cost">${product.price}</div>
                <div className="description__rating-wrapper">
                  <div className="stars__wrapper">

                  </div>
                </div>
                <div className="description__short-wrapper">
                  <div className="description__short-title"> Short Description:</div>
                  <div className="description__short-text">${
                    product.shortDescription
                  }</div>
                </div>
                <div>
                  <div className="description__size-title"> Sizes:</div>
                  <div className="description__size-wrapper">
                    ${
                      product.sizes[0]
                        ? `<button className="btn__size">${product.sizes[0]}</button>`
                        : ""
                    }
                    ${
                      product.sizes[1]
                        ? `<button className="btn__size">${product.sizes[1]}</button>`
                        : ""
                    }
                    ${
                      product.sizes[2]
                        ? `<button className="btn__size">${product.sizes[2]}</button>`
                        : ""
                    }
                    ${
                      product.sizes[3]
                        ? `<button className="btn__size">${product.sizes[3]}</button>`
                        : ""
                    }
                  </div>
                </div> 
                <div className="description__btn-wrapper">
                  <button className="btn__buyNow"> Buy NOW</button>
                  <button className="btn__addToCart"> ADD TO CART</button>
                </div>
                <div className="description__info-wrapper">
                  <div className="description__sku-wrapper">
                    <div className="description__info-title">SKU:</div>
                    <div className="description__sku"> ${product.sku}</div>
                  </div>
                  <div className="description__categories-wrapper">
                    <div className="description__info-title"></div>
                      <a href="" className="description__link">${
                        product.category
                      }</a>  
                  </div>
                  <div className="description__tags-wrapper">
                    <div className="description__info-title">Tags:</div>
                      ${
                        product.tags[0]
                          ? `<a href="" className="description__link">${product.tags[0]}</a>`
                          : ""
                      }
                      ${
                        product.tags[1]
                          ? `<a href="" className="description__link">${product.tags[1]}</a>`
                          : ""
                      }
                      ${
                        product.tags[2]
                          ? `<a href="" className="description__link">${product.tags[2]}</a>`
                          : ""
                      }
                      ${
                        product.tags[3]
                          ? `<a href="" className="description__link">${product.tags[3]}</a>`
                          : ""
                      }
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    `;
  }
}
