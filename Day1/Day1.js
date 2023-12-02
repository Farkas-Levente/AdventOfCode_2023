const { syncReadFile } = require("../FileRead.js");

const arr = syncReadFile("./Day1/Day1.txt");

let sum = 0;

arr.forEach((line) => {
  let number = "";
  let firstDigit = "";
  let lastDigit = "";

  for (i = 0; i < line.length; i++) {
    if (!isNaN(line[i])) {
      if (firstDigit === "") {
        firstDigit = line[i];
      }
      lastDigit = line[i];
    }
  }

  number = firstDigit.toString() + lastDigit.toString();

  sum += parseInt(number);
});

//console.log(sum);

const possibleDigits = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

sum = 0;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach((line) => {
  let indexes = {};

  let number = "";
  let firstDigit = "";
  let lastDigit = "";

  possibleDigits.forEach((item) => {
    if (line.includes(item)) {
      let offset = 0;
      while (line.indexOf(item, offset) != -1) {
        indexes[line.indexOf(item, offset)] = item;
        offset++;
      }
    }
  });

  for (i = 0; i < line.length; i++) {
    if (!isNaN(line[i])) {
      indexes[i] = line[i];
    }
  }

  const keys = Object.keys(indexes);
  const firstIndex = keys[0];
  const lastIndex = keys[keys.length - 1];

  //convert the first Digit
  if (isNaN(indexes[firstIndex])) {
    firstDigit = numbers[possibleDigits.indexOf(indexes[firstIndex])];
  } else {
    firstDigit = indexes[firstIndex];
  }
  //convert the second Digit
  if (isNaN(indexes[lastIndex])) {
    lastDigit = numbers[possibleDigits.indexOf(indexes[lastIndex])];
  } else {
    lastDigit = indexes[lastIndex];
  }

  number = firstDigit.toString() + lastDigit.toString();

  sum += parseInt(number);
});
console.log(sum);
