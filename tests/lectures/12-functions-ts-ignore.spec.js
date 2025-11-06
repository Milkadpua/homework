//@ts-ignore - ігнорування перевірки типу на наступному рядку (для негативних тестів)

test("test test", () => {
  //@ts-ignore
  expect(() => compareTwoNumbers("stri", true)).toThrowError("Test1");
});

test("try catch", () => {
  console.log("Start");

  try {
    compareTwoNumbers(1, 2);

    //@ts-ignore
    compareTwoNumbers("stri", true);

    compareTwoNumbers(3, 4);
    compareTwoNumbers(10, 11);
  } catch (e: Error) {
    expect(e.message).toBe("Test1");
  }

  //@ts-ignore
  expect(() => compareTwoNumbers("stri", true)).toThrowError("Test1");
});