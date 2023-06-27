// gameBoard handles initializing the board as well as setting up 

const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < board.length; i++) {
        const square = document.createElement("button");
        square.classList.add('square');
        square.innerText = board[i];
        let gameContainer = document.querySelector('.gameContainer');
        gameContainer.appendChild(square);
    }

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
                        computerPlayer(computerSelection);
                    }
                    else {
                        square.innerText = playerSelection;
                        gameBoard.updateBoard(index, playerSelection)
                        computerPlayer(computerSelection);
                    }
                }
        })
    })

    return { getSelections, enableBtns, resetSelections, playerSelection, computerSelection }
    })();

    function resetGame() {
        gameBoard.resetBoard()
        chooseYourCharacter.enableBtns();
        chooseYourCharacter.resetSelections();
    }