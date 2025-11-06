// loop - цикл
import { test, expect } from '@playwright/test';

test(
  ' CoffeeCard-0001 Order espresso should be successfull',
  {
    tag: ['@smoke', '@coffeecard'],
    annotation: {
      type: 'description',
      description: 'Order espresso should be successfull',
    },
  },
  async ({ page }) => {
    await page.goto('');

    for (let i = 0; i < 100; i = i + 1) {
      await page.locator('[aria-label="Espresso"]').click();
      await page.locator('[aria-label="Espresso Macchiato"]').click();
      expect(page.locator('[aria-label="Card page"]')).toContainText(
        String(i * 2)
      );
    }
  }

  //while
  let i=o;
  while (i<100){
   await page.locator('[aria-label="Espresso"]').click();
   i++;  
  }

  //do while
  do{
    console.log(i);
    i++
  }
  while(i<10)
);
