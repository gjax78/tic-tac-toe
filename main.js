var game = new Game('one', '✕', 'two', '❍')

/* ########## QUERYSELECTORS ########## */
var gameBoard = document.querySelector('.game-board')
var allBoxes = document.querySelectorAll('.box')
var gameStatus = document.querySelector('.main-section-game-status')
var tallyPlayerOne = document.querySelector('.tally-player-one')
var tallyPlayerTwo = document.querySelector('.tally-player-two')

/* ########## EVENT LISTENERS ########## */
gameBoard.addEventListener('click', whichSquare)

/* ########## FUNCTIONS ########## */
function whichSquare(event) {
  if (event.target.classList.contains('box') && event.target.innerHTML === '') {
    clickBox(event.target, event.target.id)
  }
}

let clickBox = (boxes, box) => {
  if (game.whoseTurn === 1) {
    player1Turn(boxes, box)
    game.changeTurns()
  } else if (game.whoseTurn === 2) {
    player2Turn(boxes, box)
    game.changeTurns()
  }
  displayGameStatus()
  setTimeout('endGame()', 5000)
}

let player1Turn = (boxes, box) => {
  boxes.innerHTML = `${game.player1.token}`
  gameStatus.innerHTML = `PLAYER ${game.player2.token}'S TURN`
  game.playerBoxesClicked(game.player1, box)
}

let player2Turn = (boxes, box) => {
  boxes.innerHTML = `${game.player2.token}`
  gameStatus.innerHTML = `PLAYER ${game.player1.token}'S TURN`
  game.playerBoxesClicked(game.player2, box)
}

let displayGameStatus = () => {
  if (game.win) {
    gameStatus.innerHTML = `PLAYER ${game.whoWon[0].token} WINS!`
    gameBoard.removeEventListener('click', whichSquare)
  } else if (game.tie) {
    gameStatus.innerHTML = 'GAME IS A TIE!'
  }
}

let updatePlayerWins = () => {
  tallyPlayerOne.innerText = `${game.player1.wins}`
  tallyPlayerTwo.innerText = `${game.player2.wins}`
}

let endGame = () => {
  if (game.gameBoardData.length === 9 || game.win) {
    gameStatus.innerHTML = ''
    allBoxes.forEach(box => {
      box.innerHTML = ''
    })
    updatePlayerWins()
    game.updateGameDataAfterReset()
    gameBoard.addEventListener('click', whichSquare)
  }
}
