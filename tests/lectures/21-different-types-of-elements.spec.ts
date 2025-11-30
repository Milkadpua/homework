import { test, expect, Page } from '@playwright/test';
import { format, compareAsc, addWeeks, addYears } from 'date-fns';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  // робота з текстовими полями, метод fill, pressSequentially
  await page
    .getByRole('textbox', { name: 'Standard Text Input:' })
    .fill('test');
  await page
    .getByRole('textbox', { name: 'Password:' })
    .pressSequentially('this is my password just to check', { delay: 1000 }); // 1 секунда між символами
  await page
    .getByRole('textbox', { name: 'Password:' })
    .pressSequentially('this is my password just to check', {
      delay: 1000,
      timeout: 30000,
    }); // 30 секунд чекає поки сторінка завантажиться

  await page.getByRole('spinbutton', { name: 'Number:' }).fill('341251');

  // робота з датами бібліотека date-fns
  const date = format(new Date(2025, 10, 21), 'yyyy-MM-dd'); // місяці рахуються з 0 по 11
  const dateNow = format(Date.now(), 'yyyy-MM-dd'); // Date.now - повертає сьогоднішню дату в потрібному форматі
  const date1 = format(addWeeks(new Date(), 1), 'yyyy-MM-dd'); //дата через тиждень від сьогодні
  const date2 = format(addYears(new Date(), -1), 'yyyy-MM-dd'); // дата - рік тому
  console.log(date);

  await page.getByRole('textbox', { name: 'Date:' }).fill(date);

  // текстове поле, введе саме так по абзацам
  const text = `tewsrts
  statast
  satast
  asfaf`;

  console.log(text);

// текстове поле, введе саме так по абзацам - 2 спосіб
 const textArea = page.getByRole('textbox', { name: 'Textarea:' });
await textArea.pressSequentially("tewsrts",{delay:500});
await textArea.press("Enter"),{delay:500});
await textArea.pressSequentially("statast",{delay:500});
await textArea.press("Enter"),{delay:500});

// текстове поле, введе саме так по абзацам - 3 спосіб
  await page
    .getByRole('textbox', { name: 'Textarea:' })
    .fill('tewsrts\nstatast\nsatast asfasfa asfasf\nasfaf ');

// методи down -up затискають і відпускають кнопки
  await page.keyboard.down('Shift');
  await page.keyboard.type('tewsrts tasfafsa', { delay: 500 });
  await page.keyboard.up('Shift');

  // 
const richTextEditor = page.locator('#rich-text-editor');

  await richTextEditor.fill(`Edit this rich tex
test
test

asfasfa

afasf
`);

  const content = await richTextEditor.textContent();
  const allContent = await page.locator('#inputs-section').allTextContents();
  const innerContent = await richTextEditor.allInnerTexts();

  console.log(content);
  console.log(allContent);
  console.log(innerContent);

// робота з чекбоксами 
  await page.getByRole('checkbox', { name: 'Option 1' }).check();
  await page.getByRole('checkbox', { name: 'Option 2' }).check();
  await page.getByRole('checkbox', { name: 'Option 2' }).uncheck();
  await page.getByRole('checkbox', { name: 'Option 1' }).uncheck();

 // робота з радіобатонами //Male //Female
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('radio', { name: 'Female' }).check();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();

  // drop-down list + multi-select
   await page.getByLabel("Single Select").selectOption("Saab"); // selectOption саме для дробдаунів

// якщо селект не очевидний, то робити в 2 кроки
  await page.getByLabel('Single Select:').click();
  await page.locator('option[value = "volvo"]').click({ force: true }); // force: true він ігнорує всі ці перевірки й просто виконує клік — за будь-яких умов. 

  await page.getByLabel('Multiple Select:').selectOption('red');


  // file upload/localhost.har
  await page
    .getByRole('spinbutton', { name: 'Server Delay (ms):' })
    .fill('11000'); // 11 секунд чекаємо поки елемент буде завантажуватися

  await page
    .getByRole('button', { name: 'Choose File:' })
    .setInputFiles('upload/localhost.har'); // вставляємо файл

  await page.locator('#upload-btn').click();
  await expect(page.locator('.success-msg')).toBeVisible({ timeout: 30_000 }); // чекаємо поки зміниться статус на "Завантажено"

  // 2 спосіб коли потрібно дочекатися повідомлення про flaky button
  await expect(async () => {
    iter++;
    await page.locator('#start-flaky-btn').click();
    await expect(page.locator('#flaky-success-btn')).toBeVisible({
      timeout: 5_000,
    });
  }).toPass({
    intervals: [3_000],
    timeout: 60_000,
  });

  //3 спосіб коли потрібно дочекатися повідомлення про вдале завантаження - генеруємо число і дивимося чи більше воно 0.5
  await expect
    .poll(
      async () => {
        iter++;
        const value = Math.random();
        return value;
      },
      {
        intervals: [10_000],
        timeout: 60_000,
        message: 'this is error',
      }
    )
    .toBeGreaterThan(0.5);

// редагування текстового поля стрілками з клавіатури
  await page.getByText('Edit this rich text...').press('ArrowLeft');
  await page
    .getByText('Edit this rich text... test **')
    .fill('Edit this rich text...\ntest *rich*');
  await page.getByText('Edit this rich text... test **').press('ArrowRight');
  await page
    .getByText('Edit this rich text... test **')
    .fill('Edit this rich text...\ntest *rich* _text_');
  await page.getByText('Edit this rich text...').click();
  await page.getByText('Edit this rich text... test *').click();
  await page.getByText('Edit this rich text... test *').click();
  await page.getByRole('spinbutton', { name: 'Response Delay (ms):' }).click();
  await page
    .getByRole('spinbutton', { name: 'Response Delay (ms):' })
    .fill('3000');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Success! ID:')).toBeVisible();

  // каруселька
const currentSlide = await page
  .locator("[class*='carousel-slide active']")
  .textContent();

const currentSlideNumber = Number(currentSlide?.split(" ")[1]); // метод split ділить на 2 частини текст у нас "Slide 1" і записуємо в масив номер
await page.getByRole("button", { name: ">" }).click(); // натискаємо на стрілочку в каруселі
await expect(
  page.getByText(`Slide ${currentSlideNumber! + 1}`)
).toBeVisible();

// покаращений тест з каруселькою 
  async function getCurrentSlideNumber() {
    const currentSlide = await page
      .locator("[class = 'carousel-slide active']")
      .textContent();

    return Number(currentSlide?.trim().split(' ')[1]);
  }
  const slideCount = await page.locator("[class = 'carousel-slide']").count(); // count повертає кількість елементів
//precondition
  let currentSlideNumber = await getCurrentSlideNumber();
  while (currentSlideNumber != 1) {
    await page.getByRole('button', { name: '❯' }).click({ delay: 100 });
    currentSlideNumber = await getCurrentSlideNumber();
  }

  for (let i = 1; i <= slideCount; i++) {
    await page.getByRole('button', { name: '❯' }).click();
    await expect(
      page.getByText(`Slide ${currentSlideNumber! + 1}`)
    ).toBeVisible();
  }


// popup має Name, яке повторюється на сторінці
const popupPromise = page.waitForEvent('popup'); // чекає поки на сторінці зявиться попап

  const popupLocator = page
    .locator('h3', { hasText: 'Popup Form' }) // 
    .locator('..'); // піднятися на рівень вище

  await page.getByRole('button', { name: 'Open Popup' }).click();

  // popupPage ставимо, якщо він бачить, що це попап або  popupLocator - коли не бачить
  const popupPage = await popupPromise; // тепер у нас є page лише з popup і ми бачимо тільки текст в ній
  await popupPage.getByRole('textbox', { name: 'Name:' }).fill('testtsaaf');
  await popupLocator
    .getByRole('textbox', { name: 'Email:' })
    .fill('testasfasf');

// dialogs - вспливаючі вікна в браузері
  page.once('dialog', (dialog) => {
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Save' }).click();
});
