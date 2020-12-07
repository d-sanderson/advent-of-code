const fs = require("fs");
const _ = require("lodash");
const text = fs.readFileSync("./day-6.txt").toString("utf-8");
const lines = text.split("\n");

const groups = []
let currentGroup = "";
lines.forEach((line) => {
    let endOfGroup = line === "\r";
    if (endOfGroup) {
        console.log(currentGroup)
    groups.push(currentGroup)
      currentGroup = "";
    } else {
      currentGroup += ` ${line}`;
    }
  });
