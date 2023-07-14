// gameBoard handles initializing the board as well as setting up 

const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];

    const getBoard = () => {
        return board
    }

    const updateBoard = (index, value) => {
        board[index] = value;
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

// Board Creation

const initializeBoard = (() => {
    let board = gameBoard.getBoard()
    for (let i = 0; i < board.length; i++) {
        const square = document.createElement("button");
        square.classList.add('square');
        square.innerText = board[i];
        let gameContainer = document.querySelector('.gameContainer');
        gameContainer.appendChild(square);
    }
})();

// Win Conditions

const checkForWin = (board) => {
    const winConditions = [
        // Row
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Column
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal
        [0, 4, 8],
        [2, 4, 6]
    ];

        for (let condition of winConditions) {
            let [index1, index2, index3] = condition;
            let value1 = board[index1];
            let value2 = board[index2];
            let value3 = board[index3];
        
        if (value1 == value2 && value1 == value3 && value1 !== '') {
            return true
        }
    }   
            return false
};

// chooseYourCharacter - Allows for user to select a symbol (X or O) to play tic tac toe; handles symbol button enable/disable; handles click events for the squares so that the squares are filled with either X or O

const chooseYourCharacter = (() => {
    let board = gameBoard.getBoard();
    let playerSelection;
    let computerSelection;

    const getSelections = () => {
        return { playerSelection, computerSelection };
    }

    const resetSelections = () => {
        playerSelection = undefined;
        computerSelection = undefined;
    }

    function disableBtns() {
        const Btns = document.querySelectorAll('.selection');
        Btns.forEach((btn) => {
            btn.disabled = true;
        })
    }

    function enableBtns() {
        const Btns = document.querySelectorAll('.selection');
        Btns.forEach((btn) => {
            btn.disabled = false;
        })
    }

    const selectionBtns = document.querySelectorAll('.selection');
    selectionBtns.forEach((selectionBtn) => {
        selectionBtn.addEventListener('click', () => {
            if (selectionBtn.id === 'X') {
                playerSelection = 'X'
                computerSelection = 'O';
                console.log(playerSelection)
            }
            else {
                playerSelection = 'O'
                computerSelection = 'X';
                computerPlayer(computerSelection);
                console.log(playerSelection)
            }
            disableBtns();
        })
    })

    const computerPlayer = (computerSelection) => {
        let randomIndex;
        const emptyStringAvailable = board.some((cell) => cell === '');

        if(!emptyStringAvailable) {
            return
        }

        do {
            randomIndex = Math.floor(Math.random() * squares.length)
        } while ( board[randomIndex] !=='' );
        gameBoard.updateBoard(randomIndex, computerSelection)
        squares[randomIndex].innerText = computerSelection;
        return
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach((square, index) => {
        square.addEventListener('click', () => {
            if (playerSelection === undefined ) 
                { alert('Please Select X or O --(ツ)--') }
            else if (square.innerText !== '')
                { alert('Someone (or something!!) is already there!') }
            else
                {
                    if (playerSelection == 'X') {
                        square.innerText = playerSelection;
                        gameBoard.updateBoard(index, playerSelection);
                        if (checkForWin(board)) {
                            setTimeout(function(){ alert(`${computerSelection} has won!`);
                            gameBoard.resetBoard()},
                             10);
                        }
                        else {
                            //playerSelection = 'O';
                            computerPlayer(computerSelection);
                            if (checkForWin(board)) {
                                setTimeout(function(){ alert(`${computerSelection} has won!`);
                                gameBoard.resetBoard()},
                                 10);
                            }
                            else {
                                //playerSelection = 'O';
                                return
                            }
                        }
                    }
                    else {
                        square.innerText = playerSelection;
                        gameBoard.updateBoard(index, playerSelection)
                        if (checkForWin(board)) {
                            setTimeout(function(){ alert(`${computerSelection} has won!`);
                            gameBoard.resetBoard()},
                             10);
                            computerPlayer(computerSelection)
                        }
                        else {
                            computerPlayer(computerSelection);
                            if (checkForWin(board)) {
                                setTimeout(function(){ alert(`${computerSelection} has won!`);
                                gameBoard.resetBoard()},
                                 10);
                               computerPlayer(computerSelection);
                            }
                            else {
                                //playerSelection = 'X';
                                return
                            }
                        }
                    }
                }
                // if (checkForWin(board)) {
                //     console.log('Winner!')
                // }
                // else {
                //     return
                // }
        })
    })

    return { getSelections, enableBtns, resetSelections, playerSelection, computerSelection }
    })();

    // Functionality for Reset Button

    function resetGame() {
        gameBoard.resetBoard()
        chooseYourCharacter.enableBtns();
        chooseYourCharacter.resetSelections();
    }