'use strict';

const numberOne = +prompt('Введите первое число:');
const numberTwo = +prompt('Введите второе число:');

const findMinNumber = (a, b) => {
  return (a + b - Math.abs(a - b)) / 2;
}

if (!Number.isNaN(numberOne) || !Number.isNaN(numberTwo)) {
  console.log(`Минимальное число из ${numberOne} и ${numberTwo}: ${findMinNumber(numberOne, numberTwo)}`);
} else {
  console.log('Вы ввели некорректные данные.');
}
