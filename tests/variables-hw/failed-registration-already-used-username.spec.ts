import { test, expect } from '@playwright/test';
const baseUrl = 'https://demo.learnwebdriverio.com/register';

test(
  'failed registration: already used username',
  {
    tag: ['@smoke', '@registration'],
    annotation: {
      type: 'description',
      description: 'Registration failed: username already used',
    },
  },
  async ({ page }) => {
    const signUpHeading = page.getByRole('heading', { name: 'Sign up' });
    const singUpLink = page.getByRole('link', { name: 'Sign up' });
    const userNameTextbox = page.getByRole('textbox', { name: 'Username' });
    const userEmailTextbox = page.getByRole('textbox', { name: 'Email' });
    const userPasswordTextbox = page.getByRole('textbox', { name: 'Password' });
    const singUpButton = page.getByRole('button', { name: 'Sign up' });
    const textToShare = page.getByText('A place to share your');
    const home = page.getByRole('link', { name: 'Home' });
    const settings = page.getByRole('link', { name: 'Settings' });
    const logOutButton = page.getByRole('button', {
      name: 'Or click here to logout.',
    });
    const errorUserNameMessageLocator = page.getByText(
      'username is already taken.'
    );
    const errorUserEmailMessageLocator = page.getByText(
      'email is already taken.'
    );

    // Функція для генерації рандомного email
    function generateRandomEmail() {
      const randomString = Math.random().toString(36).substring(2, 10);
      return `user_${randomString}@test.com`;
    }
    const randomEmail = generateRandomEmail();

    // Функція для генерації рандомного Name
    function generateRandomName() {
      const randomString = Math.random().toString(36).substring(2, 10);
      return `user${randomString}`;
    }
    const randomName = generateRandomName();

    // Заповнення форми
    await page.goto(baseUrl);
    await expect(signUpHeading).toBeVisible();
    await userNameTextbox.fill(randomName);
    await userEmailTextbox.fill(randomEmail);
    await userPasswordTextbox.fill('123456f');
    await singUpButton.click();
    await expect(textToShare).toBeVisible();
    await expect(home).toBeVisible();
    await settings.click();
    await logOutButton.click();
    await singUpLink.click();
    await userNameTextbox.fill(randomName);
    await userEmailTextbox.fill(randomEmail);
    await userPasswordTextbox.fill('123456f');
    await singUpButton.click();
    await expect(errorUserNameMessageLocator).toBeVisible();
    await expect(errorUserEmailMessageLocator).toBeVisible();
    await page.reload();
    await expect(errorUserNameMessageLocator).toBeHidden();
    await expect(errorUserEmailMessageLocator).toBeHidden();
  }
);
