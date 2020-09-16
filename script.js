// Variable to store the list of guesses
let guessHistory = [];
// Variable for store the correct random number
let correctNumber = getRandomNumber();

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
};

/**
 * Functionality for playing the whole game
 */
function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

function displayResult(numberGuess) {
  /**
   * Show the result for if the guess it too high, too low, or correct
   */
  console.log(correctNumber);
  if (numberGuess > correctNumber) {
    showNumberAbove();
    console.log("Guess is too high");
  } else if (numberGuess < correctNumber) {
    showNumberBelow();
    console.log("Guess is too low");
  } else {
    showYouWon();
    console.log("Guess is correct");
  }
}

/**
 * Initialize a new game by resetting all values and content on the page
 */
function initGame() {
  guessHistory = [];
  correctNumber = getRandomNumber();
  let list = "<ul class='list-group'>";
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
  resetResultContent();
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 */
function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

/**
 * Save guess history
 */
function saveGuessHistory(guess) {
  guessHistory.push(guess);
}

/**
 * Display guess history to user
 */
function displayHistory() {
  let index;
  let list = "<ul class='list-group'>";
  for (let i = 0; i < guessHistory.length; i++) {
    list += `<li class='list-group-item'>You guessed ${guessHistory[i]} </li>`;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

/**
 * Retrieve the dialog based on if the guess is wrong or correct
 */
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */

  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
