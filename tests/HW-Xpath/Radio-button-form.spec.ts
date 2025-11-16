import { test, expect } from '@playwright/test';

test(
  '007 Radio-button form',
  {
    tag: ['@demoqa', '@xpath'],
    annotation: {
      type: 'description',
      description: 'Testing Radio-button form using Xpath',
    },
  },
  async ({ page }) => {
    const yesRadioLocator = page.locator("//*[@for='yesRadio']");
    const impressiveRadioLocator = page.locator("//*[@for='impressiveRadio']");
    const noRadoilocator = page.locator("//*[@for='noRadio']");
    const successTextLocator = page.locator("//*[@class='text-success']");

    await page.goto('https://demoqa.com/radio-button');

    await yesRadioLocator.check();
    await expect(yesRadioLocator).toBeChecked();
    await expect(successTextLocator).toHaveText('Yes');

    await expect(noRadoilocator).toBeDisabled();
    await impressiveRadioLocator.check();
    await expect(impressiveRadioLocator).toBeChecked();
    await expect(successTextLocator).toHaveText('Impressive');
  }
);
