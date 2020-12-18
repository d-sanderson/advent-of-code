const fs = require("fs");
const text = fs.readFileSync("./input/day-9.txt").toString("utf-8");
const lines = text.split("\n");

let i = 25;
while (i < lines.length - 1) {
  let last25 = lines
    .slice(i - 25, i)
    .filter((el) => parseInt(el) < parseInt(lines[i]));
  let arr = [];
  for (let j = 0; j < last25.length; j++) {
    for (let k = 0; k < last25.length; k++) {
      if (parseInt(last25[j]) + parseInt(last25[k]) === parseInt(lines[i])) {
        arr.push(parseInt(lines[i]));
      }
    }
  }
  if (!arr.includes(parseInt(lines[i]))) {
    console.log(lines[i]);
    break;
  }
  i++;
}
