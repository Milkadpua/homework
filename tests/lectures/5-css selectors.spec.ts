import { expect } from "@playwright/test";

page.getByRole(); // знаходить елементи за явними та неявними атрибутами доступності.
page.getByText(); // знаходить елемент за текстовим вмістом.
page.getByLabel(); // знаходить елемент форми за текстом пов’язаного label.
page.getByPlaceholder(); // знаходить input за текстом у placeholder.
page.getByAltText(); // знаходить елемент (зазвичай зображення) за альтернативним текстом (alt).
page.getByTitle(); // знаходить елемент за значенням атрибута title.
page.getByTestId(); // знаходить елемент за data-testid (можна налаштувати й інші атрибути).

//приклад
const locator = page.getByText("Submit");
// ... якийсь інший код, що міг перемалювати кнопку...
await locator.hover(); // Знайде актуальний елемент №1
await locator.click(); // Знайде актуальний елемент №2

const listItem = page
  .locator(`//*[@class ='list-header']/following-sibling::li`)
  .getByText("Espresso Macchiato")
  .locator("//ancestor::*[@class = 'list-item']");

// як очікувати, що елемент видимий
await page
  .locator("button", { hasText: "Sing up" })
  .waitFor({ state: "visible" }); // - action
await expect(page.locator("button", { hasText: "Sing up" })).tobeVisible(); // - expect, другий краще

// перезавантаження сторінки
await page.reload();
