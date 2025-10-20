test(
  "TC-02: shows errors for duplicate registration",
  { tag: ["@registration", "@negative"] },
  async ({ page }) => {
    await page.locator('a.nav-link[href="/register"]').click();
    await page.locator('input[placeholder="Username"]').fill(user.username);
    await page.locator('input[placeholder="Email"]').fill(user.email);
    await page.locator('input[placeholder="Password"]').fill(user.password);
    await page.locator("button", { hasText: "Sign up" }).click();
    const errors = page.locator("ul.error-messages > li");
    await expect(errors).toHaveCount(2);
    const errorTexts = await errors.allTextContents();
    expect(errorTexts).toContain("username is already taken.");
    expect(errorTexts).toContain("email is already taken.");
  }
);

await page.goto("/login");

await expect(page.getByRole("textbox", { name: "Email" })).toBeEmpty();
await expect(page.getByRole("textbox", { name: "Password" })).toBeEmpty();
await page.getByRole("button", { name: "Sign in" }).click();

await expect(page.getByText("email can't be blank")).toBeHidden(); //toBeHidden
await page.getByRole("textbox", { name: "Email" }).fill("test@test.com");
await page.getByRole("button", { name: "Sign in" }).click();

await expect(page.getByText("password can't be blank")).toBeHidden(); //toBeHidden

await page.getByRole("textbox", { name: "Password" }).fill("11111111");

await page.getByRole("button", { name: "Sign in" }).click();
await expect(page.getByText("password can't be blank")).toBeHidden();
await expect(page.getByText("email or password is invalid")).toBeHidden(); //toBeHidden

// так теж можна, але більш складно
expect(
  page
    .locator("[class~=error-messages] > li")
    .filter({ hasText: "username is already taken" })
).toBeVisible();
