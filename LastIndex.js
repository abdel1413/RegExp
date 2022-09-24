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