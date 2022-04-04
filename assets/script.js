//Declaring Variables
var questionNumber = 0;
var answerNumber = 0;
var one = 1;
var two = 2;
var three = 3;
var four = 4;

var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

answer1.addEventListener("click", answer1click);
answer2.addEventListener("click", answer2click);
answer3.addEventListener("click", answer3click);
answer4.addEventListener("click", answer4click);

const questions = [
    "How many eggs are in a dozen?",
    "What color is grass?",
    "Whats 10 * 10",
    "What color the sky",
    "How do you call function badcode();?"
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
    "100",
];
const answersquestionfour = [
    "black",
    "blue",
    "maroon",
    "brown",
    "magenta",
];
const answersquestionfive = [
    "dfsfds",
    "dfsdf",
    "dfsdf",
    "sdfdsf",
    "sdfdsf",
];

document.querySelector("#question").innerHTML = questions[questionNumber];
document.querySelector("#answer1").innerHTML = answersquestionone[0];
document.querySelector("#answer2").innerHTML = answersquestionone[1];
document.querySelector("#answer3").innerHTML = answersquestionone[2];
document.querySelector("#answer4").innerHTML = answersquestionone[3];

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
questionNumber++;
drawquestions();
}

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
    questionNumber++;
    drawquestions();

}

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
    questionNumber++;
    drawquestions();

}

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
    questionNumber++;
    drawquestions();

}
function wrong() {
console.log("wrong")
}
function right() {
    console.log("right")
    }

function drawquestions() {
    if (questionNumber == 0) {
        document.querySelector("#question").innerHTML = questions[questionNumber];
    document.querySelector("#answer1").innerHTML = answersquestionone[0];
    document.querySelector("#answer2").innerHTML = answersquestionone[1];
    document.querySelector("#answer3").innerHTML = answersquestionone[2];
    document.querySelector("#answer4").innerHTML = answersquestionone[3];
    }
    if (questionNumber == 1) {
        var drawAnswers = answersquestiontwo
        document.querySelector("#question").innerHTML = questions[questionNumber];
    document.querySelector("#answer1").innerHTML = answersquestiontwo[0];
    document.querySelector("#answer2").innerHTML = answersquestiontwo[1];
    document.querySelector("#answer3").innerHTML = answersquestiontwo[2];
    document.querySelector("#answer4").innerHTML = answersquestiontwo[3];
    }
    if (questionNumber == 2) {
        document.querySelector("#question").innerHTML = questions[questionNumber];
    document.querySelector("#answer1").innerHTML = answersquestionthree[0];
    document.querySelector("#answer2").innerHTML = answersquestionthree[1];
    document.querySelector("#answer3").innerHTML = answersquestionthree[2];
    document.querySelector("#answer4").innerHTML = answersquestionthree[3];
    }
    if (questionNumber == 3) {
        document.querySelector("#question").innerHTML = questions[questionNumber];
    document.querySelector("#answer1").innerHTML = answersquestionfour[0];
    document.querySelector("#answer2").innerHTML = answersquestionfour[1];
    document.querySelector("#answer3").innerHTML = answersquestionfour[2];
    document.querySelector("#answer4").innerHTML = answersquestionfour[3];
    }
    if (questionNumber == 4) {
        document.querySelector("#question").innerHTML = questions[questionNumber];
    document.querySelector("#answer1").innerHTML = answersquestionfive[0];
    document.querySelector("#answer2").innerHTML = answersquestionfive[1];
    document.querySelector("#answer3").innerHTML = answersquestionfive[2];
    document.querySelector("#answer4").innerHTML = answersquestionfive[3];
    }
    
}