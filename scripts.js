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

function playRound(humanPick) {
  let computer = getComputerChoice();
  const human = humanPick;
  displayChoice(human, computer);
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

  updateScore();
  if (humanScore === 5 || computerScore === 5) {
    humanScore === 5 ? revealWinner("You ") : revealWinner("Computer");
  }
}

/* DOM Manipulation */

const body = document.body;

/* Let's construct the play button */
const playBtn = document.querySelector("#playButton");
playBtn.onclick = () => {
  revealOptions();
};

/*Make it so that when the button is click, the 3 options show up */

function revealOptions() {
  playBtn.style.display = "none";
  const optContainer = document.querySelector(".options");
  optContainer.style.display = "flex";
}

/* Button interactivity */
const rockBtn = document.querySelector("#rockBtn");
rockBtn.onclick = () => playRound("Rock");

const paperBtn = document.querySelector("#paperBtn");
paperBtn.onclick = () => playRound("Paper");

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.onclick = () => playRound("Scissors");

/* Show what option player/computer chooses*/
const choiceNode = document.querySelectorAll(".choice");

function displayChoice(humanChoice, cptrChoice) {
  choiceNode[0].textContent = `${humanChoice}`;
  choiceNode[1].textContent = `${cptrChoice}`;
}

console.log(choiceNode);

/*Change score when player/computer wins*/

function updateScore() {
  const playerScore = document.querySelector(".player .score");
  playerScore.textContent = `${humanScore}`;
  const cptr = document.querySelector(".computer .score");
  cptr.textContent = `${computerScore}`;
}

/* Reveal the winner when player/computer reaches 5 wins */
function revealWinner(winner) {
  const winnerDiv = document.querySelector(".winAnnouncement");
  winnerDiv.textContent = `${winner} WIN with 5 points!`;
}
