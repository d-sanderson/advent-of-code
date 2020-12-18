const fs = require("fs");
const text = fs.readFileSync("./input/day-6.txt").toString("utf-8");
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
for (line of lines) {
  let endOfGroup = line === "\r";
  if (endOfGroup) {
    let forms = currentGroup
      .trim()
      .replace(/\r?\n|\r/g, "")
      .split(" ");
    let numPeeps = forms.length;
    let obj = {};
    for (let i = 0; i < forms.length; i++) {
      let answers = forms[i].split("");
      answers.forEach((ansr) => (obj[ansr] ? obj[ansr]++ : (obj[ansr] = 1)));
    }
    count = 0;
    for (key in obj) {
      if (obj[key] === numPeeps) {
        count++;
      }
    }
    res.push(count);
    currentGroup = "";
  } else {
    currentGroup += ` ${line}`;
  }
}

console.log(res.reduce((ac, cv) => ac + cv));
