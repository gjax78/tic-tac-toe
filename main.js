//have a few global variables that will be updated
//global var game = new instance of Game class
//global game that you can continually update
var game = new Game('one', '✕', 'two', '✻')

/* ########## QUERYSELECTORS ########## */
var gameBoard = document.querySelector('.game-board')
var box = document.querySelector('.box')

/* ########## EVENT LISTENERS ########## */
gameBoard.addEventListener('click', whichSquare)

/* ########## FUNCTIONS ########## */
function whichSquare(e) {
  if (e.target.classList.contains('box')) {
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
}

function player1Turn(boxes, box) {
  boxes.innerHTML = `${game.player1.token}`;
  game.playerBoxesClicked(game.player1, box)
}

function player2Turn(boxes, box) {
  boxes.innerHTML = `${game.player2.token}`;
  game.playerBoxesClicked(game.player2, box)
}
