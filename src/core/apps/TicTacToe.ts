import { AppHandler } from "../lib/AppHandler";
import "../scss/tictactoe.scss"

export class TicTacToe extends AppHandler {
    constructor() {
        super({ icon: "/img/icons/calculator.svg", name: "TicTacToe", handler: tictactoeHandle });
    }

    render() {
        return (
            ` <section>
            <h1 class="game--title">Tic Tac Toe</h1>
            <div class="game--container">
                <div data-cell-index="0" class="cell"></div>
                <div data-cell-index="1" class="cell"></div>
                <div data-cell-index="2" class="cell"></div>
                <div data-cell-index="3" class="cell"></div>
                <div data-cell-index="4" class="cell"></div>
                <div data-cell-index="5" class="cell"></div>
                <div data-cell-index="6" class="cell"></div>
                <div data-cell-index="7" class="cell"></div>
                <div data-cell-index="8" class="cell"></div>
            </div>
            <h2 class="game--status"></h2>
            <span class="scoreX">ScoreX: 0 </span> <br>
            <span class="scoreO">ScoreO: 0 </span> <br>
            <button class="game--reset">Reset Game</button>
            <button class="game--restart">Restart Game</button>
        </section>`
        )
    }
}
const tictactoeHandle = () => {
    console.log("Hello World");
    const statusDisplay: HTMLElement = document.querySelector('.game--status')!;

    let gameActive = true;
    let currentPlayer = "X";
    let gameState = ["", "", "", "", "", "", "", "", ""];

    const winningMessage = (): string => `Player ${currentPlayer} has won!`;
    const drawMessage = (): string => `Game ended in a draw!`;
    const currentPlayerTurn = (): string => `It's ${currentPlayer}'s turn`;

    const scoreX: HTMLElement = document.querySelector('.scoreX')!;
    const scoreO: HTMLElement = document.querySelector('.scoreO')!;

    statusDisplay.innerHTML = currentPlayerTurn();

    // check if there is a score in local storage
    if (localStorage.getItem('scoreX')) {
        scoreX.innerHTML = `Score X:${localStorage.getItem('scoreX')}`;
    }
    if (localStorage.getItem('scoreO')) {
        scoreO.innerHTML = `Score O:${localStorage.getItem('scoreO')}`;
    }

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleCellPlayed(clickedCell: HTMLElement, clickedCellIndex: number): void {
        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;
    }

    function handlePlayerChange(): void {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusDisplay.innerHTML = currentPlayerTurn();
    }

    function handleResultValidation(): void {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            let a = gameState[winCondition[0]];
            let b = gameState[winCondition[1]];
            let c = gameState[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            if (currentPlayer === "X") {
                scoreX.innerHTML = `Score X:${parseInt(scoreX.innerHTML.split(':')[1]) + 1}`;
                // add to local storage
                localStorage.setItem('scoreX', scoreX.innerHTML.split(':')[1]);
            } else {
                scoreO.innerHTML = `Score O:${parseInt(scoreO.innerHTML.split(':')[1]) + 1}`;
                // add to local storage
                localStorage.setItem('scoreO', scoreO.innerHTML.split(':')[1]);
            }
            statusDisplay.innerHTML = winningMessage();
            gameActive = false;
            return;
        }

        let roundDraw: boolean = !gameState.includes("");
        if (roundDraw) {
            statusDisplay.innerHTML = drawMessage();
            gameActive = false;
            return;
        }

        handlePlayerChange();
    }

    function handleCellClick(clickedCellEvent: Event): void {
        const clickedCell: HTMLElement = clickedCellEvent.target as HTMLElement;
        const clickedCellIndex: number = parseInt(clickedCell.getAttribute('data-cell-index')!);

        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }

        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    }

    function handleResetGame() {
        gameActive = true;
        currentPlayer = "X";
        gameState = ["", "", "", "", "", "", "", "", ""];
        statusDisplay.innerHTML = currentPlayerTurn();
        document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
        // reset scores and remove from local storage
        scoreX.innerHTML = `Score X:0`;
        localStorage.removeItem('scoreX');
        scoreO.innerHTML = `Score O:0`;
        localStorage.removeItem('scoreO');
    
    }

    function handleRestartGame(): void {
        gameActive = true;
        currentPlayer = "X";
        gameState = ["", "", "", "", "", "", "", "", ""];
        if(statusDisplay != null) {
            statusDisplay.innerHTML = currentPlayerTurn();
        }
        document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    }

    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
    document.querySelector('.game--restart')?.addEventListener('click', handleRestartGame);
    document.querySelector('.game--reset')?.addEventListener('click', handleResetGame);

}



