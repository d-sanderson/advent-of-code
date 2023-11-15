const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString("utf-8");
const cleanedInput = input
  .split("\r\n")
  .map((el) => [...el.replace(" ", "")])
  .filter((el) => !!el);

let sum = 0;
const validSelections = ["rock", "paper", "scissors"];
const lookup = ["rock", "paper", "scissors"];
const them = ["A", "B", "C"];
const you = ["X", "Y", "Z"];

const getChoice = (outcome, opChoice) => {
  if(outcome === "draw") {
    return opChoice
  }
  if(outcome === "win") {
    switch(opChoice) {
      case "paper" :
        return "scissors"
      case "scissors":
        return "rock"
      case "rock":
        return "paper"
    }
  }
  if(outcome === "lose") {
    switch(opChoice) {
      case "paper" :
        return "rock"
      case "scissors":
        return "paper"
      case "rock":
        return "scissors"
    }
  }
}
const updateScore = (outcome, player) => {
  let points = 1;
  switch (outcome) {
    case "draw":
      points = 4 + validSelections.indexOf(player);
      break;
    case "p1":
      points = 1 + validSelections.indexOf(player);
      break;
    case "p2":
    default:
      points = 7 + validSelections.indexOf(player);
      break;
  }
  return points;
};

function rockPaperScissors(playerOne, playerTwo) {
  if (
    !validSelections.includes(playerOne) ||
    !validSelections.includes(playerTwo)
  ) {
    return
  }

  if (playerOne === playerTwo) {
    sum += updateScore('draw', playerTwo);
    return
  }

  const winner =
    (playerOne === "rock" && playerTwo === "scissors") ||
    (playerOne === "scissors" && playerTwo === "paper") ||
    (playerOne === "paper" && playerTwo === "rock")
      ? "Player One"
      : "Player Two";

  const points =
    winner === "Player One"
      ? updateScore("p1", playerTwo)
      : updateScore("p2", playerTwo);

  sum += points;
}

// cleanedInput.forEach((t) => {
//   const opChoice = lookup[them.indexOf(t[0])];
//   const yourChoice = lookup[you.indexOf(t[1])];
//   rockPaperScissors(opChoice, yourChoice);
// });
// console.log("Part 1", sum);


// Part 2
const outcomes = ["lose","draw", "win"]

cleanedInput.forEach((t) => {
  const outcome = outcomes[you.indexOf(t[1])]
  const opChoice = lookup[them.indexOf(t[0])];
  const yourChoice = getChoice(outcome, opChoice)
  rockPaperScissors(opChoice, yourChoice)
  console.log({outcome, opChoice, yourChoice})
})

console.log("Part 2", sum);
