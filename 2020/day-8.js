const fs = require("fs");
const _ = require("lodash");
const text = fs.readFileSync("./day-8.txt").toString("utf-8");
const lines = text.split("\n");
const regex1 = /(-?\d+)/g;
const regex2 = /^([\w\-]+)/;
let accumulator = 0;
let i = 0;

while(i < lines.length) {
  let cmdsExecuted = []
  const [instruction, step] = lines[i].split(" ");
  if(instruction == 'acc') {
    accumulator += parseInt(step);
    i++;
  }
  if(instruction == 'jmp') {
    i+= parseInt(step);
  }
  if(instruction == "nop") {
    i++
  }
  console.log(accumulator, i, instruction);
}