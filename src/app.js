var players = require('./player');
var match = require('./match');

var Rahul = new players.Player('Rahul');
var Raj = new players.Player('Raj');

var match = new match.Match([Rahul, Raj]);
match.start();

console.log('***********************Game-1***********************************');

try {

  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Raj);



  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Raj);


  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Rahul);

  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Raj);


  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Raj);


  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Raj);


  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Rahul);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Raj);
  match.getCurrentSet().wonPoint(Raj);

} catch (error) {
  if (match.isSetOver) {
    console.log('Set over');
  } else {
    console.log(error);
  }
}
