/*  import { test } from '@playwright/test';

test(
  ' CoffeeCard-00045 Order all drinks - should be successful',
  {
    tag: ['@smoke', '@coffeecard'],
    annotation: {
      type: 'description',
      description: 'Order should be successfull',
    },
  },
  
  async ({ page }) => {
    // Recording... 
    await page.goto('https://coffee-cart.app/'); */
const coffee = [
  'Espresso',
  'Espresso_Macchiato',
  'Flat_White',
  'Americano',
  'Mocha',
];
/* //перший спосіб
for (let i=0; i<coffee.length; i++){
  await page.locator(`[data-test="${coffee[i]}"]`).click();  
};
// другий спосіб - краще
for (const drink of coffee) {
   await page.locator(`[data-test="${drink}"]`).click();   
}  */

//повертає масив - де індекс + елемент
for (const drink of Object.entries(coffee)) {
  console.log(drink);
}
//helper/ поліфіли
// додає в кінець масиву елемент
coffee.push('large Latte');
console.log(coffee);
// видаляє елемент - в кожній ітерації 1 шт і потім зупиняється
for (const drink of coffee) {
  console.log(drink);
  coffee.pop();
}
console.log(coffee);

// перебирає масив і шукає елемент, повертає тільки перший, який знайшов
console.log(coffee.find((value) => value === 'Espresso_Macchiato'));
// запис аналогічний попередньому але без {} так можна робити в одну строку без return
const result = coffee.find((value) => value === 'Espresso');
console.log(result);
// шукає елемент і повертає false/true
console.log(coffee.includes('Mocha'));
// шукає елемент і повертає false/true - і починає з конкретного індексу
console.log(coffee.includes('Mocha', 4));
//повертає індекс елемента, якщо знайшов
console.log(coffee.indexOf('Flat_White'));

//робить якусь дію з кожним елементом масиву і не змінює масив при ітераціях
coffee.forEach((value, index, arr) => {
  console.log(value);
  console.log(index);
  console.log(arr);
});
