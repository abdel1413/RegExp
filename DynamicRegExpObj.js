/**
 * if we don't know exactly the patterns we need to match against when
 * writing a code, say we want to add uderscores around the name from a
 * function but we don't know the name until its start running so we can't
 * use the slash-based notation
 * The only way to solve this is to buld up a string and use
 * RegExp constructor on that.
 *
 */

let name = "Henry";
let text = "Henry is a suspicious character";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

let text2 = "Henry is a suspicious character";
let name2 = text2.split(" ")[0];
let rg = new RegExp("\\b(" + name2 + ")\\b", "gi");
console.log(text2.replace(rg, "_$1_")); //_Henry_ is a suspicious character

let susp = text2.split(" ")[3];
let sp = new RegExp("\\b(" + susp + ")\\b", "gi");
console.log(text2.replace(sp, (s) => s.toUpperCase())); //Henry is a SUSPICIOUS character

let splt = text2.split(" ");
let end = splt[splt.length - 1];

let r = new RegExp("\\b(" + end + ")\\b", "gi");
console.log(text2.replace(r, (e) => e.toUpperCase()));
//Henry is a suspicious CHARACTER
