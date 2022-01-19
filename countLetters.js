const countLetters = function(counted) {
  const lettersCounted = {};
  for (const i of counted) {
    if (lettersCounted[i]) {
      lettersCounted[i]++;
    } else {
      if (i !== " ") {
        lettersCounted[i] = 1;
      }
    }
  }
  return lettersCounted;
};

module.exports = countLetters;