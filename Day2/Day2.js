const { syncReadFile } = require("../FileRead.js");

const arr = syncReadFile("./Day2/Day2.txt");

let games = [];
let sum = 0;
let powerSum = 0;
arr.forEach((line) => {
  newGame = {
    id: 0,
    blue: 0,
    red: 0,
    green: 0,
    rounds: 0,
    largestred: 0,
    largestgreen: 0,
    largestblue: 0,
    power: 0,
  };

  let twoHalves = line.split(":");
  newGame.id = twoHalves[0].split(" ")[1];

  let pulls = twoHalves[1].split(";");

  //formatting a bit
  let formattedPulls = [];
  pulls.forEach((item) => {
    formattedPulls.push(item.slice(1, item.length));
  });

  newGame.rounds = formattedPulls.length;

  formattedPulls.forEach((pull) => {
    let colors = pull.split(", ");
    colors.forEach((item) => {
      newGame[item.split(" ")[1]] += parseInt(item.split(" ")[0]);
      let identifier = `largest${item.split(" ")[1]}`;

      if (newGame[identifier] < parseInt(item.split(" ")[0])) {
        newGame[identifier] = parseInt(item.split(" ")[0]);
      }
    });
  });
  games.push(newGame);
});

console.log(games);

games.forEach((game) => {
  if (
    game.largestred <= 12 &&
    game.largestgreen <= 13 &&
    game.largestblue <= 14
  ) {
    sum += parseInt(game.id);
  }
  powerSum += game.largestgreen * game.largestred * game.largestblue;
});

console.log(sum);
console.log(powerSum);
