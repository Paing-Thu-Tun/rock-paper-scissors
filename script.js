function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    switch(random) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors Shooot!!");
}


function playGame() {
    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats scissors");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else {
            console.log("You drew! Good game.");
        }
    }   

    for (let i = 0; i < 5; i++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            console.log("Computer Selection: " + computerSelection);

            playRound(humanSelection, computerSelection);
            console.log("Computer Score: " + computerScore);
            console.log("Human Score: " + humanScore);
    }
}

playGame();