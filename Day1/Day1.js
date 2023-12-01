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

console.log(sum);
