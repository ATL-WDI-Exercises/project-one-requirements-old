var firstArray = [1, 2, 3, 4, 5];
var secondArray = [3, 2, 5];

// Array.every is like a logical AND over every item in an array.
// the function being passed into Array.every can then be a check
// against the indices of another array, like this: 

function test ( ) {
secondArray.every(function(item) {
return firstArray.indexOf(item) >= 0
)}; 
test();
// }
// secondArray.every(function(item) {
// return firstArray.indexOf(item) >= 0
// }) 


// we're just checking to see that every item in secondArray
// has a valid index in firstArray

// function isWinner(element, index, array) {
//   return element >= 10;
// }
// [12, 5, 8, 130, 44].every(isBigEnough);   // false
// [12, 54, 18, 130, 44].every(isBigEnough); // true