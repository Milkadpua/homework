import { test, expect } from '@playwright/test';

/* Перевірка оцінки
Якщо бал >= 50 — "Тест складено".
Якщо < 50 — "Тест не складено".
Вхід: Бал (наприклад, 42) */

export function checkGrade(grade: number) {
  const testPassed = 'The test is passed';
  const testNotPassed = 'Test is not passed';

  if (grade < 50 && grade >= 0) {
    return testNotPassed;
  } else if (grade >= 50 && grade <= 100) {
    return testPassed;
  } else {
    console.log(`Wrong input: ${grade}`);
    return undefined;
  }
}

test('The test is passed 1', () => {
  const result = checkGrade(50);
  expect(result).toBe('The test is passed');
});

test('The test is passed 2', () => {
  const result = checkGrade(51);
  expect(result).toBe('The test is passed');
});

test('Test is not passed 1', () => {
  const result = checkGrade(49);
  expect(result).toBe('Test is not passed');
});
test('Test is not passed 2', () => {
  const result = checkGrade(0);
  expect(result).toBe('Test is not passed');
});
