
// === Карточки
const allPrices = document.querySelectorAll(".cart__price") 
const allQuantities = [...document.querySelectorAll(".cart__quantity")]
const allTotals = [...document.querySelectorAll(".cart__total")]
const wrapperCount = document.querySelectorAll(".cart__quantity-wrapper");

// === Калькулятор со скидками  и доставкой
const subTotal = document.querySelector('.js_calc-cost__subtotal')
const coupon = document.querySelector('.js_calc-cost__coupon')
const shipping = document.querySelector('.js_calc-cost__shipping')
const endTotal = document.querySelector('.js_calc-cost__endtotal')

// Принцип - при нажатии кнопок +- количества товара пересчитывается вся страница
export const shopCalc = {
  start: function () {
    shopCalc.calcAllTotals();
    shopCalc.calcEndTotal()
    wrapperCount.forEach((el) => {
      el.onclick = (event) => {
        let target = event.target;
        const step = 1;
        if (target.classList.contains("js__btn-change-count-more")) {
          target.previousElementSibling.innerHTML = Number(target.previousElementSibling.innerHTML) + step;

          shopCalc.reCalculateByQuontity();
          shopCalc.calcAllTotals();
          shopCalc.calcEndTotal()
        } else if (target.nextElementSibling.innerHTML == 1) {return} 
        else if (target.classList.contains("js__btn-change-count-less"))
        target.nextElementSibling.innerHTML = Number(target.nextElementSibling.innerHTML) - step;
            
          shopCalc.reCalculateByQuontity();
          shopCalc.calcAllTotals();
          shopCalc.calcEndTotal()
      };
    });
  },

  reCalculateByQuontity() {
    allPrices.forEach((el,index) => {
      const price = +el.outerText.slice(1)
      const result = +allQuantities[index].innerHTML * price
      allTotals[index].innerHTML = `$${result}.00`
    });
  },

  calcAllTotals() {
    let result = 0
    allTotals.forEach((el) => {
      let cutNumberEl = +el.outerText.slice(1)
      result += cutNumberEl
      subTotal.innerHTML = `$${result}.00`
    })
  },

  calcEndTotal() {
    let subtotal = +subTotal.outerText.slice(1)
    let couponSail = +coupon.outerText.slice(4)
    let shippingToDoor = +shipping.outerText.slice(1)
    endTotal.innerHTML = `$${subtotal - couponSail + shippingToDoor}.00`
  },
}