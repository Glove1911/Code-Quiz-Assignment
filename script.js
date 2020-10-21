var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#questions")
var nextEl = document.querySelector("#button");
var quizEl = document.querySelector("#quiz");
var mainEl = document.querySelector(".container");
var listEl = document.querySelector("#ordered-list");

var responseEl = document.querySelector("#response");


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

for (i < questionArr.length; i ++;){
function displayQuestions() { 
    questionEl.textContent = questionArr[i].title;
    var Choice1 = questionArr[i].choices[0];
    var Choice2 = questionArr[i].choices[1];
    var Choice3 = questionArr[i].choices[2];
    var Choice4 = questionArr[i].choices[3];

   

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

function compareAnswers(event) {
    console.log(event.target);
    var correctAnswer = event.target.textContent;
    if (correctAnswer === questionArr[i].answer) {
        var timer = setTimer;
        responseEl.style.color = "green";
        responseEl.textContent = "Correct";

    }
    else {

        responseEl.style.color = "red";
        responseEl.textContent = "Incorrect";
        
    }

for (i< questionArr.length; i++;){
    displayQuestions;
}
}
}

