const fs = require("fs");
const lines = fs.readFileSync("./input/day-2.txt").toString("utf-8");
const input = lines.split("\n")
// Part 1
const solution = (arr) => {
  const isValid = (numOccurrences, min, max) =>
    numOccurrences >= min && numOccurrences <= max;
  let result = arr
    .map((el) => {
      let [range, letter, password] = el.split(" ");
      let [min, max] = range.split("-");
      let regex = new RegExp("[^" + letter + "]", "g");
      const numOccurrences = password.replace(regex, "").length;
      return isValid(numOccurrences, min, max);
    })
    .filter((el) => el === true).length;
  return result;
};

let result = solution(input);

// Part 2
const solution2 = (arr) => {
  const isValid = (pos1, pos2, password, letter) =>
    (password[pos1 - 1] === letter[0] && password[pos2 - 1] !== letter[0]) ||
    (password[pos1 - 1] !== letter[0] && password[pos2 - 1] === letter[0]);
    
  let result = arr
    .map((el) => {
      let [range, letter, password] = el.split(" ");
      let [pos1, pos2] = range.split("-");
      return isValid(pos1, pos2, password, letter);
    })
    .filter((el) => el === true).length;
  return result;
};
let result2 = solution2(input);
console.log(result, result2)