/* When the "playButton" is clicked
The timer will begin counting down.

question1: if true is clicked, inCorrect++
            else false is clicked, correct++ 
question2: if true is clicked, correct++
            false is clicked, inCorrect++
question3: if true is clicked, correct++
            false is clicked, inCorrect++
question4:if true is clicked, then inCorrect goes up by 1
            if false is clicked, then correct goes up by 1

If timer === 0, and questions have not been answered, unAnswered++*/

var correct = 0;
var inCorrect = 0;
var unAnswered = 4;
var question1 = false;
var question2 = true;
var question3 = true;
var question4 = false;

$("#q1true").on("click", function answers() {
    // if (question1 === false) {
    //   wins++;
    //   $("#correct").text(correct); 
      console.log(this.value);
    //   answers();
//   }
})

$("#qfalse").on("click", function answers() {
  // if (question1 === false) {
  //   wins++;
  //   $("#correct").text(correct); 
    console.log(this.value);

})

  //question1.userproperty
  //assign this.value to that property(key) if question1.userPropert === question1.correctAnswer correct++
    //each question will be an object itself, have question id, correct answer, user guess=0

//   else if (question1 === true) {
//       losses++; {
//       $("#losses").text(losses);
//       resetGame();
//   }
//   }
// 
$("#correct").html(correct);
$("#inCorrect").html(inCorrect);
$("#unAnswered").html(unAnswered);