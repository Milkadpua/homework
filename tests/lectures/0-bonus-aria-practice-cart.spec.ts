import { test, expect, Page } from '@playwright/test';
import { name } from '../../playwright.config';

// пишемо попередній приклад через функцію, яка перебирає всі елементи і додає їх в кошик
async function addToCartByName(page: Page, name: string) {
  await page
    .getByRole('heading', { name: name })
    .locator('..')
    .getByRole('button', { name: 'Додати в кошик' })
    .click();
}
test('Aria-practice', async ({ page }) => {
  await page.goto('file:///Users/milka/Downloads/demo-aria.html');

  //await page.getByRole('textbox', { name: 'Email адреса *' }).isVisible; //aria
  // await page.locator("input[id='email'").isVisible; //css
  // await page.locator("//input[@id='email'").isVisible; //Xpath

  //робота з таблицями
  //await page.getByRole('row', { name: /Іван Петренко/ }).isVisible();

  //Chaining - виклик одного локатора за іншим в таблицях
  // await page
  //  .getByRole('row', { name: /Іван Петренко/ })
  //  .getByRole('button', { name: 'Редагувати' })
  //   .click();

  //Chaining - 4 товари і під ними кнопки "Додати в кошик", вибираємо поле з товаром - на рівень вверх - на рівень вниз до кнопки
  // await page
  //   .getByRole('heading', { name: /Ноутбук Pro/ })
  //  .locator('..')
  //  .getByRole('button', { name: 'Додати в кошик' })
  //  .click();

  // дані в масив зберігаємо
  const products = [
    '💻 Ноутбук Pro',
    '🖱️ Бездротова миша',
    '🔌 USB-C хаб',
    '⌨️ Механічна клавіатура',
  ];
  // циклом викличемо ф-цію і додамо всі продукти
  for (const product of products) {
    await addToCartByName(page, product);
  }
  //викликаємо цей метод
  addToCartByName(page, '');
});
