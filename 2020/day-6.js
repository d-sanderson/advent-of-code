const fs = require("fs");
const _ = require("lodash");
const text = fs.readFileSync("./day-6.txt").toString("utf-8");
const lines = text.split("\n");
let count = 0;
let currentGroup = "";
lines.forEach((line) => {
    let endOfGroup = line === "";
    if (endOfGroup) {
      console.log(currentGroup)
    let arr = [...new Set(currentGroup.split(''))]
    count += arr.length
      currentGroup = "";
    } else {
      currentGroup += `${line}`;
    }
  });
console.log(count)