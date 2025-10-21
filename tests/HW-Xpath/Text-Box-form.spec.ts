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
    await page.locator('xpath=//*[@id="currentAddress"]').fill('Test');
    await page.locator('xpath=//*[@id="permanentAddress"]').fill('Test');
    await page.locator('xpath=//*[@id="submit"]').click();
  }
);
