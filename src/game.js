function Game(players) {
  this.players = players;
  this.gameStatus = false;
};

Game.prototype.wonPoint = function(player) {

  var p1,
    p2;

  this.players.map(p => {
    if (p === player) {
      p1 = p;
    } else {
      p2 = p;
    }
  });

  if (p1.pointsWon == 40 && p2.pointsWon != 40) {
    player.gamesWon = player.gamesWon + 1;
    console.log('game won by player', player.name);
    console.log(`Set Score is ${p1.name}- ${p1.gamesWon} ${p2.name}- ${p2.gamesWon}`);
    this.gameStatus = true;
  } else {
    //Deuce Condition
    if (p1.pointsWon == 40 && p2.pointsWon == 40) {
      //check for advantage

      if (!p1.advantage && !p2.advantage) {
        console.log(player.name, 'got advantage');
        player.advantage = true;
        p2.advantage = false;
      } else if (!p1.advantage && p2.advantage) {
        console.log('deuce again');
        p2.advantage = false;
      } else if (p1.advantage && !p2.advantage) {
        player.gamesWon = player.gamesWon + 1;
        console.log('game won by player', player.name);
        console.log(`Set Score is ${p1.name}- ${p1.gamesWon} ${p2.name}- ${p2.gamesWon}`);
        this.gameStatus = true;
        //reset the game and start next game
      }

    } else {
      if (player.pointsWon == 0) {
        player.pointsWon = 15;
      } else if (player.pointsWon == 15) {
        player.pointsWon = 30;
      } else {
        player.pointsWon = 40;
      }
      console.log(p1.name, ' ', p1.pointsWon, ' ', p2.name, ' ', p2.pointsWon);
      if (p1.pointsWon == 40 && p2.pointsWon == 40) {
        console.log('deuce');
      }
    }
  }



}

module.exports = {
  Game
}
