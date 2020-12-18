const fs = require("fs");
const _ = require("lodash");
const text = fs.readFileSync("./input/day-13.txt").toString("utf-8");
const lines = text.split("\n");

// Part One
const [arrivalTimestamp, buses] = lines;
const activeBuses = buses.split(",").filter((el) => el !== "x");
let closestBus = activeBuses
  .map((el) => {
    return { arrival: Math.floor(arrivalTimestamp / el) * el + parseInt(el), id: parseInt(el) };
  })
  .sort((a, b) => a.arrival - b.arrival)
  .reduce((prev, curr) => {
    return Math.abs(curr - arrivalTimestamp) < Math.abs(prev - arrivalTimestamp)
      ? curr
      : prev;
  });
console.log((closestBus.arrival - arrivalTimestamp) * closestBus.id);
