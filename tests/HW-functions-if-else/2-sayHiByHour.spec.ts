/*
Привітання за часом
Залежно від часу доби, виведіть привітання: "Доброго ранку!", "Доброго дня!" або "Доброго вечора!".
Вхід: Година (наприклад, 15)
Вихід:
- Якщо год < 12: "Доброго ранку!"
- Якщо год 12–18: "Доброго дня!"
- Якщо год > 18: "Доброго вечора!"
*/

function sayHiByHour(time: number) {
  const goodMorning = 'Доброго ранку!';
  const goodAfternoon = 'Доброго дня!';
  const goodEvening = 'Доброго вечора!';

  if (time < 12) {
    return goodMorning;
  } else if (time >= 12 && time <= 18) {
    return goodAfternoon;
  } else if (time > 18 && time < 24) {
    return goodEvening;
  } else {
    throw new Error('Incorrect time');
  }
}

import { test, expect } from '@playwright/test';
import { error } from 'console';

test('before 12 hours should return Доброго ранку!', () => {
  const result = sayHiByHour(11);
  expect(result).toBe('Доброго ранку!');
});

test('12 hours should return Доброго дня!', () => {
  const result = sayHiByHour(12);
  expect(result).toBe('Доброго дня!');
});

test('15 hours should return Доброго дня!', () => {
  const result = sayHiByHour(16);
  expect(result).toBe('Доброго дня!');
});

test('18 hours should return Доброго дня!', () => {
  const result = sayHiByHour(18);
  expect(result).toBe('Доброго дня!');
});

test('18 hours should return Доброго вечора!', () => {
  const result = sayHiByHour(19);
  expect(result).toBe('Доброго вечора!');
});

test('25 hours should throw an error', () => {
  expect(() => sayHiByHour(25)).toThrowError('Incorrect time');
});
