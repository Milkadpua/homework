//функція приймає Page і повертає обєкт
//всі локатори зберігає в одному місці і отримує їх як функція

function getLocators(page: Page) {
  return {
    drinks: (drink: string) => page.locator(`[data-test="${drink}"]`),
    nameInput: () => page.getByRole('textbox', { name: 'Name' }),
    emailInput: () => page.getByRole('textbox', { name: 'Email' }),
    promotionCheckbox: () =>
      page.getByRole('checkbox', { name: 'Promotion checkbox' }),
    submitButton: () => page.getByRole('button', { name: 'Submit' }),
    checkoutButton: () => page.locator('[data-test="checkout"]'),
  };
}

test(`PS-001151 param`, async ({ page }) => {
  const locators = getLocators(page);

  await page.goto('https://coffee-cart.app/');

  await locators.drinks('Espresso').click();
  await locators.checkoutButton().click();

  await locators.nameInput().fill('Pavlo');
  await locators.emailInput().fill('Pavlo@gm.com');

  await locators.promotionCheckbox().click();
  await locators.submitButton().click();
});
