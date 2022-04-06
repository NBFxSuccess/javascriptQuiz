// Initializing Variables 
let questionNumber = 0;
let rightCount = 0;
let wrongCount = 0;
let stopTimer = false;
let secondsLeft = 10;
let gameStarted = false;
let gameEnded = false;
let question = document.querySelector("#question");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");
let secondText = document.querySelector("#secondtext");
let startScreen = document.getElementById("startscreen");
let mainGameEl = document.getElementById("maingame");
let highscoreBtn = document.querySelector("#highscorebtn");
let clearscoreBtn = document.querySelector("#clearscorebtn");
let quizStartBtn = document.querySelector("#quiztext");
mainGameEl.hidden = true;

// Event listeners 15-20
answer1.addEventListener("click", answer1click);
quizStartBtn.addEventListener("click", startquiz);
highscoreBtn.addEventListener("click", highscore);
clearscoreBtn.addEventListener("click", clearscore);
answer2.addEventListener("click", answer2click);
answer3.addEventListener("click", answer3click);
answer4.addEventListener("click", answer4click);

function clearscore() {
    console.log("cleared score")
localStorage.clear()
}
function startquiz() {
    startTimer();
    startScreen.hidden = true;
    mainGameEl.hidden = false;
    console.log("clicked.");
    mainGameEl.style.display = 'abosolute';

}
// Constructing arrays. 
const questions = [
    "How many eggs are in a dozen?",
    "What color is grass?",
    "Whats 10 * 10?",
    "What color is the sky?",
    "Who's a good grader?",
    "5+5+5+5+12+12=?"
];
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
const answersquestionsix = [
    "44",
    "22",
    "452",
    "42",
];
// Drawing answers + question. Wanted to put on top, but cannot use before arrays have been initialized. 
question.innerHTML = questions[questionNumber];
answer1.innerHTML = answersquestionone[0];
answer2.innerHTML = answersquestionone[1];
answer3.innerHTML = answersquestionone[2];
answer4.innerHTML = answersquestionone[3];

// Timer
function startTimer() {
    setInterval(minustimer, 1000);
}

// Needed to do this because alert() was running first in my highscore function.
setInterval(save, 50);
function save() {
    var slot1 = localStorage.getItem("initials");
    var slot2 = localStorage.getItem("secondsleft");
    var slot3 = localStorage.getItem("rightcount");
    var slot4 = localStorage.getItem("wrongcount");
    localStorage.setItem("secondsleft", JSON.parse(secondsLeft));
    localStorage.setItem("rightcount", JSON.parse(rightCount));
    localStorage.setItem("wrongcount", JSON.parse(wrongCount));
}
// Functions full of if statements for each button.  (4 in total.)
// Answer button 1
function answer1click() {
    if (questionNumber == 0 || questionNumber == 3 || questionNumber == 2 || questionNumber == 1 || questionNumber == 4) {
        wrong();
    }
    if (questionNumber == 5) {
        gameEnd();
    }
    
questionNumber++;
drawquestions();
}

// Answer button 2
function answer2click() {
    if (questionNumber == 1 || questionNumber == 3) {
        right();
    }
    if (questionNumber == 2 || questionNumber == 4 || questionNumber == 0) {
        wrong();
    }
    if (questionNumber == 5) {
        gameEnd();
    }
    questionNumber++;
    drawquestions();

}
// Answer button 3
function answer3click() {
    if (questionNumber == 0 || questionNumber == 2 || questionNumber == 4) {
        right();
    }
    if (questionNumber == 1 || questionNumber == 3) {
        wrong();
    }
    if (questionNumber == 5) {
        gameEnd();
    }
    questionNumber++;
    drawquestions();

}
// Answer button 4.
function answer4click() {
    if (questionNumber == 0 || questionNumber == 1 || questionNumber == 2 || questionNumber == 3 || questionNumber == 4) {
        wrong();
    }
    if (questionNumber == 5) {
        gameEnd();
    }
    questionNumber++;
    drawquestions();

}
// Function that gets called when wrong answer happens.
function wrong() {
    wrongCount++;
    if (secondsLeft > 2) {
    secondsLeft--;
    }
console.log("wrong")
document.querySelector("#wrongNotif").innerHTML = "WRONG!";
setTimeout(() => {  document.querySelector("#wrongNotif").innerHTML = ""; }, 700);
}
// Need to click twice because I used an alert.
function highscore() {
    var slot1 = localStorage.getItem("initials");
    var slot2 = localStorage.getItem("secondsleft");
    var slot3 = localStorage.getItem("rightcount");
    var slot4 = localStorage.getItem("wrongcount");
    localStorage.setItem("secondsleft", JSON.parse(secondsLeft));
    localStorage.setItem("rightcount", JSON.parse(rightCount));
    localStorage.setItem("wrongcount", JSON.parse(wrongCount));
    alert(slot1+"\n"+slot2 + " seconds left."+"\n"+slot3+" questions correct" + "\n"+slot4+ " questions wrong.");
   
    }
function donothing() {

}

    // Function that gets called when right answer happens.
function right() {
    rightCount++;
    console.log("right")
document.querySelector("#rightNotif").innerHTML = "CORRECT!!";
setTimeout(() => {  document.querySelector("#rightNotif").innerHTML = ""; }, 700);
    }
    var GameEndedlongnumber = 0;
function gameEnd() {
    gameEnded = true;
    GameEndedlongnumber++;
    if (GameEndedlongnumber == 1) {
    setTimeout(() => { 
        alert("Quiz Over! You ended with " + secondsLeft + " seconds left. " + rightCount + " questions correct and " + wrongCount + " questions wrong."); 
        var initials = prompt("Please enter your initials to save your highscore.") 
    localStorage.setItem("initials", JSON.stringify(initials));
}, 500);

    
}
    
}
    // 
function minustimer() {
    if (secondsLeft > 0 && gameEnded == false) {
        secondsLeft--;
    document.querySelector("#seconds").innerHTML = secondsLeft;
    if (secondsLeft == 0) {
        document.querySelector("#seconds").innerHTML = secondsLeft;
        gameEnd();
    }
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
    if (questionNumber == 5) {
        question.innerHTML = questions[questionNumber];
        answer1.innerHTML = answersquestionsix[0];
        answer2.innerHTML = answersquestionsix[1];
        answer3.innerHTML = answersquestionsix[2]
        answer4.innerHTML = answersquestionsix[3];
    }
    
}
