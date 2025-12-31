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

function getWinner() {
        if (humanScore ===  5) {
            alert("Yayy.. You won!");
            humanScore = 0;
            computerScore = 0;
        }
        if (computerScore == 5) {
            alert("Nayy.. You lost");
            humanScore = 0;
            computerScore = 0;
        }
}

function playRound(e) {
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();
    let msg;
    if (humanChoice === computerChoice) {
        msg = "It's a tie";
    } else if (humanChoice === "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper"
    ) {
        msg = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        msg = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    console.log();

    showResult(msg);
    getWinner();

}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(e);
    })
});

function showResult(msg) {
    const result = document.querySelector("#result");
    const score = document.querySelector("#score");
    result.innerText = msg;
    score.innerText = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;
}
