var sliders = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var countOfSliders = document.querySelector(".count-of-sliders");

export const slider = {
    index: 0,
    start: function () {
        // запускаем авто-прокрутку слайдера
        let intervalID = setInterval(slider.nextSlide, 3000);
        // создаем пагинацию
        slider.createDots();
        // обновляем массив пагинации
        dots = document.querySelectorAll(".dot");
        // добавляем первой кнопке выделение
        dots[0].classList.add("now-position");
        // ловим клик на любую из кнопок 
        countOfSliders.onclick = (event) => {
	    if (event.target.classList[0] != "dot") return; //проверка попадания пагинации
            this.activeSlide(event.target.id);
            clearInterval(intervalID);
        };
    }, 
    // создаем пагинацию в зависимости от кол-ва слайдов
    createDots() {
        for (let i = 0; sliders.length > i; i++) {
            countOfSliders.innerHTML += 
            `<div id="${i}" class="dot some-position"></div>`;
        }
    },
    nextSlide: () => {
        if (slider.index == sliders.length - 1) {
            slider.index = 0;
            slider.activeSlide(slider.index);
        } else {
            slider.index++;
            slider.activeSlide(slider.index);
        }
    },
    activeSlide(numeric) {
        for (this.slide of sliders) {
            this.slide.classList.remove("active__slide");
        }
        for (this.dot of dots) {
            this.dot.classList.remove("now-position");
        }
        dots[numeric].classList.add("now-position");
        sliders[numeric].classList.add("active__slide");
    },
};