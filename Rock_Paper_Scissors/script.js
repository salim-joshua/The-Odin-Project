const buttons = document.querySelectorAll(".rps-btn");
const resultText = document.querySelector(".result-text");
const scoreText = document.querySelector(".score");
const winnerText = document.querySelector(".winner");
const validInputs = ["Rock", "Paper", "Scissors"];

let humanScore = 0;
let computerScore = 0;

const randomChoice = () => {
  return validInputs[Math.floor(Math.random() * 3)];
};

function calculateRoundWinner(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    resultText.textContent = `It's a draw! You both picked ${computerChoice}`;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++; 
    resultText.textContent = `The Computer has picked ${computerChoice}. You win!`;
  } else {
    computerScore++;
    resultText.textContent = `The Computer has picked ${computerChoice}. You lose!`;
  }
}

function playRound(humanChoice) {
    if(humanScore === 0 && computerScore === 0) {
      winnerText.textContent = "";
    }
    const computerChoice = randomChoice();

    calculateRoundWinner(humanChoice, computerChoice);
    scoreText.textContent = `Score: Player: ${humanScore} | Computer: ${computerScore}`;

    checkForWinner();
}

function checkForWinner () {
    if (humanScore === 5) {
        winnerText.textContent = "Congrats! You won overall!";
        winnerText.style.color = "#88c472";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5){
        winnerText.textContent = "What a bummer! Looks like the computer won this battle!";
        winnerText.style.color = "#c47272";
        humanScore = 0;
        computerScore = 0;
    } else {
      return;
    }
}

buttons.forEach((btn) => {
  btn.addEventListener("click",(e) => {
    playRound(e.currentTarget.value);
  })
})

