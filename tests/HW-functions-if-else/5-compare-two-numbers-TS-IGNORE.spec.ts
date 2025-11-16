import { test, expect } from '@playwright/test';
import { error } from 'console';
/* 5. Порівняння чисел
Порівняйте два числа: виведіть більше, або повідомте, що числа рівні.
Вхід: Два числа (наприклад, 8 і 10)
Вихід:
- "Перше число більше."
- "Друге число більше."
- "Числа рівні."*/

function compareTwoNumbers(firstNumber: number, secondNumber: number) {
  if (firstNumber === secondNumber) {
    return 'equal';
  } else if (firstNumber > secondNumber) {
    return 'first number is bigger';
  } else if (firstNumber < secondNumber) {
    return 'second number is bigger';
  } else throw new Error('Incorrect Number');
}
test('test compare Two Numbers 1', () => {
  expect(compareTwoNumbers(3, 1)).toBe('first number is bigger');
});

test('test compare Two Numbers 1', () => {
  expect(compareTwoNumbers(8, 10)).toBe('second number is bigger');
});

test('test compare Two Numbers 3', () => {
  expect(compareTwoNumbers(8, 8)).toBe('equal');
});

test('test compare Two Numbers 4', () => {
  //@ts-ignore
  expect(() => compareTwoNumbers('stri', true)).toThrowError(
    'Incorrect Number'
  );
});

test('try catch', () => {
  console.log('Start');

  try {
    compareTwoNumbers(1, 2);

    //@ts-ignore
    compareTwoNumbers('stri', true);

    compareTwoNumbers(3, 4);
    compareTwoNumbers(10, 11);
  } catch (e: Error) {
    expect(e.message).toBe('Incorrect Number');
  }

  //@ts-ignore
  expect(() => compareTwoNumbers('stri', true)).toThrowError(
    'Incorrect Number'
  );
});
