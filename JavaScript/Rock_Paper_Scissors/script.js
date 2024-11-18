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
  playerInput = playerInput.toLowerCase();

  if (validInputs.includes(playerInput)) {
    return playerInput;
  } else {
    let newInput = prompt("Your input was not valid. Please enter rock, paper, or scissors!");
    checkInput(newInput);
  }
}

function calculateRoundWinner(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    console.log(`It's a draw! You both picked ${computerChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore += 1; 
    console.log(`The Computer has picked ${computerChoice}. You win!`);
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore += 1;
    console.log(`The Computer has picked ${computerChoice}. You lose!`);
  } else {
    console.log(
      `Invalid input! (Player: ${humanChoice}, Computer: ${computerChoice})`
    );
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

playGame()