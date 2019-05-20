$(document).ready(function() {
// variables
var number = 30;
var intervalId;
// start button
$("#startButton").on("click", runTimer);
// timer that counts down
function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    number --;
    $("#countDownNumber").html("<h2>" + number + "</h2>");
    console.log(number);
// when the timer reaches 0, screen changes to show # of correct, incorrect, and unanswered questions
    if (number===0) {
        stop();
        alert("Time's Up");
    }
}

runTimer();
// questions are either true/false or multiple choice

// player cannot choose more than 1 answer

// if all questions answered, screen changes to show # of correct, incorrect. and unanswered questions


});