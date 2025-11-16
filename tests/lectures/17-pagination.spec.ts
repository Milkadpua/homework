test('test', async ({ page }) => {
  const elementsToFind = [
    'Article-22-1762948558717',
    'Article-3-1762964854658',
  ];

  await page.goto('https://demo.learnwebdriverio.com/');

  let isVisible = false;

  for (const elementToFind of elementsToFind) {
    for (let i = 1; i <= 18; i++) {
      if (isVisible) {
        break;
      }

      await page
        .locator(`[data-test="page-link-${i}"]`)
        .getByRole('link', { name: `${i}` })
        .click();

      try {
        await expect(
          page.getByRole('link', { name: elementToFind })
        ).toBeVisible({ timeout: 500 });

        isVisible = true;
      } catch (e) {}
    }
  }

  expect(isVisible, '').toBeTruthy();
});
