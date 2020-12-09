const fs = require("fs");
const _ = require("lodash");
const text = fs.readFileSync("./day-6.txt").toString("utf-8");
const lines = text.split("\n");
// PART ONE
// let count = 0;
// let currentGroup = "";
// lines.forEach((line) => {
//     let endOfGroup = line === "";
//     if (endOfGroup) {
//       console.log(currentGroup)
//     let arr = [...new Set(currentGroup.split(''))]
//     count += arr.length
//       currentGroup = "";
//     } else {
//       currentGroup += `${line}`;
//     }
//   });
// console.log(count)
// PART TWO
let count = 0;
let currentGroup = "";
let res = [];
lines.forEach((line) => {
  let endOfGroup = line === "\r";
  if (endOfGroup) {
    let answers = currentGroup
      .trim()
      .replace(/\r?\n|\r/g, "")
      .split(" ");
    let numPeeps = answers.length
    let obj = {};
    answers.forEach((ansr) => {
      let ltrs = ansr.split("");
      ltrs.forEach((ltr) => (obj[ltr] ? obj[ltr]++ : (obj[ltr] = 1)));
    });
    count = 0
    for (key in obj) {
      if (obj[key] === numPeeps) {
        count++
      }
    }
    res.push(count)
    currentGroup = "";
  } else {
    currentGroup += ` ${line}`;
  }
});
console.log(res.reduce((ac, cv) => ac + cv))