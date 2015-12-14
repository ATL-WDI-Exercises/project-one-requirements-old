var winningCombos = [  [1,4,7] , [2,5,8] , [3,6,9] , [1,2,3] , [4,5,6] , [7,8,9] , [1,5,9] , [3,5,7]  ]


function inArray(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) return true;
    }
    return false;
}


var arr = [2,9,7,8];



if (inArray(arr, "7" && "8" && "9")) {
    console.log("player wins with " + arr + " 1");
} else if (inArray(arr, "2" && "5" && "8")) {
    console.log("player wins with " + arr + " 2");
} else {
    console.log("false");
}


// } else if (inArray(arr, 2 && 5 && 8)) {
//     console.log("true");
// } else if (inArray(arr, 2 && 5 && 8)) {
//     console.log("true");
// } else if (inArray(arr, 3 && 6 && 9)) {
//     console.log("true");
// } else if (inArray(arr, 1 && 2 && 3)) {
//     console.log("true");
// } else if(inArray (arr, 4 && 5 && 6)) {
//     console.log("true");
// } else if (inArray(arr, 7 && 8 && 9)) {
//     console.log("true");
// } else if(inArray (arr, 1 && 5 && 9)) {
//     console.log("true");
// } else if (inArray(arr, 3 && 5 && 7)) {
//     console.log("true");
