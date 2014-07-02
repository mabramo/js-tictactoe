////////////////////////////
//       TicTacToe        //
////////////////////////////

//Get number of players DEFAULT=2
//Get size of board DEFAULT=[3,3]
//Get desired length-to-win

var players;
var boardx;
var boardy;
var numToWin;
var board = new Array();

function setup()
{
  players = 3;
  boardx = 3;
  boardy = 3;
  numToWin = 3;

  board = newArray(boardx);
  for(i = 0; i < boardx; i++)
    {
      board[i] = newArray(boardy);
    }
}

