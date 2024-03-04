let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

function makeMove(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerText = currentPlayer;
        if (checkWinner(currentPlayer)) {
            document.getElementById("message").innerText = `${currentPlayer} wins!`;
            return;
        } else if (board.every(cell => cell !== "")) {
            document.getElementById("message").innerText = "It's a draw!";
            return;
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        if (currentPlayer === "O") {
            setTimeout(computerMove, 500);
        }
    }
}

function computerMove() {
    let index;
    do {
        index = Math.floor(Math.random() * 9);
    } while (board[index] !== "");
    makeMove(index);
}

function checkWinner(player) {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winningCombos.some(combo => {
        return combo.every(index => board[index] === player);
    });
}
