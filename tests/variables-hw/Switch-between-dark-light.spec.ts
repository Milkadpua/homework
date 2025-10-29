import { test, expect } from '@playwright/test';
const baseUrl = 'https://playwright.dev/';
test(
  '021 Playwright Switch between dark and light',
  {
    tag: ['@smoke', '@playwright'],
    annotation: {
      type: 'description',
      description: 'Switch between dark and light',
    },
  },
  async ({ page }) => {
    const switchButton = page.getByRole('button', {
      name: 'Switch between dark and light',
    });
    await page.goto(baseUrl);
    let locator = page.locator('html');
    await expect(locator).toHaveAttribute('data-theme-choice', 'system');
    await switchButton.click();
    await expect(locator).toHaveAttribute('data-theme-choice', 'light');
    await switchButton.click();
    await expect(locator).toHaveAttribute('data-theme-choice', 'system');
    await switchButton.click();
    await expect(locator).toHaveAttribute('data-theme-choice', 'light');
    await switchButton.click();
    await expect(locator).toHaveAttribute('data-theme-choice', 'dark');
  }
);
