const gameBoard = (() => {
    const board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
    return {board};
})();

const populateBoard = (() => {
    for (let i = 0; i < gameBoard.board.length; i++) {
        const square = document.createElement("button");
        square.classList.add('square');
        square.innerText += gameBoard.board[i];
        document.body.appendChild(square);
    }
})();
console.log(gameBoard.board.length)