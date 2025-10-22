import { test, expect } from '@playwright/test';

test(
  'CoffeeCard-0004 Check registration form',
  {
    tag: ['@smoke', '@coffeecard'],
    annotation: {
      type: 'description',
      description: 'Check registration form',
    },
  },
  async ({ page }) => {
    await page.goto('');
    await page.locator('[data-test="Espresso_Macchiato"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('button.close').click();
    await page.locator('[data-test="checkout"]').click();

    await expect(
      page.getByRole('heading', { name: 'Payment details' })
    ).toBeVisible();

    await expect(page.getByText('We will send you a payment')).toBeVisible();

    await page.locator('textbox[aria-label="Name"]').fill('Name');
    await page.locator('textbox[aria-label="Email"]').fill('Email@test.com');
    await page.locator('checkbox[aria-label="Promotion checkbox"]').check();
    await page.locator('checkbox[aria-label="Promotion checkbox"]').uncheck();
    await page.locator('button[aria-label="Submit"]').click();
    await expect(
      page.getByRole('button', { name: 'Thanks for your purchase.' })
    ).toBeVisible();
  }
);
