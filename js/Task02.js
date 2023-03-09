'use strict';

const str = prompt('Введите строку:');

const fixString = str => {
  let resultStr = str;
  resultStr = resultStr.toLowerCase();
  return resultStr[0].toUpperCase() + resultStr.slice(1);
}

if (str.length > 0) {
  console.log(fixString(str));
} else {
  console.log('Вы ничего не ввели!');
}
