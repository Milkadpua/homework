import { log } from 'console';

// function declaration
export function sayHiDeclaration() {
  console.log('Hi');
}

// arrow function
// різниця в синтаксисі
// нема хоістінгу
// arrow function не мають свого this
export const sayHiArrow = () => {
  console.log('Hi');
};

let name = '';
let age = 18;
let job = 'Worker';

export const sayHiByName = () => {
  name, age, (title = 'Support');
  console.log('Hi, ' + name + `I'm ${age} years old, and working on ${title}`);
};

sayHiByName('Alex', 18);

// функціональний вираз / functional expression
// є свій this
// нема hoisting
const functionalExpression = function () {
  console.log('I`am Expression');
};

functionalExpression();

// анонімна функція
/*
function(){
  console.log("I`am Anonymous");
}
*/

const cat = {
  meaw: () => {
    console.log('Meaw');
  },
  walk: () => {
    console.log('I`m walking');
  },
  eat: function () {
    console.log('I`m eating');
  },
};

cat.meaw();
cat.eat();

// Anonymous function
sayHiArrow();

// виклик функції як аргумента
function sum(a, b) {
  return a + b;
}

function logSum(sum) {
  console.log(sum);
}

logSum(sum(1, 2));

// передача функції як аргумента і виклик її в середині іншої
function sum(a, b) {
  return a + b;
}

function logSum(sum) {
  console.log(sum(1, 2));
}

logSum(sum);
