const { match } = require("assert");
const fs = require("fs");
const text = fs.readFileSync("./day-7.txt").toString("utf-8");
const lines = text.split("\n");

let bags = new Map();

const hasShinyGold = (color) => {
  if(color === 'shiny gold') {
    return true
  }
  if(!bags.has(color)) {
    return false
  }
  const innerBags = bags.get(color);
  for(const bag of innerBags) {
    if(hasShinyGold(bag)) {
      return true
    }
  }
  return false
}


for (line of lines) {
  let [bag, contents] = line.split(" bags contain ");
  contents = contents.split(", ").forEach((el) => {
    let type = el
      .slice(2, el.length - 1)
      .replace(/ bags?/, "")
      .replace(/ ba/, "")
      .replace(".", "");
    if (!bags.has(bag)) {
      bags.set(bag, []);
    }
    bags.set(bag, [...bags.get(bag), type])
  });
}

const types = bags.keys()
let count = 0
for(type of types) {
  if(hasShinyGold(type) && type !== 'shiny gold') {
    console.log(type)
    count++
  }
}

console.log(count)
