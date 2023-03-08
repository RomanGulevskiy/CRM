'use strict';

const income = +prompt('Введите сумму вашего дохода.');
let totalTax = 0;

if (!Number.isNaN(income)) {
  if (income < 15000) {
    totalTax += income * 0.13;
  } else {
    totalTax += 14999 * 0.13;
  }

  if (income >= 15000 && income < 50000) {
    totalTax += (income - 14999) * 0.2;
  } else {
    totalTax += 34999 * 0.2;
  }

  if (income >= 50000) {
    totalTax += (income - 49999) * 0.3;
  }

  console.log(`Сумма вашего налога состовляет ${totalTax} рублей.`);

} else {
  console.log('Вы ввели некорректные данные.');
}
