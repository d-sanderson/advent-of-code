const fs = require("fs");
const { last, first } = require("lodash");
const _ = require("lodash");
const text = fs.readFileSync("./input/day-10.txt").toString("utf-8");
const lines = text.split("\n").sort((a, b) => a - b);

let diff1 = 1;
let diff3 = 1;
for (let i = 0; i < lines.length; i++) {
  if (i > 0 && parseInt(lines[i]) - parseInt(lines[i - 1]) === 3) {
    diff3++;
  }
  else if (i > 0 && parseInt(lines[i]) - parseInt(lines[i] - 1) === 1) {
    diff1++;
  }
}
console.log(diff1 * diff3);
