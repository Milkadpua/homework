import { test, expect } from '@playwright/test';
import { sayHiByHour } from '../sayHiByHour';

test('before 12 hours should return Доброго ранку!', () => {
  const result = sayHiByHour(11);
  expect(result).toBe('Доброго ранку!');
});

test('12 hours should return Доброго дня!', () => {
  const result = sayHiByHour(12);
  expect(result).toBe('Доброго дня!');
});

test('18 hours should return Доброго дня!', () => {
  const result = sayHiByHour(18);
  expect(result).toBe('Доброго дня!');
});

test('15 hours should return Доброго ранку!', () => {
  const result = sayHiByHour(16);
  expect(result).toBe('Доброго дня!');
});

test('18 hours should return Доброго вечора!', () => {
  const result = sayHiByHour(19);
  expect(result).toBe('Доброго вечора!');
});
