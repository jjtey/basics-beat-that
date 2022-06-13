var noOfPlayers = "";
var noOfDice = "";
var gameInstructions = "";
const playerRolls = [];
playerRolls[player] = [];
var player = "";
var roll = "";
var myOutputValue = "";
var modeChosen = "";
var winningCriteria = "";
var playerScore = "";

var main = function (input) {
  if (!noOfPlayers) {
    if (Number.isInteger(Number(input)) && Math.round(input) >= 2) {
      noOfPlayers = input;
      return `Number of Players: ${noOfPlayers}.<br><br><b> Please input the number of Dices to roll (at least 2!).<b>`;
    }
    return `Please input a number 2 and above!`;
  }
  if (!noOfDice) {
    if (Number.isInteger(Number(input)) && Math.round(input) >= 2) {
      noOfDice = input;
      return `Number of Players: ${noOfPlayers}.<br>Number of Dices: ${noOfDice}. <br><br><b> Press "Submit" to roll your dice!`;
    }
    return `Please input a number 2 and above!`;
  }
  if (myOutputValue.length == 0) {
    collateRolls(noOfPlayers, noOfDice);
    return (
      myOutputValue +
      `<br>Please type <b>highest</b> or <b>lowest</b>, your rolls will then be arranged to form the highest/lowest possible number!`
    );
  }
  if (modeChosen == 0) {
    chooseMode(input);
    return modeChosen + `<br><br><b>Press "Submit" to find out who won!</b> `;
  }
  if (playerScore == 0) {
    genHighestNumber(noOfPlayers, noOfDice);
    return playerScore;
  }
};

function rollDice() {
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  return diceRoll;
}

function collateRolls(noOfPlayers, noOfDice) {
  for (player = 1; player <= noOfPlayers; player += 1) {
    playerRolls[player] = [];
    for (roll = 0; roll < noOfDice; roll++) {
      playerRolls[player][roll] = rollDice();
    }
    myOutputValue += `Player ${player}, your Rolls were ${playerRolls[player]}<br>`;
  }
}

function chooseMode(input) {
  if (input == "highest") {
    winningCriteria = "highest";
    modeChosen =
      "Program will now arrange your rolls/digits into the <b>HIGHEST</b> possible number.";
  } else if (input == "lowest") {
    winningCriteria = "lowest";
    modeChosen =
      "Program will now arrange your rolls/digits into the <b>LOWEST</b> possible number.";
  } else {
    modeChosen =
      "Please type <b>highest</b> or <b>lowest</b>, your rolls will then be arranged to form the highest/lowest possible number!";
  }
}

function genHighestNumber(noOfPlayers, noOfDice) {
  for (player = 1; player <= noOfPlayers; player += 1) {
    playerRolls[player].sort();
    console.log(playerRolls[player]);
    var sortedRolls = "";
    for (roll = 0; roll < noOfDice; roll += 1) {
      sortedRolls =
        Number(sortedRolls) + Number(playerRolls[player][roll] * 10 ** roll);
      console.log(playerRolls[1][0] * 10 ** [0]);
      console.log(playerRolls[1][1] * 10 ** [1]);
      console.log(playerRolls[1][2] * 10 ** [2]);
    }
    playerScore += `Player ${player}, the ${winningCriteria} number from your Rolls is: ${sortedRolls}! <br>`;
  }
}

console.log(main(2));
console.log(main(2));
console.log(main());
console.log(main("highest"));
console.log(main());
