//REGEXP WITH REPLACE
//ordinarly the replace methd replace the first match.
//the same goes for regExp if it has no g char at the end
let rep = "bobo".replace("o", "A");
console.log(rep); //bAbo

let repRegExp = "bobo".replace(/[ou]/, "U");
let repRegExp = "boubo".replace(/[ou]/, "U");
console.log(repRegExp); // bUbo

//If the regexp is followed by g then all the matches will
//be replaced not just the first match
let repAll = "borobudur".replace(/[ou]/g, "A");
console.log(repAll); // bArAbAdAr

//Using regExp to swap the name format( last name, first name) to
// (first name last name )with no comma.
let swap = "Bob, Marley\n Smith, John\n Jimmy, Jazz".replace(
  /(\w+), (\w+)/g,
  "$2 $1"
);
console.log(swap);
//Marley Bob
//John Smith
//Jazz Jimmy

//Note: the $1 and $2 sign refer to the parenthezied grp in the patterns
//while $1 match the first grp in the pattern, $2 matches the second grp
//and so on. The whole match can be refered to $&
