$(document).ready(function() {
  // variables
  var number = 10;
  var intervalId;

  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unanswered = 0;
  var index = 0;

  // questionn / answers / correct answerd
  var quiz = [
    { question: "What are the names of Bruce Wayne's parents?", answers: ["James and Dorthy", "Thomas and Martha", "John and Elizabeth", "Anthony and Patricia"], correct: 1, },
    { question: "Which of these villains was introduced first?", answers: ["The Riddler", "Penguin", "Killer Croc", "Catwoman"], correct: 3 },
    { question: "What is the original identity of Two-Face?", answers: ["Harvey Dent", "Timmy Pickles", "Eli Pennyworth", "Michael Gill"], correct: 0 },
    { question: "Which character becomes Oracle after being shot?", answers: ["Catwoman", "Poison Ivy", "Batgirl", "Batwoman"], correct: 2 },
    { question: "Which of the following characters is an actual Batman villian?", answers: ["Calendar Man", "Ice Man", "Phone Man", "Alligator Man"], correct: 0 }
];

  console.log(quiz);
  console.log(quiz[0].question);
  console.log(quiz[1].answers[1]);

  function win(){
      var imageWin = 
      correctAnswers++
      index++
    setTimeout(function(){}, 3000);
  }
  function lose(){
    var imageLose = 
    incorrectAnswers++
    index++
  setTimeout(function(){}, 3000);
  }
  function unanswered(){
      var imageDissapointed =
      unanswered++
      index++
    setTimeout(function(){}, 3000);
  }
  function outOfTime(){
      var imageOutOfTime =
      index++
      setTimeout(function(){}, 3000);
  }
  function displayScoreBoard(){
      var scoreBoard = $("<div>");
      scoreBoard.html(correctAnswers + incorrectAnswers + unanswered);
  }

  function showTriva() {
    $("#showQuestion").html(quiz[index].question);
    for (var i = 0; i < quiz[index].answers.length; i++) {
      var answerButton= $("<button>");
      answerButton.html(quiz[index].answers[i]);
      answerButton.attr("id", quiz[index].answers[i]);
      $("#showPossibleAnswers").append(answerButton + "<br>");

        $(answerButton).on("click", function(){
            var userResponse = $(this).attr("id")
            if(userResponse===quiz[index].correct){
                win();
            }
            else{
                lose();
            }
            if(userResponse !== quiz[index].correct || number===0){
                unanswered();
            }
            
        })
        
      }
      
    }
    
  showTriva();
  displayScoreBoard();

// timer
$("#startButton").on("click", run);

  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    number--;
    $("#countDown").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        outOfTime();
        displayScoreBoard();
    }
  }
  function stop() {
    clearInterval(intervalId);
  }
//   run();


  
});
