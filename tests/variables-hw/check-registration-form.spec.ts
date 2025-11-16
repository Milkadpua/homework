import { test, expect, Locator } from '@playwright/test';

test(
  '017 CoffeeCard Check registration form',
  {
    tag: ['@smoke', '@coffeecard'],
    annotation: {
      type: 'description',
      description: 'Check registration form',
    },
  },
  async ({ page }) => {
    const EsspressoMacchiato: Locator = page.locator(
      '[data-test="Espresso_Macchiato"]'
    );
    const Checkout: Locator = page.locator('[data-test="checkout"]');
    const ButtonClose: Locator = page.locator('button.close');
    const PaymentDetails = page.getByRole('heading', {
      name: 'Payment details',
    });
    const TextSendYouPayment = page.getByText('We will send you a payment');
    const Nametextbox: Locator = page.locator('textbox[aria-label="Name"]');
    const Emailtextbox: Locator = page.locator('textbox[aria-label="Email"]');
    const Promotioncheckbox: Locator = page.locator(
      'checkbox[aria-label="Promotion checkbox"]'
    );
    const ThanksButton = page.getByRole('button', {
      name: 'Thanks for your purchase.',
    });

    await page.goto('');
    await EsspressoMacchiato.click();
    await Checkout.click();
    await ButtonClose.click();
    await Checkout.click();

    await expect(PaymentDetails).toBeVisible();

    await expect(TextSendYouPayment).toBeVisible();

    await Nametextbox.fill('Name');
    await Emailtextbox.fill('Email@test.com');
    await Promotioncheckbox.check();
    await Promotioncheckbox.uncheck();
    await page.locator('button[aria-label="Submit"]').click();
    await expect(ThanksButton).toBeVisible();
  }
);
