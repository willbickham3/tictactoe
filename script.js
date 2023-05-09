const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    const updateBoard = (index, value) => {
        board[index] = value
    }
    return { board, updateBoard };
})();

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