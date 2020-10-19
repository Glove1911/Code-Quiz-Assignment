var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#questions")
var nextEl = document.querySelector("#button");
var quizEl = document.querySelector("#quiz");

// var questionArr = [{
//     title: "Inside which HTML element do we put the JavaScript?",
//     choices:[]

//     "Where is the correct place to insert a JavaScript?",

//     "What is the correct syntax for referring to an external script called xxx.js?",

//     "The external JavaScript file must contain the <script> tag.",
//     "How do you write 'Hello World' in an alert box?"}
// ]
var setTimer = 61
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

nextEl.addEventListener("click", function(event){
    if (event.target === nextEl) {
        timerSet();
        
    }
});

   

