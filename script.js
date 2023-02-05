let playerScore = 0;
let computerScore = 0;
const displayRound = document.querySelector(".round-score");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener('click', () => playRound('Rock'));
paper.addEventListener('click', () => playRound('Paper'));
scissors.addEventListener('click', () => playRound('Scissors'));

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randIndex = Math.floor(Math.random() * choices.length);
  return choices[randIndex];
}

function updateScore() {
  const myScore = document.querySelector('.you');
  myScore.innerHTML = `Player: ${playerScore}`;

  const compScore = document.querySelector('.computer');
  compScore.innerHTML = `Computer: ${computerScore}`;
}

function displayWinner() {
  rock.style.display = "none";
  paper.style.display = "none";
  scissors.style.display = "none";

  if (computerScore > playerScore) {
    displayRound.innerHTML = "Computer Wins! Better luck next time";
  } else if (computerScore < playerScore) {
    displayRound.innerHTML = "You Win! Good Job";
  }
}

function playRound(playerSelection) {
  computerSelection = getComputerChoice();

  let result = "";

  if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      result = "You Lose! Paper beats Rock";
      computerScore++;
    } else if (playerSelection === computerSelection) {
      result = "It's a Tie!";
    } else {
      result = "You Win! Rock beats Scissors";
      playerScore++;
    }
  }

  if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      result = "You Win! Paper beats Rock";
      playerScore++;
    } else if (playerSelection === computerSelection) {
      result = "It's a Tie!";
    } else {
      result = "You Lose! Scissors beats Paper";
      computerScore++;
    }
  }

  if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      result = "You Lose! Rock beats Scissors";
      computerScore++;
    } else if (playerSelection === computerSelection) {
      result = "It's a Tie!";
    } else {
      result = "You Win! Scissors beats Paper";
      playerScore++;
    }
  }

  displayRound.innerHTML = result;

  updateScore();

  if (isGameOver()) {
    displayWinner();
    return;
  }
  return result;
}


// for (let i = 0; i < 5; i++) {
//   const computerSelection = getComputerChoice();
//   let roundResult = playRound(playerSelection, computerSelection);
//   console.log(roundResult);

//   if (roundResult.includes("Win")) {
//     scorePlayer++;
//   } else if (roundResult.includes("Lose")) {
//     scoreComputer++;
//   } 
// }