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
      document.querySelector("h1").textContent="Press A key to start again!";},2000); 
 }


//function to play sound
function playSound(name)
{
var audio=new Audio("sounds/"+name+".wav");
audio.play();
}