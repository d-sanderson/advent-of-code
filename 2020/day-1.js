const fs = require("fs");
const lines = fs.readFileSync("./input/day-1.txt").toString("utf-8");
const input = lines.split("\n").map(el => parseInt(el))

function sum2020(arr) {
  let filtered = arr.filter(el => el < 2020)
  let res = [];
  filtered.forEach((int) =>
    filtered.forEach((num) =>
      filtered.forEach((zerp) =>
        int + num + zerp === 2020 && res.length < 3
          ? res.push(num, int, zerp)
          : null
      )
    )
  );
  return [res.reduce((ac, cv) => ac * cv), res.reduce((ac, cv) => ac + cv)];
}

const refactoredSolution = (arr) => {
  let res = [];
  let filtered = arr.filter(el => el < 2020)
  for (let i = 0; i < filtered.length; i++) {
    for (let j = 0; j < filtered.length; j++) {
      for (let k = 0; k < filtered.length; k++) {
        if (filtered[i] + filtered[j] + filtered[k] === 2020 && res.length < 3) {
          res.push(filtered[i], filtered[j], filtered[k]);
        }
      }
    }
  }
  return res;
};
const res = refactoredSolution(input);
console.log(res)