var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var players = require('../src/player');
var matches = require('../src/match');
//mock user data

//check for function, verify all scenario expected result

// Verify the Player Object
describe('PointsWon', function() {
  it('get points won should be equal to set', function() {
    var testUser = new players.Player('Test');
    testUser.setPointsWon(15);
    expect(testUser.getPointsWon()).to.equal(15);
  });
});


//Initiate the match, and verify the point scored by players are as expected

describe('CurrentSetScore', function() {
  it('score of each player', function() {
    var testUser1 = new players.Player('testUser1');
    var testUser2 = new players.Player('testUser2');
    var match = new matches.Match([testUser1, testUser2]);
    match.start();
    match.getCurrentSet().wonPoint(testUser1);
    expect(testUser1.getPointsWon()).to.equal(15);
    expect(testUser2.getPointsWon()).to.equal(0);
  });
});





//Deuce-Advantage Condition
describe('Verify Advantage', function() {
  it('Player 1 Advantage ', function() {
    var testUser1 = new players.Player('testUser1');
    var testUser2 = new players.Player('testUser2');
    var match = new matches.Match([testUser1, testUser2]);
    match.start();
    testUser1.setPointsWon(40);
    testUser2.setPointsWon(40);
    match.getCurrentSet().wonPoint(testUser1);
    expect(testUser1.getAdvantage()).to.equal(true);
  });
});

//Deuce-Player 2 makes deuce again
describe('Deuce Again', function() {
  it('deuce again condition, player 1 advantage nullify', function() {
    var testUser1 = new players.Player('testUser1');
    var testUser2 = new players.Player('testUser2');
    var match = new matches.Match([testUser1, testUser2]);
    match.start();
    testUser1.setPointsWon(40);
    testUser1.advantage=true;
    testUser2.setPointsWon(40);
    match.getCurrentSet().wonPoint(testUser2);
    expect(testUser1.getAdvantage()).to.equal(false);
  });
});

//Check the Game Won
describe('Game won', function() {
  it('player 1 won the game', function() {
    var testUser1 = new players.Player('testUser1');
    var testUser2 = new players.Player('testUser2');
    var match = new matches.Match([testUser1, testUser2]);
    match.start();
    testUser1.setPointsWon(40);
    testUser1.advantage=true;
    testUser2.setPointsWon(40);
    match.getCurrentSet().wonPoint(testUser1);
    expect(testUser1.gamesWon).to.equal(1);
  });
});


//Check the Set Points
describe('Set Point', function() {
  it('Check if Set is over', function() {
    var testUser1 = new players.Player('testUser1');
    var testUser2 = new players.Player('testUser2');
    var match = new matches.Match([testUser1, testUser2]);
    match.start();
    testUser1.gamesWon=4;
    testUser2.gamesWon=5;
    testUser2.setPointsWon(40);
    match.getCurrentSet().wonPoint(testUser1);
    expect(match.isSetOver()).to.equal(false);
  });
});
