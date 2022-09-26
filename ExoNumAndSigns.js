let numbers = /^[+\-]?(\d+(\.\d*)?|\.\b+)([eE][+\-]?\d+)?$/;

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
