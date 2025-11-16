import { test } from '@playwright/test';

test(
  ' CoffeeCard-0005 Order all drinks - should be successful',
  {
    tag: ['@smoke', '@coffeecard'],
    annotation: {
      type: 'description',
      description: 'Order should be successfull',
    },
  },
  async ({ page }) => {
    // Recording...
    await page.goto('');
const coffee = [
"Espresso",
"Espresso_Macchiato",
 "Flat_White",
 "Americano",
 "Mocha",
];
/* //перший спосіб
for (let i=0; i<coffee.length; i++){
  await page.locator(`[data-test="${coffee[i]}"]`).click();  
};
// другий спосіб - краще
for (const drink of coffee) {
   await page.locator(`[data-test="${drink}"]`).click();   
} */

//повертає масив - де індекс + елемент
for (const drink of Object.entries(coffee)) {
   console.log(drink);   
}
);