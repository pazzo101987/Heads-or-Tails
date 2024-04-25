const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
const coinArray = ["Heads", "Tails"];
let score = [0, 0];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", tossCoin);
}

function tossCoin(e) {
  let playerGuess = e.target.innerText;
  let computerToss = Math.floor(Math.random() * 2);
  let computerChoice = coinArray[computerToss];
  message.innerHTML = `Computer choice is : ${computerChoice} <br>
  Player Choice is : ${playerGuess} <br> `;
  let output;

  if (playerGuess === computerChoice) {
    output = "Player Wins !";
    score[0]++;
  } else {
    output = "Computer Wins !";
    score[1]++;
  }
  message.innerHTML +=
    output + "<br>Player" + score[0] + " Computer" + score[1];
}
