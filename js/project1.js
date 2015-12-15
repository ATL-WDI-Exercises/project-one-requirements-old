var redMoves = ["red="];
var blueMoves = ["blue="];
var redTurn = (10 >= 9);
console.log("red begins");
"use strict";

function reset() {
location.reload();
}

var winCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
  ];

function press(num) {
  if (redTurn == true) {
        redMoves.push(num);
    } else {
        blueMoves.push(num);
    }

(redTurn ? document.getElementById("title").style.color = "blue" : document.getElementById("title").style.color = "red")

    console.log(redMoves);
    console.log(blueMoves);
    var buttonId = "button" + num;
    if (redTurn == true) {
        document.getElementById(buttonId).style.background = "#ff0000";
    } else {
        document.getElementById(buttonId).style.background = "#0000ff";
    }
    document.getElementById(buttonId).disabled = true;

    var redWins = winCombos.some(function(wc) {
      return checkForWin('red', redMoves, wc);  
    });

    var blueWins = winCombos.some(function(wc) {
      return checkForWin('blue', blueMoves, wc);  
    });

    if (redWins) {
      endGame("red");
    } else if (blueWins) {
      endGame("blue");
    }


    
    redTurn = !redTurn;
    console.log("is it reds turn?" + redTurn);
}

function press1() {
  press(1);
}

function press2() {
  press(2);
}

function press3() {
   press(3);
}

function press4() {
  press(4);
}

function press5() {
  press(5);
}

function press6() {
  press(6);
}

function press7() {
  press(7);
}

function press8() {
  press(8);
}

function press9() {
  press(9);
}

function blink() {
   var f = document.getElementById("title");
   setInterval(function() {
      f.style.display = (f.style.display == 'none' ? '' : 'none');
   }, 1000);
}

function checkForWin(colorName, colorMoves, winCombo) {
     var result = winCombo.every(function(item) { return colorMoves.indexOf(item) >= 0; });
     if (result) {
    console.log('winner found!!! ' + colorName + ' wins!');
     } else {
       console.log('checked ' + colorName + ' for a winner...none found');
     }
     return result;//returns true if there IS a winner
    };

function endGame(winner) {
  
  document.getElementById("title").style.color = winner; //the title is the color of the winner
  var x = document.getElementsByClassName("gameButton")
  for (i = 0; i < x.length; i++) { 
  x[ i ].setAttribute("disabled", "true");

  blink(title);


}
}

  //causes the title to blink in the color of the winner;
  //diables the remaining buttons excl. reset.
  //maybe if the result is a tie, the reset button will blink.


