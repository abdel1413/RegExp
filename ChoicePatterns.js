/**
 * combining many regexp separated with | pipe char ie choice btw char
 *
 */

let animalCount = /\b\d+ (pig|cow|checken)s?\b/;
console.log(animalCount.test("10 pigs")); //true
console.log(animalCount.test("10 pigcheckens")); //false :pigcheckens is not in the patterns
