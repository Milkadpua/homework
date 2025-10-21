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
    await page.locator('xpath=//*[@id="impressiveRadio"]/label').check();
    await page
      .locator('xpath=//*[@id="app"]//*[@id="yesRadio" and @name="like"]')
      .check();
  }
);
