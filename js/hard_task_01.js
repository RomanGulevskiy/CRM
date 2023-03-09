'use strict';

const numberOne = +prompt('Введите первое число:');
const numberTwo = +prompt('Введите второе число:');


const findGCD = (a, b) => {
  if (b !== 0) {
    const c = a % b;
    return findGCD(b, c);
  }
  return a;
}

if (!Number.isNaN(numberOne) || !Number.isNaN(numberTwo)) {
  console.log(`Наибольший общий делитель чисел ${numberOne} и ${numberTwo}: ${findGCD(numberOne, numberTwo)}`);
} else {
  console.log('Вы ввели некорректные данные.');
}
