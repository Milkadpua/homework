import { test, expect } from '@playwright/test';
/* Вік для голосування
Напишіть програму, яка перевіряє, чи можна користувачу голосувати.
Вхід: Вік (наприклад, 17)
Вихід:
- Якщо >= 18: "Ви можете голосувати."
- Інакше: "Ви ще не можете голосувати." */

export function canVote(age: number) {
  const canVote = 'The person can vote';
  const cannotVote = 'The person cannot vote';

  //TODO починати з найочевиднішого значення 18+
  if (age > 0 && age < 18) {
    return cannotVote;
  } else if (age >= 18 && age <= 150) {
    return canVote;
  } else console.log(`Wrong input: ${age}`);
  return undefined;
}

test('verifies whether a person can vote', () => {
  const result = canVote(18);
  expect(result).toBe('The person can vote');
});

test('verifies whether a person can vote 1', () => {
  const result = canVote(19);
  expect(result).toBe('The person can vote');
});

test('verifies whether a person cannot vote', () => {
  const result = canVote(17);
  expect(result).toBe('The person cannot vote');
});

test('verifies whether a person cannot vote 1', () => {
  const result = canVote(0);
  expect(result).toBe('The person cannot vote');
});
