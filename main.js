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
    clickBox1(event.target)
  }
}

function clickBox1(box) {
  if (game.whoseTurn === 1) {
    player1Turn(box)
    game.changeTurns()
  } else if (game.whoseTurn === 2) {
    player2Turn(box)
    game.changeTurns()
  }
}

function player1Turn(box) {
    box.innerHTML = `${game.player1.token}`;
}

function player2Turn(box) {
    box.innerHTML = `${game.player2.token}`;
}
