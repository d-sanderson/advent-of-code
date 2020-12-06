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
    .map((el) => evaluateField(el))
    .filter((el) => el == true);
  let isValid = fields.length === requiredFields.length;
  return isValid;
};

lines.forEach((line) => {
  let endOfPassport = line === "\r";
  if (endOfPassport) {
    validatePassport(currentPassport) ? count++ : null;
    currentPassport = "";
  } else {
    currentPassport += ` ${line}`;
  }
});


// Part Two
function isValidBirthYear(byr) {
  return 1920 <= byr && byr <= 2002;
}
function isValidIssueYear(year) {
  return 2010 <= year && year <= 2020;
}
function isValidExpYear(eyr) {
  return 2020 <= eyr && eyr <= 2030;
}
function isValidHeight(hgt) {
  if (hgt.includes("in")) {
    return /\b((5[9]|6[0-9]|7[0-6])in)\b/.test(hgt);
  }
  if (hgt.includes("cm")) {
    return /\b(1[5-8][0-9]cm|19[0-3]cm)\b/.test(hgt);
  }
}
function isValidHairColor(hcl) {
  regex = /(#[a-f|0-9]{6})/;
  return regex.test(hcl);
}
function isValidEyeColor(ecl) {
  const validEyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
  return validEyeColors.includes(ecl);
}
function isValidPID(pid) {
  return !isNaN(pid) && pid.length === 9;
}

function evaluateField(field) {
  field = field.replace("\r", "");
  const [key, value] = field.split(":");
  switch (key) {
    case "byr":
      return isValidBirthYear(value);
    case "iyr":
      return isValidIssueYear(value);
    case "eyr":
      return isValidExpYear(value);
    case "hgt":
      return isValidHeight(value);
    case "hcl":
      return isValidHairColor(value);
    case "ecl":
      return isValidEyeColor(value);
    case "pid":
      return isValidPID(value);
  }
}

console.log(count);