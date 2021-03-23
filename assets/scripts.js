// JS Variables
let timeLeft = 100;
let score;
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
let questionBankSize = quizQuestions.length;
let userArray = [];

// DOM Variables
let emptyState = document.getElementById("empty-state");
let quiz = document.getElementById("quiz");
let highscoresEl = document.getElementById("highscores")
let timeEl = document.getElementById("timer");
let gameOverEl = document.getElementById("game-over");
let gameOverh1 = document.getElementById("quiz-over-h1")
let questionTitle = document.getElementById("question-title");
let buttonA = document.getElementById("a");
let buttonB = document.getElementById("b");
let buttonC = document.getElementById("c");
let buttonD = document.getElementById("d");
let answerBtns = document.querySelector(".answer-btns");
let highscores = [];
let initialsEl = document.getElementById("initials");
let submitBtn = document.getElementById("submit"); 
let listEl = document.getElementById("list");

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
    } else if(questionNumber > 0 && questionNumber < questionBankSize) {
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

    else {
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

    score = timeLeft;
}

function quizComplete(){

    quiz.classList.toggle("hidden");
    gameOverEl.classList.toggle("hidden");
    gameOverh1.innerHTML = "Congrats! You completed the quiz.";

    score = timeLeft;
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
      } else if (questionNumber === (questionBankSize)) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }

function printWinners(){

    arrayToPrint = JSON.parse(localStorage.getItem("userList"));
    console.log("Array to print is: " + arrayToPrint);

    arrayToPrint.sort(compare);

    // if (arrayToPrint.length < 1){
    // arrayToPrint.sort(compare);
    // } else {

        for (let i = 0; i < arrayToPrint.length; i++) {
            let initials = arrayToPrint[i].initials;
            let score = arrayToPrint[i].score;

            let entry = document.createElement('li');

            entry.appendChild(document.createTextNode(initials + " " + score));

            listEl.appendChild(entry);
        }
    }


function compare(b, a) {
    const userA = a.score;
    const userB = b.score;

    let comparison = 0;
    if (userA > userB) {
        comparison = 1;
    } else if (userA < userB) {
        comparison = -1;
    }
    return comparison;
}

function playAgain(){

    highscoresEl.classList.toggle("hidden");
    emptyState.classList.toggle("hidden");
}

// Event Listeners
document.getElementById("start-quiz").addEventListener("click", countdownTimer);

answerBtns.addEventListener("click", async function(event) {


    if (event.srcElement.id === quizQuestions[questionNumber].correctAnswer){
        document.getElementById("question-results").innerHTML = "That is correct!";

    } else {
        document.getElementById("question-results").innerHTML = "That is incorrect!";
        timeLeft = timeLeft - 20;
        }

    await new Promise(r => setTimeout(r, 500));
    questionNumber++;
    nextQuestion();
})

document.addEventListener("submit", function(event) {
    event.preventDefault();

    highscoresEl.classList.toggle("hidden");
    gameOverEl.classList.toggle("hidden");

    // Creating a user object
    let user = {
        initials: initialsEl.value,
        score: score,
    }

    // Adding that new users to the end of the userArray
    userArray.push(user);

    // Pull the array from local storage
    let storageArray = JSON.parse(localStorage.getItem("userList"));

    if (storageArray === null) {
        arrayToPrint = userArray;
    } else {
        // Create a new array that concats the local array + the storage array
        arrayToPrint = userArray.concat(storageArray); 
    }

    // Then, set that to storage.
    localStorage.setItem("userList", JSON.stringify(arrayToPrint));

    // Calling the print winners function
    printWinners();
})

document.getElementById("leaderboard-link").addEventListener("click", function(){
    highscoresEl.classList.toggle("hidden");
    emptyState.classList.toggle("hidden");

    // printWinners();
})


