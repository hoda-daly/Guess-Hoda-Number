let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

// displayMessage Function
let displayMassege=function(message){
  document.querySelector(".message").textContent = message;


}
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);



  if (!guess) {
    displayMassege("no number ⛔")
  }
  //   equal
  else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMassege('Correct Number 👏')
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").style.width = "30rem";

    document.querySelector("body").style.backgroundColor = "#03783574";
    document.querySelector(".again").textContent = "Agian😎";
    document.querySelector(".again").style.color = "#03783574";
    document.querySelector(".audio").src = "./win.wav";
    document.querySelector(".highscore").textContent = score;
    document.querySelector(".h1").textContent = "Play Another Game 😊";
    score++;
  }

  // num is different
  else if(guess !== secretNumber){
    if(score > 1){
      displayMassege(guess > secretNumber?'high number 📈': 'low number 📉')
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".audio").src = "./loose.wav";
    }
    if(score==1){
      document.querySelector(".h1").textContent = "Game Over Try Again 😒";

    }
  }
});
// reset Functions
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
   score = 20;
  const guess = Number(document.querySelector(".guess").value='');
  displayMassege("start guessing....")
  document.querySelector(".number").style.width = "15rem";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = 0;

  document.querySelector(".number").textContent='?' ;
  document.querySelector(".h1").textContent = "Guess Hoda Number 🤓";

});
