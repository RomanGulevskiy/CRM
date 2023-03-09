'use strict';

const price = +prompt('Введите цену:');

const convertEURtoRUR = sum => {
  const USD = sum * 1.2;
  return USD * 73;
}

if (!Number.isNaN(price) && price > 0) {
  console.log(`${price} евро = ${convertEURtoRUR(price)} рублей`);
} else {
  console.log('Вы ввели некорректную цену.');
}
