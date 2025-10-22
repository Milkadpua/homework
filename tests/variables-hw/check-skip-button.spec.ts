import { test, expect } from '@playwright/test';
const baseUrl = 'https://coffee-cart.app/';

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
    const Espresso = page.locator('[data-test="Espresso"]');
    const EspressoMacchiato = page.locator('[data-test="Espresso_Macchiato"]');
    const PromoText = page.locator('.promo', {
      hasText: "It's your lucky day! Get an extra cup of Mocha for $4.",
    });
    const SkipPromoButton = page.locator('button:has-text("Nah, I\'ll skip.")');
    const ListItem = page.getByRole('listitem').filter({ hasText: 'cart (3)' });

    await page.goto(baseUrl);
    await Espresso.dblclick();
    await EspressoMacchiato.click();
    await expect(PromoText);
    await expect(SkipPromoButton).toBeVisible();
    await expect(ListItem).toBeVisible();
  }
);
