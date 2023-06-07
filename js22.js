let input = document.getElementById("numberInput");
let numberBox = document.getElementById("numberBox");
let resultArea = document.getElementById("resultArea");
let countArea = document.getElementById("countArea");
let highScoreArea = document.getElementById("highScoreArea");
let hiddenImage = document.getElementById("hiddenImage");

let count = 100;
let highScore = 0;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateNumberBox() {
  var randomNumber = getRandomNumber(1, 100);
  numberBox.textContent = randomNumber;
}

function updateCountArea() {
  countArea.textContent = "Count: " + count;
}

function updateHighScoreArea() {
  highScoreArea.textContent = "High Score: " + highScore;
}

updateNumberBox();
updateCountArea();
updateHighScoreArea();

function checkGuess() {
  var guess = parseInt(input.value);
  var randomNumber = parseInt(numberBox.textContent);

  if (guess === randomNumber) {
    resultArea.innerHTML = "Your guess is right!";
    if (count > highScore) {
      highScore = count;
      updateHighScoreArea();
    }
    hiddenImage.style.display = "none";
  } else if (guess > randomNumber) {
    resultArea.innerHTML = "You are higher";
  } else {
    resultArea.innerHTML = "You are lower";
  }

  count--;
  updateCountArea();
}

function play() {
  count = 100;
  updateCountArea();
  updateNumberBox();
  resultArea.innerHTML = "";
  hiddenImage.style.display = "inline";
}