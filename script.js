function rockPaperScissors() {
  let player1 = prompt(
    "Player 1, enter rock, paper, or scissors:"
  ).toLowerCase();
  let player2 = prompt(
    "Player 2, enter rock, paper, or scissors:"
  ).toLowerCase();

  if (player1 === player2) {
    console.log("It's a tie!");
  } else if (player1 === "rock") {
    if (player2 === "scissors") {
      console.log("Player 1 wins! ");
    } else {
      console.log("Player 2 wins! ");
    }
  } else if (player1 === "scissors") {
    if (player2 === "paper") {
      console.log("Player 1 wins! ");
    } else {
      console.log("Player 2 wins! ");
    }
  } else if (player1 === "paper") {
    if (player2 === "rock") {
      console.log("Player 1 wins!");
    } else {
      console.log("Player 2 wins!");
    }
  } else {
    console.log("Please enter rock, paper, or scissors.");
  }
}

rockPaperScissors();
