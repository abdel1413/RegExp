//passing the second arg as a function
let string = "The cia and the fbi";
console.log(string.replace(/\b(cia|fbi)\b/g, (str) => str.toUpperCase()));

let stock = "1 lemon, 2 cabbages, 2 mangoes, 3 apple , 5 ail, and 101 eggs";
function MinusOne(match, amount, label) {
  amount = Number(amount) - 1;
  if (amount === 1) {
    //remove s at end
    label = label.slice(0, label.length - 1);
  } else if (amount > 1) {
    label = label.concat("s"); // add s at end of label
  } else if (amount === 0) {
    amount = "no";
  }
  return amount + " " + label;
}

console.log(stock.replace(/(\d+) (\w+)/g, MinusOne));
