$(document).ready(function() {
    // variables
  var number = 11;
  var intervalId;

  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unanswered = 0;
  var index = 0;

  // questionn / answers / correct answer
  var quiz = [
    {
      question: "What are the names of Bruce Wayne's parents?",
      answers: [
        "James and Dorthy",
        "Thomas and Martha",
        "John and Elizabeth",
        "Anthony and Patricia"
      ],
      correct: 1,
    },
    {
      question: "Which of these villains was introduced first?",
      answers: ["The Riddler", "Penguin", "Killer Croc", "Catwoman"],
      correct: 3,
    },
    {
      question: "What is the original identity of Two-Face?",
      answers: [
        "Harvey Dent",
        "Timmy Pickles",
        "Eli Pennyworth",
        "Michael Gill"
      ],
      correct: 0,
    },
    {
      question: "Which character becomes Oracle after being shot?",
      answers: ["Catwoman", "Poison Ivy", "Batgirl", "Batwoman"],
      correct: 2,
    },
    {
      question:
        "Which of the following characters is an actual Batman villian?",
      answers: ["Calendar Man", "Ice Man", "Phone Man", "Alligator Man"],
      correct: 0,
    }
  ];

  console.log(quiz);
  console.log(quiz[0].question);
  console.log(quiz[1].correct);

  // timer used from interval activity
  $("#startButton").on("click", showTriva);

  // functions for the scoreboard
  function win() {
    $("#showQuestion").empty()
   $("#showPossibleAnswers").empty()
   $("#showPossibleAnswers").html("<img src=./assets/images/symbol.gif>");
    correctAnswers++;
    console.log('CA', correctAnswers);
    setTimeout(run, 3000);
   
  }
  function lose() {
    $("#showQuestion").empty() 
    $("#showPossibleAnswers").empty()
    $("#showPossibleAnswers").html("<img src=./assets/images/sadbat1.gif />");
    var rightAnswer = $("#showQuestion");
    rightAnswer.append("<p>@The correct answer is: " + quiz[index].answers[quiz[index].correct]);
    incorrectAnswers++;
    setTimeout(run, 3000);
    

  }
  function outOfTime() {
    stop() 
    $("#showQuestion").empty() 
    $("#showPossibleAnswers").empty()
    $("#showPossibleAnswers").html("<img src=./assets/images/angrybat.gif>")
    var rightAnswer = $("#showQuestion");
    rightAnswer.append("<p>@The correct answer is: " + quiz[index].answers[quiz[index].correct]);
    unanswered++;
    setTimeout(run, 3000);
  }

  function displayScoreBoard() {
    var scoreBoard = $("#quizArea");
    scoreBoard.html("<p>@Wins: " + correctAnswers + "</p>").css("font-size","40px");
    scoreBoard.append("<p>@Losses: " + incorrectAnswers + "</p>").css("font-size","40px");
    scoreBoard.append("<p>@Unanswered: " + unanswered + "</p>").css("font-size","35px");
  }
// to play the game
  function showTriva() {
    $("#showPossibleAnswers").empty();
    number=11;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    console.log(("index: ", index))
    $("#showQuestion").html(quiz[index].question);
    for (var i = 0; i < quiz[index].answers.length; i++) {
      var answerButton = $("<button>");
      $("#showPossibleAnswers").append(answerButton);
      answerButton.html(quiz[index].answers[i]);
      answerButton.attr("id", quiz[index].answers[i]);
    
    $(answerButton).on("click", function() {
        clearInterval(intervalId)
      var userResponse = $(this).attr("id");
      console.log('CC', userResponse);
      console.log('AA', quiz[index].answers[quiz[index].correct]);
      var qAnswer = quiz[index].answers[quiz[index].correct]
      console.log('BB', quiz[index].correct[i])
      if (userResponse === qAnswer) {
          console.log('i won');
          
        win();
      } else {
        stop();
        lose();
      }
      }
    )};
}

 
  // timer used from interval activity
  function run() {
    showTriva()
    index++
    if (index >= quiz.length){
        displayScoreBoard()
    }
    else{
    showTriva();
    }
  }

  function stop() {
    clearInterval(intervalId);

  }
  // making the number decrease
  function decrement() {
    number--;
    $("#countDown").html("<h1>" + number + "</h1>");
    if (number === 0) {
     outOfTime();
    }
  }
});
