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

// chooseYourCharacter

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
                computerSelection = '0';
                console.log(playerSelection)
            }
            else {
                playerSelection = 'O'
                computerSelection = 'X';
                console.log(playerSelection)
            }
            //disableBtns();
        })
    })

    const squares = document.querySelectorAll('.square');
    squares.forEach((square, index) => {
        square.addEventListener('click', () => {
            if (playerSelection === undefined ) 
                { alert('Please Select X or O --(ツ)--') }
            else if (square.innerText !== '')
                { return }
            else 
                {
                square.innerText = playerSelection;
                board[index] = playerSelection;
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