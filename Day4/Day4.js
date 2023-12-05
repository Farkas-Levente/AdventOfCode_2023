const { syncReadFile } = require("../FileRead.js");

const arr = syncReadFile("./Day4/Day4.txt");

//Part 1
let cards = [];
arr.forEach((line) => {
  let card = { number: 0, points: 0 };

  let startSplit = line.split(":");
  card.number = parseInt(startSplit[0].split("Card")[1].trim());

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
  card.number = parseInt(startSplit[0].split("Card")[1].trim());
  let myNumbers = startSplit[1].split("|")[0].split(" ").filter(Boolean);
  let winningNumbers = startSplit[1].split("|")[1].split(" ").filter(Boolean);

  myNumbers
    .filter((value, index) => myNumbers.indexOf(value) === index)
    .forEach((number) => {
      if (winningNumbers.includes(number)) {
        card.points++;
      }
    });

  cards.push(card);
});

// console.log(cards);
for (i = 0; i < cards.length; i++) {
  if (cards[i].points > 0) {
    let copies = [];
    for (j = 1; j <= cards[i].points; j++) {
      let copy = cards.find((x) => x.number == cards[i].number + j);

      if (copy != undefined) {
        cards.push(copy);
        copies.push(copy);
      }
    }
    // if (copies.length > 0) {
    //   console.log(
    //     `Card number ${cards[i].number} made ${copies.length} copies:`
    //   );
    //   copies.forEach((card) => {
    //     console.log(card.number);
    //   });
    // }
  }
}

console.log(cards.length);
