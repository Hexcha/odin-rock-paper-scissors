var humanScore;
function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
function getHumanChoice(){
    let tempHumanChoice = "";
    tempHumanChoice = prompt("Your choice: ");
    while (tempHumanChoice !== "rock" && tempHumanChoice !== "paper" && tempHumanChoice !== "scissor"){
        tempHumanChoice = prompt("Please enter valid choices (rock, paper, scissor): ");
    }
return tempHumanChoice;
}

const computerChoice = getComputerChoice();
console.log("Computer: " + computerChoice);
const humanChoice = getHumanChoice();
console.log("Human: " +humanChoice);
