const fs = require("fs");
const _ = require("lodash");
const text = fs.readFileSync("./day-13.txt").toString("utf-8");
const lines = text.split("\n");

const [timestamp, buses] = lines;

const activeBuses = buses.split(",").filter((el) => el !== "x");
let closest = activeBuses
  .map((el) => {
    return { res: Math.floor(timestamp / el) * el + parseInt(el), id: el };
  })
  .sort((a, b) => a.res - b.res)
  .reduce((prev, curr) => {
    return Math.abs(curr - timestamp) < Math.abs(prev - timestamp)
      ? curr
      : prev;
  });
console.log((closest.res - timestamp) * 421);
