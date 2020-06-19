'use strict';
// ЗАДАНИЕ 1
// ES5
function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
  alert(`Цена со скидкой: ${(this.price = this.price - this.price * 0.25)}`);
};

let product = new Product('IPhone', 800);
product.make25PercentDiscount();

// ES6

class Products {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  make25PercentDiscount() {
    alert(`Цена со скидкой: ${(this.price = this.price - this.price * 0.25)}`);
  }
}

let products = new Products('IPhone', 800);
products.make25PercentDiscount();

// После повторного просмотра все равно не совсем понял суть всей структуры и поэтому не
// не уверен, что правильно сделал. Было бы хорошо, если б еще раз объяснили)

// Потом когда смотрю constructor > prototype образовывается бесконечная вложенность почему то

// ЗАДАНИЕ 2
// ES5 (a)

function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

Post.prototype.edit = function () {
  this.edit = this.text;
};

let edited = new Post('Ramazan', 'lorem', 19.06);
edited.edit();

// ES6 (a)
class Posts {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }

  edit() {
    this.edit = this.text;
  }
}

let editedText = new Posts('Ramazan', 'lorem', 19.06);
editedText.edit();

// ES5 (b)

function AttachedPost(author, text, date) {
  this.highlighted = false;
}

// ES6 (b)

// class AttachedPost {
//   constructor(author, text, date) {}
// }

// Не успеваю доделать, постараюсь к следующему занятию.

// Но все равно смутно понял объекты
