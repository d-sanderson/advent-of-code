const fs = require("fs");
const { keys } = require("lodash");
const _ = require("lodash");
const text = fs.readFileSync("./day-4.txt").toString("utf-8");
const lines = text.split("\n");


let passports = [];
currentPassport = "";

lines.forEach((line) => {
  let endOfPassport = line === "";
  if (endOfPassport) {
    passports.push(currentPassport);
    currentPassport = "";
  } else {
    currentPassport += ` ${line}`;
  }
});

optionalFields = ["cid"];
requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const validate = (passports) => {
  let validPassports = passports.filter((el) => {
    let passport = el.split(" ");
    let fields = passport
      .map((el) => el.split(":")[0])
      .filter((fieldName) => requiredFields.indexOf(fieldName) !== -1);
      let isValid = fields.length >= requiredFields.length;
      return isValid;
    });
    return validPassports
};


let result = validate(passports)
