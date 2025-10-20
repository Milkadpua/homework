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
    await page.locator('[aria-label="Espresso Macchiato"]').click();
    await page.locator('[aria-label="Proceed to checkout"]').click();
    await page.getByRole('textbox', { name: 'Name' }).fill('Test');
    await page.getByRole('textbox', { name: 'Email' }).fill('test123@test.com');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(
      page.getByRole('button', { name: 'Thanks for your purchase.' })
    ).toBeVisible();
    await expect(
      page.locator('div').filter({ hasText: /^Total: \$0\.00$/ })
    ).toBeVisible();
  }
);
