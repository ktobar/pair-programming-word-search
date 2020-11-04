const {transpose} = require('./transpose');
// const trueMatrix = [
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ];
// const falseMatrix = [
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ];
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  // console.log('horizontalJoin :', horizontalJoin);
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const newArray = transpose(letters);
  const verticalJoin = newArray.map(ls => ls.join(''));
  // console.log('verticalJoin :', verticalJoin);
  for (const l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};
// console.log('1:', wordSearch(trueMatrix, 'SEINFELD'));
// console.log('2:', wordSearch(falseMatrix, 'FRANK'));
module.exports = wordSearch;