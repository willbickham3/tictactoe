const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < board.length; i++) {
        const square = document.createElement("button");
        square.classList.add('square');
        square.innerText = board[i];
        square.addEventListener('click', () => {
            const player = 'X';
            updateBoard(i, player);
            square.innerText = player;
        })
        let gameContainer = document.querySelector('.gameContainer');
        gameContainer.appendChild(square);
    }

    const getBoard = () => {
        return board
    }

    const updateBoard = (index, value) => {
        board[index] = value
    }

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
        }
        const squares = document.querySelectorAll('.square');
        for (let i = 0; i < squares.length; i++) {
            squares[i].innerText = '';
        }

    }
    return { getBoard, updateBoard, resetBoard };
})();

function resetGame() {
    gameBoard.resetBoard();
}