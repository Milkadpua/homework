console.log('Hi');
// кейс 1
let age = 22;
if (false && age < 21) {
  console.log('проходь на бар, але без алкоголю');
}
if (age >= 18 && age < 21) {
  console.log('проходь на бар, але без алкоголю');
}
if (age >= 21) {
  console.log('проходь на бар, і замовляй алкоголь');
}
if (age < 18) {
  console.log('прохід заборонено');
}

// кейс 2
const temperature = 10;
if (temperature >= 10) {
  console.log('одягай светр');
}
if (temperature < 10) {
  console.log('одягай куртку');
}
//TODO: щось зробити
// кейс 3
const rating = 74;
if  (rating < 75) {console.log("старайся краще")};
else if  (rating >= 75) &&(rating >= 100) {console.log("good job")};
else  (rating > 100) {console.error("system error")};
//ще можна warning console.warn("system error")

// кейс 3.1
const studentScore = 75
if (typeof studentScore !== 'number') {
    throw new Error('Invalid score: not a valid number');
} else if (studentScore < 0 || studentScore > 100) {
    console.log('Invalid score: should be between 0 and 100');
} else if (studentScore >= 75) {
    console.log('Здав');
} else {
    console.log('Не здав');
}