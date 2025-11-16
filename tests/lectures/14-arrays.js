const name = 'Mila';

const arr = [1, 2, { name: 1 }];
console.log(arr);
const students = ['Pavlo', 'Maryna', 'Mila', 'Illa'];
console.log(students[1]);
console.log(students[4]);
console.log(students.length);

// ітерування масивів
for (let i = 0; i < 10; i++) {
  console.log(students[i]);
}
//так краще
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
//
