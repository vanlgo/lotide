const input = process.argv.splice(2);

const transformLatin = function(toLatin) {
  let pigLatinned = [];
  toLatin.forEach(function(i) {
    const firstLetter = i.charAt(0);
    let latinned = i.slice(1);
    latinned += firstLetter + "ay";
    pigLatinned.push(latinned);
  });
  return pigLatinned.join(" ");
};

console.log(transformLatin(input));