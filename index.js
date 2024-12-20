var gamepattern = [];
var userInput = [];
var levelNumber = 0;
var started = false; // Track if the game has started

// Event listener for button clicks to handle user input
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (started) {
      ButtonClick(event);
    } else {
      start();
    }
  });
});

// Function to generate the next sequence
function nextSequence() {
  userInput = []; // Reset user input for the current round

  var buttonColours = ["red", "blue", "green", "yellow"];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColours[randomNumber];

  gamepattern.push(randomChosenColor);

  // Flash the chosen color
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

  // Update the level
  levelNumber++;
  document.querySelector("h1").textContent = "Level " + levelNumber;
}

// Handle button clicks
function ButtonClick(event) {
  var userChosenColor = event.target.id;
  userInput.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userInput.length - 1);
}

// Function to check the user's answer
function checkAnswer(currentLevel) {
  if (userInput[currentLevel] !== gamepattern[currentLevel]) {
    gameLost();
    return;
  }

  if (userInput.length === gamepattern.length) {
    setTimeout(nextSequence, 400);
  }
}

// Function to start the game
function start() {
  if (!started) {
    levelNumber = 0;
    gamepattern = [];
    started = true;
    document.querySelector("h1").textContent = "Level " + levelNumber;
    nextSequence();
  }
}

// Function to handle game over
function gameLost() {
  document.querySelector("h1").textContent =
    "GAME LOST — You reached Level " + levelNumber + "!";
  playSound("wrong");
  document.body.style.backgroundColor = "#CD5C5C";

  setTimeout(() => {
    document.body.style.backgroundColor = "";
    document.querySelector("h1").textContent = "Click Any Color to Start Again!";
    started = false;
  }, 2000);
}

// Function to play sound for a given color
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".wav");
  audio.play();
}

// Function to animate button press
function animatePress(color) {
  document.getElementById(color).classList.add("pressed");
  setTimeout(() => {
    document.getElementById(color).classList.remove("pressed");
  }, 100);
}

// Keypress event to start the game
document.addEventListener("keypress", start);

// Modal functionality
const howToPlayBtn = document.getElementById("howToPlayBtn");
const modal = document.getElementById("howToPlayModal");
const closeBtn = document.querySelector(".close");

// Show the modal when the button is clicked
howToPlayBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
