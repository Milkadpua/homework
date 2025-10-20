import { test, expect } from "@playwright/test";

test(
  "negative registration form checks",
  {
    tag: ["@smoke", "@registration"],
    annotation: {
      type: "description",
      description: "Negative checks of the registration form",
    },
  },
  async ({ page }) => {
    await page.goto("https://demo.learnwebdriverio.com/register");
    await page.getByRole("button", { name: "Sign up" }).click();
    await expect(page.getByText("username can't be blank")).toBeVisible();
    await expect(page.getByText("email can't be blank")).toBeVisible();
    await page.getByRole("textbox", { name: "Username" }).fill("ее");
    await page.getByRole("button", { name: "Sign up" }).click();
    await expect(page.getByText("username is invalid")).toBeVisible();
    await page.getByRole("textbox", { name: "Username" }).fill("Test1212");
    await page.getByRole("textbox", { name: "Email" }).fill("@test.com");
    await page.getByRole("button", { name: "Sign up" }).click();
    await expect(page.getByText("email is invalid")).toBeVisible();
  }
);
