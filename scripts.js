const Player = (symbol, name) => {
  const playerWin = (board) => {
    // let symbol = currentPlayer.symbol;
    let playerWin = null;
    if (board[0] == symbol && board[1] == symbol && board[2] == symbol) {
      playerWin = true;
    } else if (board[3] == symbol && board[4] == symbol && board[5] == symbol) {
      playerWin = true;
    } else if (board[6] == symbol && board[7] == symbol && board[8] == symbol) {
      playerWin = true;
    } else if (board[0] == symbol && board[4] == symbol && board[8] == symbol) {
      playerWin = true;
    } else if (board[2] == symbol && board[4] == symbol && board[6] == symbol) {
      playerWin = true;
    } else if (board[0] == symbol && board[3] == symbol && board[6] == symbol) {
      playerWin = true;
    } else if (board[1] == symbol && board[4] == symbol && board[7] == symbol) {
      playerWin = true;
    } else if (board[2] == symbol && board[5] == symbol && board[8] == symbol) {
      playerWin = true;
    }
    return playerWin;
  };
  return { symbol, playerWin, name };
};

const gameBoard = (() => {
  var board = ["", "", "", "", "", "", "", "", ""];
  let playerX = Player("X", "Jarryd");
  let playerO = Player("O", "Ethan");
  let currentPlayer = playerX;

  const clearBoard = () => (board = ["", "", "", "", "", "", "", "", ""]);

  const updateBoard = (index) => {
    if (board[index - 1] == "") {
      board[index - 1] = currentPlayer.symbol;
      displayController.updateBoardElement(index, currentPlayer);
      if (currentPlayer.playerWin(board)) {
        displayController.announceWinner(currentPlayer.name);
        displayController.clearBoard();
      } else if (currentPlayer == playerX) {
        currentPlayer = playerO;
      } else {
        currentPlayer = playerX;
      }
    }
  };
  return {
    clearBoard,
    updateBoard,
  };
})();

const displayController = (() => {
  // Add event listeners
  for (let index = 1; index < 10; index++) {
    boardElement = document.getElementById(index.toString());
    boardElement.addEventListener("click", function (event) {
      let index = this.id;
      gameBoard.updateBoard(index);
      event.target.setAttribute("class", "board-element-click");
    });
  }
  const activateBoard = () => {
    for (let index = 1; index < 10; index++) {
      boardElement = document.getElementById(index.toString());
      boardElement.addEventListener("click", function (event) {
        let index = this.id;
        gameBoard.updateBoard(index);
      });
    }
  };
  const updateBoardElement = (index, currentPlayer) =>
    (document.getElementById(index.toString()).innerText =
      currentPlayer.symbol);

  const clearBoard = () => {
    for (let index = 1; index < 10; index++) {
      document.getElementById(index.toString()).innerText = "";
      gameBoard.clearBoard();
    }
  };
  const announceWinner = (currentPlayer) => {
    document.getElementById("winner-text").innerText =
      "The winner is " + currentPlayer;
  };

  return {
    announceWinner,
    clearBoard,
    activateBoard,
    updateBoardElement,
  };
})();
