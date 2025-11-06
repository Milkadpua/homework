/*
Привітання за часом
Залежно від часу доби, виведіть привітання: "Доброго ранку!", "Доброго дня!" або "Доброго вечора!".
Вхід: Година (наприклад, 15)
Вихід:
- Якщо год < 12: "Доброго ранку!"
- Якщо год 12–18: "Доброго дня!"
- Якщо год > 18: "Доброго вечора!"
*/

export function sayHiByHour(time) {
  const goodMorning = 'Доброго ранку!';
  const goodAfternoon = 'Доброго дня!';
  const goodEvening = 'Доброго вечора!';

  if (time < 12) {
    return goodMorning;
  }
  if (time >= 12 && time <= 18) {
    return goodAfternoon;
  }
  if (time > 18) {
    return goodEvening;
  }
}
