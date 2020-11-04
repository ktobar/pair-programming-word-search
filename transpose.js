const transpose = function(matrix) {
  let newArray = [];
  for (let element of matrix[0]) { // looping through inner array 
    //console.log(matrix[0]); 
    newArray.push([]); // pushed an empty array into the array
  }
  for (let i = 0; i < matrix.length; i++) { // looping through i
    for (let j = 0; j < matrix[i].length; j++) { // looping through the new Array and pushing values into it.
      newArray[j].push(matrix[i][j]); // pushing values of j at matrix[i] into newArray[j]
    } //console.log(newArray);
  } //console.log(newArray);  
  return newArray; // returns the newArray
};
// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}
module.exports = {transpose};
//test cases
// printMatrix(transpose([
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4]
// ]));
// console.log('----')
//  printMatrix(transpose([
//   [1, 2],
//   [3, 4],
//   [5, 6]
//  ]));
// // Output[]
// // 1 3 5 
// // 2 4 6
// console.log('----')
// printMatrix(
//   transpose([
//   [1, 2, 3, 4, 5, 6, 7]
// ]));