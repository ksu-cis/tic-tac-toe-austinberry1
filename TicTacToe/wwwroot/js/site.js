// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var turn = "x";



function setTurn() {

    var turnElement = document.getElementById("turn");
    turnElement.innerText = "It is player" + turn + "'s turn";

}





function setWinner(winner){

    var turnElement = document.getElementById("turn");
    turnElement.innerText = "It is player" + winner + "'s wins!";
}

function checkForWin() {
    var cells = document.getElementsByClassName("square");


    ///check horz cells
    for (var i = 0; i < 9; i += 3) {
        if (cells[i].innerText && cells[0 + i].innerText === cells[1 + i].innerText && cells[1 + i].innerText === cells[2 + i].innerText) {
            setWinnder(cells[i]);
            return true;
        }
    }


    ///check ver cell
    for (var j = 0; j < 9; i += 3) {
        if (cells[j].innerText && cells[0 + j].innerText === cells[3 + j].innerText && cells[3 + j].innerText === cells[4 + j].innerText) {
            setWinnder(cells[j]);
            return true;
        }
    }

    ///check for cross
  /*  for (var j = 0; j < 9; i += 3) {
        if (cell[0 + j].innerText === cells[4 + j].innerText && cell[1].innerText === cells[8+ j].innerText) {
            setWinnder(cells[j]);
            return
        }
    }*/
    
    return;

}


function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "x")
        {
            turn = "o"
        }
        else
        {
            turn = "x";
        }
        if (!checkForWin()) setTurn();
        
    }
}

var cells = document.getElementsByClassName("square")

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", onClick);
}
setTurn();