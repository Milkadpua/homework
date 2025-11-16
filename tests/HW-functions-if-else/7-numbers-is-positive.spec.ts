import { test, expect } from '@playwright/test';
/* 7. Визначення типу числа
Напишіть програму, яка визначає, чи число додатнє, від’ємне або дорівнює нулю.
Вхід: Число (наприклад, -5)
Вихід:
- "Число додатнє."
- "Число від’ємне."
- "Число дорівнює нулю." */

function isPositive(number: number) {
  if (typeof number === 'number') {
    if (number > 0) {
      console.log('number is positive');
      return true;
    } else if (number === 0) {
      console.log('number is zero');
      return false;
    } else {
      console.log('number is negative');
      return false;
    }
  } else {
    throw Error('pls use number to check if it positive');
  }
}
// Класи еквівалентності
// positive
// negative
// zero
// Граничні значення
// 1
// 0
// -1
// + бескінечність
// - бескінечність

test('is positive', async () => {
  const result = isPositive(1);
  expect(result).toBeTruthy();
});
test('is positive - max value', async () => {
  const result = isPositive(1.7976931348623157e308);
  expect(result).toBeTruthy();
});
test('is negative', async () => {
  const result = isPositive(-1);
  expect(result).toBeFalsy();
});
test('is negative - min value', async () => {
  const result = isPositive(-1.7976931348623157e308);
  expect(result).toBeFalsy();
});
test('zero should trow exception', () => {
  try {
    isPositive(0);
  } catch (error) {
    expect(error.message).toMatch('number is zero');
  }
});
