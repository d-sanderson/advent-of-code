const fs = require("fs");
const text = fs.readFileSync("./input/day-8.txt").toString("utf-8");
const lines = text.split("\n");

// Part 1
// let accumulator = 0;
// let i = 0;
// let cmdsExecuted = []
// while(i < lines.length) {
//   const [instruction, step] = lines[i].split(" ");
// if(cmdsExecuted.includes(i)) {
//   console.log(accumulator)
//   break;
// }
// cmdsExecuted.push(i);
//     if(instruction == 'acc') {
//       accumulator += parseInt(step);
//       i++;
//     }
//     if(instruction == 'jmp') {
      
//       i+= parseInt(step);
//     }
//     if(instruction == "nop") {
//       i++
//     }
// }

// Part 2 
let accumulator = 0;
let i = 0;
let cmdsExecuted = []
while(i < lines.length) {
  const [instruction, step] = lines[i].split(" ");
if(cmdsExecuted.includes(i)) {
  console.log(accumulator)
  break;
}

cmdsExecuted.push(i);
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
}