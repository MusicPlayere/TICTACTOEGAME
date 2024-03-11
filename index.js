const player = "O";
const computer = "X";
let play_board = ["", "", "", "", "", "", "", "", ""];
let board_full = false;
const board_container = document.querySelector(".play-area");
const winner_statement = document.getElementById("winner");

const check_line = (a, b, c) => {
  return (
    play_board[a] == play_board[b] &&
    play_board[b] == play_board[c] &&
    (play_board[a] == player || play_board[a] == computer)
  );
};

const check_match = () => {
  for (i = 0; i < 9; i += 3) {
    if (check_line(i, i + 1, i + 2)) {
      return play_board[i];
    }
  }
  for (i = 0; i < 3; i++) {
    if (check_line(i, i + 3, i + 6)) {
      return play_board[i];
    }
  }
  if (check_line(0, 4, 8)) {
    return play_board[0];
  }
  if (check_line(2, 4, 6)) {
    return play_board[2];
  }
  return "";
};

const render_board = () => {
  board_container.innerHTML = "";
  play_board.forEach((element, index) => {
    const block = document.createElement("div");
    block.classList.add("block");
    block.id = `block_${index}`;
    block.dataset.index = index;
    if (element != "") {
      const block_text = document.createElement("div");
      block_text.classList.add("block-text");
      block_text.innerText = element;
      block.appendChild(block_text);
    }
    block.addEventListener("click", addPlayerMove);
    board_container.appendChild(block);
  });
};

const addPlayerMove = (e) => {
  const index = e.target.dataset.index;
  if (play_board[index] == "" && !board_full) {
    play_board[index] = player;
    render_board();
    const match = check_match();
    if (match == "") {
      setTimeout(addComputerMove, 500);
    } else {
      board_full = true;
      if (match == player) {
        winner_statement.innerText = "You Win!";
        winner_statement.classList.add("playerWin");
      } else if (match == computer) {
        winner_statement.innerText = "Computer Wins!";
        winner_statement.classList.add("computerWin");
      } else {
        winner_statement.innerText = "Draw!";
        winner_statement.classList.add("draw");
      }
    }
  }
};

const addComputerMove = () => {
  let empty_cells = [];
  for (i = 0; i < 9; i++) {
    if (play_board[i] == "") {
      empty_cells.push(i);
    }
  }
  if (empty_cells.length > 0) {
    const index = empty_cells[Math.floor(Math.random() * empty_cells.length)];
    play_board[index] = computer;
    render_board();
  }
};

render_board();