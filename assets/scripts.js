// JS Variables
let timeLeft = 100;
let questionNumber = 0;
let quizQuestions = [
    {
        question: "What Javascript data type enables you to store a list of similar items?",
        correctAnswer: "c",
        answerA: "A: String",
        answerB: "B: Number",
        answerC: "C: Array",
        answerD: "D: Boolean"
    },
    {
        question: "What are the following called in Javascript? '=, >, <, !='",
        correctAnswer: "a",
        answerA: "A: Operators",
        answerB: "B: Functions",
        answerC: "C: Variables",
        answerD: "D: Tags"
    },
    {
        question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
        correctAnswer: "a",
        answerA: "A: Global variable",
        answerB: "B: Local variable",
        answerC: "C: Both of the above",
        answerD: "D: None of the above"
    },
    {
        question: "Which built-in method removes the last element from an array and returns that element?",
        correctAnswer: "c",
        answerA: "A: last()",
        answerB: "B: get()",
        answerC: "C: pop()",
        answerD: "D: None of the above"
    },
    {
        question: "Which built-in method returns the calling string value converted to lower case?",
        correctAnswer: "a",
        answerA: "A: toLowerCase()",
        answerB: "B: toLower()",
        answerC: "C: changeCase(case)",
        answerD: "D: None of the above"
    },
    {
        question: "Which of the following function of String object is used to match a regular expression against a string?",
        correctAnswer: "b",
        answerA: "A: concat()",
        answerB: "B: match()",
        answerC: "C: search()",
        answerD: "D: replace()"
    },
    {
        question: "Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?",
        correctAnswer: "a",
        answerA: "A: concat()",
        answerB: "B: pop()",
        answerC: "C: push()",
        answerD: "D: some()"
    },
]

// DOM Variables
let emptyState = document.getElementById("empty-state");
let quiz = document.getElementById("quiz");
let timeEl = document.getElementById("timer");
let gameOverEl = document.getElementById("game-over");
let gameOverh1 = document.getElementById("quiz-over-h1")
let questionTitle = document.getElementById("question-title");
let buttonA = document.getElementById("a");
let buttonB = document.getElementById("b");
let buttonC = document.getElementById("c");
let buttonD = document.getElementById("d");
let answerBtns = document.querySelector(".answer-btns");

// Function Declarations
function nextQuestion(){
    if (questionNumber === 0) {
        
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

        document.getElementById("question-results").innerHTML = "";
    } else if(questionNumber > 0) {
        // alert("Next question")
        // TODO: Index into the questions array to the questionNumber and update the content of the page.
        question = quizQuestions[questionNumber].question;
        answerA = quizQuestions[questionNumber].answerA;
        answerB = quizQuestions[questionNumber].answerB;
        answerC = quizQuestions[questionNumber].answerC;
        answerD = quizQuestions[questionNumber].answerD;

        questionTitle.innerHTML = question;
        buttonA.innerHTML = answerA;
        buttonB.innerHTML = answerB;
        buttonC.innerHTML = answerC;
        buttonD.innerHTML = answerD;

        document.getElementById("question-results").innerHTML = "";
    }

    else if (questionNumber == "undefined") {
        quizComplete();
    }
}

function startQuiz(){
    // emptyState.setAttribute("style", "visibility: hidden");
    emptyState.classList.toggle("hidden");
    // quiz.setAttribute("style", "visibility: visible");
    quiz.classList.toggle("hidden");

    nextQuestion();
}


function gameOver(){
    quiz.classList.toggle("hidden");
    gameOverEl.classList.toggle("hidden");
}

function quizComplete(){
    clearInterval(timerInterval);
    
    console.log("Quiz complete was called.");
    console.log(questionNumber);
    quiz.classList.toggle("hidden");
    gameOverEl.classList.toggle("hidden");
    gameOverh1.innerHTML = "Congrats! You completed the quiz.";


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
answerBtns.addEventListener("click", async function(event) {
    let element = event.target;

    console.log(element);
    console.log(event);
    console.log(event.srcElement.id);

    if (event.srcElement.id === quizQuestions[questionNumber].correctAnswer){
        document.getElementById("question-results").innerHTML = "That is correct!";

    } else {
        document.getElementById("question-results").innerHTML = "That is incorrect!";
        timeLeft = timeLeft - 20;
        }

    await new Promise(r => setTimeout(r, 2000));
    questionNumber++;
    nextQuestion();

})
