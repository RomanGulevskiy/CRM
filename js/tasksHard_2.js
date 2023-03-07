'use strict';

const income = +prompt('Введите сумму вашего дохода.');
let tax;

if (!Number.isNaN(income)) {
  switch (true) {
    case (income < 15000):
      tax = income * 0.13;
      console.log(`Сумма вашего налога состовляет ${tax} рублей.`);
      break;
    case (income >= 15000 && income < 50000):
      tax = (income - 14999) * 0.2 + 14999 * 0.13;
      console.log(`Сумма вашего налога состовляет ${tax} рублей.`);
      break;
    case (income >= 50000):
      tax = (income - 49999) * 0.3 + (income - 14999) * 0.2 + 14999 * 0.13;
      console.log(`Сумма вашего налога состовляет ${tax} рублей.`);
  }
} else {
  console.log('Вы ввели некорректные данные.');
}
