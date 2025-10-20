import { test, expect } from "@playwright/test";

test(
  "successful login form",
  {
    tag: ["@smoke", "@registration"],
    annotation: {
      type: "description",
      description: "The login form was submitted successfully",
    },
  },
  async ({ page }) => {
    // Функція для генерації рандомного email
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 10);
      return `user_${randomString}@test.com`;
    }

    // Генеруємо email
    const randomEmail = generateRandomEmail();

    // Функція для генерації рандомного Name
    function generateRandomName() {
      const randomString = Math.random().toString(36).substring(2, 10);
      return `user${randomString}`;
    }

    // Генеруємо email
    const randomName = generateRandomName();

    // Заповнення форми
    await page.goto("https://demo.learnwebdriverio.com/register");
    await expect(page.getByRole("heading", { name: "Sign up" })).toBeVisible();

    await page.getByRole("textbox", { name: "Username" }).fill(randomName);

    await page.getByRole("textbox", { name: "Email" }).fill(randomEmail);

    await page.getByRole("textbox", { name: "Password" }).fill("123456f");
    await page.getByRole("button", { name: "Sign up" }).click();

    await expect(page.getByText("A place to share your")).toBeVisible();
    await expect(page.getByRole("link", { name: "Home" })).toBeVisible();

    await page.getByRole("link", { name: "Settings" }).click();
    await page
      .getByRole("button", { name: "Or click here to logout." })
      .click();
    await page.getByRole("link", { name: "Sign in" }).click();

    await page.getByRole("textbox", { name: "Email" }).fill(randomEmail);
    await page.getByRole("textbox", { name: "Password" }).fill("123456f");
    await page.getByRole("link", { name: "Sign in" }).click();
    await expect(page.getByText("A place to share your")).toBeVisible();
    await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
  }
);
