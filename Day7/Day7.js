const { syncReadFile } = require("../FileRead.js");

const arr = syncReadFile("./Day7/Day7.txt");

let hands = [];
const cardTypes = [
  "A",
  "K",
  "Q",
  "J",
  "T",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
];
arr.forEach((line) => {
  let hand = {
    A: 0,
    K: 0,
    Q: 0,
    J: 0,
    T: 0,
    9: 0,
    8: 0,
    7: 0,
    6: 0,
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    bid: 0,
    combo: "High_Card",
    cards: [],
  };

  const splits = line.split(" ");
  const cards = splits[0];
  const bid = splits[1];

  for (i = 0; i < cards.length; i++) {
    hand[cards[i]] += 1;
    hand.cards.push(cards[i]);
  }
  let firstPairCount = 0;
  let secondPairCount = 0;
  cardTypes.forEach((type) => {
    //check pairs

    if (hand[type] >= 2) {
      if (firstPairCount == 0) {
        firstPairCount = hand[type];
      } else {
        secondPairCount = hand[type];
      }
    }
  });
  //swap for the sake of my rules
  if (firstPairCount < secondPairCount) {
    let swap = firstPairCount;
    firstPairCount = secondPairCount;
    secondPairCount = swap;
  }

  //check combos
  if (firstPairCount == 2) {
    hand.combo = "One_Pair";
  }
  if (firstPairCount == 2 && secondPairCount == 2) {
    hand.combo = "Two_Pair";
  }
  if (firstPairCount == 3 && secondPairCount == 0) {
    hand.combo = "Three_Kind";
  }
  if (firstPairCount == 3 && secondPairCount == 2) {
    hand.combo = "Full_House";
  }
  if (firstPairCount == 4) {
    hand.combo = "Four_Kind";
  }

  if (firstPairCount == 5) {
    hand.combo = "Five_Count";
  }

  //set bid and push
  hand.bid = parseInt(bid);
  hands.push(hand);
});

let sortingObject = {};
hands.forEach((hand) => {
  if (!sortingObject[hand.combo]) {
    sortingObject[hand.combo] = [];
  }
  let newhand = { ...hand };

  newhand.cards = newhand.cards.map((card) => {
    switch (card) {
      case "A":
        return "A";
      case "K":
        return "B";
      case "Q":
        return "C";
      case "J":
        return "D";
      case "T":
        return "E";
      case "9":
        return "F";
      case "8":
        return "G";
      case "7":
        return "H";
      case "6":
        return "I";
      case "5":
        return "J";
      case "4":
        return "K";
      case "3":
        return "L";
      case "2":
        return "M";
      default:
        return card;
    }
  });

  sortingObject[newhand.combo].push(newhand);
});

function sortHandsByCategory(category) {
  return sortingObject[category].sort((a, b) => {
    for (let i = 0; i < a.cards.length; i++) {
      const result = customSort(a.cards[i], b.cards[i]);
      if (result !== 0) {
        return result;
      }
    }
    return 0;
  });
}

// Example: Sort all categories
for (const category in sortingObject) {
  sortingObject[category] = sortHandsByCategory(category);
}

function customSort(a, b) {
  const order = "ABCDEFGHIJKLM"; // Define the order of modified values
  return order.indexOf(a) - order.indexOf(b);
}

let sum = 0;

let currentRanking = 1;
// Define the order of categories
const categories = [
  "High_Card",
  "One_Pair",
  "Two_Pair",
  "Three_Kind",
  "Full_House",
  "Four_Kind",
  "Five_Count",
];

// Iterate through each category
categories.forEach((category) => {
  // Check if the category exists in sortingObject before iterating
  if (sortingObject?.[category]) {
    sortingObject[category].reverse().forEach((card) => {
      if (!isNaN(card.bid)) {
        sum += card.bid * currentRanking;
      }
      currentRanking++;
    });
  }
});
console.log(sum);
