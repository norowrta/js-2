const celsius = 15;
const fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

let daysInMonth = 30 + "days";
let hoursInMonth = parseFloat(daysInMonth) * 24 + "hours";
let minutesInMonth = parseFloat(hoursInMonth) * 60 + "minutes";
console.log(daysInMonth, hoursInMonth, minutesInMonth);

const health = 100;
const energy = 100;
console.log(parseFloat(health) - 50 + "hp", parseFloat(energy) - 50 + "%");

const totalPrice = prompt("Введіть суму");
const discountedPrice = totalPrice - (totalPrice * 10) / 100;
console.log("Сума зі знижкою:", discountedPrice);

const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log(parsedFloat);

const intString = "123";
const parsedInt = parseInt(intString);
console.log(parsedInt);

const number = prompt("Введіть число");
const sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);

const integer = 42; 
const stringNumber = "256"; 
const convertedInt = parseInt(stringNumber); 
const convertedString = integer.toString(); 
console.log(convertedInt, convertedString);
