class Game {
  constructor(id1, token1, id2, token2) {
    this.player1 = new Player(id1, token1);
    this.player2 = new Player(id2, token2);
    this.gameBoardData = []; //(which boxes each player clicked combined)
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
  }

checkRows(player) {
    if (player.boxesClicked.includes('box-1') && player.boxesClicked.includes('box-2') && player.boxesClicked.includes('box-3')) {
      this.win = true
      this.whoWon.push(player)
    } else if (player.boxesClicked.includes('box-4') && player.boxesClicked.includes('box-5') && player.boxesClicked.includes('box-6')) {
      this.win = true
      this.whoWon.push(player)
    } else if (player.boxesClicked.includes('box-7') && player.boxesClicked.includes('box-8') && player.boxesClicked.includes('box-9')) {
      this.win = true
      this.whoWon.push(player)
    }
  }

  checkColumns(player) {
    if (player.boxesClicked.includes('box-1') && player.boxesClicked.includes('box-4') && player.boxesClicked.includes('box-7')) {
      this.win = true
      this.whoWon.push(player)
    } else if (player.boxesClicked.includes('box-2') && player.boxesClicked.includes('box-5') && player.boxesClicked.includes('box-8')) {
      this.win = true
      this.whoWon.push(player)
    } else if (player.boxesClicked.includes('box-3') && player.boxesClicked.includes('box-6') && player.boxesClicked.includes('box-9')) {
      this.win = true
      this.whoWon.push(player)
    }
  }

  checkDiagonals(player) {
    if (player.boxesClicked.includes('box-1') && player.boxesClicked.includes('box-5') && player.boxesClicked.includes('box-9')) {
      this.win = true
      this.whoWon.push(player)
    } else if (player.boxesClicked.includes('box-3') && player.boxesClicked.includes('box-5') && player.boxesClicked.includes('box-7')) {
      this.win = true
      this.whoWon.push(player)
    }
  }
