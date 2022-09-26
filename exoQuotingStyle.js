let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/C/g, "D"));
// → "I'm the cook," he said, "it's my job."

// replacing single   quote to double quote while keeping the apostroth
//untouched
console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
let doubeQuote = /(^|\W)'|'(\W|$)/g;

console.log(text.replace(doubeQuote, '$1"$2'));
