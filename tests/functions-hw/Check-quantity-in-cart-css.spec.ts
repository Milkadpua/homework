import { test, expect } from '@playwright/test';

test(
  ' CoffeeCard-0003 Check the correct quantity in the cart',
  {
    tag: ['@smoke', '@coffeecard'],
    annotation: {
      type: 'description',
      description: 'Check the correct quantity in the cart',
    },
  },
  async ({ page }) => {
    const cartPage = ['Item', 'Unit', 'Total'];

    function textIsVisible(cartPage) {
      expect(page.locator('.list-header:has-text(cartPage)')).toBeVisible();
    }

    await page.goto('');
    await page.locator('[data-test="Flat_White"]').dblclick();
    await page
      .locator('a[aria-label="Cart page"]', { hasText: 'cart (2)' })
      .click();

    for (let i = 0; i < 3; i++) {
      textIsVisible(cartPage[i]);
    }
    await page
      .locator('button[aria-label="Remove one Flat White"]')
      .last()
      .click();
    await page
      .locator('a[aria-label="Cart page"]', { hasText: 'cart (1)' })
      .click();
    await page
      .locator('button[aria-label="Add one Flat White"]')
      .first()
      .click();
    await page
      .locator('a[aria-label="Cart page"]', { hasText: 'cart (2)' })
      .last()
      .click();
  }
);
