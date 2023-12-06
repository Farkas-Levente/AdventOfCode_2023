const { syncReadFile } = require("../FileRead.js");

const arr = syncReadFile("./Day6/Day6.txt");

const times = [];
const distances = [];
//Part 1 Read
// arr.forEach((line) => {
//   if (line.startsWith("Time:")) {
//     line
//       .split(" ")
//       .filter((x) => x != "" && x != "Time:")
//       .map((x) => times.push(parseInt(x)));
//   } else {
//     line
//       .split(" ")
//       .filter((x) => x != "" && x != "Distance:")
//       .map((x) => distances.push(parseInt(x)));
//   }
// });

//Part 2 Read
arr.forEach((line) => {
  let formattedLine = line.replace(/\s+/g, "");
  if (line.startsWith("Time:")) {
    times.push(
      parseInt(formattedLine.split("Time:").filter((x) => x != "")[0])
    );
  } else {
    distances.push(
      parseInt(formattedLine.split("Distance:").filter((x) => x != "")[0])
    );
  }
});

const races = [];
for (i = 0; i < times.length; i++) {
  let currentRace = { record: 0, raceTime: 0, possibeSolutions: 0 };
  currentRace.raceTime = times[i];
  currentRace.record = distances[i];

  speed = 0;
  distanceTraveled = 0;
  //We start from one and go till the time-1 millisec because at 0 and at max we don't move at all
  for (j = 1; j < currentRace.raceTime; j++) {
    speed = j;
    distanceTraveled = speed * (currentRace.raceTime - speed);
    if (distanceTraveled > currentRace.record) {
      currentRace.possibeSolutions++;
    }
  }
  races.push(currentRace);
}
console.log(races);

// let sum = 0;
// races.map((x) => {
//   sum =
//     sum == 0 ? (sum += x.possibeSolutions) : (sum = sum * x.possibeSolutions);
// });
// console.log(sum);
