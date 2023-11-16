const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString("utf-8");
const lines = input.split('\n')
console.log(lines)

const scores = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
console.log(scores.length)
let sum = 0;
lines.forEach(line => {
  const middle = Math.floor(line.length / 2)
  const start = line.substring(0, middle).split('')
  const end = line.substring(middle, line.length - 1).split('')
  const shared = start.filter(value => end.includes(value));
  sum += scores.indexOf(shared[0]) + 1;
})
console.log('Part 1', sum)
