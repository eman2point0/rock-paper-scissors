console.log("Hello World");

const options = ["Rock", "Paper", "Scissors"];

let humanScore = 0,
  computerScore = 0;

function getComputerChoice() {
  let index = Math.floor(Math.random() * 3);
  const choice = options[index];
  console.log("Computer chose " + choice);
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Choose one: Rock, Paper, Scissors");
  while (
    typeof choice !== "string" ||
    choice.trim() === "" ||
    !options.includes(choice)
  ) {
    choice = prompt(
      "Oops. Didn't quite understand that! Pick again: Rock, Paper, Scissors"
    );
  }
  console.log("Human chose " + choice);
  return choice;
}

function playRound() {
  let computer = getComputerChoice();
  let human = getHumanChoice();
  if (human.localeCompare(computer) === 0) {
    console.log("Tie");
  } else if (human === "Rock" && computer === "Scissors") {
    console.log("Player Wins!");
    humanScore++;
  } else if (human === "Paper" && computer === "Rock") {
    console.log("Player Wins!");
    humanScore++;
  } else if (human === "Scissors" && computer === "Paper") {
    console.log("Player Wins!");
    humanScore++;
  } else {
    console.log("Computer Wins!");
    computerScore++;
  }

  console.log(
    "Score is now: Computer " + computerScore + " Human " + humanScore
  );
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}

playGame();
