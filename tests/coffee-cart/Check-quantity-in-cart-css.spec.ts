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
    await page.goto('');
    await page.locator('[data-test="Flat_White"]').dblclick();
    await page
      .locator('link[aria-label="Cart page"]')
      .filter({ hasText: 'cart (2)' })
      .click();
    await expect(page.locator('.list-header:has text("Item")')).toBeVisible();
    await expect(page.locator('.list-header:has text("Unit")')).toBeVisible();
    await expect(page.locator('.list-header:has text("Total")')).toBeVisible();
    await page.locator('button[aria-label="Remove one Flat White"]').click();
    await page
      .locator('link[aria-label="Cart page"]')
      .filter({ hasText: 'cart (1)' })
      .click();
    await page.locator('button[aria-label="Add one Flat White"]').click();
    await page
      .locator('link[aria-label="Cart page"]')
      .filter({ hasText: 'cart (2)' })
      .click();
  }
);
