const fs = require("fs");
const text = fs.readFileSync("./input/day-11.txt").toString("utf-8");
const lines = text.split("\n").sort((a, b) => a - b);

for (let i = 0; i < 2; i++) {
  console.log(lines[i]);

  lines[i].split("")
  .forEach((seatOrFloor, idx) => {
    if (seatOrFloor === "L") {
      let t, r, l, b, dtl, dtr, dbl, dbr;
      if (i > 0) {
        t = lines[i - 1][idx];
        dtl = lines[i - 1][idx - 1];
        dtr = lines[i - 1][idx + 1];
        r = lines[i][idx + 1];
        l = lines[i][idx - 1];
        b = lines[i + 1][idx];
        dbl = lines[i + 1][idx - 1];
        dbr = lines[i + 1][idx + 1];
        console.log({s: seatOrFloor, t: t}, idx);
      }
    }
  });
}
