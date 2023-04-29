const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    return {board};
})();

const populateBoard = (() => {
    for (let i = 0; i < gameBoard.board.length; i++) {
        const square = document.createElement("div");
        square.classList.add('square');
        document.body.appendChild(square)
    }
})();
console.log(gameBoard.board.length)