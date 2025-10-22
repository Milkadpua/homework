import { test, expect } from '@playwright/test';

test(
  'Radio-button form',
  {
    tag: ['@demoqa', '@xpath'],
    annotation: {
      type: 'description',
      description: 'Testing Radio-button form using Xpath',
    },
  },
  async ({ page }) => {
    await page.goto('https://demoqa.com/radio-button');
    await page.locator('xpath=//label[for="yesRadio"]').check();
    await page.locator('xpath=//label[for="impressiveRadio"]').check();
  }
);
