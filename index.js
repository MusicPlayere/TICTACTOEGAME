var playerTurn, moves, isGameOver, span, restartButton;
playerTurn = "x";
moves = 0;
isGameOver = false;
span = document.getElementsByTagName("span");
restartButton = '<button onclick="playAgain()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/></svg></button>';

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
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  } else {
    console.log('Invalid move. Cell is already occupied.');
  }
}

// Function to reset the game
function resetGame() {
  // Clear board
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  // Reset player
  currentPlayer = 'X';
}

// Example gameplay
makeMove(0, 0); // X
makeMove(1, 1); // O
makeMove(0, 1); // X
makeMove(1, 0); // O
makeMove(0, 2); // X wins!