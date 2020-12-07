const fs = require("fs");
const _ = require("lodash");
const text = fs.readFileSync("./day-5.txt").toString("utf-8");
const lines = text.split("\n");
lines.forEach(line => console.log(line.length))

let min = 0, max = 127
let range = [min, max]

const getNewRange = (char) => {
if(char === "F") {
    console.log(Math.floor(range[1]/2))
}
if(char === "B") {
    
}
}
