function Player(name) {
  this.name = name;
  this.pointsWon = 0;
  this.gamesWon = 0;
  this.advantage = false;
}

Player.prototype.setPointsWon = function(points) {
  this.pointsWon = points;
}

Player.prototype.getPointsWon = function() {
  return this.pointsWon;
}

Player.prototype.getAdvantage = function() {
  return this.advantage;
}
module.exports = {
  Player
}
