'use strict';

{
  const itemName = 'Помидоры';
  let itemQuantity = 10;
  let itemCategory = 'Продукты';
  let itemPrice = 100;
}

{
  const itemName = prompt('Введите наименование товара:');
  const itemQuantity = +prompt('Введите количество товара:');
  const itemCategory = prompt('Введите категорию товара:');
  const itemPrice = +prompt('Введите цену товара:');

  if (Number.isNaN(itemQuantity) || Number.isNaN(itemPrice)) {
    console.log('Вы ввели некорректные данные.');
  } else {
    console.log(`В наличии ${itemQuantity} единиц(-ы) товара ${itemName} на общую сумму ${itemQuantity * itemPrice} рублей.`);
  }
}
