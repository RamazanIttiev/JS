'use strict';
// Задвние 3 (а) модальное окно
let click = document.querySelector('.modal');
let modalWindow = document.querySelector('#modal-window');
let background = document.querySelector('body');

click.addEventListener('click', function () {
  modalWindow.classList.toggle('window');
  background.classList.toggle('bgr');
});

// ЗАДАНИЕ 4 карточки

let moreBtn = document.querySelector('.product__more');
let backBtn = document.querySelector('.product__back');
let productItem = document.querySelector('.product__item');
let productDescr = document.querySelector('.product__descr');

moreBtn.addEventListener('click', function () {
  productItem.classList.toggle('product__item-active');
  productDescr.classList.toggle('product__descr-active');
});

backBtn.addEventListener('click', function () {
  productItem.classList.toggle('product__item-active');
  productDescr.classList.toggle('product__descr-active');
});
