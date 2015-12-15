var firstArray = [1,2,3,4,5];
var secondArray = [3,2,5];


function checkForWin(firstArray, secondArray) {



  return secondArray.every(function(item) {
  return firstArray.indexOf(item) >= 0;
  });
}

checkForWin(firstArray,secondArray);
console.log(checkForWin(firstArray,secondArray));