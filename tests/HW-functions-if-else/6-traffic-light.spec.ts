import { test, expect } from '@playwright/test';

/* 6. Дорога і світлофор
Якщо зелений — переходьте.
Якщо жовтий — підготуйтеся.
Якщо червоний — зачекайте.
Вхід: Колір світлофора (наприклад, "жовтий")"*/

export function trafficLight(color) {
  const colorGreen = 'Cross the road';
  const colorYellow = 'Get ready to cross the road';
  const colorRed = 'Wait before crossing the road';

  if (color == 'green') {
    return colorGreen;
  }
  if (color == 'yellow') {
    return colorYellow;
  }
  if (color == 'red') {
    return colorRed;
  }
}
test('Traffic light color green', () => {
  const result = trafficLight('green');
  expect(result).toBe('Cross the road');
});

test('Traffic light color yellow', () => {
  const result = trafficLight('yellow');
  expect(result).toBe('Get ready to cross the road');
});

test('Traffic light color red', () => {
  const result = trafficLight('red');
  expect(result).toBe('Wait before crossing the road');
});
