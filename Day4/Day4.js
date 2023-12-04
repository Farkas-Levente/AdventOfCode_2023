const { syncReadFile } = require("../FileRead.js");

const arr = syncReadFile("./Day4/Day4.txt");

//Part 1
let cards = [];
arr.forEach((line) => {
  let card = { number: 0, points: 0 };

  let startSplit = line.split(":");
  card.number = parseInt(startSplit[0][startSplit[0].length - 1]);
  let myNumbers = startSplit[1].split("|")[0].split(" ").filter(Boolean);
  let winningNumbers = startSplit[1].split("|")[1].split(" ").filter(Boolean);

  let points = 0;

  myNumbers
    .filter((value, index) => myNumbers.indexOf(value) === index)
    .forEach((number) => {
      if (winningNumbers.includes(number)) {
        points = points == 0 ? 1 : points * 2;
      }
    });
  card.points = points;
  cards.push(card);
});

// let sum = 0;
// cards.forEach((card) => {
//   sum += card.points;
// });
// console.log(sum);

//Part 2
cards = [];

arr.forEach((line) => {
  let card = { number: 0, points: 0 };

  let startSplit = line.split(":");
  card.number = parseInt(startSplit[0][startSplit[0].length - 1]);
  let myNumbers = startSplit[1].split("|")[0].split(" ").filter(Boolean);
  let winningNumbers = startSplit[1].split("|")[1].split(" ").filter(Boolean);

  card.points;
  cards.push(card);
});
