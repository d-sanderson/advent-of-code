const fs = require("fs");
const { last } = require("lodash");
const _ = require("lodash");
const text = fs.readFileSync("./day-9.txt").toString("utf-8");
const lines = text.split("\n");

let i = 26;
let counter = 0;
while(i < lines.length) {
    let last25 = lines.slice(counter, counter + 25)
    i++;
    counter++
}