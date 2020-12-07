const fs = require("fs");
const _ = require("lodash")
const text = fs.readFileSync("./day-2.txt").toString('utf-8');
const intcode = text.split("\n")
const chonked = _.chunk(intcode, 4)

console.log(chonked)