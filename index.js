const board = Array.from({ length: 3 }, () => Array(3).fill(''));
const symbols = ['X', 'O'];
let currentPlayer = 0;

function printBoard() {
  console.log(board.map(row => row.join(' | ')).join('\n---------\n'));
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] === board[i][1] && board[i][1] === board[i][2]) ||
      (board[0][i] === board[1][i] && board[1][i] === board[2][i])
    ) {
      return true;
    }
  }

  if (
    (board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
    (board[0][2] === board[1][1] && board[1][1] === board[2][0])
  ) {
    return true;
  }

  return false;
}

function playGame() {
  printBoard();

  while (true) {
    const input = prompt(`Player ${symbols[currentPlayer]}, enter your move (row and column separated by a comma):`).split(',').map(Number);
    const [row, col] = input;

    if (board[row][col] !== '') {
      alert('Invalid move. Please try again.');
      continue;
    }

    board[row][col] = symbols[currentPlayer];

    if (checkWin()) {
      printBoard();
      alert(`Player ${symbols[currentPlayer]} wins!`);
      break;
    }

    currentPlayer = 1 - currentPlayer;
    printBoard();
  }
}

playGame();
