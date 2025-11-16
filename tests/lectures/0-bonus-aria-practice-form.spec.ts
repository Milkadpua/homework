import { test, expect, Page } from '@playwright/test';

class AllElements {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async fillForm(data: RegisterData) {
    for (const key in data) {
      await this.page.getByRole('textbox', { name: key }).fill(data[key]);
    }
  }
}
// обєкт
interface RegisterData {
  Пароль: string;
  'Підтвердження паролю': string;
  'Email адреса': string;
}

test('some test', async ({ page }) => {
  await page.goto('file:///Users/milka/Downloads/demo-aria.html');

  await page.getByRole('textbox', { name: 'Email адреса' }).isVisible();
  await page
    .getByRole('checkbox', { name: 'Я погоджуюся з умовами використання' })
    .check();

  await page.getByLabel('Я погоджуюся з умовами використання').check();
  await page.getByLabel('Пароль').fill('SomePassword');

  const forms = new AllElements(page);

  await forms.fillForm({
    Пароль: '152155',
    'Email адреса': 'test@gm.com',
    'Підтвердження паролю': '1251251',
  });
});
