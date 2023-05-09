const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];

    const updateBoard = (index, value) => {
        board[index] = value
    }

    const resetBoard = () => {
        for (let i = 0; i < gameBoard.board.length; i++) {
            gameBoard.board[i] = '';
        }
        const squares = document.querySelectorAll('.square');
        for (let i = 0; i < squares.length; i++) {
            squares[i].innerText = '';
        }

    }
    return { board, updateBoard, resetBoard };
})();

function resetGame() {
    gameBoard.resetBoard();
}

const populateBoard = (() => {
    for (let i = 0; i < gameBoard.board.length; i++) {
        const square = document.createElement("button");
        square.classList.add('square');
        square.innerText = gameBoard.board[i];
        square.addEventListener('click', () => {
            const player = 'X';
            gameBoard.updateBoard(i, player);
            square.innerText = player;
        })
        let gameContainer = document.querySelector('.gameContainer');
        gameContainer.appendChild(square);
    }
})();
console.log(gameBoard.board.length)