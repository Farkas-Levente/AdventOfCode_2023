const { syncReadFile } = require("../FileRead.js");

const arr = syncReadFile("./Day8/Day8.txt");

let instructions = "";

let directions = [];

let seperatorIndex = arr.indexOf("");

for (i = 0; i < seperatorIndex; i++) {
  instructions += arr[i];
}

for (i = seperatorIndex + 1; i < arr.length; i++) {
  let direction = { id: "", left: "", right: "" };
  direction.id = arr[i].split("=")[0].trim();
  direction.left = arr[i].split("(")[1].split(",")[0].trim();
  direction.right = arr[i].split("(")[1].split(",")[1].slice(0, 4).trim();
  directions.push(direction);
}

let steps = 0;
let currentDirection = directions.find((x) => x.id == "AAA");
let found = false;
while (!found) {
  for (i = 0; i < instructions.length; i++) {
    if (instructions[i] == "L") {
      currentDirection = directions.find((x) => x.id == currentDirection.left);
    } else if (instructions[i] == "R") {
      currentDirection = directions.find((x) => x.id == currentDirection.right);
    }
    steps++;
    console.log(instructions[i]);

    if (currentDirection.id == "ZZZ") {
      found = true;
    }
  }
}
console.log(steps);
