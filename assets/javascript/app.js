var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "How many strings does a violin have?",
  answers: ["6", "4", "10", "3"],
  correctAnswer: "4"
}, {
  question: "Which part of the violin does your chin rest on?",
  answers: ["Fingerboard", "Shoulder Rest", "Bridge", "Chinrest"],
  correctAnswer: "Chinrest"
}, {
  question: "Which string has the highest pitch?",
  answers: ["E", "A", "D", "G"],
  correctAnswer: "E"
}, {
  question: "The bow hair is made from which kind of hair?",
  answers: ["Mermaid", "Human", "Horse", "Llama"],
  correctAnswer: "Horse"
}, {
  question: "How many Twinkle Variations are there?",
  answers: ["6", "8", "3", "5"],
  correctAnswer: "5"
}, {
  question: "Does the violin sit on your Right, or Left shoulder?",
  answers: ["Right", "Left"],
  correctAnswer: "Left"
}, {
  question: "The strings are held up off the fingerboard by the: ",
  answers: ["Tunnel", "Bridge", "Highway", "Sidewalk"],
  correctAnswer: "Bridge"
}, {
  question: "Does your bow go on top, or below the strings?",
  answers: ["On top", "Below"],
  correctAnswer: "On top"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>60</span> Seconds</h2>");

    $("#start").remove();
    $("#instructions").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + " " + questions[i].answers[j] + " ");
      }
    }

    panel.append("<button id='done'>Fine</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2 id='results'>All Done!</h2>");
    panel.append("<h3 id='correct'>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3 id='incorrect'>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3 id='unanswered'>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    // panel.append("<button id='playAgain'>Play Again</button>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});

// $(document).on("click", "#playAgain", function() {
//   $("#results").remove();
//   $("#playAgain").remove();
//   $("#correct").remove();
//   $("#incorrect").remove();
//   $("#unanswered").remove();
//   newGame.restart();
// });
