// $(".container").toggle();

//TIMER:
$("#playButton").on("click", function () {
let timer = 10;
let oneSecond = 1000;
let timeUp = 10000;

// $(".container").toggle();



  let interval = setInterval(function () {
    ;
    timer--;
    $("#timer").html("Time Remaining: " + timer);
    if (timer === 0) clearInterval(interval);
  }, 1000);
  


// $(".results").toggle();

setTimeout(function() {
  clearInterval();
  // $(".results").show(); //you could use toggle instead of show
  //   $(".questions").hide(); // you could use toggle instead of hide
})
    
})


  
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
  $("#inCorrect").html("1");
  $("#unAnswered").html("3");
  console.log(this.value);

})

$("#q1false").on("click", function answers() {
  $("#correct").html("1");
  $("#unAnswered").html("3");
  console.log(this.value);
})

//Question 2:
$("#q2true").on("click", function answers() {
   $("#correct").html("2");
  $("#unAnswered").html("2");
  console.log(this.value);
})

$("#q2false").on("click", function answers() {
  $("#inCorrect").html("2");
  $("#unAnswered").html("2");
  console.log(this.value);
})

//Question 3:
$("#q3true").on("click", function answers() {
  $("#correct").html("3");
  $("#unAnswered").html("1");
  console.log(this.value);
})

$("#q3false").on("click", function answers() {
  $("#inCorrect").html("3");
  $("#unAnswered").html("1");
  console.log(this.value);
})

//Question 4:
$("#q4true").on("click", function answers() {
  $("#inCorrect").html("4");
  $("#unAnswered").html("0");
  console.log(this.value);
})

$("#q4false").on("click", function answers() {
  $("#correct").html("4");
  $("#unAnswered").html("0");
  console.log(this.value);
})


// $("#correct").html(correct);
// $("#inCorrect").html(inCorrect);
// $("#unAnswered").html(unAnswered);