let currentplayer = 'X';
const board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];

function renderboard() {
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach((boxelement, i) => {
        if (board[i] === 'X') {
            boxelement.innerHTML = '<img src ="close.png" height="50px"/>';
        }
        else if (board[i] === 'O') {
            boxelement.innerHTML = '<img src = "arrow.png" height="50px"/>';
        }
        else {
            boxelement.innerHTML ='';
        }
    })
}
renderboard();

function selectbox(boxNumber) {
    if (board[boxNumber] !== -1) {
        alert("Invalid Move");
        return;
    }
    board[boxNumber] = currentplayer;
    renderboard();
    checkwinner();

    if (currentplayer === "X") {
        currentplayer = "O";
    }
    else {
        currentplayer = "X";
    }
    const currentPlayerElement = document.getElementById("currentplayer");
    currentPlayerElement.innerHTML = currentplayer;
}
 
function resetboard(){
    board.fill(-1);
    renderboard();

    currentplayer = "X";
    const currentPlayerElement = document.getElementById("currentplayer")
    currentPlayerElement.innerHTML = currentplayer;
}

function isPlayerPresent(places, player){
    const a = places[0];
    const b = places[1];
    const c = places[2];

    if(board[a] == player && board[b] == player && board[c] == player){
        return true;
    }else {
        return false;
    }
}

function checkwinner(){
    /*
       winning Positions: 
       0,1,2
       3,4,5
       6,7,8
       0,3,6
       1,4,7
       2,5,8
       0,4,8
       2,4,6
    */
   if(isPlayerPresent([0,1,2], "X")){
    alert("Player X wins");
   }else if(isPlayerPresent([3,4,5], "X")){
    alert("Player X wins");
   }else if(isPlayerPresent([6,7,8], "X")){
    alert("Player X wins");
   }else if(isPlayerPresent([0,3,6], "X")){
    alert("Player X wins");
   }else if(isPlayerPresent([1,4,7], "X")){
    alert("Player X wins");
   }else if(isPlayerPresent([2,5,8], "X")){
    alert("Player X wins");
   }else if(isPlayerPresent([0,4,8], "X")){
    alert("Player X wins");
   }else if(isPlayerPresent([2,4,6], "X")){
    alert("Player X wins");
   }

   if(isPlayerPresent([0,1,2], "O")){
    alert("Player O wins");
   }else if(isPlayerPresent([3,4,5], "O")){
    alert("Player O wins");
   }else if(isPlayerPresent([6,7,8], "O")){
    alert("Player O wins");
   }else if(isPlayerPresent([0,3,6], "O")){
    alert("Player O wins");
   }else if(isPlayerPresent([1,4,7], "O")){
    alert("Player O wins");
   }else if(isPlayerPresent([2,5,8], "O")){
    alert("Player O wins");
   }else if(isPlayerPresent([0,4,8], "O")){
    alert("Player O wins");
   }else if(isPlayerPresent([2,4,6], "O")){
    alert("Player O wins");
   }

   if(!board.includes(-1)){
    alert("It's Draw");
    renderboard();
   }
}