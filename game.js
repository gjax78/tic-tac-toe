class Game {
  constructor(id1, token1, id2, token2) {
    this.player1 = new Player(id1, token1);
    this.player2 = new Player(id2, token2);
    this.whoseTurn = 1;
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
}
