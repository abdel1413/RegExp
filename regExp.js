let regexp = RegExp("abc");
let regexp2 = /abc/;
console.log(regexp);
console.log(regexp2);

// ? and + are special char with special meaning
// they should be follow back slashe char \ if
// they meant to represent the char itself
let oneAndPlus = /one\+/;

//test is methd that returns true of false
console.log(/abc/.test("backabcddd")); //true bcz we've abc partterm matching
console.log(/bcd/.test("abcabdbcadcd")); //false bcz there is not parttern
//that match /bcd/

//char inside the brackets means a range of char
console.log(/[0-9]/.test("in 1990"));
/**
 * \D => char that's not a digit
 * /\s/ => any  white space( tab, space, newline)
 * \S => a non whitespace char
 * /abc/	A sequence of characters
/[abc]/	Any character from a set of characters
/[^abc]/	Any character not in a set of characters
/[0-9]/	Any character in a range of characters
/x+/	One or more occurrences of the pattern x
/x+?/	One or more occurrences, nongreedy
/x?/	Zero or one occurrence
/x{2,4}/ Two to four occurrences
/(abc)/	A group
/a|b|c/	Any one of several patterns
/\d/	Any digit character  same as [0-9]
/\w/	An alphanumeric character (“word character”)
/./	Any character except newlines
/\b/ A word boundary
/^/	Start of input
/$/	End of input
 */
// /x*/	Zero or more occurrences

//match 09/20/2022/23:01
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("09-20-2022 23:01"));

//improved one may be like
dateTime = /[\d.]/; // any digit or a period char.
//NOTE any special char such . or + looses its special meaning
// when it appeears inside the brackets

//inside the brackets [] to exclude unwanted chars we use caret ^ just
//after the brackets[]
let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
console.log(notBinary.test("1100100010200110"));

//+after a char or digit means repeat more than one time
let repeat = /\d+/; //more than one digit
console.log(repeat.test("123")); //true
console.log(repeat.test("''")); //false
console.log(repeat.test("'324'"));

//* after a char or digit means repeat zero of more time
let rep = /\d*/;
console.log(rep.test("''")); //true bcz 0  times is part of rep
console.log(rep.test("'1'")); // true.

//a char or dig before ? means that char or digit may occur
//zero or one time
let optional = /neighbou?r/;
console.log(optional.test("neighbour")); //true
console.log(optional.test("neighbor")); //true though u is missing

//number inside the braces {number} right after a char or digit  means a precise number of time
// that char of digit  must occur
//NOTE: two digits inside the braces means from first digit to the last one
//{2,4} => from 2 to 4
//{2,} => from 2 and more
let dateTime = /\d{1,2}-\d{1,2}-\d{2,4} \d{1,2}:\d{2}/;
console.log(dateTime.test("12-11-2022 08:44"));

//methd "search" acts like indexOf and it return the first index if fund
// or -1 otherwise
console.log("  word".search(/\S/));
// → 2
console.log("    ".search(/\S/)); //-1
