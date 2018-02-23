var game = require('./game');

function Match(players) {
  this.players = players;
  this.set = 1;
  this.currentGame = null;
  this.game = 1;
}

Match.prototype.start = function() {
  this.currentGame = new game.Game(this.players);
  return this.currentGame;
}

Match.prototype.getCurrentSet = function() {

  //check for the current set game and return
  //if set score is 6-2, then this set is over else whoever has 7
  if (this.isSetOver()) {
    return 'game is over';
  }
  if (this.currentGame.gameStatus) {
    this.resetScore();
    this.game = this.game + 1;
    console.log('\n***********************Game-', this.game, '***********************************');
    this.currentGame = new game.Game(this.players);
  }
  return this.currentGame;
}


Match.prototype.resetScore = function() {
  //reset the score to zero
  this.players.map(player => {
    player.pointsWon = 0;
    player.advantage = false;
  });
}

Match.prototype.isSetOver = function() {
  p1 = this.players[0].gamesWon;
  p2 = this.players[1].gamesWon;
  if (p1 >= 6 || p2 >= 6) {
    if (Math.abs(p1 - p2) > 2) {
      return true;
    } else if (p1 === 7 || p2 === 7) {
      return true;
    }
  } else {
    return false;
  }
}

module.exports = {
  Match
}
