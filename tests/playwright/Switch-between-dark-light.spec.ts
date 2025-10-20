import { test, expect } from "@playwright/test";

test(
  "Playwright-oo1 Switch between dark and light",
  {
    tag: ["@smoke", "@playwright"],
    annotation: {
      type: "description",
      description: "Switch between dark and light",
    },
  },
  async ({ page }) => {
    await page.goto("https://playwright.dev/");
    let locator = page.locator("html");
    await expect(locator).toHaveAttribute("data-theme-choice", "system");

    await page
      .getByRole("button", { name: "Switch between dark and light" })
      .click();
    await expect(locator).toHaveAttribute("data-theme-choice", "light");
    await page
      .getByRole("button", { name: "Switch between dark and light" })
      .click();
    await page
      .getByRole("button", { name: "Switch between dark and light" })
      .click();
    await expect(locator).toHaveAttribute("data-theme-choice", "system");
    await page
      .getByRole("button", { name: "Switch between dark and light" })
      .click();
    await expect(locator).toHaveAttribute("data-theme-choice", "light");

    await page
      .getByRole("button", { name: "Switch between dark and light" })
      .click();
    await expect(locator).toHaveAttribute("data-theme-choice", "dark");
  }
);
