// Initializing Variables 1-12
var questionNumber = 0;
var rightCount = 0;
var leftCount = 0;
var secondsLeft = 60;
var gameStarted = false;
var question = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var highscoreBtn = document.querySelector("#highscorebtn");


// Event listeners 15-20
answer1.addEventListener("click", answer1click);
highscoreBtn.addEventListener("click", highscore);
answer2.addEventListener("click", answer2click);
answer3.addEventListener("click", answer3click);
answer4.addEventListener("click", answer4click);


// Drawing questions. I wanted to use a for loop, but I'm not sure how since the id's are different in every line. 22-26


// Constructing arrays. 27-66
const questions = [
    "How many eggs are in a dozen?",
    "What color is grass?",
    "Whats 10 * 10?",
    "What color is the sky?",
    "Who's a good grader?",
    "is .Stringify() a function or method?",
]

const answersquestionone = [
    "4",
    "18",
    "12",
    "2",
];
const answersquestiontwo = [
    "blue",
    "green",
    "purple",
    "yellow",
    "orange",
];
const answersquestionthree = [
    "105",
    "300",
    "100",
    "600",
];
const answersquestionfour = [
    "black",
    "blue",
    "maroon",
    "brown",
];
const answersquestionfive = [
    "Not me.",
    "Some other guy.",
    "I am!",
    "Whoever gives this homework a C",
];
// Drawing answers + question. Wanted to put on top, but cannot use before arrays have been initialized. 68-72
question.innerHTML = questions[questionNumber];
answer1.innerHTML = answersquestionone[0];
answer2.innerHTML = answersquestionone[1];
answer3.innerHTML = answersquestionone[2];
answer4.innerHTML = answersquestionone[3];

// Timer
function startTimer() {
    setInterval(minustimer, 1000);
}

// Functions full of if statemtns for each button.  (4 in total.)
// Answer button 1
function answer1click() {
    if (questionNumber == 0) {
        wrong();
    }
    if (questionNumber == 1) {
        wrong();
    }
    if (questionNumber == 2) {
        wrong();
    }
    if (questionNumber == 3) {
        wrong();
    }
    
questionNumber++;
drawquestions();
}

// Answer button 2
function answer2click() {
    if (questionNumber == 0) {
        wrong();
    }
    if (questionNumber == 1) {
        right();
    }
    if (questionNumber == 2) {
        wrong();
    }
    if (questionNumber == 3) {
        right();
    }
    if (questionNumber == 4) {
        wrong();
    }
    questionNumber++;
    drawquestions();

}
// Answer button 3
function answer3click() {
    if (questionNumber == 0) {
        right();
    }
    if (questionNumber == 1) {
        wrong();
    }
    if (questionNumber == 2) {
        right();
    }
    if (questionNumber == 3) {
        wrong();
    }
    if (questionNumber == 4) {
        wrong();
    }
    questionNumber++;
    drawquestions();

}
// Answer button 4.
function answer4click() {
    if (questionNumber == 0) {
        wrong();
    }
    if (questionNumber == 1) {
        wrong();
    }
    if (questionNumber == 2) {
        wrong();
    }
    if (questionNumber == 3) {
        wrong();
    }
    if (questionNumber == 4) {
        right();
    }
    questionNumber++;
    drawquestions();

}
// Function that gets called when wrong answer happens.
function wrong() {
console.log("wrong")
document.querySelector("#wrongNotif").innerHTML = "WRONG!";
setTimeout(() => {  document.querySelector("#wrongNotif").innerHTML = ""; }, 700);
rightCount++;
}

function highscore() {
    console.log("worked")
    }


    // Function that gets called when right answer happens.
function right() {
    console.log("right")
document.querySelector("#rightNotif").innerHTML = "CORRECT!!";
setTimeout(() => {  document.querySelector("#rightNotif").innerHTML = ""; }, 700);
rightCount++;
    }


    // Starts on game start
function minustimer() {
    if (secondsLeft > 0) {
    secondsLeft--;
    document.querySelector("#seconds").innerHTML = secondsLeft;
    }
}



// Same mess here as intitial draw. Wanted to do a for loop here again. New if statement per question.
function drawquestions() {
    if (questionNumber == 0) {
        question.innerHTML = questions[questionNumber];
        answer1.innerHTML = answersquestionone[0];
        answer2.innerHTML = answersquestionone[1];
        answer3.innerHTML = answersquestionone[2];
        answer4.innerHTML = answersquestionone[3];
    }
    if (questionNumber == 1) {
        question.innerHTML = questions[questionNumber];
        answer1.innerHTML = answersquestiontwo[0];
        answer2.innerHTML = answersquestiontwo[1];
        answer3.innerHTML = answersquestiontwo[2];
        answer4.innerHTML = answersquestiontwo[3];
    }
    if (questionNumber == 2) {
        question.innerHTML = questions[questionNumber];
        answer1.innerHTML = answersquestionthree[0];
        answer2.innerHTML = answersquestionthree[1];
        answer3.innerHTML = answersquestionthree[2];
        answer4.innerHTML = answersquestionthree[3];
    }
    if (questionNumber == 3) {
        question.innerHTML = questions[questionNumber];
        answer1.innerHTML = answersquestionfour[0];
        answer2.innerHTML = answersquestionfour[1];
        answer3.innerHTML = answersquestionfour[2];
        answer4.innerHTML = answersquestionfour[3];
    }
    if (questionNumber == 4) {
        question.innerHTML = questions[questionNumber];
        answer1.innerHTML = answersquestionfive[0];
        answer2.innerHTML = answersquestionfive[1];
        answer3.innerHTML = answersquestionfive[2];
        answer4.innerHTML = answersquestionfive[3];
    }
    
}
