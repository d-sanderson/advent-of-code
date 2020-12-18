const fs = require("fs");
const lines = fs.readFileSync("./input/day-3.txt").toString("utf-8");
const input = lines.split("\n")
// Part One
const TREE = "#";
const partOne = () => {
  let currentPosition = 3;
  let treesEncountered = 0;
  for (var i = 1; i < input.length; i++) {
    input[i][currentPosition % 31] == TREE ? treesEncountered++ : null;
    currentPosition = currentPosition + 3;
  }
  return treesEncountered
};
let result1 = partOne();
console.log(result1)
// Part Two
slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

const calcTreesEncountered = (slope) => {
  let treesEncountered = 0;
  let currentPosition = slope[0];
  let reduced = input.filter((_, i) => i % slope[1] == 0)
  for (var i = 1; i < reduced.length; i++) {
    reduced[i][currentPosition % 31] == TREE ? treesEncountered++ : null;
    currentPosition = currentPosition + slope[0];
  }
  return treesEncountered;
};

let res = [];
slopes.forEach((slope) => {
  res.push(calcTreesEncountered(slope));
});
console.log(res.reduce((ac, cv) => ac * cv));
