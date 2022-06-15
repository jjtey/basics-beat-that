var noOfPlayers = "";
var noOfDice = "";
var gameInstructions = "";
const playerRolls = [];
var myOutputValue = "";
var modeChosen = "";
var winningCriteria = "";
var playerScore = "";

var main = function (input) {
  if (!noOfPlayers) {
    //Request for number of players (>= 2)
    if (Number.isInteger(Number(input)) && Math.round(input) >= 2) {
      noOfPlayers = input;
      return `Number of Players: ${noOfPlayers}.<br><br><b> Please input the number of Dice Rolls (at least 2!).<b>`;
    }
    return `Please input a number 2 and above for the number of Players!`;
  }
  if (!noOfDice) {
    //Request for number of Dice Rolls (>=2)
    if (Number.isInteger(Number(input)) && Math.round(input) >= 2) {
      noOfDice = input;
      return `Number of Players: ${noOfPlayers}.<br>Number of Dice Rolls: ${noOfDice}. <br><br> Press <b>"Submit"</b> to roll your dice!`;
    }
    return `Please input a number 2 and above for the number of Dice Rolls!`;
  }
  if (myOutputValue.length == 0) {
    //Generate rolls and request for winning Criteria
    collateRolls(noOfPlayers, noOfDice);
    return (
      myOutputValue +
      `<br>Please type <b>highest</b> or <b>lowest</b>, your rolls will then be arranged to form the highest/lowest possible number!`
    );
  }
  if (!winningCriteria) {
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
    return modeChosen + `<br><br>Press <b>"Submit"</b> to find out who won! `;
  }
  if (!playerScore) {
    //sorts rolls into winning criteria and compares score
    genNumber(noOfPlayers, noOfDice, winningCriteria);
    return playerScore + `<br><br>Press <b>"Submit"</b> to restart game!`;
  }
  location.reload(); //refreshes pages on "submit"
};

function rollDice() {
  //rolls dice
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  return diceRoll;
}

function collateRolls(noOfPlayers, noOfDice) {
  //stores a 2D array with a sub-array of each player's rolls
  for (player = 1; player <= noOfPlayers; player += 1) {
    playerRolls[player] = [];
    for (roll = 0; roll < noOfDice; roll++) {
      playerRolls[player][roll] = rollDice();
    }
    myOutputValue += `Player ${player}, your Rolls were ${playerRolls[player]}<br>`;
  }
}

function genNumber(noOfPlayers, noOfDice, winningCriteria, arrayOfScores) {
  //generates a number based on winning criteria
  var arrayOfScores = [];
  for (player = 1; player <= noOfPlayers; player += 1) {
    playerRolls[player].sort(); //sorts ascending
    if (winningCriteria == "lowest") {
      playerRolls[player].reverse(); //sorts descending
    }
    console.log(playerRolls[player]);
    var sortedRolls = "";
    for (roll = 0; roll < noOfDice; roll += 1) {
      sortedRolls =
        Number(sortedRolls) + Number(playerRolls[player][roll] * 10 ** roll); //generates number by allocating digits into ones/tens/hundreds places etc.
    }
    playerScore += `Player ${player}, the ${winningCriteria} number from your Rolls is: ${sortedRolls}! <br>`;

    arrayOfScores.push(sortedRolls);
  }
  if (winningCriteria == "highest") {
    //find highest/lowest number in array of generated numbers and declares winner
    playerScore += `<br><br> The ${winningCriteria} number is ${Math.max(
      ...arrayOfScores
    )}! <br><b> Player ${
      1 + arrayOfScores.indexOf(Math.max(...arrayOfScores))
    } wins! </b>`;
  } else if (winningCriteria == "lowest") {
    console.log(Math.min(...arrayOfScores));
    playerScore += `<br><br> The ${winningCriteria} number is ${Math.min(
      ...arrayOfScores
    )}! <br><b> Player ${
      1 + arrayOfScores.indexOf(Math.min(...arrayOfScores))
    } wins! </b>`;
  }
}
