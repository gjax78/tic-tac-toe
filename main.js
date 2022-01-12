//have a few global variables that will be updated
//global var game = new instance of Game class
//global game that you can continually update

/* ########## QUERYSELECTORS ########## */
// var box = document.querySelector('.box')
var gameBoard = document.querySelector('.game-board')

/* ########## EVENT LISTENERS ########## */
gameBoard.addEventListener('click', whichSquare)

/* ########## FUNCTIONS ########## */
function whichSquare(e) {
  if (e.target.id == 'box-1') {
    console.log("hello")
  }
  if (e.target.id == 'box-2') {
    console.log("goodbye")
  }
  if (e.target.id == 'box-3') {
    console.log("banana")
  }
}
