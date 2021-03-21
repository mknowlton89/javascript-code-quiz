let timeLeft = 100;

let emptyState = document.getElementById("empty-state");
let quiz = document.getElementById("quiz");
let timeEl = document.getElementById("timer");
let gameOverEl = document.getElementById("game-over");

function startQuiz(){
    // emptyState.setAttribute("style", "visibility: hidden");
    emptyState.classList.toggle("hidden");
    // quiz.setAttribute("style", "visibility: visible");
    quiz.classList.toggle("hidden");
}


function gameOver(){
    quiz.classList.toggle("hidden");
    gameOverEl.classList.toggle("hidden");
}


function countdownTimer() {
    // Sets interval in variable
    let timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent = timeLeft;
  
      if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        gameOver();
      }
  
    }, 1000);
  }



document.getElementById("start-quiz").addEventListener("click", countdownTimer);
