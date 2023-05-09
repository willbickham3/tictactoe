const gameBoard = (() => {
    const board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
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
            const Player = 'X';
            gameBoard.updateBoard(i, Player);
            square.innerText = Player;
        })
        document.body.appendChild(square);
    }
})();
console.log(gameBoard.board.length)