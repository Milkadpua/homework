import { test, expect } from '@playwright/test';

test(
  ' CoffeeCard-0002 Order should be successfull',
  {
    tag: ['@smoke', '@coffeecard'],
    annotation: {
      type: 'description',
      description: 'Order should be successfull',
    },
  },
  async ({ page }) => {
    const coffee = ['Espresso', 'Flat_White', 'Americano'];

    function selectCoffee(coffee: string) {
      page.locator(`[data-test="${coffee}"]`).click();
    }

    await page.goto('');

    for (let i = 0; i < coffee.length; i++) {
      await selectCoffee(coffee[i]);
      console.log(`додано"${coffee[i]}"`);
    }

    await expect(
      page.getByText(
        "It's your lucky day! Get an extra cup of Mocha for $4.espressochocolate"
      )
    ).toBeVisible();
    await page.locator('button:has-text("Yes, of course!")').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('input[name="name"]').fill('Test');
    await page.locator('input[type="email"]').fill('Test123@test.com');
    await page.locator('button[type="submit"]').click();
    await expect(
      page.getByRole('button', { name: 'Thanks for your purchase.' })
    ).toBeVisible();
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
  }
);
