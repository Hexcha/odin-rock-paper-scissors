let humanScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice() {
    let tempHumanChoice = prompt("Your choice (rock, paper, scissor): ").toLowerCase();
    while (tempHumanChoice !== "rock" && tempHumanChoice !== "paper" && tempHumanChoice !== "scissor") {
        tempHumanChoice = prompt("Please enter a valid choice (rock, paper, scissor): ").toLowerCase();
    }
    return tempHumanChoice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`Human: ${humanChoice} | Computer: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        alert("Draw!");
        return;
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        humanScore++;
        alert("You won this round!");
    } else {
        computerScore++;
        alert("Computer won this round!");
    }
}

function playGame() {
    while (round <= 5) {
        alert("Round " + round + " / 5");
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        round++;
    }

    alert(`Final Score:\nYou: ${humanScore}\nComputer: ${computerScore}`);
    if (humanScore > computerScore) {
        alert("🎉 YOU WIN THE GAME!");
    } else if (humanScore < computerScore) {
        alert("💻 COMPUTER WINS THE GAME!");
    } else {
        alert("🤝 GAME ENDS IN A DRAW!");
    }
}

playGame();
