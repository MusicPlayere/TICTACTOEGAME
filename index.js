// an array to collect all the objects
var moves = [];

// the original board
var origBoard = ["O", 1, "X", "X", 4, "X", 6, "O", "O"];

// human
var huPlayer = "O";

// ai
var aiPlayer = "X";

// returns list of the indexes of empty spots on the board
function emptyIndexies(board) {
  return board.filter((s) => s != "O" && s != "X");
}

// winning combinations using the board indexies
function winning(board, player) {
  if (
    (board[0] == player && board[1] == player && board[2] == player) ||
    (board[3] == player && board[4] == player && board[5] == player) ||
    (board[6] == player && board[7] == player && board[8] == player) ||
    (board[0] == player && board[3] == player && board[6] == player) ||
    (board[1] == player && board[4] == player && board[7] == player) ||
    (board[2] == player && board[5] == player && board[8] == player) ||
    (board[0] == player && board[4] == player && board[8] == player) ||
    (board[2] == player && board[4] == player && board[6] == player)
  ) {
    return true;
  } else {
    return false;
  }
}

// function to check for terminal states
function terminal(board, player) {
  if (winning(board, player)) {
    return { winner: player };
  } else if (emptyIndexies(board).length == 0) {
    return { winner: null };
  } else {
    return { winner: undefined };
  }
}

// function to determine the score
function evaluate(board) {