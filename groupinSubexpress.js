// * or + on more than one element at a time
let repeatElement = /boo+(hob+)+/i;
console.log(repeatElement.test("booooohobbbbhobHobhob")); //true
//NOTE: her first + allows to input more than one 'o' => boooooo
// the second + inside the parentheses => hobbbbbb
// + just after parentheses => hobHobhob. // repeating the whole chars
//inside the parentheses as a single element.
//i => case insensitive
