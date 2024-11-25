const validInputs = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const randomChoice = () => {
  return validInputs[Math.floor(Math.random() * 3)];
};

const userInput = () => {
    return checkInput(
        prompt("Rock, Paper or Scissors?")
    )};

function checkInput(playerInput) {
    while (!validInputs.includes(playerInput.toLowerCase())) {
        playerInput = prompt("Your input was not valid. Please enter rock, paper, or scissors!");
    }
    return playerInput.toLowerCase();
}

function calculateRoundWinner(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    console.log(`It's a draw! You both picked ${computerChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++; 
    console.log(`The Computer has picked ${computerChoice}. You win!`);
  } else {
    computerScore++;
    console.log(`The Computer has picked ${computerChoice}. You lose!`);
  }
}

function playRound() {
    const computerChoice = randomChoice();
    const humanChoice = userInput();

    calculateRoundWinner(humanChoice, computerChoice);
    console.log(`Current Score: Player: ${humanScore}, Computer: ${computerScore}`);
}

function calculateOverallWinner () {
    if (humanScore === computerScore) {
        console.log("No winner in sight! It's an overall draw!");
    } else if (humanScore > computerScore) {
        console.log("Congrats! You won overall!");
    } else {
        console.log("What a bummer! Looks like the computer won this battle!");
    }
}

function playGame () {
    for (let i = 0; i < 5 ; i++) {
        playRound();
    }
    calculateOverallWinner();
}

let test = "hallo";

playGame()