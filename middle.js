const middle = function(findMiddle) {
  const middle = [];
  if (findMiddle.length <= 2) {
  } else {
    if (findMiddle.length % 2 === 0) {
      let even = (findMiddle.length / 2) - 1;
      middle.push(findMiddle[even]);
      middle.push(findMiddle[even + 1]);
    } else if (findMiddle.length % 2 !== 0) {
      const odd = Math.round((findMiddle.length / 2) - 1);
      middle.push(findMiddle[odd]);
    }
  }
  return middle;
};

module.exports = middle;