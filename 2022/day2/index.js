const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString("utf-8");
const test = input.split("\r\n").map(el => [...el.replace(' ', '')]);

let sum = 0

function rockPaperScissors(playerOne, playerTwo) {
  const validSelections = ["lol", "rock", "paper", "scissors"];
  // Check if the selections are valid
  if (
    !validSelections.includes(playerOne) ||
    !validSelections.includes(playerTwo)
  ) {
    return "Invalid selection. Please choose from rock, paper, or scissors.";
  }

  // Check for a tie
  if (playerOne === playerTwo) {
    sum += 3 + validSelections.indexOf(playerTwo)
    return "It's a tie!";
  }

  // Determine the winner
  if (
    (playerOne === "rock" && playerTwo === "scissors") ||
    (playerOne === "scissors" && playerTwo === "paper") ||
    (playerOne === "paper" && playerTwo === "rock")
  ) {
    sum += validSelections.indexOf(playerTwo)
    return "Player One wins!";
  } else {
    sum += 6
    sum += validSelections.indexOf(playerTwo);
    return "Player Two wins!";
  }
}


const lookup = ['rock', 'paper','scissors']

const them = ['A', 'B', 'C']
const you = ['X', 'Y', 'Z']
// console.log(test)
test.forEach((t) => {
  const opChoice = lookup[them.indexOf(t[0])];
  const yourChoice = lookup[you.indexOf(t[1])];
  console.log(rockPaperScissors(opChoice, yourChoice))
})

console.log(sum)
