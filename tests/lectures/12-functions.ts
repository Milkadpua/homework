// кейс: потрібно викликати тільки 1й і 3й параметр у функції

function workWithParams(a: string, b: number, c: boolean) {
  console.log(a);
  console.log(b);
  console.log(c);
}
workWithParams(undefined, 34, true); // перший спосіб - передавати underfined замість аргументу, але тип не співпадає зі string і він свариться

// другий спосіб - тип писати string або undefined
function workWithParams(a: string | undefined, b: number, c: boolean) {
  console.log(a);
  console.log(b);
  console.log(c);
}
// використовувати опціональний параметр, який дозволено використовувати тільки після обовязкових
function workWithParams(a: string, b: number, c?: boolean) {
  console.log(a);
  console.log(b);
  console.log(c);
}
// правильний спосіб - використовувати обєкти - і там не потрібно переживати за порядок і можна викликати тільки ті параментри які потрібно
function workWithParams(data: { a?: string; b?: number; c?: boolean }) {
  console.log(data.a);
  console.log(data.b);
  console.log(data.c);
}
workWithParams({ c: true });
