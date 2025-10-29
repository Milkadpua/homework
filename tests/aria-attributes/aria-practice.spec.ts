import { test, expect } from '@playwright/test';

test('015 Aria-practice', async ({ page }) => {
  await page.goto('file:///Users/milka/Downloads/demo-aria.html');
  await page.getByRole('textbox', { name: 'Email адреса *' }).fill('test');
  await page.getByLabel('Пароль').fill('test');
});
