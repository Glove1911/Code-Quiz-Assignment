var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#questions")
var nextEl = document.querySelector("#button");
var quizEl = document.querySelector("#quiz");
var mainEl = document.querySelector(".container");
var listEl = document.querySelector("#ordered-list");



var questionArr = [{
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<javascript>", "<script>", "<scripting>"],
    answer: "<script>",
},
{
    title: "Where is the correct place to insert a JavaScript?",
    choices: ["The <head> section", "The <body> section", "Both the <head> and <body> section"],
    answer: "The <body> section",
},

{
    title: "How do you create a function in javascript?",
    choices: ["function myFunction()", "function = myFunction()", "function:myFunction"],
    answer: "function myFunction()",
},

{
    title: "How do you call a function name 'myFunction()'",
    choices: ["myFunction()", "call function myFunction", "call myFunction"],
    answer: "myFunction()",
},]

var setTimer = 61;
var i = 0;
function timerSet() {
    var timer = setInterval(function () {
        setTimer--;
        timerEl.textContent = setTimer;

        if (setTimer === 0) {
            clearInterval(timer);
           

        }
    }, 1000);
}

nextEl.addEventListener("click", function (event) {
    event.preventDefault();
    event.target === nextEl
    mainEl.style.display = "none";
    timerSet();
    displayQuestions();


});

function displayQuestions() {
    questionEl.textContent = questionArr[i].title;
    var Choice1 = questionArr[i].choices[0];
    var Choice2 = questionArr[i].choices[1];
    var Choice3 = questionArr[i].choices[2];
    var Choice4 = questionArr[i].choices[3];
    var liTag = document.createElement("li");
    var btn = document.createElement("button");
    liTag.appendChild("btn");
    listEl.appendChild("liTag");
    btn.textContent = Choice1;
}

