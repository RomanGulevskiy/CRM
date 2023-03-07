'use strict';

{
  const itemName = 'Помидоры';
  let itemQuantity = 10;
  let itemCategory = 'Продукты';
  let itemPrice = 100;

  console.log(itemName);
  console.log(itemQuantity * itemPrice);
}

{
  const itemName = prompt('Введите наименование товара:');
  const itemQuantity = +prompt('Введите количество товара:');
  const itemCategory = prompt('Введите категорию товара:');
  const itemPrice = +prompt('Введите цену товара:');

  console.log(typeof itemName);
  console.log(typeof itemQuantity);
  console.log(typeof itemCategory);
  console.log(typeof itemPrice);

  if (Number.isNaN(itemQuantity)) {
    console.log('Вы ввели некорректное количество.');
  }

  if (Number.isNaN(itemPrice)) {
    console.log('Вы ввели некорректную цену.');
  }

  console.log(`В наличии ${itemQuantity} единиц(-ы) товара ${itemName} на общую сумму ${itemQuantity * itemPrice} рублей.`);
}
