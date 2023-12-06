const { syncReadFile } = require("../FileRead.js");

const arr = syncReadFile("./Day5/Day5.txt");

arr.forEach((line) => {});

let seeds = [];

let soilLines = [];
let fertilizerLines = [];
let waterLines = [];
let lightLines = [];
let temperatureLines = [];
let humidityLines = [];
let locationLines = [];

let currentLineType = "";
arr.forEach((line) => {
  if (line.startsWith("seeds")) {
    seedsSplit = line.split(" ");
    for (i = 1; i < seedsSplit.length; i++) {
      seeds.push({
        number: parseInt(seedsSplit[i]),
        soil: 0,
        fertilizer: 0,
        water: 0,
        light: 0,
        temperature: 0,
        humidity: 0,
        location: 0,
      });
    }
    return;
  }
  if (line.startsWith("seed-to-soil")) {
    currentLineType = "soil";
    return;
  } else if (line.startsWith("soil-to-fertilizer")) {
    currentLineType = "fertilizer";
    return;
  } else if (line.startsWith("fertilizer-to-water")) {
    currentLineType = "water";
    return;
  } else if (line.startsWith("water-to-light")) {
    currentLineType = "light";
    return;
  } else if (line.startsWith("light-to-temperature")) {
    currentLineType = "temperature";
    return;
  } else if (line.startsWith("temperature-to-humidity")) {
    currentLineType = "humidity";
    return;
  } else if (line.startsWith("humidity-to-location")) {
    currentLineType = "location";
    return;
  }

  if (line == "" || line == " ") {
    return;
  }
  for (i = 0; i < line.split(" ").length; i++) {
    if (currentLineType == "soil") {
      soilLines.push(line);
    }
    if (currentLineType == "fertilizer") {
      fertilizerLines.push(line);
    }
    if (currentLineType == "water") {
      waterLines.push(line);
    }
    if (currentLineType == "light") {
      lightLines.push(line);
    }
    if (currentLineType == "temperature") {
      temperatureLines.push(line);
    }
    if (currentLineType == "humidity") {
      humidityLines.push(line);
    }
    if (currentLineType == "location") {
      locationLines.push(line);
    }
  }
});

soilLines.forEach((line) => {
  splits = line.split(" ");
  for (i = 0; i < parseInt(splits[2]); i++) {
    let source = parseInt(splits[1]) + i;
    let destination = parseInt(splits[0]);
    let foundSeed = seeds.find((x) => x.number == source);

    if (foundSeed != undefined) foundSeed.soil = destination;
  }
});

console.log(seeds);
