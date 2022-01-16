//have a few global variables that will be updated
//global var game = new instance of Game class
//global game that you can continually update
var game = new Game('one', '✕', 'two', '❍')

/* ########## QUERYSELECTORS ########## */
var gameBoard = document.querySelector('.game-board')
// var box = document.querySelector('.box')
var allBoxes = document.querySelectorAll('.box')
var gameStatus = document.querySelector('.main-section-game-status')

/* ########## EVENT LISTENERS ########## */
gameBoard.addEventListener('click', whichSquare)

/* ########## FUNCTIONS ########## */
function whichSquare(e) {
  if (e.target.classList.contains('box') && e.target.innerHTML === '') {
    clickBox(event.target, event.target.id)
  }
}

function clickBox(boxes, box) {
  if (game.whoseTurn === 1) {
    player1Turn(boxes, box)
    game.changeTurns()
  } else if (game.whoseTurn === 2) {
    player2Turn(boxes, box)
    game.changeTurns()
  }
  displayWinner()
  setTimeout('endGame()', 5000)
}

function player1Turn(boxes, box) {
  boxes.innerHTML = `${game.player1.token}`
  gameStatus.innerHTML = `PLAYER ${game.player2.token}'S TURN`
  game.playerBoxesClicked(game.player1, box)
}

function player2Turn(boxes, box) {
  boxes.innerHTML = `${game.player2.token}`
  gameStatus.innerHTML = `PLAYER ${game.player1.token}'S TURN`
  game.playerBoxesClicked(game.player2, box)
}

function displayWinner(player) {
  if (game.win) {
    gameStatus.innerHTML = `PLAYER ${game.whoWon[0].token} WINS!`
  } else if (game.tie) {
    gameStatus.innerHTML = 'GAME IS A TIE!'
  }
}

function endGame() {
  if (game.gameBoardData.length === 9 || game.win) {
    // winner.innerHTML = ''
    gameStatus.innerHTML = ''
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ''
    }
    game.clearArrays()
  }
}
