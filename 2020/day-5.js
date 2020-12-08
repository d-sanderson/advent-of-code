const { Console } = require("console");
const fs = require("fs");
const _ = require("lodash");
const input = fs.readFileSync("./day-5.txt").toString("utf-8");

function findSeatId(line) {
  const binary = line.replace(/[FL]/g, "0").replace(/[BR]/g, "1");
  if (binary.match(/([01]{7})([01]{3})/)) {
    const [m, row, col] = binary.match(/([01]{7})([01]{3})/);
    const rowNum = Number(`0b${row}`);
    const colNum = Number(`0b${col}`);
    return rowNum * 8 + colNum;
  }
}

let lines = input.split("\n");

let highestSeatId = 0;
let seatIds = [];
for (const line of lines) {
  const seatId = findSeatId(line);
  seatIds.push(seatId);
  if (seatId > highestSeatId) {
    highestSeatId = seatId;
  }
}
// console.log("Highest seat ID:", highestSeatId);

// PART 2
seatIds = seatIds.sort((a, b) => a - b);

for (let i = 0; i < seatIds.length; i++) {
  if (i > 0 && seatIds[i] != seatIds[i - 1] + 1) {
    console.log("Your seat ID:", seatIds[i - 1]);
    break;
  }
}
