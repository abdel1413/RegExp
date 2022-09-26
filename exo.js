let catCar = /ca[rt]/;
let string = "there are many cats in the car 10 and 20 and also another 30";
console.log(catCar.exec(string));
//['cat', index: 15, input: 'there are many cats in the car', groups: undefined]
let popPro = /pr?op/;
let st = "the population from my country love dancing pop as pro";
console.log(popPro.exec(st));

let fer = /(ferr(et|y|ari)/;
let ferString = "I have a new ferrari built with ferret from ferry";
console.log(fer.exec(ferString));

let end = /ious\b/;
let ending =
  "it was couragious of him as an ambicious man to speak before the huge crowd";
console.log(end.exec(ending));
console.log(ending.match(end));

let whitespace = /\s[.,:;]/;
let whString =
  "  I would love to have you as my guest, my friend who will do the following: clean, cook; with good heart.";
console.log(whitespace.exec(whString));
console.log(whString.match(whitespace));

let longerWord = /\w{7}/;
let longString = "habracadabra";
console.log(longerWord.exec(longString));
console.log(longString.match(longerWord));

let wdWithNoE = /\b[^\We]\b/i;
let wdString = " this is a nice thing to do at the end of the day";
console.log(wdWithNoE.exec(wdString));
console.log(wdString.match(wdWithNoE));

//write a function to test the regexp
function verify(regExp, yes, no) {
  if (regExp.source == "...") return;
  for (let str of yes) {
    if (!regExp.test(str)) {
      console.log(`Failure to math ${str}`);
    }
  }
  for (let st of no) {
    if (!regExp.test(st)) {
      console.log(`Unexpected match for ${st}`);
    }
  }
}

verify(/car|cat/, ["my car", "bad cats"], ["camper", "high art"]);
