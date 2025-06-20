/*So the first step in this project is defining a 
function that returns randomly "rock"/"paper"/"scissors"
For this I rely on the methods Math.floor() and 
Math.random
*/
function getComputerChoice(){
    /*Long story short: Math.random() gives me a number
    between 0 and 1 (a decimal number, 0.343...and so on). 
    I multiply it by 10 to get a bigger number like 3.4 
    or 4.5.
    Math.floor() pushes down the number to the closest 
    integer number (3.4 becomes 3)
    */
    let num = Math.floor(Math.random()*10)
    /*Now I have the chance to get the variable num 
    to be a number between 1 and 9. I divide this 
    possibilities in 3 classes to decide if 
    I get Rock/Paper/Scissors
    */ 

    /*First class: numbers lesser than 4
    afford a "Rock" result
    */ 
    if (num<4){
        result="Rock" 
    /*Second class: number bigger than 3 but lesser
    than 7 afford a "Paper" result
    */
    }else if(num<7){
        result = "Paper"
    /*Third class: remaining numbers, bigger than 6,
    up to 9, afford a "Scissors" result
    */
    }else{
        result="Scissors"
    }
    //Whathever the result, is returned in the variable
    //with the same name
    return result
}
//I put the result of the function in the var computerChoice
let computerChoice = getComputerChoice()
//The result is shown in the console
console.log(computerChoice)

/*The new task at hand is define a function 
to get the human player's choice
KEEP IN MIND AT THIS POINT WE ARE NOT TESTING 
INPUT ERRORS SO THIS IS MADE WITH THE ASSUMPTION THE 
HUMAN PLAYER WILL PUT THE RIGHT ANSWER
*/
function getHumanChoice(){
    /*Using a prompt we ask the user to write their
    choice to send it to the system. Said choice
    will be stored in the var "choice"*/
    let choice = prompt("Insert your choice: ");
    return choice
}
//Once declared the function I have to invoque it
//and store it in a variable, humanChoice in this case
let humanChoice= getHumanChoice()
//The result is shown in the console
console.log(humanChoice)

/*Since this is a game I have to keep track of the 
players' score. That's why I create two variables*/
let humanScore=0;
let computerScore=0;

/*The last part is to play the game by rounds.
I have to create a function that will take 
the computer and human player choices, play a single
round, and increment the round winner's score and log
a winner announcement
One of the requirements was to make the humanChoice
variable case-insensitive. To tackle this matter, 
I'll use the method  toLowerCase(), that way, whichever way
the human player answers, the function will take it all in lowercases*/
humanChoice = humanChoice.toLowerCase()
computerChoice = computerChoice.toLowerCase()
//Since we need to present a message, I declare a variable
let message = ""
function playRound(computerChoice, humanChoice){
    /*So we have the players' choices.
    Let's start comparing with the Rock choice from the computer*/
   if(computerChoice=="rock"){
        //First we compare the human-winning case
        if(humanChoice=="paper"){
            //when the human wins, it increments the human score by one
            humanScore=humanScore+1;
            //then the human-losing case
        }else if(humanChoice=="scissors"){
            //human loses, it increments the computer score by one
            computerScore=computerScore+1;
        }
        /*The comparing cycle repeats for the remaining cases,
        evaluating first the human wins case, and then the human loses
        case, with the corresponding increment in score. 
        */
    //Then we compare the case where the computer Choice is "Paper"
    }else if(computerChoice=="paper"){
        //we compare the human-winning case
        if(humanChoice=="scissors"){
             humanScore=humanScore+1;
             //then the human-losing case
        }else if(humanChoice=="rock"){
            computerScore=computerScore+1;
        }
    //The last case to compare is computer choice being "Scissors"
    }else{
        //we compare the human-winning case
        if(humanChoice=="rock"){
            humanScore=humanScore+1;
            //then the human-losing case
        }else if(humanChoice=="paper"){
            computerScore=computerScore+1;
        }
    }
    //This is just a control to check the scores
    console.log("Human: " + humanScore + ". Computer: " + computerScore)

    /*Last part, we need a message based on who wins.
    For this, I use a conditional, comparing the scores
    */

    //First we compare if the human beats the computer
    if(humanScore>computerScore){
    //In that case we have a message for the human winner
    message = ("You win! " + humanChoice + " beats " + computerChoice)
    //Then we compare if the computer beats the human  
    }else if(computerScore>humanScore){
        //And make a message for the human losing
        message=("You lose! " + computerChoice + " beats " + humanChoice)
    //and our last case, no winners, its a draw
    }else if(humanScore==computerScore){
        message=("It's a draw")
    }
    //The function returns the message
    return message
}

let roundMessage=playRound(computerChoice, humanChoice)
console.log(roundMessage)
//Because I'm paranoid, lets restart the scores after a round 
humanScore=0;
computerScore=0;
computerChoice="";
humanChoice="";
