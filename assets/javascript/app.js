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
// const sixtySeconds = 1000 * 60;
// let timer = 60;
// //Timer:
// $("#timer").append(timer);
// // setTimeout(sixtySeconds, 1000 * 60);

//   setInterval(sixtySeconds, 1000 * 60);
//   window.onload = function() {
//   $("#playButton").on("click", timer.start); 
//   console.log(this);
// }





var correct = 0;
var inCorrect = 0;
var unAnswered = 4;
var question1 = false;
var question2 = true;
var question3 = true;
var question4 = false;

const rightAnswers = [false, true, true, false];
const wrongAnswers = [true, false, false, true];


// Question 1:
$("#q1true").on("click", function answers() {
  console.log(this.value);
})

$("#q1false").on("click", function answers() {
  console.log(this.value);
})

function addWins() {
  // if (//user ===  {$("#q1false")
    wins++;
    $("#correct").text(correct);
   
}

// else if (//user === $("#q1true")) {
    losses++;
    $("#inCorrect").text(inCorrect);
  
}
}



//Question 2:
$("#q2true").on("click", function answers() {
  console.log(this.value);
})

$("#q2false").on("click", function answers() {
  console.log(this.value);
})

//Question 3:
$("#q3true").on("click", function answers() {
  console.log(this.value);
})

$("#q3false").on("click", function answers() {
  console.log(this.value);
})

//Question 4:
$("#q4true").on("click", function answers() {
  console.log(this.value);
})

$("#q4false").on("click", function answers() {
  console.log(this.value);
})







  //question1.userproperty
  //assign this.value to that property(key) if question1.userPropert === question1.correctAnswer correct++
    //each question will be an object itself, have question id, correct answer, user guess=0
 
$("#correct").html(correct);
$("#inCorrect").html(inCorrect);
$("#unAnswered").html(unAnswered);