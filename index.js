
// // step1
// var gamepattern=[];

// function nextSequence(){

// var randomNumber=Math.floor(Math.random()*4);
// var buttonColour=["red", "blue","green", "yellow"];

// var randomChosenColor=buttonColour[randomNumber];

// gamepattern.push(randomChosenColor);

// //step2
// $("."+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// playSound(randomChosenColor);


// //part of step4
// levelNumber++;
// document.querySelector("h1").textContent="Level "+levelNumber;
// userInput=[];
// }



// //step3

// //getting user clicked color
// for(var i=0;i<4;i++)
// {
//   document.querySelectorAll(".btn")[i].addEventListener("click",function(event){
//     ButtonClick(event);
//   });
// }

// var userInput=[];
// var i=0;  //this variable keeps track of indexes
// var userChosenColor;

// function ButtonClick(event)
// {
//     userChosenColor=event.target.id;

//     // step5
//    //getting user input color in userinput array
//     userInput.push(userChosenColor);
//     i++;

//      //comparing each click correct or not --true for incorrect click
//      if(userInput[i-1]!=gamepattern[i-1])
//      {
//        gameLost();
//      }
//     //comparing both arrays for equality i.e. final answer correct or not
//     if(JSON.stringify(userInput)===JSON.stringify(gamepattern))
//     {
//       setTimeout(nextSequence(),2000);
//       i=0; //making this zero for further comparisions
//     }
//     //  step5 ends

//     //part of step3
//     playSound(userChosenColor);
//     //animation
//     document.getElementById(userChosenColor).classList.add("pressed");
//     setTimeout(function(){
//     document.getElementById(userChosenColor).classList.remove("pressed");
//     },100)
//  }



//  //step4 adding keypress for start

//  document.addEventListener("keypress",start);

//  var levelNumber;
 

// //function for start of game
//  function start()
//  {
//    levelNumber=0;
//    document.querySelector("h1").textContent="level "+levelNumber;
   
//    gamepattern=[];
//    nextSequence();
//  }

//  //function when game lost
//  function gameLost(){
//      document.querySelector("h1").textContent="GAME LOST--You reached Level "+levelNumber+"!";
//      playSound("wrong");
//      document.body.style.backgroundColor = "#CD5C5C";

 
//      setTimeout(function(){ 
//       document.body.style.backgroundColor = "";
//       document.querySelector("h1").textContent="Press Any key to start again!";},2000); 
//  }


// //function to play sound
// function playSound(name)
// {
// var audio=new Audio("sounds/"+name+".wav");
// audio.play();
// }

// // Get the button and modal elements
// const howToPlayBtn = document.getElementById("howToPlayBtn");
// const modal = document.getElementById("howToPlayModal");
// const closeBtn = document.querySelector(".close");

// // Show the modal when the button is clicked
// howToPlayBtn.addEventListener("click", () => {
//     modal.style.display = "block";
// });

// // Close the modal when the close button is clicked
// closeBtn.addEventListener("click", () => {
//     modal.style.display = "none";
// });

// // Close the modal when clicking outside the modal content
// window.addEventListener("click", (event) => {
//     if (event.target === modal) {
//         modal.style.display = "none";
//     }
// });


var gamepattern = [];
var userInput = [];
var levelNumber = 0;
var started = false; // Track if the game has started

// Event listener for button clicks to handle user input
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (started) {
      ButtonClick(event);
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
    setTimeout(nextSequence, 500);
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

// Start the game when any color button is clicked
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!started) {
      start();
    }
  });
});

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

//  Get the button and modal elements

// step1
var gamepattern=[];

function nextSequence(){

var randomNumber=Math.floor(Math.random()*4);
var buttonColour=["red", "blue","green", "yellow"];

var randomChosenColor=buttonColour[randomNumber];

gamepattern.push(randomChosenColor);

//step2
$("."+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);


//part of step4
levelNumber++;
document.querySelector("h1").textContent="Level "+levelNumber;
userInput=[];
}



//step3

//getting user clicked color
for(var i=0;i<4;i++)
{
  document.querySelectorAll(".btn")[i].addEventListener("click",function(event){
    ButtonClick(event);
  });
}

var userInput=[];
var i=0;  //this variable keeps track of indexes
var userChosenColor;

function ButtonClick(event)
{
    userChosenColor=event.target.id;

    // step5
   //getting user input color in userinput array
    userInput.push(userChosenColor);
    i++;

     //comparing each click correct or not --true for incorrect click
     if(userInput[i-1]!=gamepattern[i-1])
     {
       gameLost();
     }
    //comparing both arrays for equality i.e. final answer correct or not
    if(JSON.stringify(userInput)===JSON.stringify(gamepattern))
    {
      setTimeout(nextSequence(),2000);
      i=0; //making this zero for further comparisions
    }
    //  step5 ends

    //part of step3
    playSound(userChosenColor);
    //animation
    document.getElementById(userChosenColor).classList.add("pressed");
    setTimeout(function(){
    document.getElementById(userChosenColor).classList.remove("pressed");
    },100)
 }



 //step4 adding keypress for start

 document.addEventListener("keypress",start);

 var levelNumber;
 

//function for start of game
 function start()
 {
   levelNumber=0;
   document.querySelector("h1").textContent="level "+levelNumber;
   gamepattern=[];
   nextSequence();
 }

 //function when game lost
 function gameLost(){
     document.querySelector("h1").textContent="GAME LOST--You reached Level "+levelNumber+"!";
     playSound("wrong");
     document.body.style.backgroundColor = "#CD5C5C";

 
     setTimeout(function(){ 
      document.body.style.backgroundColor = "";
      document.querySelector("h1").textContent="Press Any key to start again!";},2000); 
 }


//function to play sound
function playSound(name)
{
var audio=new Audio("sounds/"+name+".wav");
audio.play();
}

// Get the button and modal elements

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
  }
);

