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
}
