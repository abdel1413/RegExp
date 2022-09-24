let input = "A string with 3 numbers in it... 42,57 and 88.";
let digits = /\b\d+\b/g;

console.log(input.match(digit)); //['3', '3', '4', '5', '4']
let d = digit.exec(input);
console.log(d);
//['3', index: 14, input: 'A string with 3 numbers in it ... 34 and 54', groups: undefined]
console.log("value", d[0]);
console.log("index", d.index);

//let loop over the digit in the input string

//create a binding
let match;

//use while loop inside which we goint to assign the
//expression where  digit executes the input)
while ((match = digits.exec(input))) {
  console.log(`found number ${match[0]} at index ${match.index}`);
}
