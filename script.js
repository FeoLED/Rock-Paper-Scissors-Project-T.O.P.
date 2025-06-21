//Objective: Rock-Paper-Scissors game with the machine on console

//First, getComputerChoice function
function getComputerChoice(){
    //Math.random gives number
    let n = Math.floor(Math.random()*10);
    let result="";
    //conditional to decide computer choice
    if(n<4){
        result="rock";
    }else if(n<7){
        result="paper";
    }else{
        result="scissors";
    }
    return result;
}

//Next, getHumanChoice function
function getHumanChoice(){
    let ask=prompt("Insert your choice (rock, paper, scissors):");
    return ask.toLowerCase();
}

//Finally, playGame function. To play five rounds
function playGame(){
    //Player scores
    let computerChoice = "";
    let humanChoice = "";
    let humanScore=0;
    let computerScore=0;
    let resultMessage="";
    let scoreMessage="";
    function playRound(computerChoice, humanChoice){
        let message="";
        if((humanChoice=="paper")&&(computerChoice=="rock")){
            message="You win";
        }else if((humanChoice=="paper")&&(computerChoice=="scissors")){
            message="You lose";
        }else if((humanChoice=="rock")&&(computerChoice=="scissors")){
            message="You win";
        }else if((humanChoice=="rock")&&(computerChoice=="paper")){
            message="You lose";
        }else if((humanChoice=="scissors")&&(computerChoice=="paper")){
            message="You win";
        }else if((humanChoice=="scissors")&&(computerChoice=="rock")){
            message="You lose";
        }else if(humanChoice==computerChoice){
            message="It's a draw";
        }
        console.log(message);
        return message;
    }
    for(let i=0; i<5; i++){
        console.log("***Round " + (i+1) +"***")
        computerChoice = getComputerChoice();
        console.log("Computer choice: "+ computerChoice);
        humanChoice = getHumanChoice();
        console.log("Your choice: "+ humanChoice);
        resultMessage=playRound(computerChoice,humanChoice);
        if(resultMessage=="You win"){
            humanScore++;
        }else if(resultMessage=="You lose"){
            computerScore++;
        }
    }
    if(humanScore>computerScore){
        scoreMessage="You: " + humanScore + "; Computer: " + computerScore + ". You win.";
    }else if(computerScore>humanScore){
        scoreMessage="You: " + humanScore + "; Computer: " + computerScore + ". You lose.";
    }else if(humanScore==computerScore){
        scoreMessage="You: " + humanScore + "; Computer: " + computerScore + ". It's a draw."
    }
    return scoreMessage;
}
let game = playGame();
console.log(game);