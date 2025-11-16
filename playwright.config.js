// @ts-check
const { defineConfig, devices, expect } = require('@playwright/test');
const playwrightApiMatchers = require('odottaa');

// Підключаємо кастомні матчери для expect
expect.extend(playwrightApiMatchers);

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  timeout: 30 * 1000, // таймаут для тесту 30 сек
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 1, // обов'язково для trace: 'on-first-retry'
  workers: '80%',

  reporter: [['html', { open: 'never' }]],

  use: {
    screenshot: 'only-on-failure', // робити скріни при фейлах
    video: 'retain-on-failure', // записувати відео при фейлах
    trace: 'retain-on-failure', // зберігати трейси при фейлах
  },

  projects: [
    {
      name: 'coffee-cart',

      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://coffee-cart.app/',
        CartPage: 'https://coffee-cart.app/cart',
        testIdAttribute: 'data-test',
      },
    },
    {
      name: 'aria-attributes',

      use: {
        ...devices['Desktop Chrome'],
        baseURL:
          'file:///Users/coach/repositories/temp/demo-sites/demo-aria.html',
      },
    },
  ],
});
