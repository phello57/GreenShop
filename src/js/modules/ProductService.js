export class ProductService {
  constructor(products = []) {
    (this.products = products), (this.idOfProduct = {});
  }
  // return 1 товар
  findProductById(id = "") {
    return this.products[id - 1];
  }
  // return [...]
  filterByType(type = "") {
    return this.products.filter((product) => {
      return product[type] === true || product[type] != "";
    });
  }

  // return [...]
  filterByTitle(search = "", nowContainer = []) {
    return nowContainer.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  // return [...]
  filterByCategories(searchCategory = "", nowContainer = []) {
    return nowContainer.filter((product) => {
      return product.category
        .toLowerCase()
        .includes(searchCategory.toLowerCase());
    });
  }
  filterByPrice(maxPrice = "", nowContainer = []) {
    return nowContainer.filter((product) => {
      return +product.price <= +maxPrice;
    });
  }
}
