//label[text()='Name']/ancestor::div[contains(@class, 'formHorizontalWrapper')]//input
//label[text()='Label']/ancestor::div[contains(@class, 'formHorizontalWrapper')]//input
//label[text()='Number']/ancestor::div[contains(@class, 'formHorizontalWrapper')]//input

function getInputElementByLabel(label: 'Name' | 'Label' | 'Number') {
  return `/label[text()='${label}']/ancestor::div[contains(@class, 'formHorizontalWrapper')]//input`;
}

console.log(getInputElementByLabel('Label'));
console.log(getInputElementByLabel('Number'));
console.log(getInputElementByLabel('Name'));

// пишемо теж саме, використовуючи Chaining Locators css+xpath
await page
  .locator('label', { hasText: 'Number' }) //css+playwright
  .locator("/ancestor::div[contains(@class, 'formHorizontalWrapper')]") //xpaht
  .locator('input'); //css
