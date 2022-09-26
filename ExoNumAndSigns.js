/**
 * ^[+\-]? = (+|-|-) : start with + or - optionall
 * (\d+(\.\d*)?|\.\b+) = stat with 1 or 1+ digit followed optionally either
 * by dot or 0 or more digit Or a dot or 1 or 1+ digit
 * [eE] = i (insensitive)
 */
let numbers = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;

let nums = ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"];
let numsExpo = ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."];

for (let num of nums) {
  if (!numbers.test(num)) {
    console.log(`Failed to test '${num}'`);
  }
}
for (let numEx of numsExpo) {
  if (numbers.test(numEx)) {
    console.log(`Incorrectly accepted '${numEx}'`);
  }
}
