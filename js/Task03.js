'use strict';

const calculate = (sum = 0, quantity = 0, promo = '') => {
  let resultSum = sum;
  let discount = 0;

  if (quantity > 10) {
    discount += resultSum * 0.03;
  }

  if (resultSum > 30000) {
    discount += (resultSum - 30000) * 0.15;
  }

  if (promo === 'METHED') {
    discount += resultSum * 0.1;
  }

  if (promo === 'G3H2Z1' && discount < 2000) {
    discount += 500;
  }

  return discount;
}

console.log(`Сумма вашей скидки составляет: ${Math.round(calculate(30001, 11, 'G3H2Z1'))}`);
