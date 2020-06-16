'use strict';
// ЗАДАНИЕ 1
for (let i = 0; i <= 10; i++) {
  let number = +i;
  if (number % 2) {
    console.log(`${number} нечетное число`);
  } else if (number == 0) {
    console.log(`${number} это ноль`);
  } else {
    console.log(`${number} четное число`);
  }
}

// ЗАДАНИЕ 2
const post = {
  author: 'John', //вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: 'Alex',
      text: 'lorem ipsum',
      rating: {
        likes: 10,
        dislikes: 2, //вывести это число
      },
    },
    {
      userId: 5, //вывести это число
      userName: 'Jane',
      text: 'lorem ipsum 2', //вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// ЗАДАНИЕ 3

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

products.forEach(function (currentValue) {
  console.log(`Сумма с учетом скидки равна ${currentValue.price - currentValue.price * 0.15} р.`);
});

// ЗАДАНИЕ 4

const product = [
  {
    id: 3,
    price: 127,
    photos: ['1.jpg', '2.jpg'],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ['3.jpg'],
  },
  {
    id: 8,
    price: 78,
  },
];

let photosArr = product.filter(function (element, item, i) {
  if (element.hasOwnProperty(element.photos) && element.photos.length > 0) {
    return item;
  }
});
console.log(photosArr);

// Не до конца разобрался как решить это задание, нужна помощь))

// ЗАДАНИЕ 5

let count = [];

count.forEach(function (element) {
  if (count.length < count.length + 1) {
    let numArr = [];
    numArr.push(element);
  } else if (numArr.length > 9) {
    break;
  }
});
// Пытался вывести числв новый массив без цикла, для начала, путем доваления функции с помощью метода push,
// но не совсме понял как увеличить число в новом массиве на 1

// ЗАДАНИЕ 6

for (let x = 'x'; x.length <= 20; x += 'x') {
  console.log(x);
}
