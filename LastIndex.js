/**
 * Note RegExp does provide lastIndex with global or sticky option
 * enabled at the end. the method used is exec()
 *
 */
let pattern = /y/g;
pattern.lastIndex = 3; //NOTE DON'T SAVE LASTINDEX IN ANOTHER BIND
//OTHERWISE IT WON'T UPDATE IF YOU LATER CALL THAT BINDING IN WHICH
//YOU SAVE THE LASTINDEX.
console.log("first call", pattern.lastIndex);
let match = pattern.exec("xyzzy");
console.log(match); //y
console.log(match.index); //4

//NOTE if the call is successful, the call to exec automatically
// updates lastIndex to point after the match.
// Since the index of the match char is at position 4 so
// the exec call updates the lastIndex which was 3 to the index
//after 4 which is 5. Now lastIndex is pointing at position 5
console.log("nd call", pattern.lastIndex); //->5

//NOTE STICKY OPTION enabled, the match will succeed only if
// it start directly at the lastIndex position contrary to global
// which will search ahead for the position where the match can start
let gb = /abc/g;
//console.log(gb.exec("yanx abc"))
console.log((gb.lastIndex = 3)); //3
let ind = gb.exec("yanx abc");
console.log(ind.index); // 5
console.log(gb.lastIndex); //8

let sticky = /abc/y;
console.log((sticky.lastIndex = 1)); //1
let ind = sticky.exec("yanx abc");
console.log(ind); //null
// bcz it doesn't updates the lastindex position
console.log(sticky.lastIndex); //0

//NOTE WHEN USING MULTIPLE EXEC CALL FOR SHARED REGEXP,
//THE AUTOMATIC LASTINDEX CALL'S UPDATES MAY CAUSE PROBLEM
//THE REGEX MAY ACCIDENTALY START AT THE INDEX THAT WAS LEFT OVER
let digit = /\d/g;
let d = digit.exec("here it is: 1");
console.log(d); //['1', index: 12, input: 'here it is: 1', groups: undefined]
console.log(d.index); //12
console.log(d[0]); //1
console.log(digit.exec("and now :1")); // null
// Here the 2nd call to exec made lastIndex changed
