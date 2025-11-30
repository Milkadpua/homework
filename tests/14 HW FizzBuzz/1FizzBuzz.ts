function fizzBuzz(array) {
  if (!Array.isArray(array)) {
    return 'Input must be an array';
  }
  if (!array.every((num) => typeof num === 'number')) {
    return 'All elements must be numbers';
  }

  const results = array.map((num) => {
    if (num === 0) {
      return 'Error: Division by zero';
    }
    if (num % 3 === 0 && num % 5 === 0) {
      return 'FizzBuzz';
    }
    if (num % 3 === 0) {
      return 'Fizz';
    }
    if (num % 5 === 0) {
      return 'Buzz';
    }
    return num;
  });
  return results.join('\n');
}

console.log(fizzBuzz([0, 2, 4, 5, 6, 15, 100]));
