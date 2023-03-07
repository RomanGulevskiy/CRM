'use strict';

const income = +prompt('Введите сумму вашего дохода.');

if (!Number.isNaN(income)) {
  switch (true) {
    case (income < 15000):
      console.log(`Сумма вашего налога состовляет ${income * 0.13} рублей.`);
      break;
    case (income >= 15000 && income < 50000):
      console.log(`Сумма вашего налога состовляет ${income * 0.2} рублей.`);
      break;
    case (income >= 50000):
      console.log(`Сумма вашего налога состовляет ${income * 0.3} рублей.`);
  }
} else {
  console.log('Вы ввели некорректные данные.');
}
