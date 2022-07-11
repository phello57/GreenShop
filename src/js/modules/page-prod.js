const sizeBtnWrapper = document.querySelector(".description__size-wrapper")
const countOfProduct = document.querySelector(".description__count")
const countMore = document.querySelector(".count-more")
const countLess = document.querySelector(".count-less")
const imgWrapper = document.querySelector(".product-slider__secondary-slides-wrapper")

export const description = {
  start: function() {
    // Кнопки размеров товара
    sizeBtnWrapper.onclick = function(event) {
      let target = event.target;
      if (target.tagName != 'BUTTON') return; 
      for(let i = 0;i < sizeBtnWrapper.children.length; i++)
      sizeBtnWrapper.children[i].classList.remove('active__size')
      target.classList.add('active__size');
    }
    // Кнопки Больше и Меньше
    countMore.addEventListener('click',function() {
      countOfProduct.innerHTML = Number(countOfProduct.innerHTML) + 1
    })
    countLess.addEventListener('click',function() {
      if (Number(countOfProduct.innerHTML) == 1) return
        else countOfProduct.innerHTML = Number(countOfProduct.innerHTML) - 1
    })
  },
}
export const slider = {
  start: function() {
    imgWrapper.onclick = function(event) {
      let target = event.target;
      if (target.tagName != 'IMG') return
        else {
          document.querySelector('.product-slider__main-img').src = event.target.src 
          document.querySelector('.product-slider__main-slides').firstChild.firstChild.srcset = ''
        }
    }
  },
}
