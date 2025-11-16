import test, { expect } from '@playwright/test';

const baseUrl = 'https://demo.learnwebdriverio.com/register';

test(
  'TC-02: shows errors for duplicate registration',
  { tag: ['@registration', '@negative'] },
  async ({ page }) => {
    const signInButtonLocator = page.locator('.btn');
    const errorMessageLocator = page.getByText("email can't be blank");
    const errors = page.locator('ul.error-messages > li');

    await page.goto(baseUrl);
    await signInButtonLocator.click();
    await expect(errors).toHaveCount(2);
    await expect(errorMessageLocator).toBeVisible();
    await page.reload();
    await expect(errorMessageLocator).toBeHidden();
  }
);
