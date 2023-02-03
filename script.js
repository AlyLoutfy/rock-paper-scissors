function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randIndex = Math.floor(Math.random() * choices.length);
  return choices[randIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a Tie!";
  }

  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return "You Lose! Paper beats Rock";
    } else {
      return "You Win! Rock beats Scissors";
    }
  }

  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "You Win! Paper beats Rock";
    } else {
      return "You Lose! Scissors beats Paper";
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "You Lose! Rock beats Scissors";
    } else {
      return "You Win! Scissors beats Paper";
    }
  }
}

