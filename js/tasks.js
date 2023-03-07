'use strict';

{
  const rain = Math.round(Math.random());

  if (rain) {
    console.log('Пошёл дождь. Возьмите зонт!');
  } else {
    console.log('Дождя нет!');
  }
}

{
  const resMath = prompt('Введите количество баллов по математике');
  const resRussian = prompt('Введите количество баллов по русскому языку');
  const resInformatics = prompt('Введите количество баллов по информатике');

  if (resMath + resRussian + resInformatics >= 265) {
    console.log('Поздравляем, вы поступили на бюджет!');
  }
}

{
  const money = prompt('Сколько денег вы хотите снять?');

  if (money > 99 && money % 100 === 0) {
    console.log('Вы можете снять такую сумму.');
  } else {
    console.log('Вы не можете снять такую сумму.');
  }
}
