import { test, expect, Page } from '@playwright/test';
import { text } from 'stream/consumers';

test(
  ' 006 Checkbox form',
  {
    tag: ['@demoqa', '@xpath'],
    annotation: {
      type: 'description',
      description: 'Testing Checkbox form using Xpath',
    },
  },
  async ({ page }) => {
    const expandAll = page.locator(
      "//*[@class='rct-icon rct-icon-expand-all']"
    );
    const desktopCheckboxLocator = page.locator(
      "//*[contains (@class, 'rct-title' and text() = 'Desktop'"
    );
    const workSpaceCheckboxLocator = page.locator(
      "//*[contains (@class, 'rct-title' and text= 'WorkSpace'"
    );
    const officeCheckboxLocator = page.locator(
      "//*[contains (@class, 'rct-title' and (text() = 'office'"
    );
    const downloadsCheckboxLocator = page.locator(
      "//*[contains (@class, 'rct-title' and text() = 'Downloads'"
    );

    await page.goto('https://demoqa.com/checkbox');
    await expandAll.click();
    await desktopCheckboxLocator.check();
    await expect(desktopCheckboxLocator).toBeChecked();
    await workSpaceCheckboxLocator.check();
    await expect(workSpaceCheckboxLocator).toBeChecked();
    await officeCheckboxLocator.check();
    await expect(officeCheckboxLocator).toBeChecked();
    await downloadsCheckboxLocator.check();
    await expect(downloadsCheckboxLocator).toBeChecked();
  }
);
