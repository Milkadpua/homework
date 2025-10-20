import { test, expect } from "@playwright/test";

test(
  "negative-login-form",
  {
    tag: ["@smoke", "@registration"],
    annotation: {
      type: "description",
      description: "Negative checks of the login form",
    },
  },
  async ({ page }) => {
    await page.goto("https://demo.learnwebdriverio.com/login");
    await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
    await page.getByRole("textbox", { name: "Email" }).click();
    await page.getByRole("button", { name: "Sign in" }).click();
    await expect(page.getByText("email can't be blank")).toBeVisible();
    await page.getByRole("textbox", { name: "Email" }).fill("test123@test.com");
    await page.getByRole("button", { name: "Sign in" }).click();
    await expect(page.getByText("password can't be blank")).toBeVisible();
    await page.getByRole("textbox", { name: "Email" }).fill("test123@test.com");
    await page.getByRole("textbox", { name: "Password" }).fill("123455sdasfas");
    await page.getByRole("button", { name: "Sign in" }).click();
    await expect(page.getByText("email or password is invalid")).toBeVisible();
  }
);
