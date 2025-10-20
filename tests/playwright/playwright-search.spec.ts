import { test, expect } from "@playwright/test";

test(
  "Playwright-oo2 Check searchbox",
  {
    tag: ["@smoke", "@playwright"],
    annotation: {
      type: "description",
      description: "Check searchbox",
    },
  },
  async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.getByRole("button", { name: "Search (Command+K)" }).click();
    await page.getByRole("searchbox", { name: "Search" }).fill("new");
    await expect(
      page.getByRole("link", { name: "Handling new pages Pages" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Record a New Test Test" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Chromium: new headless mode" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Clear the query" }).click();
  }
);
