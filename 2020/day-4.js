const fs = require("fs");
const { keys } = require("lodash");
const _ = require("lodash");
const text = fs.readFileSync("./day-4.txt").toString("utf-8");
const lines = text.split("\n");

// PART 1
optionalFields = ["cid"];
requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

currentPassport = "";
count = 0 
let validatePassport = passport => {
  let fields = passport.split(' ')
  .map((el) => el.split(":")[0])
  .filter((fieldName) => requiredFields.indexOf(fieldName) !== -1);
  let isValid = fields.length >= requiredFields.length;
  return isValid;
}
lines.forEach((line) => {
  let endOfPassport = line === "";
  if (endOfPassport) {
    validatePassport(currentPassport) ? count++ : null;
    currentPassport = "";
  } else {
    currentPassport += ` ${line}`;
  }
});
console.log(count)
