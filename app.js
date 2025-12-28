function getComputerChoice() {
    const randomNum =  Math.floor(Math.random() * 3 + 1);
    switch (randomNum) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors, Shoot!!");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        const upperHumanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        const upperComputerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

        if (humanChoice === "rock" && computerChoice == "scissors" ||
            humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper"
        ) {
            console.log(`You win! ${upperHumanChoice} beats ${upperComputerChoice}`);
            humanScore++;
        } else if (humanChoice == "rock" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "scissors"
        ) {
            console.log(`You lose! ${upperComputerChoice} beats ${upperHumanChoice}`);
            computerScore++;
        } else {
            console.log("It's a tie");
        }
    }
    
    const numOfRounds = 5;
    for (let i = 0; i < numOfRounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}