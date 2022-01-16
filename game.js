class Game {
  constructor(id1, token1, id2, token2) {
    this.player1 = new Player(id1, token1);
    this.player2 = new Player(id2, token2);
    this.gameBoardData = [];
    this.whoseTurn = 1;
    this.win = false;
    this.whoWon = [];
    this.tie = false;
  }

  changeTurns() {
    if (this.whoseTurn === 1) {
      this.whoseTurn = 2
    } else {
      this.whoseTurn = 1
    }
  }

  playerBoxesClicked(player, boxClicked) {
    player.boxesClicked.push(boxClicked)
    this.gameBoardData.push(boxClicked)
    this.checkPlayerData(player)
    this.changeTurns()
  }

  checkPlayerData(player) {
    if (this.gameBoardData.length >= 5) {
     this.checkGameWinner(player)
   } else {
     this.changeTurns()
   }
  }

checkRows(player) {
    if (player.boxesClicked.includes('box-1') && player.boxesClicked.includes('box-2') && player.boxesClicked.includes('box-3')) {
      return true
    } else if (player.boxesClicked.includes('box-4') && player.boxesClicked.includes('box-5') && player.boxesClicked.includes('box-6')) {
      return true
    } else if (player.boxesClicked.includes('box-7') && player.boxesClicked.includes('box-8') && player.boxesClicked.includes('box-9')) {
      return true
    }
  }

  checkColumns(player) {
    if (player.boxesClicked.includes('box-1') && player.boxesClicked.includes('box-4') && player.boxesClicked.includes('box-7')) {
      return true
    } else if (player.boxesClicked.includes('box-2') && player.boxesClicked.includes('box-5') && player.boxesClicked.includes('box-8')) {
      return true
    } else if (player.boxesClicked.includes('box-3') && player.boxesClicked.includes('box-6') && player.boxesClicked.includes('box-9')) {
      return true
    }
  }

  checkDiagonals(player) {
    if (player.boxesClicked.includes('box-1') && player.boxesClicked.includes('box-5') && player.boxesClicked.includes('box-9')) {
      return true
    } else if (player.boxesClicked.includes('box-3') && player.boxesClicked.includes('box-5') && player.boxesClicked.includes('box-7')) {
      return true
    }
  }

  checkGameWinner(player) {
    if (this.checkRows(player) || this.checkColumns(player) || this.checkDiagonals(player)) {
      this.updateWin(player)
    } else if ((this.gameBoardData.length === 9) && (this.win === false)) {
      this.tie = true
    } else {
      this.changeTurns()
    }
  }

  updateWin(player) {
    this.win = true
    this.whoWon.push(player)
    player.isWinner = true
    player.wins++
    this.changeTurns()
  }

  clearArrays() {
   this.player2.boxesClicked = []
   this.player1.boxesClicked = []
   this.gameBoardData = []
   this.whoWon = []
   this.win = false
   this.tie = false
 }
}
