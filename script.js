var noOfPlayers = "";
var noOfDices = "";
var gameInstructions = "";
var playerRolls = [];

var main = function (input) {
  if (!noOfPlayers) {
    if (Number.isInteger(Number(input)) && Math.round(input) >= 2) {
      noOfPlayers = input;
      return `Number of Players: ${noOfPlayers}.<br> Please input the number of Dices to roll (at least 2!).`;
    }
    return `Please input a number 2 and above!`;
  }
  if (!noOfDices) {
    if (Number.isInteger(Number(input)) && Math.round(input) >= 2) {
      noOfDices = input;
      return `Number of Players: ${noOfPlayers}.<br>Number of Dices: ${noOfDices}.`;
    }
    return `Please input a number 2 and above!`;
  }
  collateRolls(noOfPlayers, noOfDices);
};

function rollDice() {
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  return diceRoll;
}

function collateRolls(noOfPlayers, noOfDices) {
  for (var player = 0; player < noOfPlayers; player++) {
    playerRolls.push([]);
    for (var roll = 0; roll < noOfDices; roll++) {
      playerRolls[player][roll] = rollDice();
    }
  }
}

console.log(main(3));
console.log(main(3));
console.log(main());
console.log(playerRolls[0][0]);
console.log(playerRolls[0][1]);
console.log(playerRolls[1][0]);
console.log(playerRolls[1][1]);
