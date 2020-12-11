const fs = require("fs");
const _ = require("lodash");
const text = fs.readFileSync("./day-8.txt").toString("utf-8");
const lines = text.split("\n");

// Part 1
let accumulator = 0;
let i = 0;
let cmdsExecuted = []
while(i < lines.length) {
  const [instruction, step] = lines[i].split(" ");
if(cmdsExecuted.includes(i)) {
  console.log(accumulator)
  break;
}
    if(instruction == 'acc') {
      cmdsExecuted.push(i);
      accumulator += parseInt(step);
      i++;
    }
    if(instruction == 'jmp') {
      cmdsExecuted.push(i);
      
      i+= parseInt(step);
    }
    if(instruction == "nop") {
      cmdsExecuted.push(i);
      i++
    }
  console.log(cmdsExecuted);
}