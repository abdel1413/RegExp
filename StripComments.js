function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
// → 1 + 3
console.log(stripComments("x = 10;// ten!"));
// → x = 10;
console.log(stripComments("1 /* a */+/* b */ 1"));
//// → 1  1

//Note this is a greedy  meaning they match as much as
//they can and backtrack from there.That is why we did not get
//the oupt we expected in the last console =>(1 1).
// Let fix it to get  => 1+1
function stripComments2(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments2("1 /* a */+/* b */ 1"));
console.log(stripComments2("1 + /* 2 */3"));
// → 1 + 3
console.log(stripComments2("x = 10;// ten!"));

//[^] any char that is not in the empty set of chars
//is a way to match any char
//The repetition operators (*, +, ?, {}) are greedy and make
//them non greedy, we can do this (*?, +?, ??, {}?)
