import { test, expect } from '@playwright/test';

test(
  'Checkbox form',
  {
    tag: ['@demoqa', '@xpath'],
    annotation: {
      type: 'description',
      description: 'Testing Checkbox form using Xpath',
    },
  },
  async ({ page }) => {
    await page.goto('https://demoqa.com/checkbox');
    await page.locator('xpath=//*[@id="tree-node"]/../svg').click;
    await page.locator('xpath=//span/svg[contains(@class,"rct-icon-uncheck")]')
      .click;
    await page.locator(
      'xpath=//*[@id="tree-node"]/../svg[@class="rct-icon rct-icon-expand-all"]/path'
    ).click;
  }
);
