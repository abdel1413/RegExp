//JavaScript convention: Months start at index 0 while days start at one
// so say  number 11 is = 12 in months ie 12th month

console.log(new Date(2022, 09, 20));
//Thu Oct 20 2022 00:00:00 GMT-0400 (Eastern Daylight Time)
//Note  hours, munites, and secondes are optional. So when
//not provided, the console output 00:00:00

//NOTE A SINGLE ARG GIVEN TO A CONSTRUCTION IS TREATED AS MILLISECONDS COUNT

//date object has mthds such as getFullYear() getMonth()
//getDate(),getHours(),getMunites(), getSeconds

function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}

console.log(getDate("09-20-2022"));
//=>Tue Sep 20 2022 00:00:00 GMT-0400 (Eastern Daylight Time)

//Note The underScore (_) is ignored and used only to skip
// the full matched elts in the array

//to enforce that the match must span the whole string
//we use /^/  at the begining and /$/ and the end of string
let d = /^\d+$/;
console.log(d.exec("12334 abee")); //null
console.log(d.exec("123"));
// => ['12334', index: 0, input: '12334', groups: undefined]

//we can also use word boundry \b to enforce the match
let b = /\bcat\b/;
console.log(b.exec("concatinate")); // false
console.log(b.exec("cat"));
// =>['cat', index: 0, input: 'cat', groups: undefined]
