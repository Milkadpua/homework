import { test, expect, Page } from '@playwright/test';
test('some test', async ({ page }) => {
  page.getByPlaceholder('Введіть  ваш     email  ', { exact: true });
  page.getByPlaceholder('Введіть ваш email', {});

  page.getByTitle('safafs', { exact: true });
  page.locator("[title = 'safafs']");
  page.locator("//*[@title = 'safafs']");

  page.getByAltText('safafs');
  page.locator("[alt = 'safafs']");
  page.locator("//*[@alt = 'safafs']");

  page.getByText('Я погоджуюся з умовами використання', { exact: true });
  page.locator("//*[text() = 'Я погоджуюся з умовами використання']");

  await page.getByTestId('add-to-cart-1').click();
  await page.getByTestId("[data-testid = 'add-to-cart-1']").click();
  await page.getByTestId("//*[data-testid = 'add-to-cart-1']").click();

  await page
    .getByRole('heading', { level: 3 })
    .filter({ visible: true, hasText: '💻 Ноутбук Pro', hasNotText: '🖱️' })
    .click();

  await page.locator(
    '//button[text() = "Save"] | //button[@data-testid = "Save"]'
  );

  await page
    .getByRole('button', { name: 'Save' })
    .or(page.getByTestId('Save'))
    .click();
});

test('add cappucino', async ({ page }) => {
  await page.goto('https://coffee-cart.app/cart');

  const isVisible = await page.locator('//button').isVisible(); // перевіряємо візібл, але так не можна, перевірка не постійна, бо візібл може не відразу зявитися
  expect(isVisible).toBeTruthy();

  await expect(page.locator('//button')).toBeVisible({ visible: false }); // так вірно перевіряти, бо тут чекає expect
});

test('filter example', async ({ page }) => {
  await page.goto('https://coffee-cart.app');

  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso"]').click();

  await page.getByRole('link', { name: 'Cart page' }).click();

  await page
    .locator('[aria-label="Add one Espresso"]')
    .filter({ visible: true })
    .click();
});
