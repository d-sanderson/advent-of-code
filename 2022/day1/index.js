const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString("utf-8");
const test = input.split("\n");

const snax = test.map((el) => Number(el));
let current = 0;
const totals = [];

snax.forEach((snack) => {
  if (snack === 0) {
    totals.push(current);
    current = 0;
  }
  current += snack;
});

console.log("Part 1", Math.max(...totals));

const top3 = totals
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((prev, cv) => prev + cv, 0);
console.log("Part 2", top3);
