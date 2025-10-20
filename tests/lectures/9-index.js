console.log('this is');
console.log(10 / 0);
// 7 + 2

console.log(typeof 'This is Pavlo');

// string /рядок /строка
const i = "//*[@tag = 'test'] \n" + 'test';
let back = `'''''${i}`;

console.log((back = back + '1'));
console.log(back);
console.log(i);

// Number
console.log(10 / 0);
console.log(10 + 0);
console.log(10 - 11);
console.log(100 * 15);
console.log(100 ** 15);

//NaN (not a number)
console.log('test' / 10);
console.log('test' * 10);
console.log('test' + 10 + true);

// BigInt
console.log(9007199254740991); // найбільше число
console.log(-9007199254740991); // найменше число

console.log(typeof 900719925474099112515n); // найменше число
console.log(typeof 900719925474099112515);

// Boolean (булеве число / логічний тип)
console.log(typeof true);
console.log(typeof false);

console.log(true == 1);
console.log(false === 0);

// null VS undefined
let o;
console.log(typeof o);

let n = null;
console.log(typeof n);

// Symbol
let sym = Symbol('this is my symbol');
console.log(typeof sym);
console.log(sym.description);

// object / array
const ob = {
  test: { Test: 1 },
  1245: function () {},
  $1215safjshnub1251786baxfjbaxx: 1151,
};

console.log(ob.$1215safjshnub1251786baxfjbaxx);
console.log([1, {}, 'test', '1151']);

// Infinity, NaN, object, function
console.log(isNaN('12151'));
console.log(typeof function () {});
