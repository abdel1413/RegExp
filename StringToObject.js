function StringToObject(string) {
  //create an empty ob
  let result = {};
  let section = result; // section will hold result as its property

  string.split(/\r?\n/).forEach((line) => {
    let match;
    //  console.log('lines',line.match(/^(\w+)=(.*)?/));
    if ((match = line.match(/^(\w+)=(.*)?/))) {
      // console.log('matches0', match [0])
      // console.log('match1', match[1])
      // console.log('match2',match[2])
      section[match[1]] = match[2];
      // console.log('section', section)
    } else if ((match = line.match(/^\[(.*)\]$/))) {
      section[match[1]] = {};
    } else if (!/^\S*(;.*)?$/.test(line)) {
      throw new Error("line " + line + " not valid.");
    }
  });
  return result;
}

console.log(
  StringToObject(`
[larry]
fullname=Larry Doe
type=kindergarten bully
website=http://www.geocities.com/CapeCanaveral/11451`)
);

console.log(
  StringToObject(`
[davaeorn]
fullname=Davaeorn
type=evil wizard
outputdir=/home/marijn/enemies/davaeorn`)
);

console.log(
  StringToObject(`
name=Vasilis
[address]
city=Tessaloniki`)
);
