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

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Your Selection: ");
    const computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    if (roundResult.includes("Win")) {
      scorePlayer++;
    } else if (roundResult.includes("Lose")) {
      scoreComputer++;
    } 
 }

  if(scorePlayer === scoreComputer) {
    console.log("It's a Tie!");
  } else if (scoreComputer > scorePlayer) {
    console.log("Computer Wins");
  } else if (scoreComputer < scorePlayer) {
    console.log("Player Wins");
  }
}
game();