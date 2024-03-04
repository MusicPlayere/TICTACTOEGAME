// Initialize game variables
let currentPlayer = 'X';
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Function to check if a player has won
function checkWin(player) {
  // Check rows and columns
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
      return true; // Row win
    }
    if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
      return true; // Column win
    }
  }
  // Check diagonals
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true; // Diagonal win
  }
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true; // Diagonal win
  }
  return false; // No win
}

// Function to check if the game is a draw
function checkDraw() {
  for (let row of board) {
    for (let cell of row) {
      if (cell === '') {
        return false; // Game not draw
      }
    }
  }
  return true; // Game draw
}

// Function to handle player move
function makeMove(row, col) {
  // Check if cell is empty
  if (board[row][col] === '') {
    // Make move
    board[row][col] = currentPlayer;
    // Check for win or draw
    if (checkWin(currentPlayer)) {
      console.log(currentPlayer + ' wins!');
      resetGame();
    } else if (checkDraw()) {
      console.log('It\'s a draw!');
      resetGame();
    } else {
      // Switch player
      currentPlayer = c
