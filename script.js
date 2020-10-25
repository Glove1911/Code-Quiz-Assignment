var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#questions")
var nextEl = document.querySelector("#button");
var quizEl = document.querySelector("#quiz");
var mainEl = document.querySelector(".container");
var listEl = document.querySelector("#ordered-list");
var navEl = document.querySelector(".nav-link");
var formEl = document.querySelectorAll("#input-form");
var bodyEl = document.querySelector("#body");
var responseEl = document.querySelector("#response");
var btn2 = document.querySelectorAll(".submit-button");
var score = 0;
var highDiv = document.querySelector("#high");
var highScore = document.querySelector(".high-score");
var againEl = document.querySelector("#view-high-button");


// Object within Array for Quiz Questions, choices, and answers
var questionArr = [{
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<javascript>", "<script>", "<scripting>"],
    answer: "<script>",
},
{
    title: "Where is the correct place to insert a JavaScript?",
    choices: ["The <head> section", "The <body> section", "Both the <head> and <body> section", "The <script> section"],
    answer: "The <body> section",
},

{
    title: "How do you create a function in javascript?",
    choices: ["function myFunction()", "function = myFunction()", "function:myFunction", "Hey Funtion...you there?"],
    answer: "function myFunction()",
},

{
    title: "How do you call a function name 'myFunction()'",
    choices: ["myFunction()", "call function myFunction", "call myFunction", "disFunction"],
    answer: "myFunction()",
},]
var timer;
var setTimer = 61;
var i = 0;
function timerSet() {
    timer = setInterval(function () {
        setTimer--;
        timerEl.textContent = setTimer;

        if (setTimer === 0) {
            clearInterval(timer);
            gameOver();

        }
    }, 1000);
}

function gameOver() {

    questionEl.textContent = ("Game Over.  You scored " + score + "/100");
    var saveScore = document.createElement("p");
    var inputBox = document.createElement("input");
    var btn2 = document.createElement("button");
    btn2.setAttribute("class", "submit-button btn btn-primary ml-2 justify-self-center");
    responseEl.textContent = "";
    responseEl.appendChild(saveScore);
    saveScore.textContent = "Enter your initials to save score";
    saveScore.setAttribute("class", "text-box text-primary");
    responseEl.appendChild(inputBox);
    responseEl.appendChild(btn2);
    btn2.textContent = "Submit";

    var btn3 = document.createElement("button")
    btn3.setAttribute("class", "submit-button btn btn-primary ml-2 justify-self-center");
    againEl.appendChild(btn3);
    btn3.textContent = "Play Again";
    btn3.addEventListener("click", function () {
        pageReload();


    });


    // Event to save Initals and score to local storage
    btn2.addEventListener("click", function () {
        localStorage.setItem("Score", score);
        localStorage.setItem("name", inputBox.value);
        inputBox.value = "";
        questionEl.innerHTML = "";
        responseEl.innerHTML = "";

    });
    highScore.addEventListener("click", function () {
        var score = localStorage.getItem("Score");
        var name = localStorage.getItem("name");
        highDiv.append(name);
        highDiv.append(" ", score);
        highDiv.setAttribute("class", "score text-primary");

    });


}
function pageReload() {
    location.reload();
}

// Function to generate questions and multiple choice options
function displayQuestions() {
    questionEl.setAttribute("class", "text-white mb-5 questFont");
    questionEl.textContent = questionArr[i].title;
    var Choice1 = questionArr[i].choices[0];
    var Choice2 = questionArr[i].choices[1];
    var Choice3 = questionArr[i].choices[2];
    var Choice4 = questionArr[i].choices[3];
    listEl.textContent = "";


    var liTag1 = document.createElement("li");
    var btn = document.createElement("button");
    btn.setAttribute("class", "choiceButtons")
    btn.addEventListener("click", compareAnswers);
    liTag1.appendChild(btn);
    listEl.appendChild(liTag1);
    questionEl.appendChild(listEl);
    btn.textContent = Choice1;

    var liTag2 = document.createElement("li");
    var btn2 = document.createElement("button");
    btn2.setAttribute("class", "choiceButtons");
    btn2.addEventListener("click", compareAnswers);
    liTag2.appendChild(btn2);
    listEl.appendChild(liTag2);
    questionEl.appendChild(listEl);
    btn2.textContent = Choice2;

    var liTag3 = document.createElement("li");
    var btn3 = document.createElement("button");
    btn3.setAttribute("class", "choiceButtons");
    btn3.addEventListener("click", compareAnswers);
    liTag3.appendChild(btn3);
    listEl.appendChild(liTag3);
    questionEl.appendChild(listEl);
    btn3.textContent = Choice3;

    var liTag4 = document.createElement("li");
    var btn4 = document.createElement("button");
    btn4.setAttribute("class", "choiceButtons");
    btn4.addEventListener("click", compareAnswers);
    liTag4.appendChild(btn4);
    listEl.appendChild(liTag4);
    questionEl.appendChild(listEl);
    btn4.textContent = Choice4;


}


nextEl.addEventListener("click", function (event) {
    event.preventDefault();
    event.target === nextEl
    mainEl.style.display = "none";
    timerSet();
    displayQuestions();

});


// Comparing user answers to correct answers
function compareAnswers(event) {
    var correctAnswer = event.target.textContent;
    if (correctAnswer === questionArr[i].answer) {
        responseEl.style.color = "green";
        responseEl.textContent = "Correct";
        score += 25;


    }
    else {

        responseEl.style.color = "red";
        responseEl.textContent = "Incorrect";
        setTimer -= 15;




    }
    i++
    if (i >= questionArr.length) {
        stopTimer();
        gameOver();

    }

    else {
        displayQuestions();
    }






}
function stopTimer() {
    clearInterval(timer);



}

