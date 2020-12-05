const fs = require("fs");
const { keys } = require("lodash");
const _ = require("lodash");
const text = fs.readFileSync("./day-4.txt").toString("utf-8");
const lines = text.split("\n");

// PART 1
optionalFields = ["cid"];
requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

currentPassport = "";
count = 0;
let validatePassport = (passport) => {
  let fields = passport
    .split(" ")
    .map((el) => el.split(":")[0])
    .filter((fieldName) => requiredFields.indexOf(fieldName) !== -1);
  let isValid = fields.length >= requiredFields.length;
  return isValid;
};
lines.forEach((line) => {
  let endOfPassport = line === "";
  if (endOfPassport) {
    validatePassport(currentPassport) ? count++ : null;
    currentPassport = "";
  } else {
    currentPassport += ` ${line}`;
  }
});
console.log(count);

// Part Two
const isValidBirthYear = (byr) => 1920 <= byr && byr <= 2002;
const isValidIssueYear = (year) => 2010 <= year && year <= 2020;
const isValidExpYear = (eyr) => 2020 <= eyr && eyr <= 2030;
const isValidHeight = (hgt) => {
let regex =
};
const isValidHairColor = (hcl) => {
  regex = /(#[a-f|0-9]{6})/
  return regex.test(hcl)
};
const isValidHairColor = (hcl) => hcl;
const isValidEyeColor = (ecl) => {
  const validEyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
  validEyeColors.includes(ecl);
};
const isValidPID = (pid) => !isNaN(pid)&& pid.length === 9;


