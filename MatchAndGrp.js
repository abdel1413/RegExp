//2) Another regExp method is exec ie execute which return
//the object
//NOTE exec returns an array of string object starting with the
// match value from exec mthd
let match = /\d+/.exec("one two 100");
console.log(match);
// =>['100', index: 8, input: 'one two 100', groups: undefined]

// 3) index property that returns the index of the start of an object returned
//from exec methd
console.log(match.index); //=> 8

//Note: string values have also a methd that returns similar
// matching result
console.log("one two 100".match(/\d+/));
//=>['100', index: 8, input: 'one two 100', groups: undefined]

//when a regExp contains a subExp grped with (), the matched grp is the
//1st element of the returned result array and then the
//2nd elt is the part that is matched with the 1st part
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
//=>["'hello'", 'hello', index: 9, input: "she said 'hello'", groups: undefined]

//a grp followed by question mark ()? , when it does not match at all, its
//position remain indefined in the returned array
let grpChar = /bad(ly)?/;
console.log(grpChar.exec("bad"));
//=>['bad', undefined, index: 0, input: 'bad', groups: undefined]
//This is bcz of the fact that ? means optional so the char inside
//() may be homitted or not.

let digit = /(\d)+/;
console.log(digit.exec(" haehoee 134"));
//['134', '4', index: 9, input: ' haehoee 134', groups: undefined]
//NOTE THE POSISITION OF THE MATCHED GRP ELT IS ALWAYS THE LAST
//ELT IN THE GRP
