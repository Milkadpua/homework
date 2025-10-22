import { test, expect } from '@playwright/test';

test(
  'Text Box form',
  {
    tag: ['@demoqa', '@xpath'],
    annotation: {
      type: 'description',
      description: 'Testing Text Box form using Xpath',
    },
  },
  async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    await page.locator('xpath=//*[@id="userName"]').fill('Test');
    await page.locator('xpath=//*[@id="userEmail"]').fill('Test@gmail.com');
    await page
      .locator('xpath=//*[@id="currentAddress"]')
      .first()
      .fill('TestCurrent');
    await page
      .locator('xpath=//*[@id="permanentAddress"]')
      .first()
      .fill('TestPermanent');
    await page.locator('xpath=//*[@id="submit"]').click();
    await expect(page.locator('xpath=//*[@id="name"]')).toHaveText('Name:Test');
    await expect(page.locator('xpath=//*[@id="email"]')).toHaveText(
      'Email:Test@gmail.com'
    );
    await expect(
      page.locator('xpath=//*[@id="currentAddress"]').last()
    ).toHaveText('Current Address :TestCurrent ');
    await expect(
      page.locator('xpath=//*[@id="permanentAddress"]').last()
    ).toHaveText('Permananet Address :TestPermanent ');
  }
);
