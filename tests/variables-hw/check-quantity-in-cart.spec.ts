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
    const FlatWhiteLocator = page.locator('[data-test="Flat_White"]');
    const CartPage = page.locator('link[aria-label="Cart page"]');
    const ItemCartPage = page.locator('.list-header:has text("Item")');
    const UnitCartPage = page.locator('.list-header:has text("Unit")');
    const TotalCartPage = page.locator('.list-header:has text("Total")');
    const RemoveQTYButton = page.locator(
      'button[aria-label="Remove one Flat White"]'
    );
    const AddQTYButton = page.locator(
      'button[aria-label="Add one Flat White"]'
    );
    await page.goto('');
    await FlatWhiteLocator.dblclick();
    await CartPage.filter({ hasText: 'cart (2)' }).click();
    await expect(ItemCartPage).toBeVisible();
    await expect(UnitCartPage).toBeVisible();
    await expect(TotalCartPage).toBeVisible();
    await RemoveQTYButton.click();
    await CartPage.filter({ hasText: 'cart (1)' }).click();
    await AddQTYButton.click();
    await CartPage.filter({ hasText: 'cart (2)' }).click();
  }
);
