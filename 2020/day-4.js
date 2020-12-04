const fs = require("fs");
const _ = require("lodash")
const text = fs.readFileSync("./day-4.txt").toString('utf-8');
const passports = text.split("\n")

optionalFields = ['cid']
requiredFields = [ 'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].sort()

let t = passports.filter(el => {
    console.log(el)
    let passport = el.split(' ');
    let fields = passport.map(el => el.split(':')[0]).filter(fieldName => requiredFields.indexOf(fieldName) !== -1)
    let isValid = fields.length >= requiredFields.length 
    return isValid
})
console.log(t.length)
