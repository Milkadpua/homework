typescript;
// CDP - Chrome DevTool Protocol

// Puppeteer
// Playwright

import { chromium, test } from "@playwright/test";

// DRY - don`t repeat your self

test("run browsers", async ({ page, baseURL }) => {
  console.log(baseURL);
  const browser = await chromium.launch({ headless: false });
  console.log(1);
  const context = await browser.newContext();

  const page1 = await browser.newPage();
  const page2 = await browser.newPage();

  const page3 = await context.newPage();
  const page4 = await context.newPage();
});

test("test page", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await browser.newPage();

  // ElementHandle
  await page.click('[data-testid = "Ok"]');
  await page.$("");
  await page.$$("");
  await page.fill("1", "as");

  // Locator, getBy...
  await page.locator("css selector, xpath").click();
  await page.getByRole("button").click();

  //
  await page.getByRole("button").click({ clickCount: 10 });
  await page.getByRole("button").dblclick();

  await page.getByRole("button").check();
  await page.getByRole("button").uncheck();

  await page.getByRole("button").selectOption(["blue"]);

  await page.locator("css selector, xpath").fill("this is my first fill");
  await page
    .locator("css selector, xpath")
    .pressSequentially("this is my first fill");
    await page.

    // створити Locator
const header = page.locator("h1");
await expect(header).toHaveText("Example Domain");

//Дії з елементами
locator.click(); // Клік
locator.fill("Текст"); // Введення тексту
locator.pressSequentially("Текст"); // Імітація набору
locator.hover(); // Наведення миші
locator.check(); // Вибір чекбокса
locator.uncheck(); // Зняття вибору
locator.selectOption("value"); // Вибір опції (для дропдаунів)

//Очікування
await locator.waitFor(); // Чекає, поки елемент стане доступним

//Отримання інформації
await locator.textContent(); // Отримання тексту
await locator.getAttribute("href"); // Отримання атрибута
await locator.isVisible(); // Перевірка видимості

//Перевірки (Assertions)
expect(locator).toHaveText("Example");
expect(locator).toBeVisible();
expect(locator).toBeEnabled();

//Робота зі списками
locator.nth(1); // Отримання конкретного елемента
locator.first(); // Перший елемент
locator.last(); // Останній елемент
locator.count(); // Кількість елементів

//Інтерактивні методи
locator.focus(); // Фокус на елементі
locator.blur(); // Зняття фокуса

// Запуск одного тестового файлу Щоб запустити один тестовий файл, передайте його ім'я у команду:
npx playwright test landing-page.spec.ts

// Запуск тестів з кількох директорій Щоб запустити набір тестових файлів з різних директорій, передайте їхні шляхи:
npx playwright test tests/todo-page/ tests/landing-page/

//## Запуск файлів, що містять певні ключові слова у назві Щоб запустити файли, які містять у назві landing або login, просто передайте ці ключові слова у CLI:
npx playwright test landing login

//## Запуск тесту з конкретним заголовком Щоб запустити тест із певною назвою, використовуйте прапорець -g, після якого вкажіть заголовок тесту:
npx playwright test -g "add a todo item"


});
