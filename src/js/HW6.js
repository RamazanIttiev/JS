'use strict';

let slider = document.querySelector('.slider');
let slederItem = document.querySelector('.slider__item');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

// Запуск слайдера

window.addEventListener('load', function () {
  prev.addEventListener('click', function () {
    imgSlides.goLeft();
  });

  next.addEventListener('click', function () {
    imgSlides.goRight();
  });

  // Инициализация слайдера
  imgSlides.init();
});

// Переключение вправо (next)

let imgSlides = {
  currentIdx: 0,
  slides: [],

  // все слайды
  init() {
    this.slides = document.querySelectorAll('.slider__item');
    this.showImageWithCurrentIdx();
  },

  // Показываем текущий слайд
  showImageWithCurrentIdx() {
    const currentSlide = this.slides[this.currentIdx];
    // currentSlide.classList.remove('hidden');
    currentSlide.classList.remove('go-left');
    currentSlide.classList.remove('go-right');
  },

  // hideVisibleImages() {
  //   this.slides.forEach(function (slide) {
  //     slide.classList.add('hidden');
  //   });
  // },

  // Прокрутка вправо

  goRight() {
    // this.hideVisibleImages();
    if (this.currentIdx == this.slides.length - 1) {
      this.currentIdx = 0;
    } else {
      this.currentIdx++;
    }
    const currentSlide = this.slides[this.currentIdx];
    currentSlide.classList.remove('go-right');
    currentSlide.classList.remove('go-left');
    // currentSlide.classList.remove('hidden');
  },

  // Прокрутка влево

  goLeft() {
    // this.hideVisibleImages();
    if (this.currentIdx == 0) {
      this.currentIdx = this.slides.length - 1;
    } else {
      this.currentIdx--;
    }
    const currentSlide = this.slides[this.currentIdx];
    currentSlide.classList.remove('go-right');
    currentSlide.classList.remove('go-left');
    // currentSlide.classList.remove('hidden');
  },
};

// Не понятно работает код, что делаю не так? листает вправо и то один цикл, влево не хочет
// хотел без анимации
// и еще. Как браузер понимает, что свойства currentIdx и slides относятся именно
// к индексу массива и к текущему слайду ?
