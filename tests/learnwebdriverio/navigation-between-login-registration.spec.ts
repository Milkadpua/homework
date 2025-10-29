import { test, expect } from '@playwright/test';

test(
  '010 navigation between login and registration forms',
  {
    tag: ['@smoke', '@registration'],
    annotation: {
      type: 'description',
      description:
        'Verify the navigation between the login and registration forms works correctly',
    },
  },
  async ({ page }) => {
    // Recording...
    await page.goto('https://demo.learnwebdriverio.com/login');
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
    await page.getByRole('link', { name: 'Need an account?' }).click();
    await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
    await page.getByRole('link', { name: 'Have an account?' }).click();
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
  }
);
