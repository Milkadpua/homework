import { test, expect } from '@playwright/test';
//1. Парне чи непарне число Напишіть програму, яка визначає, чи число парне або непарне. Вхід: Число (наприклад, 4) Вихід: - "Число парне." - "Число непарне."

export function evenNumber(number: number) {
  const evenNumber = 'Число парне';
  const oddNumber = 'Число непарне';
  const zero = 'Число нуль';

  if (number % 2 === 0) {
    return evenNumber;
  }
  if (number % 2 !== 0) {
    return zero;
  }
  if (number % 2 !== 0 && number % 2 !== 0) {
    return oddNumber;
  }
}
test('The number is even', () => {
  const result = evenNumber(10);
  expect(result).toBe('Число парне');
});

test('The number is odd', () => {
  const result = evenNumber(11);
  expect(result).toBe('Число непарне');
});

test('The number is zero', () => {
  const result = evenNumber(0);
  expect(result).toBe('Число нуль');
});
