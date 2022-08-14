
let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function getPlayerSelection(){
    playerSelection = prompt("Rock, paper, or scissors? Invalid answers will not be accepted.").toLowerCase();

    if (!(choices.includes(playerSelection))){
        getPlayerSelection();
    }

    return playerSelection;
}

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = getPlayerSelection();
}



function game(){
    // code here
}
    

