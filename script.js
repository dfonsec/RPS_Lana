
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

function playRound(){
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerSelection();

    if (playerSelection === computerSelection){
        return `Draw! Both players chose ${playerSelection}`;
    }

    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats scissors.";
    }

    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats rock";
    }
    
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beats paper";
    }

    else{
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}



function game(){
    // code here
}
    

