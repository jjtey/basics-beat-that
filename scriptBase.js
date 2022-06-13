var noOfPlayers = "";
var noOfDice = "";
var gameInstructions = "";
const playerRolls = [];
var player = "";
var roll = "";
var userChoice = "";

var main = function (input) {
  if (!noOfPlayers) {
    if (Number.isInteger(Number(input)) && Math.round(input) >= 2) {
      noOfPlayers = input;
      return `Number of Players: ${noOfPlayers}.<br> Please input the number of Dices to roll (at least 2!).`;
    }
    return `Please input a number 2 and above!`;
  }
  if (!noOfDice) {
    if (Number.isInteger(Number(input)) && Math.round(input) >= 2) {
      noOfDice = input;
      return `Number of Players: ${noOfPlayers}.<br>Number of Dices: ${noOfDice}. <br><br><b> Player 1, press "Submit" to roll your dice!`;
    }
    return `Please input a number 2 and above!`;
  }
  collateRolls(noOfPlayers, noOfDice);
  for (player = 0; player < noOfPlayers; player += 1) {
    if (userChoice == "") {
      if (playerRolls[player].length == noOfDice) {
        // this will be the first sorting
        userChoice = 1;
        return `Player ${player + 1}, your Rolls were ${
          playerRolls[player]
        }.<br> Please input above, your desired digit in the <b> "ones" place <b>.`;
      }
    }
    userChoice = input; //need to lock in elements in array (currently contains a random num generator)
    if (playerRolls[player].includes(userChoice)) {
      playerRolls[player].splice(indexOf(userChoice), 1);
      userChoice = "";
      return `Player ${player + 1}, your remaining Rolls are ${
        playerRolls[player]
      }. <br><br> Please input above, your desired digit in the next place.`;
    } else {
      return `Please select a digit from your Rolls, ie. ${playerRolls[player]}`;
    }
  }
};
function rollDice() {
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  return diceRoll;
}

function collateRolls(noOfPlayers, noOfDice) {
  for (player = 0; player < noOfPlayers; player++) {
    playerRolls.push([]);
    for (roll = 0; roll < noOfDice; roll++) {
      playerRolls[player][roll] = rollDice();
    }
  }
}

// function sortDigits(playerRolls, player) {
//   for (player = 0; player < noOfPlayers; player += 1) {
//     if (playerRolls[player].length == noOfDice) {
//       // this will be the first sorting
//       return `Player ${player + 1}, your Rolls were ${
//         playerRolls[player]
//       }.<br> Please input above, your desired digit in the <b> "ones" place <b>.`;
//     }
//     var userChoice = input;
//     if (playerRolls[player].includes(userChoice)) {
//       playerRolls[player].splice(indexOf(userChoice), 1);
//       userChoice = "";
//       return `Player ${player + 1}, your remaining Rolls are ${
//         playerRolls[player]
//       }. <br><br> Please input above, your desired digit in the next place.`;
//     } else {
//       return `Please select a digit from your Rolls, ie. ${playerRolls[player]}`;
//     }
//   }
// }
