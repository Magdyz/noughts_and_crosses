let currentPlayer = "X";
let count = 0;
let allowCellClick = true;

const playersTurn = document.getElementById("player-turn");

const winningConditionsMet = (sign, playersTurnElement, playerNumber) => {
  const cell1 = document.getElementById("cell1").innerText;
  const cell2 = document.getElementById("cell2").innerText;
  const cell3 = document.getElementById("cell3").innerText;
  const cell4 = document.getElementById("cell4").innerText;
  const cell5 = document.getElementById("cell5").innerText;
  const cell6 = document.getElementById("cell6").innerText;
  const cell7 = document.getElementById("cell7").innerText;
  const cell8 = document.getElementById("cell8").innerText;
  const cell9 = document.getElementById("cell9").innerText;
  if (
    (cell1 === sign && cell2 === sign && cell3 === sign) ||
    (cell1 === sign && cell4 === sign && cell7 === sign) ||
    (cell1 === sign && cell5 === sign && cell9 === sign) ||
    (cell2 === sign && cell5 === sign && cell8 === sign) ||
    (cell3 === sign && cell6 === sign && cell9 === sign) ||
    (cell3 === sign && cell5 === sign && cell7 === sign) ||
    (cell4 === sign && cell5 === sign && cell6 === sign) ||
    (cell7 === sign && cell8 === sign && cell9 === sign)
  ) {
    winningColors();
    playersTurnElement.innerText = `PLAYER ${playerNumber} WINS!`;
    allowCellClick = false;
    setTimeout(resetCells, 2000);
  }
};

const draw = (playsArr, playersTurnElement) => {
  if (playsArr.length === 9) {
    TieColors();
    playersTurnElement.innerText = `DRAW!`;
    allowCellClick = false;
    setTimeout(resetCells, 2000);
  }
};
  let plays = [];

const startGame = () => {

  for (let i = 1; i <= 9; i++) {
    let cell = document.getElementById("cell" + i);
    cell.addEventListener("click", () => {
      // Exit function if cell clicking not allowed
      if (!allowCellClick) {
        return;
      }
      if (count === 0 && cell.innerText === "") {
        cell.innerText = "X";
        count += 1;
        playersTurn.innerText = "Player 2, it's your turn!";
        plays.push(i);
        draw(plays, playersTurn);
        winningConditionsMet("X", playersTurn, 1);
      } else if (count === 1 && cell.innerText === "") {
        cell.innerText = "O";
        count -= 1;
        playersTurn.innerText = "Player 1, it's your turn!";
        plays.push(i);
        draw(plays, playersTurn);
        winningConditionsMet("O", playersTurn, 2);
      }
    });
  }
};

const resetCells = () => {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("cell" + i).innerText = "";
  }
  playersTurn.innerText = "Player 1, you're playing as crosses!";
  for (let i = 1; i <= 9; i++) {
    document.getElementById("cell" + i).style.backgroundColor = "#94d2bd";
  }
  plays = [];
  allowCellClick = true;
};

const winningColors = () => {
  resetCells();
  for (let i = 1; i <= 9; i++) {
    document.getElementById("cell" + i).style.backgroundColor = "#f7c02a";
  }
  document.getElementById("cell4").innerText = "W";
  document.getElementById("cell5").innerText = "I";
  document.getElementById("cell6").innerText = "N";
};

const TieColors = () => {
  resetCells();
  for (let i = 1; i <= 9; i++) {
    document.getElementById("cell" + i).style.backgroundColor = "#f7c02a";
  }
  document.getElementById("cell4").innerText = "T";
  document.getElementById("cell5").innerText = "I";
  document.getElementById("cell6").innerText = "E";
};


const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetCells);

startGame();
