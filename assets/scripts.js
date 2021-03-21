// JS Variables
let timeLeft = 10000;
let questionNumber = 0;
let quizQuestions = [
    {
        question: "What Javascript data type enables you to store a list of similar items?",
        correctAnswer: "C",
        answerA: "A: String",
        answerB: "B: Number",
        answerC: "C: Array",
        answerD: "D: Boolean"
    },
    {
        question: "What are the following called in Javascript? '=, >, <, !='",
        correctAnswer: "A",
        answerA: "A: Operators",
        answerB: "B: Functions",
        answerC: "C: Variables",
        answerD: "D: Tags"
    }
]

// DOM Variables
let emptyState = document.getElementById("empty-state");
let quiz = document.getElementById("quiz");
let timeEl = document.getElementById("timer");
let gameOverEl = document.getElementById("game-over");
let questionTitle = document.getElementById("question-title");
let buttonA = document.getElementById("a");
let buttonB = document.getElementById("b");
let buttonC = document.getElementById("c");
let buttonD = document.getElementById("d");

// Function Declarations
function startQuiz(){
    // emptyState.setAttribute("style", "visibility: hidden");
    emptyState.classList.toggle("hidden");
    // quiz.setAttribute("style", "visibility: visible");
    quiz.classList.toggle("hidden");

    let question = quizQuestions[questionNumber].question;
    let answerA = quizQuestions[questionNumber].answerA;
    let answerB = quizQuestions[questionNumber].answerB;
    let answerC = quizQuestions[questionNumber].answerC;
    let answerD = quizQuestions[questionNumber].answerD;

    questionTitle.innerHTML = question;
    buttonA.innerHTML = answerA;
    buttonB.innerHTML = answerB;
    buttonC.innerHTML = answerC;
    buttonD.innerHTML = answerD;

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

// Event Listeners
document.getElementById("start-quiz").addEventListener("click", countdownTimer);
