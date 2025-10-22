import { test, expect } from '@playwright/test';

test(
  ' CoffeeCard-0005 Check that the skip button does not add the item to the cart',
  {
    tag: ['@smoke', '@coffeecard'],
    annotation: {
      type: 'description',
      description:
        'Check that the skip button does not add the item to the cart',
    },
  },
  async ({ page }) => {
    await page.goto('');
    await page.locator('[data-test="Espresso"]').dblclick();
    await page.locator('[data-test="Espresso_Macchiato"]').click();
    await expect(page.locator('.promo')).toContainText(
      "It's your lucky day! Get an extra cup of Mocha for $4."
    );

    await expect(
      page.locator('button:has-text("Nah, I\'ll skip.")')
    ).toBeVisible();
    await expect(
      page.getByRole('listitem').filter({ hasText: 'cart (3)' })
    ).toBeVisible();
  }
);
