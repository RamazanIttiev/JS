'use strict';
// ЗАДАНИЕ 1
//пример 1
let a = 1,
  b = 1,
  c,
  d;
c = ++a;
console.log(c); // ответ: 2
// (++является префиксным инкрементом, увеличивая и "с" и "а" на 1)

//пример 2
d = b++;
console.log(d); //ответ: 1
/* 
(++является постфиксным инкрементом, увеличивая только "b" на 1, 
переменной "d" присваивается старое значение "b")
*/

//пример 3
c = 2 + ++a;
console.log(c); //ответ: 5
/* 
так как "а" = 2, после увеличения в первом примере, 
а префиксный инкремент увеличивает ее на 1 и на выходе получается 3, то ответ = 5
*/

//пример 4
d = 2 + b++;
console.log(d); //ответ: 4
/*
тут так же ситуация, "b" увеличивается на 1, но не увеличивая "d", получается 2 + 2 = 4
*/

console.log(a); //ответ: 3 из третьего примера после увеличения "а", которая уже равнялась 2 на еденицу
console.log(b); //ответ: 3 из четвертого примера после увеличения "b", которая уже равнялась 2 на еденицу

// ЗАДАНИЕ 2

let h = 2;
let x = 1 + (h *= 2);
// ответ:5, так как *= это сокращенная форма от h = h * 2, соответственно x = 1 + (2 * 2), x = 5

// ЗАДАНИЕ 3

let num1 = -7;
let num2 = 2;

if (num1 >= 0 && num2 >= 0) {
  let result = num1 - num2;
  console.log(result);
} else if (num1 < 0 && num2 < 0) {
  let result2 = num1 * num2;
  console.log(result2);
} else if (num1 < 0 || (num1 >= 0 && num2 < 0) || num2 >= 0) {
  /*
  правильно ли использовал метод? 
  (Math.abs(num1) || (-Math.abs(num1) && Math.abs(num2) < 0) || -Math.abs(num2) >= 0)
  */
  let result3 = num1 + num2;
  console.log(result3);
}

// ЗАДАНИЕ 4

/**
 * Реализовают основные 4 арифметические операции (+, -, /, *);
 * @param {number} z
 * @param {number} x
 */
function getSum(z, x) {
  return z + x;
}

function getDiff(z, x) {
  return z - x;
}

function getMult(z, x) {
  return z * x;
}

function getDev(z, x) {
  return z / x;
}

getMult(2, 2);

// ЗАДАНИЕ 5

/**
 * В зависимости от 
переданного значения операции выполняют одну из арифметических 
операций 
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation 
 */
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case 'sum':
      return arg1 + arg2;
    case 'subtract':
      return arg1 - arg2;
    case 'multiply':
      return arg1 * arg2;
    case 'devide':
      return arg1 / arg2;
  }
}

mathOperation(2, 10, 'sum');
// не совсем понял как использовать тут функции из 4 задания

// ЗАДАНИЕ 6

let question = Number(prompt('Сколько Вы хотели бы положить на свой счет ?'));

function num2str(question, text_forms) {
  question = Math.abs(question) % 100;
  let question1 = question % 10;
  if (question1 > 10 && question1 < 20) {
    return alert(`Ваша сумма в ${question} ${text_forms[1]} успешно зачислена.`);
  }
  if (question1 > 1 && question1 < 5) {
    return alert(`Ваша сумма в ${question} ${text_forms[0]} успешно зачислена.`);
  }
  if (question1 == 1) {
    return alert(`Ваша сумма в ${question} ${text_forms[2]} успешно зачислена.`);
  }
  if (question1 == 0 || question1 <= 5) {
    return alert(`Ваша сумма в ${question} ${text_forms[1]} успешно зачислена.`);
  }
}

num2str(question, ['рубля', 'рублей', 'рубль']);
