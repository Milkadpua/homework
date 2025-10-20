import { test, expect } from "@playwright/test";

test("Aria-practice", async ({ page }) => {
  await page.goto("");
  await page.getByRole("textbox", { name: "Email адреса *" }).fill("test");
  await page.getByLabel("Пароль").fill("test");
  await page.getByRole("button", { name: "Створити аккаунт" }).click();

  //робота з таблицями, вивести 6 значень 1го рядка
  for (let i = 0; i < 5; i++) {
    console.log(
      await page.locator('[data-user-id="1"]>td').nth(i).textContent()
    );
  }
});
